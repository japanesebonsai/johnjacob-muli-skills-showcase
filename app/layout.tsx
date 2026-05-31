import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "leaflet/dist/leaflet.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Jacob Muli | Skills Showcase",
  description:
    "Personal portfolio for John Jacob Muli, a student developer and BS Computer Science student.",
};

function getInitialThemeClass(theme: string | undefined) {
  if (theme === "dark" || theme === "light") {
    return theme;
  }

  return "";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCookie = (await cookies()).get("theme")?.value;
  const initialThemeClass = getInitialThemeClass(themeCookie);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${initialThemeClass} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <style>{`
html,
body {
  background: oklch(1 0 0);
}

html.dark,
html.dark body {
  background: oklch(0.145 0 0);
}

html.light,
html.light body {
  background: oklch(1 0 0);
}

@media (prefers-color-scheme: dark) {
  html:not(.light),
  html:not(.light) body {
    background: oklch(0.145 0 0);
  }
}
        `}</style>
        <link
          rel="icon"
          type="image/png"
          href="/brand-logo-dark.png"
        />
        <link rel="apple-touch-icon" href="/brand-logo-light.png" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >
          {`(() => {
  try {
    const cookieTheme = document.cookie.match(/(?:^|; )theme=(dark|light|system)(?:;|$)/)?.[1];
    const storedTheme = localStorage.getItem("theme") || cookieTheme || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (storedTheme === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    document.cookie = "theme=" + storedTheme + "; path=/; max-age=31536000; samesite=lax";
  } catch {}
})();`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
