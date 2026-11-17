# VERDE

Pemutar musik open source berbentuk PWA: mobile-first, bisa dipasang ke layar utama Android dan iOS, dan nyaman di desktop. Tampilan gelap dengan sentuhan kaca (glass) dan hijau emerald. VERDE adalah nama kerja sementara.

## Status

Dalam pengembangan awal. Belum ada versi yang bisa dipakai.

## Prinsip

- Audio hanya dari sumber legal: Audius, Jamendo, file lokal milik pengguna, dan server pribadi (Subsonic, di rilis berikutnya).
- Tidak mengambil, meng-stream, atau me-rip audio dari Spotify, YouTube, Apple Music, atau layanan berlisensi lain.
- Impor Spotify hanya metadata playlist, lalu dicocokkan ke sumber yang tersedia.
- Local-first: semua data tersimpan di perangkat, tanpa pelacak dan tanpa analitik pihak ketiga.

## Pengembangan

Prasyarat: Node.js 20.19 atau lebih baru, dan npm.

- `npm install` untuk memasang dependensi
- `npm run dev` untuk menjalankan server pengembangan
- `npm run test` untuk tes unit (Vitest)
- `npm run test:e2e` untuk tes antarmuka (Playwright)
- `npm run lint` dan `npm run format:check` untuk memeriksa kode
- `npm run build` untuk build produksi

## Lisensi

GNU General Public License v3.0. Lihat berkas `LICENSE`.
