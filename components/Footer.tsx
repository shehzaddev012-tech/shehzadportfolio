'use client'

import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#060C18] border-t border-slate-800/80 py-10 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-action flex items-center justify-center text-white font-bold text-xs">
              SA
            </div>
            <span className="text-sm font-semibold text-slate-400">Shehzad Ali</span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs font-medium text-slate-600 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-action transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6">
          <p className="text-center text-xs text-slate-700 flex items-center justify-center gap-1.5 flex-wrap">
            Built with Next.js &amp;{' '}
            <Heart className="w-3 h-3 text-danger inline" aria-label="love" />
            {' '}by{' '}
            <span className="text-slate-500 font-medium">Shehzad Ali</span>
            <span className="text-slate-800 mx-1">·</span>
            © {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
