import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ResourceCardProps {
  title: string
  description?: string
  link: string
  linkText: string
}

export default function ResourceCard({ title, description, link, linkText }: ResourceCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300">
      <Card className="bg-[#1a1a3a] border-[#2a2a4a] cursor-pointer drop-shadow-lg underline-offset-4 hover:underline">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <div className="w-full h-48 relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${link})` }}></div>
          <iframe
            className="w-full h-full border-none blur"
            src={`${link}?embed=true`} // Ensures desktop view embedding
            title={title}
            allowFullScreen
            scrolling="no"
          ></iframe>
        </div>
        <CardFooter>
          <span className="w-full text-center">{linkText}</span> {/* Non-clickable text */}
        </CardFooter>
      </Card>
    </Link>
  )
}
