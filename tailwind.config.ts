import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        primary: '#0F172A',
        action: '#2563EB',
        'action-hover': '#1D4ED8',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        'text-body': 'rgb(var(--color-text-body) / <alpha-value>)',
        'text-label': 'rgb(var(--color-text-label) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.08)',
        'card-hover': '0 8px 24px 0 rgb(0 0 0 / 0.12)',
        'glow-action': '0 0 20px rgb(37 99 235 / 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
