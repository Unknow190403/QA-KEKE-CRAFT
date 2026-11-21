const { test, expect } = require('@playwright/test');

test('website dapat dibuka dan memiliki judul dokumen', async ({ page }) => {
  const response = await page.goto('/');
  expect(response, 'Navigasi harus menghasilkan respons HTTP').not.toBeNull();
  expect(response.status(), 'Respons HTTP harus sukses').toBeLessThan(400);
  await expect(page).toHaveTitle(/.+/);
});
