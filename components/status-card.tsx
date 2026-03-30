"use client"

import { Card } from "@/components/ui/card"

interface StatusCardProps {
  isConnected: boolean
}

export default function StatusCard({ isConnected }: StatusCardProps) {
  return (
    <Card className="w-full max-w-sm bg-card/50 border border-border backdrop-blur-sm p-6">
      <div className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between pb-4 border-b border-border/50">
          <span className="text-sm text-muted-foreground">Connection Status</span>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
            <span className={`font-semibold text-sm ${isConnected ? "text-green-500" : "text-red-500"}`}>
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>

        {/* Speed */}
        <div className="space-y-2 pb-4 border-b border-border/50">
          <span className="text-sm text-muted-foreground block">Speed</span>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">↓ Download</p>
              <p className="text-lg font-bold text-accent">{isConnected ? "156 Mbps" : "0 Mbps"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">↑ Upload</p>
              <p className="text-lg font-bold text-accent">{isConnected ? "48 Mbps" : "0 Mbps"}</p>
            </div>
          </div>
        </div>

        {/* IP Address */}
        <div className="flex items-center justify-between pb-4 border-b border-border/50">
          <span className="text-sm text-muted-foreground">IP Address</span>
          <span className="font-mono text-sm text-foreground">{isConnected ? "45.142.182.99" : "---"}</span>
        </div>

        {/* Data Used */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Data Used</span>
          <span className="font-semibold text-sm">{isConnected ? "2.4 GB" : "0 MB"}</span>
        </div>
      </div>
    </Card>
  )
}
