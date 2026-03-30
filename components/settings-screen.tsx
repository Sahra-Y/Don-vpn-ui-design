"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"

export default function SettingsScreen() {
  const [protocol, setProtocol] = useState("wireguard")
  const [autoConnectWifi, setAutoConnectWifi] = useState(false)
  const [autoConnectMobile, setAutoConnectMobile] = useState(false)
  const [killSwitch, setKillSwitch] = useState(false)
  const [splitTunneling, setSplitTunneling] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-sm text-muted-foreground">Configure your VPN preferences</p>
      </div>

      {/* Protocol Selection */}
      <Card className="p-4 bg-card border border-border">
        <Label htmlFor="protocol" className="text-sm font-semibold block mb-3">
          Protocol Selection
        </Label>
        <Select value={protocol} onValueChange={setProtocol}>
          <SelectTrigger id="protocol" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="openvpn">OpenVPN</SelectItem>
            <SelectItem value="wireguard">WireGuard</SelectItem>
            <SelectItem value="ikev2">IKEv2</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      {/* Auto-Connect on Wi-Fi */}
      <Card className="p-4 bg-card border border-border flex items-center justify-between">
        <div>
          <Label className="text-sm font-semibold block mb-1">Auto-Connect on Wi-Fi</Label>
          <p className="text-xs text-muted-foreground">Connect automatically on Wi-Fi networks</p>
        </div>
        <Switch checked={autoConnectWifi} onCheckedChange={setAutoConnectWifi} />
      </Card>

      {/* Auto-Connect on Mobile Data */}
      <Card className="p-4 bg-card border border-border flex items-center justify-between">
        <div>
          <Label className="text-sm font-semibold block mb-1">Auto-Connect on Mobile Data</Label>
          <p className="text-xs text-muted-foreground">Connect automatically on mobile networks</p>
        </div>
        <Switch checked={autoConnectMobile} onCheckedChange={setAutoConnectMobile} />
      </Card>

      {/* Kill Switch */}
      <Card className="p-4 bg-card border border-border">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <Label className="text-sm font-semibold block">Kill Switch</Label>
              <p className="text-xs text-muted-foreground">Blocks internet if VPN drops</p>
            </div>
            <Switch checked={killSwitch} onCheckedChange={setKillSwitch} />
          </div>
        </div>
      </Card>

      {/* Split Tunneling */}
      <Card className="p-4 bg-card border border-border flex items-center justify-between">
        <div>
          <Label className="text-sm font-semibold block mb-1">Split Tunneling</Label>
          <p className="text-xs text-muted-foreground">Exclude specific apps from VPN</p>
        </div>
        <Switch checked={splitTunneling} onCheckedChange={setSplitTunneling} />
      </Card>

      {/* Dark Mode */}
      <Card className="p-4 bg-card border border-border flex items-center justify-between">
        <div>
          <Label className="text-sm font-semibold block mb-1">Dark Mode</Label>
          <p className="text-xs text-muted-foreground">Use dark theme by default</p>
        </div>
        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
      </Card>

      {/* Notifications */}
      <Card className="p-4 bg-card border border-border flex items-center justify-between">
        <div>
          <Label className="text-sm font-semibold block mb-1">Notifications</Label>
          <p className="text-xs text-muted-foreground">Connection alerts and updates</p>
        </div>
        <Switch checked={notifications} onCheckedChange={setNotifications} />
      </Card>

      {/* Language */}
      <Card className="p-4 bg-card border border-border">
        <Label htmlFor="language" className="text-sm font-semibold block mb-3">
          Language
        </Label>
        <Select defaultValue="en">
          <SelectTrigger id="language" className="w-full" disabled>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-2">More languages coming soon</p>
      </Card>
    </div>
  )
}
