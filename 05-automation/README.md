# 05 — Automated Testing dengan Playwright

## Tujuan
Menyiapkan otomasi browser untuk skenario yang stabil setelah URL dan alur website dikonfirmasi.

## Prasyarat
- Node.js versi LTS.
- Izin menguji target.
- URL staging atau target yang disetujui.
- Akun uji khusus bila diperlukan; jangan commit password/token.

## Instalasi lokal
```bash
npm init -y
npm install --save-dev @playwright/test
npx playwright install
```

## Contoh awal (placeholder URL)
Buat `tests/smoke.spec.js` setelah URL disepakati:

```javascript
const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL;

test('halaman utama dapat dibuka', async ({ page }) => {
  test.skip(!BASE_URL, 'BASE_URL belum diatur');
  const response = await page.goto(BASE_URL);
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
});
```

Jalankan:
```bash
BASE_URL="https://URL-YANG-DISETUJUI" npx playwright test
```

## Batas aman
- Jangan melakukan load test, brute force, scanning agresif, eksploitasi, atau transaksi nyata tanpa izin eksplisit.
- Gunakan data dummy dan lingkungan staging bila tersedia.
- Jangan simpan kredensial, cookie, atau data pelanggan di repository.
- Simpan laporan dan screenshot yang sudah disanitasi.
- Hasil script belum dijalankan pada Keke Craft; contoh di atas hanya kerangka.
