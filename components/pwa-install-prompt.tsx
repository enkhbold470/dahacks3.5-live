"use client"

import { useState, useEffect } from "react"
import { X, Chrome, Share, Plus } from "lucide-react"

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [browserType, setBrowserType] = useState<'chrome' | 'safari' | 'other'>('other')
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // Check if app is already installed (running in standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator as any).standalone === true

    // Check if user has already dismissed the prompt
    const hasSeenPrompt = localStorage.getItem('pwa-install-prompt-dismissed')

    // Detect browser type
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
    
    if (isChrome) setBrowserType('chrome')
    else if (isSafari) setBrowserType('safari')
    else setBrowserType('other')

    // Show prompt only if: mobile, not installed, not dismissed before
    if (isMobile && !isStandalone && !hasSeenPrompt) {
      // Delay showing prompt by 3 seconds for better UX
      const timer = setTimeout(() => {
        setShowPrompt(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    }

    // Listen for beforeinstallprompt event (Chrome/Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt && browserType === 'chrome') {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
        setShowPrompt(false)
        localStorage.setItem('pwa-install-prompt-dismissed', 'true')
      }
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-install-prompt-dismissed', 'true')
  }

  const getInstallInstructions = () => {
    switch (browserType) {
      case 'chrome':
        return {
          title: "Install DAHacks 3.5 App",
          description: "Get the full app experience with offline access and notifications.",
          steps: [
            "Tap the menu button (⋮) in Chrome",
            "Select 'Add to Home screen'",
            "Tap 'Add' to install the app"
          ],
          icon: <Chrome className="w-6 h-6 text-blue-500" />,
          showInstallButton: !!deferredPrompt
        }
      case 'safari':
        return {
          title: "Add DAHacks 3.5 to Home Screen",
          description: "Install the app for quick access and better experience.",
          steps: [
            "Tap the Share button at the bottom",
            "Scroll down and tap 'Add to Home Screen'",
            "Tap 'Add' to install the app"
          ],
          icon: <Share className="w-6 h-6 text-blue-500" />,
          showInstallButton: false
        }
      default:
        return {
          title: "Install DAHacks 3.5 App",
          description: "For the best experience, use Chrome or Safari to install this app.",
          steps: [
            "Open this site in Chrome or Safari",
            "Follow the browser's install instructions",
            "Add the app to your home screen"
          ],
          icon: <Plus className="w-6 h-6 text-blue-500" />,
          showInstallButton: false
        }
    }
  }

  if (!showPrompt) return null

  const instructions = getInstallInstructions()

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-[#1a1a3a] border border-[#2a2a4a] rounded-lg shadow-xl animate-in slide-in-from-bottom-4 duration-300">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {instructions.icon}
              <h3 className="text-lg font-semibold text-white">
                {instructions.title}
              </h3>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-300 text-sm mb-4">
            {instructions.description}
          </p>

          <div className="space-y-2 mb-6">
            {instructions.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#6366f1] text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-300">{step}</span>
              </div>
            ))}
          </div>

          <div className="flex space-x-3">
            {instructions.showInstallButton && (
              <button
                onClick={handleInstall}
                className="flex-1 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Install Now
              </button>
            )}
            <button
              onClick={handleDismiss}
              className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 