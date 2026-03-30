"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Crown, LogOut } from "lucide-react"

export default function AccountScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const dataUsagePercent = 45

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Account</h2>
        <p className="text-sm text-muted-foreground">Manage your account and subscription</p>
      </div>

      {/* User Profile Section */}
      <Card className="p-6 bg-card border border-border">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-foreground font-bold text-lg">
              {isLoggedIn ? userEmail.charAt(0).toUpperCase() : "GU"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{isLoggedIn ? userEmail : "Guest User"}</h3>
            <p className="text-xs text-muted-foreground">{isLoggedIn ? "Premium Member" : "Free Plan"}</p>
          </div>
        </div>
      </Card>

      {/* Premium Status */}
      <Card className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
        <div className="flex items-start gap-3">
          <Crown size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold mb-2">
              Premium Status: <span className="text-accent">{isLoggedIn ? "Premium" : "Free Plan"}</span>
            </p>
            {!isLoggedIn && (
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-foreground hover:opacity-90 text-sm h-8">
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Data Usage This Month */}
      <Card className="p-4 bg-card border border-border space-y-3">
        <p className="text-sm font-semibold">Data Usage This Month</p>
        <div className="space-y-2">
          <Progress value={dataUsagePercent} className="h-2" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{dataUsagePercent} GB used</span>
            <span>of 100 GB limit</span>
          </div>
        </div>
      </Card>

      {/* Authentication Section */}
      {!isLoggedIn ? (
        <Button
          onClick={() => setIsLoggedIn(true)}
          className="w-full bg-gradient-to-r from-primary to-accent text-foreground hover:opacity-90"
        >
          Login / Sign Up
        </Button>
      ) : (
        <>
          {/* Subscription Management */}
          <Card className="p-4 bg-card border border-border">
            <p className="text-sm font-semibold mb-3">Subscription Management</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Plan Type</span>
                <span className="font-semibold">Premium</span>
              </div>
              <div className="flex items-center justify-between text-sm border-t border-border pt-2">
                <span className="text-muted-foreground">Renewal Date</span>
                <span className="font-semibold">Jan 15, 2026</span>
              </div>
              <Button variant="outline" className="w-full mt-3 text-sm h-8 bg-transparent">
                Manage Subscription
              </Button>
            </div>
          </Card>

          {/* Logout */}
          <Button
            onClick={() => {
              setIsLoggedIn(false)
              setUserEmail("")
            }}
            variant="outline"
            className="w-full text-red-500 border-red-500/30 hover:bg-red-500/10"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </>
      )}

      {/* Additional Info */}
      <div className="text-center space-y-2 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">Need help with your account?</p>
        <Button variant="ghost" className="w-full text-xs h-8">
          Contact Support
        </Button>
      </div>
    </div>
  )
}
