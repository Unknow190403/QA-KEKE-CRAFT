# Hasil Pengujian Otomatis Playwright — 26 November 2026

## Ringkasan eksekusi

Pengujian dijalankan oleh pengguna pada komputer lokal melalui VS Code dan Playwright terhadap:

- Base URL: https://www.galerikeke.com/
- Browser engine: Chromium (dipasang melalui Playwright)
- Perintah eksekusi: `npm.cmd run test:e2e`
- Hasil pada laporan Playwright yang dibagikan pengguna: **4 passed**
- Durasi total yang terlihat pada terminal: **18,8 detik**
- Tidak ada test yang dilaporkan gagal pada eksekusi ini.

## Rincian hasil

| Nama test pada Playwright | Hasil | Cakupan yang benar-benar diperiksa |
|---|---|---|
| BB-001: homepage merespons dan menampilkan identitas Keke Craft | PASS | Respons navigasi homepage di bawah HTTP 400; body memuat teks KEKE CRAFT dan Tentang Kami |
| BB-002: homepage menampilkan kategori produk utama | PASS | Homepage memuat TOTE BAG, HAND BAG, LAPTOP BAG, POUCH, WOMEN BAG, dan LANDYARD |
| BB-017: CTA Beli Sekarang pada daftar produk memiliki tujuan WhatsApp | PASS | Halaman /product/ merespons di bawah HTTP 400; tautan wa.me terlihat dan href cocok dengan nomor 6281386058147 |
| BB-012: homepage dapat dirender pada viewport mobile | PASS | Homepage merespons di bawah HTTP 400 dan memuat teks KEKE CRAFT pada viewport 390 x 844 |

## Batasan dan pemetaan terhadap test case manual

- Hasil ini adalah bukti eksekusi otomatis Playwright yang dilaporkan pengguna. File laporan HTML lokal belum diunggah ke repository.
- Pemeriksaan kategori di test otomatis bernama BB-002 tidak menguji klik menu Product. Karena itu, hasil tersebut tidak otomatis membuktikan test case navigasi Product BB-002 pada dokumen manual.
- Test otomatis bernama BB-017 memeriksa CTA pada **daftar produk** (/product/), bukan CTA pada halaman detail setiap produk. Test case manual tentang CTA detail individual tetap perlu diperiksa terpisah.
- Test BB-012 hanya memeriksa homepage pada viewport 390 x 844. Tampilan desktop dan halaman Product pada mobile belum tercakup oleh test ini.
- PASS hanya berlaku untuk assertion yang disebutkan di atas; bukan berarti seluruh website telah lulus QA.
- Tidak ada pesan WhatsApp yang dikirim, transaksi, atau pembayaran yang dilakukan.

## Langkah lanjutan

1. Simpan atau ekspor laporan HTML Playwright dan screenshot sebagai bukti repository.
2. Periksa navigasi menu Product secara manual.
3. Uji kategori satu per satu, detail produk, deskripsi, harga, dan CTA pada halaman detail.
4. Periksa About Us, kontak, serta tampilan desktop dan mobile pada halaman yang relevan.
5. Perbarui status test case manual hanya setelah hasil dan bukti tiap kasus tersedia.
