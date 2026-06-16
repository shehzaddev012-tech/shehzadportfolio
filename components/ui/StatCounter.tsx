'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  numericValue: number
  suffix: string
  label: string
  duration?: number
}

export default function StatCounter({ numericValue, suffix, label, duration = 1800 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(easeOut(progress) * numericValue))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(numericValue)
    }

    requestAnimationFrame(animate)
  }, [isInView, numericValue, duration])

  return (
    <div ref={ref} className="text-center px-1">
      <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums mb-1">
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-tight">
        {label}
      </div>
    </div>
  )
}
