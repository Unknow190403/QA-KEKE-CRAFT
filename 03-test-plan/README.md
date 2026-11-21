# 03 — Test Plan

## Tujuan
Mengevaluasi fungsi dan karakteristik kualitas terpilih dari website Keke Craft setelah URL, fitur, dan izin pengujian diverifikasi.

## Status
Belum dapat dieksekusi karena URL target dan batasan pengujian belum diberikan.

## Ruang lingkup sementara
Ruang lingkup final ditentukan dari observasi aktual. Kandidat yang hanya diuji jika tersedia:
- Navigasi dan tampilan halaman.
- Katalog dan detail produk.
- Pencarian/filter.
- Keranjang dan alur pemesanan.
- Formulir kontak atau akun.
- Validasi input dan pesan kesalahan.
- Responsivitas dan kompatibilitas browser.
- Keamanan dasar secara non-intrusif dan hanya dengan izin.

## Strategi
1. Identifikasi objek, pemilik, URL, dan izin.
2. Observasi alur pengguna dan dokumentasikan kebutuhan.
3. Tentukan karakteristik ISO/IEC 25010:2023 yang relevan.
4. Turunkan kebutuhan menjadi kondisi dan test case.
5. Lakukan pengujian manual sesuai akses yang tersedia.
6. Lakukan white-box hanya bila source code dan izin tersedia.
7. Otomatiskan skenario stabil yang layak diotomatisasi.
8. Catat hasil aktual, bukti, defect, retest, dan risiko.
9. Susun evaluasi serta keterbatasan.

## Kriteria masuk
- URL target terkonfirmasi.
- Izin pengujian terdokumentasi.
- Fitur target dapat diakses.
- Lingkungan dan tanggal pengujian dicatat.

## Kriteria keluar
- Seluruh test case yang disepakati memiliki status.
- Setiap fail memiliki bukti dan defect record atau alasan.
- Hasil otomatis dapat direproduksi.
- Keterbatasan dan risiko dijelaskan.
- Tidak ada hasil yang dibuat berdasarkan asumsi.

## Format test case
| ID | Fitur | Kondisi awal | Langkah/data uji | Hasil yang diharapkan | Hasil aktual | Status | Bukti |
|---|---|---|---|---|---|---|---|
| TC-001 | Diisi setelah observasi | — | — | — | Belum diuji | NOT RUN | — |

## Definisi status
- PASS: hasil aktual sesuai hasil yang diharapkan.
- FAIL: hasil aktual tidak sesuai.
- BLOCKED: tidak dapat diuji karena dependensi/akses.
- NOT RUN: belum dieksekusi.
