'use client'

import { motion } from 'framer-motion'
import type { ExperienceItem } from '@/data/portfolio'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
      {/* Spacer */}
      <div className="hidden md:block md:w-[calc(50%-1.5rem)]" />

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-12 z-10">
        <div className="w-3.5 h-3.5 rounded-full bg-action ring-4 ring-background shadow-sm mt-6" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
        className="md:w-[calc(50%-1.5rem)] w-full"
      >
        {/* Mobile period */}
        <div className="flex items-center gap-2 mb-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-action flex-shrink-0" />
          <span className="text-xs font-bold text-action uppercase tracking-wider">{item.period}</span>
        </div>

        <div className="bg-surface border border-border rounded-xl shadow-card hover:shadow-card-hover hover:border-action/20 p-5 transition-all duration-300 group">
          {/* Role + period */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-bold text-heading leading-snug flex-1 min-w-0 group-hover:text-action transition-colors duration-200">
              {item.role}
            </h3>
            <span className="hidden md:inline-flex text-xs font-bold text-action bg-action/10 px-2.5 py-1 rounded-full flex-shrink-0">
              {item.period}
            </span>
          </div>

          {/* Company + type */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-text-body">{item.company}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-label bg-background border border-border px-2 py-0.5 rounded">
              {item.type}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-body leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-action mt-1.5 flex-shrink-0" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
