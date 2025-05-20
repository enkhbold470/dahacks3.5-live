"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function ProjectorPage() {
  useEffect(() => {
    // This will run after the component mounts
    // We need to manually initialize the tickcounter if it's not already initialized
    if (typeof window !== "undefined" && window.tickcounter) {
      window.tickcounter.init()
    }
  }, [])

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
          <div className="mt-6">
            <Script
              src="//www.tickcounter.com/static/js/loader.js"
              strategy="afterInteractive"
              onLoad={() => {
                if (typeof window !== "undefined" && window.tickcounter) {
                  window.tickcounter.init()
                }
              }}
            />
            <a
              data-type="countdown"
              data-id="7341685"
              className="tickcounter block mx-auto"
              style={{ width: "100%", height: "0", paddingBottom: "50%", position: "relative" }}
              title="HACKING ENDS IN"
              href="//www.tickcounter.com/"
            >
              HACKING ENDS IN
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
