const { test, expect } = require('@playwright/test');

test.describe('Keke Craft — smoke & content checks', () => {
  test('BB-001: homepage merespons dan menampilkan identitas Keke Craft', async ({ page }) => {
    const response = await page.goto('/');
    expect(response, 'Navigasi homepage harus menghasilkan respons HTTP').not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('body')).toContainText(/KEKE CRAFT/i);
    await expect(page.locator('body')).toContainText(/Tentang Kami/i);
  });

  test('BB-002: homepage menampilkan kategori produk utama', async ({ page }) => {
    await page.goto('/');
    const body = page.locator('body');
    for (const category of ['TOTE BAG', 'HAND BAG', 'LAPTOP BAG', 'POUCH', 'WOMEN BAG', 'LANDYARD']) {
      await expect(body).toContainText(new RegExp(category, 'i'));
    }
  });

  test('BB-017: CTA Beli Sekarang pada daftar produk memiliki tujuan WhatsApp', async ({ page }) => {
    const response = await page.goto('/product/');
    expect(response, 'Navigasi halaman produk harus menghasilkan respons HTTP').not.toBeNull();
    expect(response.status()).toBeLessThan(400);

    const cta = page.locator('a[href*="wa.me/"]');
    await expect(cta.first()).toBeVisible();
    await expect(cta.first()).toHaveAttribute('href', /wa\.me\/6281386058147/);
  });

  test('BB-012: homepage dapat dirender pada viewport mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const response = await page.goto('/');
    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('body')).toContainText(/KEKE CRAFT/i);
  });
});
