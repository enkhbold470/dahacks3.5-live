export default function SchedulePage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Schedule</h1>

      <div className="w-full border rounded-lg overflow-hidden">
        <iframe
          className="w-full h-[600px]"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showDate=0&showNav=0&showTabs=0&mode=AGENDA&src=OTMzNjNkNzM5MDNhN2I5NjhhZDI5NTI5NjAzZmFiMTA2MGNiY2Q0MmY2ODc5NDA5Yzc3NTA2ZWFiNjU2NjI4M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}
