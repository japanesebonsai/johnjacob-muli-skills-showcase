"use client"

import { useEffect, useRef, useState } from "react"
import { GitFork, Star } from "lucide-react"

type GitHubRepoMetaProps = {
  repo: string
}

type RepoMeta = {
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

function formatUpdatedDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date)
}

export function GitHubRepoMeta({ repo }: GitHubRepoMetaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoadMeta, setShouldLoadMeta] = useState(false)
  const [meta, setMeta] = useState<RepoMeta | null>(null)

  useEffect(() => {
    const target = containerRef.current

    if (!target || typeof IntersectionObserver === "undefined") {
      setShouldLoadMeta(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMeta(true)
          observer.disconnect()
        }
      },
      { rootMargin: "500px 0px" },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let isMounted = true

    if (!shouldLoadMeta) {
      return
    }

    async function loadRepo() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: "application/vnd.github+json",
          },
        })

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as RepoMeta

        if (isMounted) {
          setMeta(data)
        }
      } catch {
        // GitHub metadata is progressive enhancement; cards still work offline.
      }
    }

    loadRepo()

    return () => {
      isMounted = false
    }
  }, [repo, shouldLoadMeta])

  if (!meta) {
    return (
      <div
        ref={containerRef}
        className="flex flex-wrap gap-2 text-xs text-muted-foreground"
      >
        <span className="rounded-full border bg-background/75 px-2.5 py-1">
          Selected GitHub repo
        </span>
      </div>
    )
  }

  const updated = formatUpdatedDate(meta.updated_at)

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-2 text-xs text-muted-foreground"
    >
      {meta.language ? (
        <span className="rounded-full border bg-background/75 px-2.5 py-1">
          {meta.language}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-1 rounded-full border bg-background/75 px-2.5 py-1">
        <Star className="size-3" aria-hidden="true" />
        {meta.stargazers_count}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full border bg-background/75 px-2.5 py-1">
        <GitFork className="size-3" aria-hidden="true" />
        {meta.forks_count}
      </span>
      {updated ? (
        <span className="rounded-full border bg-background/75 px-2.5 py-1">
          Updated {updated}
        </span>
      ) : null}
    </div>
  )
}
