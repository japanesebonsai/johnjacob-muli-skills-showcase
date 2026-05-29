import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import { NotFoundAnimation } from "@/components/not-found-animation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-background px-4 py-16 text-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,var(--play-blue)/18,transparent_30%),radial-gradient(circle_at_78%_34%,var(--play-yellow)/20,transparent_28%),radial-gradient(circle_at_58%_82%,var(--play-green)/14,transparent_30%)]"
        aria-hidden="true"
      />
      <section className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[0.9fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            404 error
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            This page wandered off.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            The route you opened does not exist in this portfolio. Head back
            home and keep exploring Jacob&apos;s skills showcase.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/" />}
              className="gap-2"
            >
              <Home aria-hidden="true" />
              Return Home
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/#projects" />}
              className="gap-2"
            >
              <ArrowLeft aria-hidden="true" />
              View Projects
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <NotFoundAnimation />
        </div>
      </section>
    </main>
  )
}
