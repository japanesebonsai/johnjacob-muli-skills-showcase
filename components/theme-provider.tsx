"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: Theme, resolvedTheme: ResolvedTheme) {
  const isDark = resolvedTheme === "dark"

  document.documentElement.classList.toggle("dark", isDark)
  document.documentElement.classList.toggle("light", !isDark)
  document.documentElement.style.colorScheme = resolvedTheme

  try {
    localStorage.setItem("theme", theme)
    document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`
  } catch {
    // Ignore blocked storage.
  }
}

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setThemeState] = React.useState<Theme>("system")
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  )

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    function resolve(nextTheme: Theme) {
      return nextTheme === "system" ? getSystemTheme() : nextTheme
    }

    function sync(nextTheme: Theme) {
      const nextResolvedTheme = resolve(nextTheme)

      setThemeState(nextTheme)
      setResolvedTheme(nextResolvedTheme)
      applyTheme(nextTheme, nextResolvedTheme)
    }

    let storedTheme: Theme = "system"

    try {
      const value = localStorage.getItem("theme")
      const cookieValue = document.cookie.match(
        /(?:^|; )theme=(dark|light|system)(?:;|$)/,
      )?.[1]

      if (value === "light" || value === "dark" || value === "system") {
        storedTheme = value
      } else if (
        cookieValue === "light" ||
        cookieValue === "dark" ||
        cookieValue === "system"
      ) {
        storedTheme = cookieValue
      }
    } catch {
      storedTheme = "system"
    }

    sync(storedTheme)

    const handleSystemChange = () => {
      if (storedTheme === "system") {
        sync("system")
      }
    }

    mediaQuery.addEventListener("change", handleSystemChange)

    return () => mediaQuery.removeEventListener("change", handleSystemChange)
  }, [])

  const setTheme = React.useCallback((nextTheme: Theme) => {
    const nextResolvedTheme =
      nextTheme === "system" ? getSystemTheme() : nextTheme

    setThemeState(nextTheme)
    setResolvedTheme(nextResolvedTheme)
    applyTheme(nextTheme, nextResolvedTheme)
  }, [])

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
