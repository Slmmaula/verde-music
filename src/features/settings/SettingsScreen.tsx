import { useTranslation } from 'react-i18next'
import { LANGUAGES, saveLanguage, type Language } from '../../i18n'

export default function SettingsScreen() {
  const { t, i18n } = useTranslation()

  function choose(language: Language) {
    void i18n.changeLanguage(language)
    saveLanguage(language)
  }

  return (
    <section className="p-6 sm:p-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {t('settings.title')}
      </h1>

      <h2 className="mt-8 text-lg font-semibold">{t('settings.language')}</h2>
      <p className="text-ink-2 mt-1 text-sm">{t('settings.languageHint')}</p>

      <div role="group" aria-label={t('settings.language')} className="mt-4 flex gap-2">
        {LANGUAGES.map((language) => (
          <button
            key={language}
            type="button"
            aria-pressed={i18n.resolvedLanguage === language}
            onClick={() => choose(language)}
            className="glass aria-pressed:text-emerald-300 aria-pressed:border-emerald-400 min-h-11 rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            {t(`languages.${language}`)}
          </button>
        ))}
      </div>
    </section>
  )
}
