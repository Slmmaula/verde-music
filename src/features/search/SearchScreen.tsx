import { useTranslation } from 'react-i18next'
import ScreenPlaceholder from '../../ui/ScreenPlaceholder'

export default function SearchScreen() {
  const { t } = useTranslation()
  return <ScreenPlaceholder title={t('search.title')} description={t('search.empty')} />
}
