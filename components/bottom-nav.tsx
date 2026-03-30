"use client"

import { Home, Settings, User } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 flex items-center justify-around">
      <button
        onClick={() => onTabChange("home")}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === "home" ? "text-accent" : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="Home"
      >
        <Home size={24} />
        <span className="text-xs font-semibold">Home</span>
      </button>
      <button
        onClick={() => onTabChange("settings")}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === "settings" ? "text-accent" : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="Settings"
      >
        <Settings size={24} />
        <span className="text-xs font-semibold">Settings</span>
      </button>
      <button
        onClick={() => onTabChange("account")}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === "account" ? "text-accent" : "text-muted-foreground hover:text-primary"
        }`}
        aria-label="Account"
      >
        <User size={24} />
        <span className="text-xs font-semibold">Account</span>
      </button>
    </nav>
  )
}
