'use client'

import { motion } from 'framer-motion'
import { MapPin, Download, ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react'
import TypingEffect from '@/components/ui/TypingEffect'
import StatCounter from '@/components/ui/StatCounter'
import { personalInfo, stats } from '@/data/portfolio'

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="gradient-mesh min-h-screen flex flex-col justify-center relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-100" aria-hidden="true" />

      {/* Blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-action/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 border border-slate-700/80 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
            Available for Remote Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-5"
        >
          Shehzad Ali
        </motion.h1>

        {/* Typing title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-5 h-9"
        >
          <span className="text-slate-500 text-lg font-medium">/</span>
          <TypingEffect
            texts={personalInfo.typingTitles}
            className="text-lg sm:text-xl font-semibold text-action"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-3"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="flex items-center gap-1.5 text-sm text-slate-500 mb-10"
        >
          <MapPin className="w-3.5 h-3.5 text-action flex-shrink-0" aria-hidden="true" />
          {personalInfo.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 bg-action hover:bg-action-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-action"
          >
            View My Work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <a
            href="/cv-shehzad-ali.pdf"
            download
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 bg-slate-800/40"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download CV
          </a>

          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 border border-action/40 hover:border-action text-action hover:text-white hover:bg-action font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-2 ml-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/60 border border-slate-800 rounded-xl overflow-hidden max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-[#0A0F1C] px-4 py-5 ${i < stats.length - 1 ? '' : ''}`}
            >
              <StatCounter
                numericValue={stat.numericValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
