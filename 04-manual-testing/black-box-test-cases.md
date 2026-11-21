# Black-box Test Cases — Keke Craft

**Objek:** https://www.galerikeke.com/  
**Dasar:** observasi halaman publik dan konfirmasi pengguna bahwa menu Product dapat dibuka.  
**Status eksekusi:** seluruh kasus di bawah berstatus **NOT RUN** sampai langkahnya benar-benar dijalankan dan bukti dicatat.

Black-box menguji input dan output/perilaku yang terlihat dari sisi pengguna tanpa memeriksa source code.

## Test case

| ID | Fitur | Prasyarat | Langkah uji | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| BB-001 | Halaman utama | Browser terhubung internet | Buka URL utama | Halaman utama Keke Craft tampil tanpa error | Belum dicatat | NOT RUN |
| BB-002 | Navigasi Product | Halaman utama tampil | Klik menu Product | Browser membuka halaman/tujuan Product | Pengguna mengonfirmasi menu bisa dibuka; detail respons belum dicatat | NOT RUN |
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

## Aturan pengisian hasil
- Ganti Actual result hanya setelah kasus dijalankan.
- Status hanya boleh PASS, FAIL, BLOCKED, NOT APPLICABLE, atau NOT RUN.
- PASS/FAIL harus memiliki bukti screenshot/log.
- Jika halaman/fitur tidak tersedia, catat URL dan pesan yang muncul; jangan menebak.
- Jangan mengirim formulir, membuat pesanan, melakukan pembayaran, atau mengubah data tanpa izin pengelola.

## Bukti per test case
| ID | Nama file bukti | Catatan |
|---|---|---|
| BB-001 | BB-001-homepage.png | Belum dilampirkan |
| BB-002 | BB-002-product-menu.png | Minta screenshot/URL hasil klik dari pengguna |
| BB-003–BB-008 | Sesuaikan ID | Belum dilampirkan |
| BB-009–BB-012 | Sesuaikan ID | Belum dilampirkan |
