export interface SkillCategory {
  name: string
  skills: string[]
}

export interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  type: string
  bullets: string[]
}

export interface FeaturedProject {
  id: number
  title: string
  tags: string[]
  description: string
  icon: string
}

export interface StatItem {
  value: string
  numericValue: number
  suffix: string
  label: string
}

export const stats: StatItem[] = [
  { value: '3+', numericValue: 3, suffix: '+', label: 'Years of Experience' },
  { value: '10k+', numericValue: 1, suffix: 'M+', label: 'API Requests / Day' },
  { value: '80%', numericValue: 80, suffix: '%', label: 'Faster Knowledge Lookup' },
  { value: '14', numericValue: 14, suffix: '', label: 'Engineers Led' },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Core',
    skills: [
      'Python', 'FastAPI', 'REST API Design', 'Microservices',
      'PostgreSQL', 'Docker', 'AWS', 'React.js', 'Next.js',
    ],
  },
  {
    name: 'AI / GenAI',
    skills: [
      'LLM Development', 'RAG Pipelines', 'LangChain', 'AI Agents',
      'Pinecone', 'Weaviate', 'FAISS', 'ChromaDB', 'Semantic Search',
      'NLP', 'OpenAI API', 'Anthropic API', 'Prompt Engineering',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'Async Programming', 'JWT / OAuth2', 'Webhooks', 'Pandas',
      'NumPy', 'Celery', 'SQLAlchemy', 'Pydantic', 'Redis',
    ],
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Redux'],
  },
  {
    name: 'DevOps',
    skills: [
      'Docker', 'GitHub Actions', 'GitLab CI', 'Terraform',
      'Prometheus', 'Grafana', 'Linux/Bash',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'],
  },
]

export const topSkillBars = [
  { skill: 'Python / FastAPI', percent: 97 },
  { skill: 'LLM & RAG Pipelines', percent: 92 },
  { skill: 'React / Next.js', percent: 88 },
  { skill: 'Docker / AWS', percent: 85 },
  { skill: 'PostgreSQL / Redis', percent: 82 },
]

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Junior AI Engineer | Full-Stack Developer | GenAI & Cloud',
    company: 'Softerio Solutions',
    period: 'Jul 2025 – Present',
    type: 'On-site · Pakistan',
    bullets: [
      'Designed and shipped AI-powered full-stack applications combining React/Next.js frontends with scalable Python/Node.js backend services serving 10,000+ users.',
      'Built production RAG pipelines over 1M+ documents using vector search and LLMs, cutting knowledge lookup time by 80% (from minutes to milliseconds).',
      'Developed LangChain-based AI agents and automation workflows that replaced repetitive manual processes.',
      'Containerized and deployed services on AWS with Docker, reducing API latency and infrastructure cost by 60%.',
    ],
  },
 {
  id: 2,
  role: 'Full Stack Developer',
  company: 'OCI LAB',
  period: 'Jan 2023 – Jul 2025',
  type: 'Remote · Pakistan',
  bullets: [
    'Developed and maintained scalable full-stack web applications using React.js, Node.js, and MongoDB.',
    'Built and integrated RESTful APIs to enable seamless communication between frontend and backend systems.',
    'Implemented AI-powered features and LLM integrations to enhance application automation and user experience.',
    'Collaborated with cross-functional teams to optimize application performance, fix bugs, and deliver new features.',
  ]
}
]

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: 'Enterprise Knowledge Management Platform',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React.js', 'Docker', 'AWS'],
    description:
      'Scalable enterprise platform with FastAPI document storage/search, role-based auth, cloud storage integration, and a React.js UI. Containerized and deployed on AWS.',
    icon: 'Database',
  },
  {
    id: 2,
    title: 'Microservices-Based Order Management System',
    tags: ['Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    description:
      'Distributed order-processing, inventory, and payment-coordination services with REST inter-service communication, Redis caching, monitoring, and Docker-based deployment.',
    icon: 'GitBranch',
  },
  {
    id: 3,
    title: 'Real-Time Data Processing Pipeline',
    tags: ['Python', 'Pandas', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    description:
      'Backend system for large-dataset transformation with Pandas processing modules, FastAPI endpoints, scheduled jobs, and optimized queries in a containerized environment.',
    icon: 'Zap',
  },
]

export const personalInfo = {
  name: 'Shehzad Ali',
  title: 'Python Backend & GenAI Engineer',
  tagline: 'Building scalable AI-powered systems that actually ship.',
  summary:
    'AI Engineer and Full-Stack Developer specializing in scalable web applications and Generative AI solutions. Experienced in Python, MERN stack, LLM integrations, RAG pipelines, and cloud deployment. Focused on building intelligent products, automation workflows, and high-performance systems that deliver real business value.',
  email: 'shehzaddev012@gmail.com',
  phone: '+92 325 5938122',
  location: 'Lahore, Pakistan — Open to Work',
  linkedin: 'https://www.linkedin.com/in/shehzad-ali-senior-software-engineer',
  github: 'https://github.com/shehzad-official',
  typingTitles: [
    'Python Backend Engineer',
    'GenAI Specialist',
    'FastAPI Expert',
  ],
}

export const education = {
  degree: 'BS, Computer Science',
  university: 'University of Management and Technology (UMT)',
  period: '2020 – 2024',
  location: 'Lahore, Pakistan',
}
