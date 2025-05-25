import Link from "next/link"
import { hackathonData } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a3a] border-t border-[#2a2a4a] mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DAHacks 3.5</h3>
            <p className="text-gray-300 text-sm mb-2">{hackathonData.date}</p>
            <p className="text-gray-300 text-sm mb-2">{hackathonData.time}</p>
            <p className="text-gray-300 text-sm">{hackathonData.venue}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/schedule" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Schedule
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Resources
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white text-sm transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href={hackathonData.contact.email} 
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Email Us
              </a>
              <a 
                href={hackathonData.contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Instagram
              </a>
              <a 
                href={hackathonData.contact.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a4a] mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 DAHacks 3.5. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 