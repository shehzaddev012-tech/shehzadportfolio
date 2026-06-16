'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SkillBadge from '@/components/ui/SkillBadge'
import { skillCategories } from '@/data/portfolio'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="bg-surface py-24 px-4 sm:px-6" aria-label="Skills section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-chip">Technical Skills</span>
          <h2 className="text-3xl font-bold text-heading accent-line">What I Work With</h2>
          <p className="text-sm text-text-body mt-6 max-w-lg">
            Full-stack capability from AI pipelines and LLM integration to production cloud deployments.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat, index) => (
            <button
              key={cat.name}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`skill-panel-${index}`}
              id={`skill-tab-${index}`}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === index
                  ? 'bg-action text-white shadow-sm'
                  : 'bg-background border border-border text-text-body hover:border-action hover:text-action'
              }`}
            >
              {cat.name}
              <span className={`ml-2 text-xs font-bold ${activeTab === index ? 'text-blue-200' : 'text-text-label'}`}>
                {skillCategories[index].skills.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Badge grid */}
        <div
          className="bg-background border border-border rounded-xl p-6 min-h-[140px]"
          role="tabpanel"
          id={`skill-panel-${activeTab}`}
          aria-labelledby={`skill-tab-${activeTab}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex flex-wrap gap-2"
            >
              {skillCategories[activeTab].skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
