'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function TypingEffect({
  texts,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2000,
  className = '',
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    const currentText = texts[currentIndex]

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentText.slice(0, prev.length + 1)
        )
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {displayText}
      <span
        className="inline-block w-0.5 h-[1em] bg-action ml-0.5 align-middle animate-pulse"
        aria-hidden="true"
      />
    </span>
  )
}
