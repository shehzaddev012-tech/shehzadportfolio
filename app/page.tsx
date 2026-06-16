import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { fetchGitHubRepos } from '@/lib/github'

export default async function Home() {
  const repos = await fetchGitHubRepos()

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects repos={repos} />
      <Contact />
      <Footer />
    </main>
  )
}
