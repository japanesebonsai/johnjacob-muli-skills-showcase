"use client"

import Link from "next/link"
import { type ReactNode, useActionState, useEffect, useRef } from "react"
import {
  AtSign,
  BottleWine,
  Mail,
  Send,
  Waves,
} from "lucide-react"
import { toast } from "sonner"

import { sendContactMessage } from "@/app/actions/contact"
import { SectionShell } from "@/components/section-shell"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { initialContactFormState } from "@/lib/contact-form-state"
import { profile, socialLinks } from "@/lib/portfolio-data"

const socialIconMap: Record<string, ReactNode> = {
  GitHub: (
    <svg
      aria-hidden="true"
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 text-[#1B1F23] dark:text-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="currentColor"
      />
    </svg>
  ),
  LinkedIn: (
    <span aria-hidden="true" className="text-xs font-black text-[#0A66C2]">
      in
    </span>
  ),
  Email: <Mail aria-hidden="true" />,
}

const socialHelperText: Record<string, string> = {
  GitHub: "Code and public repositories",
  LinkedIn: "Professional profile",
  Email: "Direct inbox",
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  )

  useEffect(() => {
    if (!state.message) {
      return
    }

    if (state.ok) {
      toast.success(state.message)
      formRef.current?.reset()
      return
    }

    toast.error(state.message)
  }, [state])

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Say hello or send a note."
      description="A calm place for project notes, questions, and collaboration ideas."
      className="relative z-10 pb-0 sm:pb-0"
    >
      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="relative overflow-hidden border-foreground/10 bg-background/90 shadow-sm">
          <div className="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full bg-[var(--play-blue)]/8 blur-3xl" />
          <CardHeader>
            <div className="mb-3 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg border bg-[var(--play-blue)]/10 text-[var(--play-blue)]">
                <BottleWine className="size-5" aria-hidden="true" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--play-blue)]/35 to-transparent" />
            </div>
            <CardTitle>Message bottle</CardTitle>
            <CardDescription>
              Drop a short note and the page will confirm it with a toast.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <label className="sr-only" htmlFor="contact-website">
                Website
              </label>
              <Input
                id="contact-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-sm font-medium">Name</span>
                  <Input
                    id="contact-name"
                    name="name"
                    defaultValue=""
                    placeholder="Your name"
                    autoComplete="name"
                    disabled={isPending}
                    required
                    className="bg-background/70"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-medium">Email</span>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    defaultValue=""
                    placeholder="you@example.com"
                    autoComplete="email"
                    disabled={isPending}
                    required
                    className="bg-background/70"
                  />
                </label>
              </div>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Message</span>
                <Textarea
                  name="message"
                  defaultValue=""
                  placeholder="Write a short message..."
                  disabled={isPending}
                  required
                  className="min-h-32 resize-none bg-background/70"
                />
              </label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Waves
                    className="size-4 text-[var(--play-blue)]"
                    aria-hidden="true"
                  />
                  <span>Replies start from {profile.email}</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-foreground text-background hover:bg-foreground/85 sm:w-fit"
                >
                  {isPending ? "Sending..." : "Send Message"}
                  <Send aria-hidden="true" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-foreground/10 bg-background/90 shadow-sm">
          <div className="pointer-events-none absolute -bottom-16 -right-12 size-44 rounded-full bg-[var(--play-yellow)]/10 blur-3xl" />
          <CardHeader>
            <div className="mb-3 grid size-10 place-items-center rounded-lg border bg-[var(--play-green)]/10 text-[var(--play-green)]">
              <AtSign className="size-5" aria-hidden="true" />
            </div>
            <CardTitle>Find me online</CardTitle>
            <CardDescription>
              Direct links for email, GitHub, and LinkedIn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href={`mailto:${profile.email}`}
              className="group block rounded-xl border bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card"
            >
              <p className="text-sm font-semibold">{profile.email}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Best for project notes, school work, and collaboration ideas.
              </p>
            </Link>

            <div className="grid gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-h-12 items-center gap-3 rounded-xl border bg-background/70 px-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-background"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border bg-muted/70 text-foreground [&_svg]:size-4">
                    {socialIconMap[link.label]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block leading-tight">{link.label}</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {socialHelperText[link.label]}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  )
}
