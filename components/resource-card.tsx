import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ResourceCardProps {
  title: string
  description?: string
  link: string
  linkText: string
}

export default function ResourceCard({ title, description, link, linkText }: ResourceCardProps) {
  return (
    <Card className="bg-[#1a1a3a] border-[#2a2a4a]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {linkText} <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
