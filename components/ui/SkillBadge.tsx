'use client'

import { motion } from 'framer-motion'
import {
  SiPython, SiFastapi, SiDocker, SiReact, SiNextdotjs,
  SiTypescript, SiNodedotjs, SiExpress, SiRedux, SiPostgresql, SiMysql,
  SiMongodb, SiRedis, SiElasticsearch, SiGithubactions, SiTerraform,
  SiPrometheus, SiGrafana, SiLinux, SiPandas, SiNumpy, SiOpenai,
} from 'react-icons/si'
import { FaDatabase, FaBrain, FaCode, FaCloud, FaAws } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  Python: <SiPython className="text-[#3572A5]" />,
  FastAPI: <SiFastapi className="text-[#059669]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  AWS: <FaAws className="text-[#FF9900]" />,
  'React.js': <SiReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs />,
  TypeScript: <SiTypescript className="text-[#2b7489]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Express.js': <SiExpress />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Elasticsearch: <SiElasticsearch className="text-[#005571]" />,
  'GitHub Actions': <SiGithubactions />,
  Terraform: <SiTerraform className="text-[#7B42BC]" />,
  Prometheus: <SiPrometheus className="text-[#E6522C]" />,
  Grafana: <SiGrafana className="text-[#F46800]" />,
  'Linux/Bash': <SiLinux />,
  Pandas: <SiPandas className="text-[#150458]" />,
  NumPy: <SiNumpy className="text-[#013243]" />,
  'OpenAI API': <SiOpenai />,
  'Anthropic API': <FaBrain className="text-[#C16F34]" />,
  'LLM Development': <FaBrain className="text-action" />,
  'RAG Pipelines': <FaDatabase className="text-action" />,
  'AI Agents': <FaBrain className="text-action" />,
  LangChain: <FaBrain className="text-[#1C3C3C]" />,
  Pinecone: <FaDatabase className="text-[#3775A9]" />,
  Weaviate: <FaDatabase className="text-[#3D9970]" />,
  FAISS: <FaDatabase className="text-[#4A90E2]" />,
  ChromaDB: <FaDatabase className="text-[#7C3AED]" />,
  'Semantic Search': <FaCode className="text-action" />,
  NLP: <FaBrain className="text-action" />,
  'Prompt Engineering': <FaCode className="text-action" />,
  DynamoDB: <FaAws className="text-[#FF9900]" />,
  'GitLab CI': <FaCloud className="text-[#FC6D26]" />,
  'REST API Design': <FaCode className="text-action" />,
  Microservices: <FaCloud className="text-action" />,
  'Async Programming': <FaCode className="text-text-body" />,
  'JWT / OAuth2': <FaCode className="text-text-body" />,
  Webhooks: <FaCode className="text-text-body" />,
  Celery: <FaCode className="text-[#37814A]" />,
  SQLAlchemy: <SiPostgresql className="text-[#336791]" />,
  Pydantic: <SiPython className="text-[#E92063]" />,
}

interface SkillBadgeProps {
  skill: string
  index: number
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const icon = iconMap[skill]

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.035, duration: 0.25 }}
      className="inline-flex items-center gap-1.5 bg-surface border border-border text-text-body text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-lg hover:border-action hover:text-action hover:bg-action/5 transition-all duration-200 cursor-default select-none"
    >
      {icon && <span className="text-base leading-none flex-shrink-0">{icon}</span>}
      {skill}
    </motion.span>
  )
}
