import ResourceCard from "@/components/resource-card"
import { hackathonData, workshopLink } from "@/lib/data"
export default function ResourcesPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <ResourceCard
          title="Hacker's Guide"
          description="Everything you need to know about the hackathon"
          link={hackathonData.guideLink}
          linkText="Go to the Hacker Guide"
        />

        <ResourceCard
          title="Workshop List"
          description="Check out all the workshops available during the event"
          link={workshopLink}
          linkText="Go to the Workshop List"
        />

        <ResourceCard
          title="See your QR Code"
          description="Access your personal QR code for check-in and more"
          link={hackathonData.applyLink}
          linkText="Go check my QR code"
        />

      </div>
    </div>
  )
}
