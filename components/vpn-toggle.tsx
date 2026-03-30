"use client"

import { Shield } from "lucide-react"

interface VPNToggleProps {
  isConnected: boolean
  onToggle: () => void
}

export default function VPNToggle({ isConnected, onToggle }: VPNToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-48 h-48 rounded-full flex items-center justify-center transition-all duration-500 mb-8 ${
        isConnected
          ? "bg-gradient-to-br from-primary to-blue-600 glow-effect-active"
          : "bg-gradient-to-br from-green-500 to-emerald-600 glow-effect hover:scale-105"
      }`}
      aria-label={isConnected ? "Stop VPN" : "Start VPN"}
    >
      <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Shield size={48} className={isConnected ? "text-primary" : "text-green-500"} />
          <span className="text-2xl font-bold tracking-wider">{isConnected ? "STOP" : "START"}</span>
        </div>
      </div>
    </button>
  )
}
