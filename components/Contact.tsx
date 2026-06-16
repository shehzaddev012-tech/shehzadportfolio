'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

// ─── Sign up at formspree.io → New Form → paste the ID below ───
const FORMSPREE_ID = 'mdavjnvk'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Enquiry',
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-slate-800/70 border border-slate-700 focus:border-action text-slate-200 placeholder-slate-500 text-sm px-4 py-3 rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-action/20 disabled:opacity-50'

  const isLoading = status === 'loading'

  const infoItems = [
    { icon: <Mail className="w-4 h-4 text-action" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone className="w-4 h-4 text-action" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: <MapPin className="w-4 h-4 text-action" />, label: 'Location', value: personalInfo.location, href: '#' },
  ]

  return (
    <section id="contact" className="bg-[#060C18] py-24 px-4 sm:px-6 relative overflow-hidden" aria-label="Contact section">
      {/* Blurred blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-action/5 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-chip">Get In Touch</span>
          <h2 className="text-3xl font-bold text-white accent-line">Let&apos;s Work Together</h2>
          <p className="text-sm text-slate-500 mt-6 max-w-lg">
            Open to remote roles, freelance projects, and consulting engagements.
            Based in Lahore — available worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="md:col-span-2 space-y-3"
          >
            {infoItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/80 rounded-xl p-4 hover:border-action/50 hover:bg-slate-800 group transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-action/10 flex items-center justify-center flex-shrink-0 group-hover:bg-action/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{item.label}</div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">{item.value}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 ml-auto flex-shrink-0 group-hover:text-action group-hover:translate-x-0.5 transition-all duration-200" aria-hidden="true" />
              </a>
            ))}

            <div className="flex gap-2 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 flex-1 justify-center bg-slate-800/50 border border-slate-700 rounded-xl py-3 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 text-sm font-medium"
                aria-label="GitHub">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 flex-1 justify-center bg-slate-800/50 border border-slate-700 rounded-xl py-3 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 text-sm font-medium"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-3 bg-slate-800/30 border border-slate-700/60 rounded-xl p-6"
          >
            <AnimatePresence mode="wait">
              {/* ── Success state ── */}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Message Sent!</h3>
                    <p className="text-sm text-slate-400">
                      Shukriya! Main jald hi aap se rabta karunga.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-action hover:text-action-hover transition-colors font-medium"
                  >
                    Send another message →
                  </button>
                </motion.div>
              )}

              {/* ── Form ── */}
              {status !== 'success' && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Name</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="Your name" className={inputBase} disabled={isLoading} autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Email</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@company.com" className={inputBase} disabled={isLoading} autoComplete="email" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Subject</label>
                    <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                      placeholder="How can I help?" className={inputBase} disabled={isLoading} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Message</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project or role..." className={`${inputBase} resize-none`} disabled={isLoading} />
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-danger/10 border border-danger/30 text-danger text-sm px-4 py-3 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email directly.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-action hover:bg-action-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-action"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
