# MBC-Lab-Cyber-Security-

# MBC Lab Landing Page

Landing page ini dikembangkan sebagai bagian dari **Technical Test Cybersecurity** pada proses seleksi Research Assistant **MBC Laboratory 2025**.

##  Deskripsi Proyek
Website ini bertujuan untuk menampilkan profil, layanan, dan identitas pengembang dari MBC Lab secara informatif dan modern, dengan implementasi prinsip keamanan dasar dan deployment cloud.

##  Struktur Folder
```
mbc-lab/
├── public/                → File HTML statis
│   ├── home.html
│   ├── divisi.html
│   ├── kontak.html
│   └── developer.html
├── backend/               → Server Node.js untuk form kontak
│   └── server.js
├── package.json           → Konfigurasi npm
└── README.md              → Dokumentasi proyek ini
```

##  Teknologi yang Digunakan
- HTML5 + TailwindCSS
- Node.js + Express.js
- Deployment: (belum dilakukan) via Vercel / Netlify *(direkomendasikan)*

##  Cara Menjalankan (Local Development)
### Jalankan server backend
1. Install dependency:
   ```bash
   npm install
   ```
2. Jalankan server:
   ```bash
   node backend/server.js
   ```
3. Server berjalan di: `http://localhost:3000`

### Uji Form Kontak
- Buka `kontak.html` di browser
- Isi dan kirim form → data muncul di terminal backend

##  Rencana Deployment
Website ini dapat dengan mudah dideploy ke:
- **Vercel**
- **Netlify**

Silakan hubungkan folder `public/` ke GitHub, lalu sambungkan ke Vercel.

##  Status
✅ Halaman statis lengkap
✅ Backend form berjalan
⏳ Dokumentasi PDF & Deployment menyusul

---

© Ahmad Rofi — 2025
