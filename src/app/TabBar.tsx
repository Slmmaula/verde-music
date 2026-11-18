import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import { NAV_ITEMS } from './nav'

export default function TabBar() {
  const { t } = useTranslation()

  return (
    <nav
      aria-label={t('shell.mainNav')}
      className="glass rounded-sheet fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 md:hidden"
    >
      <ul className="grid grid-cols-4">
        {NAV_ITEMS.map(({ to, labelKey, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className="text-ink-2 flex min-h-14 flex-col items-center justify-center gap-1 rounded-[24px] text-[11px] font-medium transition-[color,transform] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-400 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 aria-[current=page]:text-emerald-300"
            >
              <Icon className="size-6" />
              <span>{t(labelKey)}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
