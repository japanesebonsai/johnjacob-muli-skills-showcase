import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { socialLinks } from "@/lib/portfolio-data"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const github = socialLinks.find((link) => link.label === "GitHub")

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          aria-label="Go to home section"
        >
          <span className="grid size-8 place-items-center rounded-lg border bg-card text-xs shadow-sm">
            JM
          </span>
          <span className="hidden sm:inline">John Jacob Muli</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-lg border bg-card p-1 shadow-sm md:flex"
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link href={item.href} />}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {github ? (
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href={github.href} />}
            >
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight aria-hidden="true" />
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
