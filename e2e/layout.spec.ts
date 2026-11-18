import { expect, test } from '@playwright/test'

const mainNav = 'Navigasi utama'
const panelName = 'Antrean dan lirik'

test.describe('mobile layout (390 px)', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('shows the floating tab bar and hides desktop chrome', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: mainNav })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Pustaka' })).toBeVisible()
    await expect(page.getByRole('region', { name: 'Pemutar' })).toBeHidden()
    await expect(page.getByRole('complementary', { name: panelName })).toBeHidden()
  })

  test('navigates between tabs', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Pustaka' }).click()
    await expect(page).toHaveURL(/\/library$/)
    await expect(page.getByRole('heading', { level: 1, name: 'Pustaka' })).toBeVisible()
  })
})

test.describe('tablet layout (820 px)', () => {
  test.use({ viewport: { width: 820, height: 1180 } })

  test('shows the compact sidebar without player bar or right panel', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: mainNav })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Beranda' })).toBeVisible()
    await expect(page.getByRole('region', { name: 'Pemutar' })).toBeHidden()
    await expect(page.getByRole('complementary', { name: panelName })).toBeHidden()
  })
})

test.describe('desktop layout (1280 px)', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('shows the player bar and lets the right panel be toggled', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: mainNav })).toBeVisible()
    await expect(page.getByRole('region', { name: 'Pemutar' })).toBeVisible()

    const panel = page.getByRole('complementary', { name: panelName })
    await expect(panel).toBeHidden()

    await page.getByRole('button', { name: panelName, exact: true }).click()
    await expect(panel).toBeVisible()
  })
})

test.describe('wide desktop layout (1600 px)', () => {
  test.use({ viewport: { width: 1600, height: 900 } })

  test('shows all three columns by default', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: mainNav })).toBeVisible()
    await expect(page.getByRole('complementary', { name: panelName })).toBeVisible()
    await expect(page.getByRole('region', { name: 'Pemutar' })).toBeVisible()
  })
})

test('language choice is applied and kept after reload', async ({ page }) => {
  await page.goto('/settings')
  await expect(page.getByRole('heading', { level: 1, name: 'Pengaturan' })).toBeVisible()

  await page.getByRole('button', { name: 'English' }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'Settings' })).toBeVisible()

  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: 'Settings' })).toBeVisible()
})
