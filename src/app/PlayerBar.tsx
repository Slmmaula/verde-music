import { useTranslation } from 'react-i18next'
import { PanelRightIcon } from '../ui/icons'

type Props = {
  panelOpen: boolean
  onTogglePanel: () => void
}

export default function PlayerBar({ panelOpen, onTogglePanel }: Props) {
  const { t } = useTranslation()

  return (
    <section
      aria-label={t('shell.player')}
      className="glass rounded-card mx-2 mb-2 hidden h-20 shrink-0 items-center justify-between gap-4 px-6 lg:flex"
    >
      <p className="text-ink-2 text-sm">{t('shell.playerEmpty')}</p>
      <button
        type="button"
        aria-label={t('shell.panel')}
        aria-pressed={panelOpen}
        onClick={onTogglePanel}
        className="text-ink-2 hover:text-ink flex size-11 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 aria-pressed:text-emerald-300"
      >
        <PanelRightIcon className="size-6" />
      </button>
    </section>
  )
}
