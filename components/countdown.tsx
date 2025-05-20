"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: string
  className?: string
}

export default function Countdown({ targetDate, className = "" }: CountdownProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        clearInterval(interval)
        return
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-8 text-center animate-pulse`}>
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value">0</div>
          <div className="countdown-label">days</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">0</div>
          <div className="countdown-label">hours</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">0</div>
          <div className="countdown-label">minutes</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">0</div>
          <div className="countdown-label">seconds</div>
        </div>
        </div>
        <div className="mt-4 text-xl">until hacking ends!</div>
      </div>
    )
  }

  return (
    <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-8 text-center`}>
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value">{days}</div>
          <div className="countdown-label">days</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{hours}</div>
          <div className="countdown-label">hours</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{minutes}</div>
          <div className="countdown-label">minutes</div>
        </div>
        <div className="countdown-item">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{seconds}</div>
          <div className="countdown-label">seconds</div>
        </div>
      </div>
      <div className="mt-4 text-xl">until hacking ends!</div>
    </div>
  )
}
