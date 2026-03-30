"use client"

import type React from "react"

import { X, Heart, Mail, Code, Info } from "lucide-react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />}

      {/* Side Menu */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DONVPN
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            {/* Donate */}
            <MenuItemCard
              icon={<Heart size={20} className="text-red-500" />}
              title="Donate"
              description="Support us via PayPal or crypto"
              onClick={onClose}
            />

            {/* Contact Us */}
            <MenuItemCard
              icon={<Mail size={20} className="text-accent" />}
              title="Contact Us"
              description="Email and support links"
              onClick={onClose}
            />

            {/* Credits */}
            <MenuItemCard
              icon={<Code size={20} className="text-primary" />}
              title="Credits"
              description="Version, developers, open-source"
              onClick={onClose}
            />

            {/* About */}
            <MenuItemCard
              icon={<Info size={20} className="text-blue-500" />}
              title="About"
              description="App description & features"
              onClick={onClose}
            />
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-border text-xs text-muted-foreground">
            <p>DONVPN v1.0</p>
            <p>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </aside>
    </>
  )
}

interface MenuItemCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function MenuItemCard({ icon, title, description, onClick }: MenuItemCardProps) {
  return (
    <button onClick={onClick} className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  )
}
