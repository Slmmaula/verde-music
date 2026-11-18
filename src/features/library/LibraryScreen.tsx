import { useTranslation } from 'react-i18next'
import ScreenPlaceholder from '../../ui/ScreenPlaceholder'

export default function LibraryScreen() {
  const { t } = useTranslation()
  return <ScreenPlaceholder title={t('library.title')} description={t('library.empty')} />
}
