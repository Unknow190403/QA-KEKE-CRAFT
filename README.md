# QA Keke Craft — Analisis dan Pengujian Website

Repository ini berisi dokumentasi proyek akademik analisis kualitas dan pengujian perangkat lunak pada website Keke Craft.

## Status proyek
- [x] Repository publik dan kerangka dokumentasi dibuat.
- [x] URL kandidat objek penelitian ditemukan pada dokumen verifikasi: https://www.galerikeke.com/
- [x] Halaman utama publik dapat dibaca dan menampilkan identitas, kategori produk, kontak, alamat, serta jam operasional.
- [ ] Izin pengujian interaktif dari pengelola dikonfirmasi.
- [ ] Detail produk dapat diperiksa dan URL detail dicatat.
- [ ] Seluruh test case manual dijalankan dengan bukti.
- [ ] White-box testing dilakukan jika source code tersedia dan diizinkan.
- [ ] Automated testing dijalankan pada target yang disetujui.
- [ ] Wawancara QA profesional minimal 3 tahun dilakukan.
- [ ] Artikel jurnal dan akreditasi SINTA diverifikasi.
- [ ] Laporan akhir dan kesimpulan disusun berdasarkan bukti.

> **Kejujuran hasil:** halaman utama yang terlihat oleh pemeriksa publik bukan pengganti bukti eksekusi browser manual. BB-015 (deskripsi), BB-016 (harga), dan BB-017 (kontak/WhatsApp detail) tetap NOT RUN. Jangan mengubah status menjadi PASS/FAIL tanpa pengujian nyata dan bukti.

## Objek penelitian
- Nama: Keke Craft
- Website kandidat: https://www.galerikeke.com/
- Halaman utama menampilkan kategori Tote Bag, Hand Bag, Laptop Bag, Pouch, Women Bag, dan Landyard.
- Halaman produk /product/ pada pemeriksaan terakhir menampilkan halaman verifikasi otomatis, sehingga isi detail belum dapat diverifikasi melalui pemeriksa publik.

## Struktur
- `01-profil-objek/`: identitas dan kelayakan objek.
- `02-standar/`: standar resmi yang menjadi acuan.
- `03-test-plan/`: rencana dan ruang lingkup pengujian.
- `04-manual-testing/`: template black-box, white-box, grey-box.
- `05-automation/`: persiapan Playwright.
- `06-wawancara/`: instrumen wawancara QA.
- `07-jurnal/`: telaah jurnal dan validasi SINTA.
- `08-hasil-dan-bukti/`: hasil uji, defect, dan bukti.

## Informasi yang masih dibutuhkan untuk menuntaskan pengujian
1. Konfirmasi bahwa https://www.galerikeke.com/ adalah target final.
2. Izin pengelola untuk pengujian fungsional/interaktif sesuai ruang lingkup.
3. URL detail produk yang sedang diperiksa (atau screenshot halaman detail).
4. Akses source code bila white-box testing diwajibkan.
5. Narasumber QA yang memenuhi pengalaman minimal 3 tahun.
6. Data trafik/pengunjung dari pengelola atau sumber estimasi yang jelas.

## Acuan
Lihat [Register Standar](02-standar/README.md), [Test Plan](03-test-plan/README.md), dan [Black-box Test Cases](04-manual-testing/black-box-test-cases.md).
