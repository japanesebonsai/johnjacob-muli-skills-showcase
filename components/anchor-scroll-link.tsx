"use client"

import Link, { type LinkProps } from "next/link"
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react"

type AnchorScrollLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>

function getLocalHash(href: AnchorScrollLinkProps["href"]) {
  if (typeof href !== "string") {
    return null
  }

  if (href.startsWith("#")) {
    return href
  }

  if (href.startsWith("/#") && window.location.pathname === "/") {
    return href.slice(1)
  }

  return null
}

export const AnchorScrollLink = forwardRef<
  HTMLAnchorElement,
  AnchorScrollLinkProps
>(function AnchorScrollLink({ href, onClick, ...props }, ref) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    const hash = getLocalHash(href)
    const targetId = hash?.slice(1)
    const target = targetId ? document.getElementById(targetId) : null

    if (!hash || !targetId || !target) {
      return
    }

    event.preventDefault()

    const header = document.querySelector<HTMLElement>("[data-site-header]")
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const offset = headerHeight + 18
    const top =
      targetId === "home"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - offset
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    window.history.pushState(null, "", hash)
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return <Link ref={ref} href={href} onClick={handleClick} {...props} />
})
