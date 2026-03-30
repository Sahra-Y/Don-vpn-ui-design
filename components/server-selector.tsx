"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Server {
  id: string
  name: string
  flag: string
  ping: string
  signal: number
}

interface ServerSelectorProps {
  currentServer: Server
  servers: Server[]
  onServerChange: (serverId: string) => void
}

export default function ServerSelector({ currentServer, servers, onServerChange }: ServerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full mb-8">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full max-w-sm mx-auto">
        <Card className="p-4 bg-card hover:bg-card/80 transition-colors cursor-pointer border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{currentServer.flag}</span>
              <div className="text-left">
                <p className="font-semibold text-sm">{currentServer.name}</p>
                <p className="text-xs text-muted-foreground">{currentServer.ping}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(currentServer.signal)].map((_, i) => (
                  <div key={i} className="w-1 h-3 bg-accent rounded-sm" />
                ))}
              </div>
              <ChevronDown size={20} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-4 right-4 top-full mt-2 bg-card border border-border rounded-lg shadow-xl z-50 max-w-sm mx-auto">
              {servers.map((server) => (
                <button
                  key={server.id}
                  onClick={() => {
                    onServerChange(server.id)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 ${
                    currentServer.id === server.id ? "bg-muted/50" : ""
                  }`}
                >
                  <span className="text-2xl">{server.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">{server.name}</p>
                    <p className="text-xs text-muted-foreground">{server.ping}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(server.signal)].map((_, i) => (
                      <div key={i} className="w-1 h-3 bg-accent rounded-sm" />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          )}
        </Card>
      </button>
    </div>
  )
}
