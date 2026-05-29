"use server"

import type { ContactFormState } from "@/lib/contact-form-state"

const RESEND_ENDPOINT = "https://api.resend.com/emails"
const FALLBACK_TO_EMAIL = "jacobmuli0729@gmail.com"
const FALLBACK_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>"

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : ""
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = clean(formData.get("name"))
  const email = clean(formData.get("email"))
  const message = clean(formData.get("message"))
  const website = clean(formData.get("website"))

  const fields = { name, email, message }

  if (website) {
    return {
      ok: true,
      message: "Thanks! Your message has been received.",
      confettiKey: Date.now(),
    }
  }

  if (name.length < 2) {
    return {
      ok: false,
      message: "Please enter your name.",
      fields,
    }
  }

  if (!isEmail(email)) {
    return {
      ok: false,
      message: "Please enter a valid email address.",
      fields,
    }
  }

  if (message.length < 10) {
    return {
      ok: false,
      message: "Please write a message with at least 10 characters.",
      fields,
    }
  }

  if (message.length > 2000) {
    return {
      ok: false,
      message: "Please keep the message under 2,000 characters.",
      fields,
    }
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return {
      ok: false,
      message:
        "Contact form is almost ready. Add RESEND_API_KEY in Vercel to enable email delivery.",
      fields,
    }
  }

  const to = process.env.CONTACT_TO_EMAIL ?? FALLBACK_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? FALLBACK_FROM_EMAIL
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />")

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  })

  if (!response.ok) {
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again or email me directly.",
      fields,
    }
  }

  return {
    ok: true,
    message: "Thanks! Your message has been sent.",
    confettiKey: Date.now(),
  }
}
