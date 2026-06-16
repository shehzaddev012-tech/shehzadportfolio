'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4.5 h-4.5 w-[18px] h-[18px] text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-[18px] h-[18px] text-slate-300" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrolled(currentScrollY > 20)
    if (currentScrollY < 60) {
      setVisible(true)
    } else if (currentScrollY > lastScrollY + 4) {
      setVisible(false)
      setIsOpen(false)
    } else if (currentScrollY < lastScrollY - 4) {
      setVisible(true)
    }
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C] border-b border-slate-800/60 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-action flex items-center justify-center text-white font-bold text-xs tracking-tight group-hover:bg-action-hover transition-colors duration-200 shadow-glow-action">
            SA
          </div>
          <span className="hidden sm:block text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">
            Shehzad Ali
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center bg-action hover:bg-action-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-glow-action"
          >
            Hire Me
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#0A0F1C] border-t border-slate-800/60"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 px-3 py-2.5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-1.5 bg-action hover:bg-action-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-center"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
