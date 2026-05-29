import Link from "next/link"

import { profile, socialLinks } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="relative z-10 min-h-56 w-full border-0 p-0 sm:min-h-64 lg:min-h-72">
      <div className="relative z-10 flex min-h-56 w-full flex-col justify-end gap-3 px-4 py-4 text-sm text-muted-foreground sm:min-h-64 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:min-h-72">
        <p>© 2026 {profile.name}</p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
