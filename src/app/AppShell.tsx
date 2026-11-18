import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'
import PlayerBar from './PlayerBar'
import RightPanel from './RightPanel'
import Sidebar from './Sidebar'
import TabBar from './TabBar'

// Tiga kolom penuh mulai 1440 px; di bawah itu panel kanan tertutup secara bawaan.
function isWideDesktop() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1440px)').matches
}

export default function AppShell() {
  const { t } = useTranslation()
  const [panelOpen, setPanelOpen] = useState(isWideDesktop)

  return (
    <div className="bg-bg-0 text-ink flex h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-black"
      >
        {t('shell.skipToContent')}
      </a>

      <div className="flex min-h-0 flex-1 gap-2 md:p-2">
        <Sidebar />
        <main
          id="main"
          tabIndex={-1}
          className="bg-bg-0 md:bg-bg-1 md:rounded-card min-w-0 flex-1 overflow-y-auto pb-[calc(6rem+env(safe-area-inset-bottom))] outline-none md:border md:border-white/[0.06] md:pb-0"
        >
          <Outlet />
        </main>
        {panelOpen && <RightPanel />}
      </div>

      <PlayerBar panelOpen={panelOpen} onTogglePanel={() => setPanelOpen((open) => !open)} />
      <TabBar />
    </div>
  )
}
