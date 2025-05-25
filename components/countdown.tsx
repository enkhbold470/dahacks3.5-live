"use client"

import { useState, useEffect } from "react"
import CountdownTimer from "@/components/common/countdown-timer"

interface CountdownProps {
  targetDate: string
  startDate: string
  className?: string
}

export default function Countdown({ targetDate, startDate, className = "" }: CountdownProps) {
  return (
    <CountdownTimer 
      targetDate={targetDate} 
      startDate={startDate} 
      className={className} 
    />
  )
}
