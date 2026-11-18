import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const TABS = ['queue', 'lyrics'] as const

export default function RightPanel() {
  const { t } = useTranslation()
  const [tab, setTab] = useState<(typeof TABS)[number]>('queue')

  return (
    <aside
      aria-label={t('shell.panel')}
      className="bg-bg-1 rounded-card hidden w-80 shrink-0 flex-col overflow-y-auto border border-white/[0.06] p-4 lg:flex"
    >
      <div role="group" aria-label={t('shell.panel')} className="flex gap-2">
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={tab === key}
            onClick={() => setTab(key)}
            className="text-ink-2 min-h-11 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 aria-pressed:bg-white/[0.08] aria-pressed:text-emerald-300"
          >
            {t(`shell.${key}`)}
          </button>
        ))}
      </div>

      <p className="text-ink-2 mt-6 text-sm">
        {t(tab === 'queue' ? 'shell.queueEmpty' : 'shell.lyricsEmpty')}
      </p>
    </aside>
  )
}
