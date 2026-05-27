"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { Mail, MessageCircle, Send } from "lucide-react"
import { toast } from "sonner"

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
import { profile, socialLinks } from "@/lib/portfolio-data"

const initialForm = {
  name: "",
  email: "",
  message: "",
}

export function ContactSection() {
  const [form, setForm] = useState(initialForm)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all fields before sending.")
      return
    }

    toast.success("Thanks! Your message has been received.")
    setForm(initialForm)
  }

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Say hello or send a note."
      description="This challenge form keeps things simple: no backend, no secrets, just a clean success toast on submit."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-foreground/10 shadow-sm">
          <CardHeader>
            <div className="mb-3 grid size-10 place-items-center rounded-lg border bg-muted">
              <MessageCircle className="size-5" aria-hidden="true" />
            </div>
            <CardTitle>Contact form</CardTitle>
            <CardDescription>
              Fill out the fields and the page will confirm your message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Name</span>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Email</span>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium">Message</span>
                <Textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Write a short message..."
                  className="min-h-32 resize-none"
                />
              </label>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send aria-hidden="true" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-foreground/10 shadow-sm">
          <CardHeader>
            <div className="mb-3 grid size-10 place-items-center rounded-lg border bg-muted">
              <Mail className="size-5" aria-hidden="true" />
            </div>
            <CardTitle>Direct links</CardTitle>
            <CardDescription>
              Reach out through email, GitHub, or LinkedIn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border bg-muted/40 p-4">
              <p className="text-sm font-medium">{profile.email}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Best for project notes, questions, or opportunities.
              </p>
            </div>
            <div className="grid gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="outline"
                  nativeButton={false}
                  render={<Link href={link.href} />}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  )
}
