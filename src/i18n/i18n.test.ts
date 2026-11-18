import { beforeAll, describe, expect, it } from 'vitest'
import i18n, { DEFAULT_LANGUAGE, getInitialLanguage, i18nReady } from './index'

beforeAll(async () => {
  await i18nReady
})

describe('i18n', () => {
  it('defaults to Indonesian', () => {
    expect(DEFAULT_LANGUAGE).toBe('id')
    expect(getInitialLanguage()).toBe('id')
    expect(i18n.t('nav.home')).toBe('Beranda')
  })

  it('uses a saved language when it is valid', () => {
    expect(getInitialLanguage({ getItem: () => 'en' })).toBe('en')
  })

  it('ignores invalid or unreadable saved values', () => {
    expect(getInitialLanguage({ getItem: () => 'fr' })).toBe('id')
    expect(
      getInitialLanguage({
        getItem: () => {
          throw new Error('blocked')
        },
      }),
    ).toBe('id')
  })

  it('switches to English and back', async () => {
    await i18n.changeLanguage('en')
    expect(i18n.t('nav.home')).toBe('Home')
    await i18n.changeLanguage('id')
    expect(i18n.t('nav.home')).toBe('Beranda')
  })
})
