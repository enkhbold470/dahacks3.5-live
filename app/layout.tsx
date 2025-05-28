import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Open_Sans, Orbitron } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

// const inter = Inter({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700", "800"] })
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"]
})

export const metadata: Metadata = {
  title: "DAHacks3.5",
  description: "DAHacks 3.5 - De Anza College Hackathon",
  generator: 'Next.js',
  manifest: '/icons/site.webmanifest',
  icons: {
    icon: '/icons/android-chrome-192x192.png',
    shortcut: '/icons/android-chrome-192x192.png',
    apple: '/icons/apple-touch-icon.png',
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DAHacks3.5 Live',
  },
  applicationName: 'DAHacks3.5 Live',

  authors: [
    {
      name: "Inky Ganbold",
      url: "https://chat.enk.icu",
    },
  ],

}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#6366f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} ${orbitron.variable} bg-[#0a0a1e] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="container mx-auto px-4 pt-20 pb-20 md:pb-0">{children}</main>
          <Footer />
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
