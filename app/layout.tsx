import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"]
})

export const metadata: Metadata = {
  title: "DAHacks 3.5",
  description: "DAHacks 3.5 - De Anza College Hackathon",
  generator: 'v0.dev',
  manifest: '/manifest.json',
  themeColor: '#6366f1',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DAHacks 3.5',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${orbitron.variable} bg-[#0a0a1e] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="container mx-auto px-4 pt-20 pb-20 md:pb-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
