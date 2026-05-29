"use client"

import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggle = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon-sm"
      aria-label="Toggle color theme"
      className="relative h-12 w-[5.5rem] overflow-hidden rounded-full border-foreground/15 bg-[color-mix(in_oklch,var(--background)_82%,var(--play-blue)_18%)] p-0 shadow-sm transition-[background-color,border-color,box-shadow] duration-200 ease-out hover:bg-muted/70"
      onClick={handleToggle}
    >
      <span
        aria-hidden="true"
        className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,#9fc8e7,#f8dc76)] transition-colors duration-200 dark:bg-[linear-gradient(135deg,#20173f,#111827)]"
      />
      <span
        aria-hidden="true"
        className="absolute left-1 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white text-foreground shadow-sm transition-[left,transform] duration-200 ease-out dark:left-[2.85rem]"
      >
        <Sun
          className="absolute size-4 scale-100 text-[var(--play-yellow)] opacity-100 transition-all duration-150 dark:scale-0 dark:opacity-0"
        />
        <Moon
          className="absolute size-4 scale-0 text-[#20173f] opacity-0 transition-all duration-150 dark:scale-100 dark:opacity-100"
        />
      </span>
      <span
        aria-hidden="true"
        className="absolute left-[3.9rem] top-3 size-1.5 rounded-full bg-white/80 opacity-70 transition-all duration-200 dark:left-3 dark:size-1 dark:opacity-80"
      />
      <span
        aria-hidden="true"
        className="absolute left-[4.4rem] top-7 size-1 rounded-full bg-white/60 opacity-60 transition-all duration-200 dark:left-5 dark:size-1.5 dark:opacity-70"
      />
    </Button>
  )
}
