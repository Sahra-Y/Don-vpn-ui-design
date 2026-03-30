"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import SideMenu from "@/components/side-menu"
import VPNToggle from "@/components/vpn-toggle"
import ServerSelector from "@/components/server-selector"
import StatusCard from "@/components/status-card"
import BottomNav from "@/components/bottom-nav"
import SettingsScreen from "@/components/settings-screen"
import AccountScreen from "@/components/account-screen"

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [selectedServer, setSelectedServer] = useState("auto")
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home") // added tab state management

  const servers = [
    { id: "auto", name: "Auto - Best Server", flag: "🌍", ping: "---", signal: 5 },
    { id: "us", name: "USA - New York", flag: "🇺🇸", ping: "23ms", signal: 5 },
    { id: "uk", name: "UK - London", flag: "🇬🇧", ping: "45ms", signal: 4 },
    { id: "de", name: "Germany - Berlin", flag: "🇩🇪", ping: "67ms", signal: 4 },
    { id: "jp", name: "Japan - Tokyo", flag: "🇯🇵", ping: "89ms", signal: 3 },
    { id: "au", name: "Australia - Sydney", flag: "🇦🇺", ping: "156ms", signal: 3 },
  ]

  const currentServer = servers.find((s) => s.id === selectedServer) || servers[0]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-6">
        <button
          onClick={() => setSideMenuOpen(true)}
          className="p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          DONVPN
        </h1>
        <div className="w-10" /> {/* Spacer */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-24">
        {activeTab === "home" && (
          <>
            <ServerSelector currentServer={currentServer} servers={servers} onServerChange={setSelectedServer} />
            <VPNToggle isConnected={isConnected} onToggle={() => setIsConnected(!isConnected)} />
            <StatusCard isConnected={isConnected} />
          </>
        )}
        {activeTab === "settings" && <SettingsScreen />}
        {activeTab === "account" && <AccountScreen />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Side Menu */}
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
    </div>
  )
}
