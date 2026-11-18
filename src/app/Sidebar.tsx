import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { NAV_ITEMS } from './nav'

export default function Sidebar() {
  const { t } = useTranslation()

  return (
    <aside className="bg-bg-1 rounded-card hidden w-[4.5rem] shrink-0 flex-col gap-8 overflow-y-auto border border-white/[0.06] p-3 md:flex lg:w-64 lg:p-4">
      <nav aria-label={t('shell.mainNav')}>
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ to, labelKey, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                aria-label={t(labelKey)}
                className="text-ink-2 hover:text-ink rounded-chip flex min-h-12 items-center justify-center gap-4 px-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 aria-[current=page]:bg-white/[0.07] aria-[current=page]:text-emerald-300 lg:justify-start"
              >
                <Icon className="size-6 shrink-0" />
                <span className="hidden text-sm font-medium lg:inline">{t(labelKey)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="sidebar-playlists" className="hidden lg:block">
        <h2
          id="sidebar-playlists"
          className="text-ink-2 px-3 text-xs font-semibold tracking-[0.14em] uppercase"
        >
          {t('shell.playlists')}
        </h2>
        <p className="text-ink-2 mt-3 px-3 text-sm">{t('shell.noPlaylists')}</p>
      </section>
    </aside>
  )
}
