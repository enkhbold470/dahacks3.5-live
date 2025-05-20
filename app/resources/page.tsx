import ResourceCard from "@/components/resource-card"

export default function ResourcesPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResourceCard
          title="Hacker Guide"
          description="Everything you need to know about the hackathon"
          link="https://docs.google.com/document/d/1nPCcuwV26MNHjhbXRchJRCsknjEcwmzjXn4xmu1o5i4"
          linkText="Go to the Hacker Guide"
        />

        <ResourceCard
          title="Workshop List"
          description="Check out all the workshops available during the event"
          link="#"
          linkText="Go to the Workshop List"
        />

        <ResourceCard
          title="QR Code"
          description="Access your personal QR code for check-in and more"
          link="https://portal.deanzahacks.com"
          linkText="Go check my QR code"
        />

        <ResourceCard
          title="Judging List"
          description="Information about judging criteria and process"
          link="https://dahacks3-5.devpost.com"
          linkText="Go to Judging List"
        />
      </div>
    </div>
  )
}
