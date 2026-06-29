'use client'

import { motion } from 'framer-motion'
import TimelineItem from '@/components/ui/TimelineItem'
import { experiences } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-24 px-4 sm:px-6" aria-label="Experience section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-chip">Work History</span>
          <h2 className="text-3xl font-bold text-heading accent-line">Professional Experience</h2>
          <p className="text-sm text-text-body mt-6 max-w-lg">
            3+ years shipping production systems across the UK, France, and Pakistan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #2563EB 0%, rgba(37,99,235,0.2) 100%)' }}
            aria-hidden="true"
          />
          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-1.5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #2563EB 0%, rgba(37,99,235,0.2) 100%)' }}
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-10 pl-6 md:pl-0">
            {experiences.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
