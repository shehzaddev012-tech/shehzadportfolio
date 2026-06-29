'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Mail, ExternalLink } from 'lucide-react'
import { personalInfo, topSkillBars, education } from '@/data/portfolio'

function SkillBar({ skill, percent, index }: { skill: string; percent: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-heading">{skill}</span>
        <span className="text-xs font-bold text-action tabular-nums">{percent}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-action to-blue-400"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percent}%` : 0 }}
          transition={{ duration: 1.1, delay: index * 0.1, ease: [0.34, 1.06, 0.64, 1] }}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-background py-24 px-4 sm:px-6"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-chip">About Me</span>
          <h2 className="text-3xl font-bold text-heading accent-line">
            Full-Stack Developer | AI Engineer 

          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <p className="text-base text-text-body leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border hover:border-action/50 group transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-action" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-label mb-0.5">Email</div>
                  <div className="text-sm text-text-body group-hover:text-action transition-colors duration-200 truncate">
                    {personalInfo.email}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-text-label ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                <div className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-action" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-label mb-0.5">Location</div>
                  <div className="text-sm text-text-body">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                <div className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-action" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-label mb-0.5">Education</div>
                  <div className="text-sm font-medium text-heading">{education.degree}</div>
                  <div className="text-xs text-text-label">{education.university} · {education.period}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-surface border border-border rounded-xl shadow-card p-6 space-y-5"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-label">
                Core Expertise
              </h3>
              <span className="text-xs text-text-label bg-background border border-border px-2 py-0.5 rounded">
                Proficiency
              </span>
            </div>
            {topSkillBars.map((item, index) => (
              <SkillBar key={item.skill} skill={item.skill} percent={item.percent} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
