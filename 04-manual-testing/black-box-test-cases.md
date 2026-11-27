# Black-box Test Cases — Keke Craft

**Objek kandidat:** https://www.galerikeke.com/  
**Tanggal pembaruan dokumentasi:** 26 November 2026  
**Status eksekusi:** status mengikuti bukti yang tersedia. PASS* berarti laporan/konfirmasi pengguna dan belum didukung screenshot/URL.

Black-box menguji input dan output/perilaku yang terlihat dari sisi pengguna tanpa memeriksa source code.

## Test case

| ID | Fitur | Prasyarat | Langkah uji | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| BB-001 | Halaman utama | Browser terhubung internet | Buka URL utama | Halaman utama Keke Craft tampil tanpa error | Playwright: homepage merespons di bawah HTTP 400 serta body memuat KEKE CRAFT dan Tentang Kami | PASS (otomatis) |
| BB-002 | Navigasi Product | Halaman utama tampil | Klik menu Product | Browser membuka halaman/tujuan Product | Pengguna melaporkan menu Product terbuka dan halaman dapat dilanjutkan ke detail produk | PASS* |
| BB-003 | Kategori Tote Bag | Halaman Product/kategori tersedia | Pilih kategori Tote Bag | Produk Tote Bag yang sesuai ditampilkan | Pengguna mengonfirmasi produk kategori Tote Bag dan gambarnya terlihat; screenshot belum dilampirkan | PASS* |
| BB-004 | Kategori Hand Bag | Halaman Product/kategori tersedia | Klik kategori Hand Bag | Kategori/produk Hand Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Pengguna mengonfirmasi kategori Hand Bag muncul; screenshot belum dilampirkan | PASS* |
| BB-005 | Kategori Laptop Bag | Halaman Product/kategori tersedia | Klik kategori Laptop Bag | Kategori/produk Laptop Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-006 | Kategori Pouch | Halaman Product/kategori tersedia | Klik kategori Pouch | Kategori/produk Pouch yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-007 | Kategori Women Bag | Halaman Product/kategori tersedia | Klik kategori Women Bag | Kategori/produk Women Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-008 | Kategori Landyard | Halaman Product/kategori tersedia | Klik kategori Landyard | Kategori/produk Landyard yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-009 | Navigasi Home | Website terbuka | Klik menu Home | Kembali ke halaman utama | Belum dicatat | NOT RUN |
| BB-010 | Navigasi About Us | Website terbuka | Klik menu About Us | Halaman/bagian informasi perusahaan terbuka | Belum dicatat | NOT RUN |
| BB-011 | Kontak WhatsApp | Tautan kontak tersedia | Klik tautan WhatsApp; jangan kirim pesan tanpa izin | Tautan membuka tujuan WhatsApp yang sesuai | Belum dicatat | NOT RUN |
| BB-012 | Tampilan responsif | Browser desktop dan perangkat/mobile viewport | Buka halaman utama dan Product pada dua ukuran layar | Konten tetap terbaca, navigasi dapat digunakan, tidak ada elemen penting terpotong | Playwright: homepage memuat identitas Keke Craft pada viewport 390 x 844; halaman Product dan desktop belum diuji responsif | PASS terbatas (otomatis) |
| BB-013 | Membuka detail produk | Halaman Product dan minimal satu produk tersedia | Klik salah satu produk | Halaman detail produk terbuka dan menampilkan informasi produk yang relevan | Pengguna melaporkan halaman detail produk terbuka; URL tujuan tidak dicatat | PASS* |
| BB-014 | Informasi dasar detail produk | Halaman detail produk terbuka | Periksa nama dan gambar produk | Nama dan gambar produk tampil | Pengguna melaporkan nama dan gambar produk tersedia | PASS* |
| BB-015 | Deskripsi produk | Halaman detail produk terbuka | Periksa bagian deskripsi | Deskripsi produk tampil dan dapat dibaca | Pengguna mengonfirmasi pemeriksaan deskripsi belum dilakukan | NOT RUN |
| BB-016 | Harga produk | Halaman detail produk terbuka | Periksa informasi harga | Harga ditampilkan dengan jelas atau terdapat keterangan bahwa harga diminta melalui penjual | Harga tidak tampak pada daftar produk yang diamati; halaman detail per produk belum diverifikasi | NOT RUN |
| BB-017 | Kontak/WhatsApp pada detail produk | Halaman detail produk terbuka | Periksa tombol atau tautan kontak; jangan kirim pesan tanpa izin | Tautan kontak tampil dan mengarah ke tujuan yang sesuai | Playwright memeriksa CTA WhatsApp pada daftar produk (/product/), bukan CTA detail individual; tautan cocok dengan nomor 6281386058147 | PASS terbatas (otomatis) |

## Catatan validitas
- PASS* pada BB-002, BB-003, BB-013, dan BB-014 merupakan laporan/konfirmasi pengguna, belum didukung screenshot.
- BB-003: pengguna mengonfirmasi produk pada kategori Tote Bag dan gambarnya terlihat. Screenshot belum dilampirkan.
- BB-004: pengguna mengonfirmasi kategori Hand Bag muncul. Detail visibilitas gambar belum dikonfirmasi dan screenshot belum dilampirkan.
- Pengujian otomatis Playwright: BB-001, BB-002 (nama kategori pada homepage), BB-012 (homepage pada viewport mobile 390 x 844), dan BB-017 (tautan CTA pada daftar produk). Hasil terperinci ada di `08-hasil-dan-bukti/hasil-otomatis-playwright-2026-11-26.md`.
- Pemeriksaan otomatis atas teks kategori di homepage bukan pengganti klik dan verifikasi masing-masing kategori.
- URL detail produk dan screenshot belum tersedia.
- Halaman /product/ berhasil dibaca pada observasi publik 26 November 2026; daftar produk memperlihatkan sebagian nama/dimensi, tetapi tidak menampilkan harga dalam konten yang diperiksa.
- Tombol Beli Sekarang pada daftar produk mengarah ke wa.me/6281386058147; tujuan WhatsApp tidak dibuka lebih lanjut dan pesan tidak dikirim.
- Halaman /about-us/ pada pemeriksaan publik menampilkan verifikasi otomatis; ini bukan bukti bahwa halaman rusak.

## Aturan pengisian hasil
- Ubah Actual result hanya setelah kasus dijalankan.
- Status yang diperbolehkan: PASS, FAIL, BLOCKED, NOT APPLICABLE, atau NOT RUN. Gunakan PASS* untuk konfirmasi pengguna yang belum didukung bukti visual.
- PASS/FAIL final harus memiliki bukti screenshot/log.
- Jika halaman/fitur tidak tersedia, catat URL dan pesan yang muncul; jangan menebak.
- Jangan mengirim formulir, membuat pesanan, melakukan pembayaran, atau mengubah data tanpa izin pengelola.

## Bukti per test case
| ID | Nama file bukti | Catatan |
|---|---|---|
| BB-001 | Playwright report | Hasil otomatis tersedia lokal; belum diunggah |
| BB-002 | BB-002-product-menu.png | Pengguna mengonfirmasi Product terbuka; screenshot/URL belum dilampirkan |
| BB-003 | BB-003-kategori-tote-bag.png | Pengguna mengonfirmasi produk dan gambar terlihat; screenshot belum dilampirkan |
| BB-004–BB-008 | Sesuaikan ID | Belum dilampirkan |
| BB-009–BB-012 | Sesuaikan ID | Belum dilampirkan |
| BB-013 | BB-013-detail-produk.png | Pengguna melaporkan detail terbuka; URL belum dicatat dan screenshot belum dilampirkan |
| BB-014 | BB-014-nama-gambar.png | Nama dan gambar dilaporkan tersedia; screenshot belum dilampirkan |
| BB-015 | BB-015-deskripsi.png | Belum diperiksa; belum ada bukti |
| BB-016 | BB-016-harga.png | Belum diperiksa; belum ada bukti |
| BB-017 | BB-017-kontak-detail.png | Playwright memeriksa CTA daftar produk; CTA detail individual belum diperiksa |
