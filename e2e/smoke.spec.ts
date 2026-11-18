import { expect, test } from '@playwright/test'

test('coming soon page shows the logo, heading and privacy link', async ({ page }) => {
  await page.goto('/coming-soon')
  await expect(page.getByRole('img', { name: 'VERDE' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Segera')
  await expect(page.getByRole('link', { name: 'Kebijakan Privasi' })).toBeVisible()
})
