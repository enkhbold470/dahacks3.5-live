import type React from "react"
import Link from "next/link"
import Image from "next/image"
import Discord from "@/public/Discord-Symbol-Blurple.svg"
import Devpost from "@/public/devpost-icon.svg"
interface SocialLinkProps {
  href: string
  label: string
  icon: string
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-between gap-2 p-4 rounded-lg bg-[#1a1a3a] hover:bg-[#2a2a4a] transition-colors"
      aria-label={label}
    >
      <Image src={icon} alt={label} width={50} height={50} />
      <span className="text-3xl">{label}</span>
    </Link>
  )
}

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <SocialLink href="https://discord.gg/bJWTS7qem6" label="Discord" icon={Discord} />
      <SocialLink
        href="https://dahacks3-5.devpost.com"
        label="Devpost"
        icon={Devpost}
      />
    </div>
  )
}
