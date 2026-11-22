# Black-box Test Cases — Keke Craft

**Objek:** https://www.galerikeke.com/  
**Dasar:** observasi halaman publik dan konfirmasi pengguna bahwa menu Product dapat dibuka.  
**Status eksekusi:** status tiap kasus mengikuti hasil yang tersedia. Tanda PASS* berarti hanya berdasarkan laporan pengguna dan belum didukung screenshot/URL.

Black-box menguji input dan output/perilaku yang terlihat dari sisi pengguna tanpa memeriksa source code.

## Test case

| ID | Fitur | Prasyarat | Langkah uji | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| BB-001 | Halaman utama | Browser terhubung internet | Buka URL utama | Halaman utama Keke Craft tampil tanpa error | Belum dicatat | NOT RUN |
| BB-002 | Navigasi Product | Halaman utama tampil | Klik menu Product | Browser membuka halaman/tujuan Product | Pengguna melaporkan menu Product terbuka dan halaman dapat dilanjutkan ke detail produk | PASS* |
| BB-003 | Kategori Tote Bag | Halaman Product/kategori tersedia | Klik kategori Tote Bag | Kategori/produk Tote Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-004 | Kategori Hand Bag | Halaman Product/kategori tersedia | Klik kategori Hand Bag | Kategori/produk Hand Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-005 | Kategori Laptop Bag | Halaman Product/kategori tersedia | Klik kategori Laptop Bag | Kategori/produk Laptop Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-006 | Kategori Pouch | Halaman Product/kategori tersedia | Klik kategori Pouch | Kategori/produk Pouch yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-007 | Kategori Women Bag | Halaman Product/kategori tersedia | Klik kategori Women Bag | Kategori/produk Women Bag yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-008 | Kategori Landyard | Halaman Product/kategori tersedia | Klik kategori Landyard | Kategori/produk Landyard yang sesuai ditampilkan atau tujuan tautan terbuka | Belum dicatat | NOT RUN |
| BB-009 | Navigasi Home | Website terbuka | Klik menu Home | Kembali ke halaman utama | Belum dicatat | NOT RUN |
| BB-010 | Navigasi About Us | Website terbuka | Klik menu About Us | Halaman/bagian informasi perusahaan terbuka | Belum dicatat | NOT RUN |
| BB-011 | Kontak WhatsApp | Tautan kontak tersedia | Klik tautan WhatsApp; jangan kirim pesan tanpa izin | Tautan membuka tujuan WhatsApp yang sesuai | Belum dicatat | NOT RUN |
| BB-012 | Tampilan responsif | Browser desktop dan perangkat/mobile viewport | Buka halaman utama dan Product pada dua ukuran layar | Konten tetap terbaca, navigasi dapat digunakan, tidak ada elemen penting terpotong | Belum dicatat | NOT RUN |
| BB-013 | Membuka detail produk | Halaman Product dan minimal satu produk tersedia | Klik salah satu produk | Halaman detail produk terbuka dan menampilkan informasi produk yang relevan | Pengguna melaporkan halaman detail produk terbuka; URL tujuan tidak dicatat | PASS* |\n| BB-014 | Informasi dasar detail produk | Halaman detail produk terbuka | Periksa nama dan gambar produk | Nama dan gambar produk tampil | Pengguna melaporkan nama dan gambar produk tersedia | PASS* |\n| BB-015 | Deskripsi produk | Halaman detail produk terbuka | Periksa bagian deskripsi | Deskripsi produk tampil dan dapat dibaca | Pengguna menyatakan belum memeriksa bagian deskripsi; hasil aktual belum tersedia | NOT RUN |\n| BB-016 | Harga produk | Halaman detail produk terbuka | Periksa informasi harga | Harga ditampilkan dengan jelas atau terdapat keterangan bahwa harga diminta melalui penjual | Pengguna mengonfirmasi pemeriksaan harga belum dilakukan | NOT RUN |\n| BB-017 | Kontak/WhatsApp pada detail produk | Halaman detail produk terbuka | Periksa tombol atau tautan kontak; jangan kirim pesan tanpa izin | Tautan kontak tampil dan mengarah ke tujuan yang sesuai | Belum diperiksa | NOT RUN |

\n*PASS* pada BB-002 dan BB-013 adalah hasil **laporan observasi pengguna**, bukan pengujian independen yang disaksikan peneliti. URL tujuan dan screenshot belum tersedia; lampirkan bukti untuk memperkuat dokumentasi.\n\n## Aturan pengisian hasil
- Ganti Actual result hanya setelah kasus dijalankan.
- Status hanya boleh PASS, FAIL, BLOCKED, NOT APPLICABLE, atau NOT RUN.
- PASS/FAIL harus memiliki bukti screenshot/log.
- Jika halaman/fitur tidak tersedia, catat URL dan pesan yang muncul; jangan menebak.
- Jangan mengirim formulir, membuat pesanan, melakukan pembayaran, atau mengubah data tanpa izin pengelola.

## Bukti per test case
| ID | Nama file bukti | Catatan |
|---|---|---|
| BB-001 | BB-001-homepage.png | Belum dilampirkan |
| BB-002 | BB-002-product-menu.png | Pengguna mengonfirmasi Product terbuka; screenshot/URL belum dilampirkan |
| BB-003–BB-008 | Sesuaikan ID | Belum dilampirkan |\n| BB-013 | BB-013-detail-produk.png | Pengguna melaporkan detail terbuka; URL belum dicatat dan screenshot belum dilampirkan |\n| BB-014 | BB-014-nama-gambar.png | Nama dan gambar dilaporkan tersedia; screenshot belum dilampirkan |\n| BB-015 | BB-015-deskripsi.png | Belum diperiksa; belum ada bukti |\n| BB-016 | BB-016-harga.png | Belum diperiksa; belum ada bukti |\n| BB-017 | BB-017-kontak-detail.png | Belum diperiksa; belum ada bukti |
| BB-009–BB-012 | Sesuaikan ID | Belum dilampirkan |
