import { useTranslation } from 'react-i18next'
import ScreenPlaceholder from '../../ui/ScreenPlaceholder'

export default function HomeScreen() {
  const { t } = useTranslation()
  return <ScreenPlaceholder title={t('home.title')} description={t('home.empty')} />
}
