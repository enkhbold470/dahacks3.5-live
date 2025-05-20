"use client"

import { useState, useEffect } from "react"
import { hackathonData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Event {
  name: string
  date: string
  startTime: string
  endTime: string
  description: string
}

export default function EventList() {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Function to get current and upcoming events
    const getCurrentEvents = () => {
      const now = new Date()

      // For demo purposes, let's pretend the event is happening today
      // In a real app, you'd compare with the actual date
      const todayEvents = hackathonData.timeline.filter((event) => {
        const eventStart = new Date(`${event.date} ${event.startTime}`)
        const eventEnd = new Date(`${event.date} ${event.endTime}`)

        // Check if the event is happening now or in the next hour
        return eventStart <= new Date(now.getTime() + 60 * 60 * 1000) && eventEnd >= now
      })

      setCurrentEvents(todayEvents.slice(0, 3)) // Show at most 3 events
      setLoading(false)
    }

    getCurrentEvents()
    const interval = setInterval(getCurrentEvents, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Announcements & Events</h2>

      {loading ? (
        <div className="text-center py-8">Loading events...</div>
      ) : currentEvents.length > 0 ? (
        <div className="space-y-4">
          {currentEvents.map((event, index) => (
            <div key={index} className="p-4 rounded-lg bg-[#1a1a3a]">
              <h3 className="font-semibold">{event.name}</h3>
              <p className="text-sm text-gray-300">
                {event.startTime} - {event.endTime}
              </p>
              <p className="text-sm mt-1">{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 rounded-lg bg-[#1a1a3a] text-center">
          <p>No events happening currently.</p>
          <p className="mt-2">Want to find future events?</p>
          <Button asChild className="mt-4">
            <Link href="/schedule">View Complete Schedule</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
