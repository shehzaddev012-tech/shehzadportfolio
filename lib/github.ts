export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  homepage: string | null
}

const GITHUB_API_URL =
  'https://api.github.com/users/shehzad-official/repos?sort=updated&per_page=12'

const languageColors: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#2b7489',
  JavaScript: '#f1e05a',
  'C++': '#f34b7d',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  Vue: '#41b883',
  Dart: '#00B4AB',
}

export function getLanguageColor(language: string | null): string {
  if (!language) return '#8b949e'
  return languageColors[language] ?? '#8b949e'
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(GITHUB_API_URL, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`)
    }

    const data = await res.json() as GitHubRepo[]
    return data
  } catch {
    return []
  }
}
