import { hackathonData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TracksPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Hackathon Tracks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathonData.tracks.map((track, index) => (
          <Card key={index} className="bg-[#1a1a3a] border-[#2a2a4a]">
            <CardHeader>
              <div className="text-4xl mb-2">{track.icon}</div>
              <CardTitle>{track.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base">{track.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-[#1a1a3a] border border-[#2a2a4a] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Note About Tracks</h2>
        <p>
          Tracks are NOT required—any project you build can win the top overall prizes! If you choose to submit your
          project to a track, you'll also be eligible for track-specific prizes. So whether you follow a track or blaze
          your own trail, you have a shot at winning!
        </p>
      </div>
    </div>
  )
}
