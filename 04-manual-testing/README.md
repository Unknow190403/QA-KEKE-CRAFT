# 04 — Manual Testing

Manual testing dilakukan oleh penguji dengan menjalankan skenario dan mencatat hasil aktual. Ketiga kategori berikut harus dibedakan secara tepat.

## A. Black-box testing
Memeriksa perilaku eksternal berdasarkan kebutuhan/masukan dan keluaran tanpa memeriksa struktur internal kode. Teknik yang dapat dipilih setelah fitur diketahui:
- Equivalence partitioning.
- Boundary value analysis.
- Decision table.
- State transition testing.

Template: `black-box-template.md`.

## B. White-box testing
Memeriksa struktur internal kode, alur kontrol, kondisi, dan/atau jalur program. Pelaksanaan memerlukan source code atau akses yang sah. Jika source code tidak tersedia, tandai BLOCKED dan jangan mengklaim white-box telah dilakukan.

Template: `white-box-template.md`.

## C. Grey-box testing
Penguji memiliki pengetahuan terbatas tentang desain, data, arsitektur, atau API, tetapi menguji sistem melalui antarmuka/komponen yang relevan. Catat informasi internal apa yang memang diberikan.

Template: `grey-box-template.md`.

## Template hasil eksekusi
| ID | Tanggal/waktu | Lingkungan | Langkah | Hasil aktual | Status | Bukti |
|---|---|---|---|---|---|---|
| — | Belum dilakukan | — | — | — | NOT RUN | — |

Jangan mengisi PASS/FAIL sebelum test benar-benar dijalankan.
