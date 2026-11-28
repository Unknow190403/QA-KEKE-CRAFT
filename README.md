# QA Keke Craft — Analisis dan Pengujian Website

Repository ini berisi dokumentasi proyek akademik analisis kualitas dan pengujian perangkat lunak pada website Keke Craft.

## Status proyek
- [x] Repository publik dan kerangka dokumentasi dibuat.
- [x] URL kandidat objek penelitian ditemukan pada dokumen verifikasi: https://www.galerikeke.com/
- [x] Halaman utama publik dapat dibaca dan menampilkan identitas, kategori produk, kontak, alamat, serta jam operasional.
- [x] Pengguna mengonfirmasi memiliki izin pengujian langsung; cakupan tetap dibatasi pada pengujian fungsional yang aman.
- [ ] Detail produk satu per satu diperiksa; URL detail spesifik belum dicatat.
- [ ] Seluruh test case manual dijalankan dengan screenshot/log.
- [ ] White-box testing dilakukan jika source code tersedia dan diizinkan.
- [ ] Automated testing dijalankan pada target yang disetujui.
- [ ] Wawancara QA profesional minimal 3 tahun dilakukan.
- [ ] Artikel jurnal dan akreditasi SINTA diverifikasi.
- [ ] Laporan akhir dan kesimpulan disusun berdasarkan bukti.

## 📋 Identitas Penyusun

### Anggota Kelompok

| No  | Nama Mahasiswa              | NIM            |
| :-: | --------------------------- | -------------- |
|  1  | `Ridwan Abdilah`            | `231011400151` |
|  2  | `Rayhan Numa Shaquille Then`| `231011400156` |
|  3  | `Saviola Dwi Saputra`       | `231011400200` |
|  4  | `Zukkifli`                  | `231011401781` |

### Informasi Akademik

| Keterangan           | Informasi                          |
| -------------------- | ---------------------------------- |
| **Kelompok**         | Kelompok 8                         |
| **Kelas / Ruang**    | V.714                              |
| **Program Studi**    | Teknik Informatika                 |
| **Fakultas**         | Ilmu Komputer                      |
| **Perguruan Tinggi** | Universitas Pamulang               |
| **Mata Kuliah**      | Testing & QA Perangkat Lunak       |
| **Dosen Pengampu**   | `ASEP ERLAN MAULANA S.KOM., M.KOM` |


> **Kejujuran hasil:** halaman utama yang terlihat oleh pemeriksa publik bukan pengganti bukti eksekusi browser manual. BB-015 (deskripsi), BB-016 (harga), dan BB-017 (kontak/WhatsApp detail) tetap NOT RUN. Jangan mengubah status menjadi PASS/FAIL tanpa pengujian nyata dan bukti.

## Objek penelitian
- Nama: Keke Craft
- Website kandidat: https://www.galerikeke.com/
- Halaman utama menampilkan kategori Tote Bag, Hand Bag, Laptop Bag, Pouch, Women Bag, dan Landyard.
- Halaman /product/ berhasil dibaca pada observasi publik 26 November 2026. Daftar produk memuat sebagian nama dan dimensi; harga tidak tampak pada konten yang diperiksa. Tombol Beli Sekarang mengarah ke wa.me/6281386058147, sesuai nomor kontak pertama di halaman utama. Pengujian WhatsApp dibatasi pada verifikasi tujuan tautan; tidak ada pesan dikirim.

## Struktur
- `01-profil-objek/`: identitas dan kelayakan objek.
- `02-standar/`: standar resmi yang menjadi acuan.
- `03-test-plan/`: rencana dan ruang lingkup pengujian.
- `04-manual-testing/`: template black-box, white-box, grey-box.
- `05-automation/`: persiapan Playwright.
- `06-wawancara/`: instrumen wawancara QA.
- `07-jurnal/`: telaah jurnal dan validasi SINTA.
- `08-hasil-dan-bukti/`: hasil uji, defect, dan bukti.

## Catatan progres terbaru\n- Izin pengujian langsung telah dikonfirmasi oleh pengguna.\n- Observasi publik homepage, halaman produk, informasi kontak, dimensi, dan tautan WhatsApp dicatat di [Observasi Publik 26 November 2026](08-hasil-dan-bukti/observasi-publik-2026-11-26.md).\n- Observasi publik bukan bukti screenshot browser manual; test case formal belum dinaikkan menjadi PASS tanpa bukti eksekusi.\n\n## Informasi yang masih dibutuhkan untuk menuntaskan pengujian
1. Konfirmasi bahwa https://www.galerikeke.com/ adalah target final.
2. Izin pengelola untuk pengujian fungsional/interaktif sesuai ruang lingkup.
3. URL detail produk yang sedang diperiksa (atau screenshot halaman detail).
4. Akses source code bila white-box testing diwajibkan.
5. Narasumber QA yang memenuhi pengalaman minimal 3 tahun.
6. Data trafik/pengunjung dari pengelola atau sumber estimasi yang jelas.

## Acuan
Lihat [Register Standar](02-standar/README.md), [Test Plan](03-test-plan/README.md), dan [Black-box Test Cases](04-manual-testing/black-box-test-cases.md).
