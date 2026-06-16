import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shehzad Ali — Python Backend & GenAI Engineer',
  description:
    'Senior Software Engineer with 7+ years building scalable backend systems and AI-powered applications. Specialist in Python, FastAPI, RAG pipelines, LangChain, and AWS.',
  keywords: [
    'Python Developer', 'FastAPI', 'GenAI Engineer', 'RAG Pipelines',
    'LangChain', 'Backend Engineer', 'AWS', 'Docker', 'React', 'Next.js',
  ],
  authors: [{ name: 'Shehzad Ali', url: 'https://github.com/shehzad-official' }],
  creator: 'Shehzad Ali',
  metadataBase: new URL('https://shehzad-ali.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shehzad-ali.vercel.app',
    title: 'Shehzad Ali — Python Backend & GenAI Engineer',
    description: 'Senior Software Engineer with 7+ years building scalable backend systems and AI-powered applications.',
    siteName: 'Shehzad Ali Portfolio',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Shehzad Ali — Python Backend & GenAI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shehzad Ali — Python Backend & GenAI Engineer',
    description: 'Senior Software Engineer with 7+ years building scalable backend systems and AI-powered applications.',
    images: ['/api/og'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
