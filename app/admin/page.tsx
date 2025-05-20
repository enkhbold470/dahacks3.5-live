"use client"

import { useEffect } from "react"

import Countdown from "@/components/countdown"
import { hackathonEndTime } from "@/lib/data"
export default function ProjectorPage() {
  

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Projector View</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section id="schedule" className="mb-8">
          <h2 className="text-3xl font-bold text-[#f9c846] mb-4">Schedule</h2>
          <iframe
            className="w-full border rounded-lg"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showDate=0&showNav=0&showTabs=0&mode=AGENDA&src=OTMzNjNkNzM5MDNhN2I5NjhhZDI5NTI5NjAzZmFiMTA2MGNiY2Q0MmY2ODc5NDA5Yzc3NTA2ZWFiNjU2NjI4M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
            height="400"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </section>

        <section id="countdown" className="mb-8">
          <h2 className="text-3xl font-bold text-[#f9c846] mb-4">Countdown</h2>
          <Countdown targetDate={hackathonEndTime} className="w-full" />
        </section>
      </div>
    </div>
  )
}
