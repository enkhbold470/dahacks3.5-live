import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { hackathonData, hackathonEndTime } from "@/lib/data"
import Countdown from "@/components/countdown"
import SocialLinks from "@/components/social-links"
import EventList from "@/components/event-list"
import DecorativeElements from "@/components/decorative-elements"

export default function Home() {
  // Set the target date for the hackathon (May 30, 2025)

  return (
    <div className="relative min-h-screen pb-16">
      <DecorativeElements />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        <div className="space-y-8">
          <h1 className="text-7xl font-bold tracking-tighter">DA HACKS</h1>

          <SocialLinks />

          <EventList />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Countdown targetDate={hackathonEndTime} className="w-full"/>

          <div className="mt-12 relative w-full max-w-md">
            <Image
              src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/413/942/datas/full_width.png"
              alt="Hackathon Mascot"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow-lg shadow-red-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        {/* <div className="grid grid-cols-3 gap-4">
          {hackathonData.sponsors.map((sponsor) => (
            <Image src={sponsor.logo} alt="Sponsors" width={200} height={200}  />
          ))}
        </div> */}

        <p className="mt-4 text-gray-300">
          Event Date: {hackathonData.date} • Event Venue: {hackathonData.venue}
        </p>
      </div>
    </div>
  )
}
