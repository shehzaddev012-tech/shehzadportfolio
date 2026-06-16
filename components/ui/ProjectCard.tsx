'use client'

import { motion } from 'framer-motion'
import { Database, GitBranch, Zap } from 'lucide-react'
import type { FeaturedProject } from '@/data/portfolio'

const iconComponents: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
}

interface ProjectCardProps {
  project: FeaturedProject
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-surface border border-border rounded-xl shadow-card hover:shadow-card-hover hover:border-action/30 p-6 flex flex-col gap-4 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-lg bg-action/10 text-action flex items-center justify-center group-hover:bg-action group-hover:text-white transition-all duration-300">
          {iconComponents[project.icon]}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-action bg-action/10 px-2.5 py-1 rounded-full">
          Featured
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-sm font-bold text-heading mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-text-body leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-wider bg-background border border-border text-text-label px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
