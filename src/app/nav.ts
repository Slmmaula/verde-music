import type { ComponentType, SVGProps } from 'react'
import { HomeIcon, LibraryIcon, SearchIcon, SettingsIcon } from '../ui/icons'

export type NavItem = {
  to: string
  labelKey: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  end?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', labelKey: 'nav.home', icon: HomeIcon, end: true },
  { to: '/search', labelKey: 'nav.search', icon: SearchIcon },
  { to: '/library', labelKey: 'nav.library', icon: LibraryIcon },
  { to: '/settings', labelKey: 'nav.settings', icon: SettingsIcon },
]
