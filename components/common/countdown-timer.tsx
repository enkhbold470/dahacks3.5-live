"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
  startDate: string
  className?: string
}

export default function CountdownTimer({ targetDate, startDate, className = "" }: CountdownTimerProps) {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<'before' | 'during' | 'after'>('before')

  useEffect(() => {
    const startTime = new Date(startDate).getTime()
    const endTime = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      
      if (now < startTime) {
        // Before hackathon starts
        setStatus('before')
        const difference = startTime - now
        
        const totalHours = Math.floor(difference / (1000 * 60 * 60))
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((difference % (1000 * 60)) / 1000)

        setHours(totalHours)
        setMinutes(m)
        setSeconds(s)
      } else if (now >= startTime && now < endTime) {
        // During hackathon
        setStatus('during')
        const difference = endTime - now
        
        const totalHours = Math.floor(difference / (1000 * 60 * 60))
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((difference % (1000 * 60)) / 1000)

        setHours(totalHours)
        setMinutes(m)
        setSeconds(s)
      } else {
        // After hackathon ends
        setStatus('after')
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, startDate])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  const getStatusMessage = () => {
    switch (status) {
      case 'before':
        return `HACKING STARTS IN ${hours} HOURS...`
      case 'during':
        return `HACKING ENDS IN ${hours} HOURS...`
      case 'after':
        return 'HACKATHON HAS ENDED!'
      default:
        return `HACKING STARTS IN ${hours} HOURS...`
    }
  }

  if (loading) {
    return (
      <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-4 md:p-8 text-center animate-pulse`}>
        <div className="flex justify-center items-center space-x-3 md:space-x-8">
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">hours</div>
          </div>
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">minutes</div>
          </div>
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">00</div>
            <div className="text-base md:text-2xl">seconds</div>
          </div>
        </div>
        <div className="mt-6 text-xl md:text-3xl">hacking starting in .. hours</div>
      </div>
    )
  }

  return (
    <div className={`${className} rounded-[69px] bg-[#6366f1]/80 p-4 md:p-8 text-center`}>
      <div className="flex justify-center items-center space-x-3 md:space-x-8">
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(hours)}</div>
          <div className="text-base md:text-2xl">hours</div>
        </div>
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(minutes)}</div>
          <div className="text-base md:text-2xl">minutes</div>
        </div>
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-8xl lg:text-9xl font-bold font-orbitron">{formatNumber(seconds)}</div>
          <div className="text-base md:text-2xl">seconds</div>
        </div>
      </div>
      <div className="mt-6 text-xl md:text-3xl">{getStatusMessage()}</div>
    </div>
  )
} 