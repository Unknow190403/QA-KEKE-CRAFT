# 05 — Automated Testing dengan Playwright

## Tujuan
Menjalankan smoke test dan pemeriksaan konten dasar pada website Keke Craft dengan Playwright.

## Prasyarat
- Node.js versi LTS dan npm.
- Izin pengelola untuk menguji target.
- Koneksi internet.
- Gunakan hanya pengujian GET/read-only; tidak ada pengiriman pesan, transaksi, pembayaran, atau perubahan data.

## Menjalankan pengujian
Buka terminal pada folder `05-automation`, lalu jalankan:

```bash
npm install
npx playwright install chromium
```

Di Windows PowerShell:

```powershell
$env:BASE_URL="https://www.galerikeke.com"
npm run test:e2e
```

Untuk melihat browser saat test berjalan:

```powershell
$env:BASE_URL="https://www.galerikeke.com"
npm run test:e2e:headed
```

Untuk membuka laporan HTML setelah test:

```bash
npm run test:report
```

## Skenario yang disiapkan
File: `tests/smoke.spec.js`

- BB-001: homepage merespons dan menampilkan identitas Keke Craft.
- BB-002: kategori utama tampil pada homepage.
- BB-017: CTA Beli Sekarang pada halaman produk mengarah ke nomor WhatsApp yang teramati.
- BB-012: homepage dapat dirender pada viewport mobile 390 x 844.

## Catatan hasil
Script sudah ditambahkan ke repository, tetapi **belum dijalankan** pada komputer/browser pengguna. Karena itu belum ada hasil PASS/FAIL otomatis. Simpan laporan HTML, screenshot, dan trace dari hasil run sebagai bukti; periksa dahulu sebelum mengubah status test case.

## Batas aman
- Jangan melakukan load test, brute force, scanning agresif, eksploitasi, atau transaksi nyata.
- Jangan mengirim pesan WhatsApp. Test hanya memeriksa atribut tautan.
- Jangan menyimpan kredensial, cookie, atau data pelanggan di repository.
- Jika website memblokir automation atau menampilkan challenge, catat sebagai BLOCKED dan jangan mencoba melewati proteksi.
