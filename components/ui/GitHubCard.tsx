'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink } from 'lucide-react'
import { getLanguageColor, type GitHubRepo } from '@/lib/github'

interface GitHubCardProps {
  repo: GitHubRepo
  index: number
}

export default function GitHubCard({ repo, index }: GitHubCardProps) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="block bg-surface border border-border rounded-xl shadow-card hover:shadow-card-hover hover:border-action/30 p-5 group transition-all duration-300 h-full"
      aria-label={`GitHub repository: ${repo.name}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-bold text-heading group-hover:text-action transition-colors duration-200 line-clamp-1 flex-1">
          {repo.name}
        </h3>
        <ExternalLink className="w-3.5 h-3.5 text-text-label flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      </div>

      <p className="text-xs text-text-body leading-relaxed mb-4 line-clamp-2 min-h-[2.4rem]">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        {repo.language ? (
          <span className="flex items-center gap-1.5 text-xs text-text-label">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
              aria-hidden="true"
            />
            {repo.language}
          </span>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-3 text-xs text-text-label">
          <span className="flex items-center gap-1" aria-label={`${repo.stargazers_count} stars`}>
            <Star className="w-3.5 h-3.5" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1" aria-label={`${repo.forks_count} forks`}>
            <GitFork className="w-3.5 h-3.5" />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.a>
  )
}
