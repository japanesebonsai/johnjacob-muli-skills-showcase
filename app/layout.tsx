import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { IntroLoader } from "@/components/intro-loader";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storedTheme = localStorage.getItem("theme") || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (storedTheme === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch {}
})();`,
          }}
        />
        <link rel="preload" href="/profile-work.jpeg" as="image" />
        <link
          rel="preload"
          href="/bubble.json"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/running-boy.json"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <IntroLoader />
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
