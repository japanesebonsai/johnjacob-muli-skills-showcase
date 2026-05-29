export type ContactFormState = {
  ok: boolean
  message: string
  fields?: {
    name?: string
    email?: string
    message?: string
  }
}

export const initialContactFormState: ContactFormState = {
  ok: false,
  message: "",
}
