// Service line icons now come from lucide-react (ISC licence, already a
// project dependency) — replacing the previous hand-embedded SVG paths.
import { CookingPot, Shirt, Hammer, LayoutPanelTop, type LucideIcon } from 'lucide-react'

interface IconProps {
  size?: number
  className?: string
  strokeWidth?: number
}

function make(Icon: LucideIcon) {
  return function ServiceIcon({ size = 32, className = '', strokeWidth = 1.75 }: IconProps) {
    return <Icon size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />
  }
}

export const KitchenIcon = make(CookingPot)
export const WardrobeIcon = make(Shirt)
export const HouseIcon = make(Hammer)
export const FlooringIcon = make(LayoutPanelTop)
