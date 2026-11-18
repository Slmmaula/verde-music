import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import id from './locales/id'

export const LANGUAGES = ['id', 'en'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'id'

const STORAGE_KEY = 'verde:lang'

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value)
}

function browserStorage(): Storage | undefined {
  try {
    return typeof localStorage === 'undefined' ? undefined : localStorage
  } catch {
    return undefined
  }
}

export function getInitialLanguage(
  storage: Pick<Storage, 'getItem'> | undefined = browserStorage(),
): Language {
  try {
    const saved = storage?.getItem(STORAGE_KEY)
    if (isLanguage(saved)) return saved
  } catch {
    // Penyimpanan bisa diblokir (mis. mode privat); pakai bahasa bawaan.
  }
  return DEFAULT_LANGUAGE
}

export function saveLanguage(
  language: Language,
  storage: Pick<Storage, 'setItem'> | undefined = browserStorage(),
): void {
  try {
    storage?.setItem(STORAGE_KEY, language)
  } catch {
    // Gagal menyimpan tidak boleh merusak aplikasi.
  }
}

function syncDocumentLanguage(language: string) {
  if (typeof document !== 'undefined') document.documentElement.lang = language
}

export const i18nReady = i18n
  .use(initReactI18next)
  .init({
    resources: { id: { translation: id }, en: { translation: en } },
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })
  .then(() => {
    syncDocumentLanguage(i18n.language)
    i18n.on('languageChanged', syncDocumentLanguage)
  })

export default i18n
