'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import ProjectCard from '@/components/ui/ProjectCard'
import GitHubCard from '@/components/ui/GitHubCard'
import { featuredProjects, personalInfo } from '@/data/portfolio'
import type { GitHubRepo } from '@/lib/github'

interface ProjectsProps {
  repos: GitHubRepo[]
}

function GitHubSkeleton() {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 animate-pulse">
      <div className="h-3.5 bg-border rounded w-3/4 mb-3" />
      <div className="h-3 bg-border rounded w-full mb-2" />
      <div className="h-3 bg-border rounded w-2/3 mb-4" />
      <div className="flex justify-between">
        <div className="h-3 bg-border rounded w-1/4" />
        <div className="h-3 bg-border rounded w-1/5" />
      </div>
    </div>
  )
}

export default function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="bg-surface py-24 px-4 sm:px-6" aria-label="Projects section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-chip">Portfolio</span>
          <h2 className="text-3xl font-bold text-heading accent-line">Projects & Work</h2>
          <p className="text-sm text-text-body mt-6 max-w-lg">
            Production systems, AI pipelines, and open-source contributions.
          </p>
        </motion.div>

        {/* Featured label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-label">
            Featured Projects
          </h3>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-label">
            GitHub Repositories
          </h3>
          <div className="flex-1 h-px bg-border" />
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-action hover:text-action-hover transition-colors duration-200 flex-shrink-0"
          >
            View all <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </motion.div>

        {repos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {repos.map((repo, index) => (
              <GitHubCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <GitHubSkeleton key={i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-action hover:bg-action-hover text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-action"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
