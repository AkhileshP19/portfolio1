'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-secondary animate-pulse" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        w-9 h-9 flex items-center justify-center
        rounded-lg border border-border
        bg-secondary hover:bg-muted
        transition-all duration-300
        active:scale-90 cursor-pointer
      "
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 rotate-0 scale-100 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 rotate-0 scale-100 transition-transform duration-300" />
      )}
    </button>
  )
}
