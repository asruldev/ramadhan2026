# 🌙 Belajar Ramadan – Web Edukatif untuk Anak

Web static edukatif tentang Ramadan untuk anak usia 5 tahun ke atas. Dibuat dengan **React** dan **Vite**.

## ✨ Fitur

- **Beranda** – Penjelasan sederhana: apa itu Ramadan dan puasa
- **Amalan Baik** – Daftar amalan yang bisa dilakukan anak (salat, baca Quran, bantu orang tua, bersedekah, dll.)
- **Belajar** – Hitung bintang dan belajar angka 1–10 (dengan nama dalam bahasa Indonesia)
- **Aktivitas** – Klik bulan (interaktif) dan ajakan berbuat baik

Desain ramah anak: warna cerah, font besar, dan animasi halus.

## 🚀 Menjalankan di Komputer

```bash
# Pasang dependensi
npm install

# Jalankan development server
npm run dev
```

Buka http://localhost:5173 di browser.

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## 🌐 Subdomain: ramadhan2026.asrul.dev (Squarespace)

Situs ini dipakai dengan subdomain **ramadhan2026.asrul.dev** (domain asrul.dev di Squarespace).

**Di Squarespace (DNS / Domain):**
- Tambah **CNAME**: nama host `ramadhan2026` → nilai/target `asruldev.github.io`
- Simpan; propagasi DNS bisa 5 menit–48 jam

**Deploy:** `npm run deploy` (build + push ke branch `gh-pages`). File `public/CNAME` berisi `ramadhan2026.asrul.dev` agar GitHub Pages mengenali domain kustom.

---

## 📤 Deploy ke GitHub Pages

### 1. Buat repo di GitHub

- Buat repository baru (misalnya nama: `ramadhan`).
- Jangan centang "Add a README" jika kamu sudah punya file di folder ini.

### 2. Sesuaikan `base` di Vite

Di `vite.config.js`, pastikan `base` sama dengan nama repo (dengan slash di depan dan belakang):

```js
base: '/ramadhan/',   // ganti 'ramadhan' jika nama repo kamu beda
```

### 3. Inisialisasi Git dan push

```bash
git init
git add .
git commit -m "Web edukatif Ramadan untuk anak"
git branch -M main
git remote add origin https://github.com/USERNAME/ramadhan.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu, dan `ramadhan` jika nama repo berbeda.

### 4. Deploy dengan GitHub Actions

- Di repo GitHub, buka **Settings** → **Pages**.
- Di "Build and deployment", pilih **GitHub Actions** sebagai source.

Lalu buat file workflow di `.github/workflows/deploy.yml` (sudah disertakan di project). Setelah kamu push file workflow, GitHub akan otomatis build dan deploy.

Website akan bisa diakses di:

**https://USERNAME.github.io/ramadhan/**

(Ganti `USERNAME` dan `ramadhan` sesuai repo kamu.)

## 📁 Struktur Project

```
ramadhan/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StarsBackground.jsx
│   │   ├── HomeSection.jsx
│   │   ├── AmalanSection.jsx
│   │   ├── BelajarSection.jsx
│   │   ├── AktivitasSection.jsx
│   │   └── Section.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 📜 Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan edukatif.

---

Selamat Ramadan. Semoga bermanfaat untuk anak-anak. 🌙✨
