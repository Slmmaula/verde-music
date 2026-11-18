import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <section className="p-6 sm:p-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight">{t('notFound.title')}</h1>
      <Link
        to="/"
        className="mt-4 inline-flex min-h-11 items-center text-emerald-300 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        {t('notFound.back')}
      </Link>
    </section>
  )
}
