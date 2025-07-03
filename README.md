# MBC-Lab-Cyber-Security-

# MBC Lab Landing Page

Landing page ini dikembangkan sebagai bagian dari **Technical Test Cybersecurity** pada proses seleksi Research Assistant **MBC Laboratory 2025**.

##  Deskripsi Proyek
Website ini bertujuan untuk menampilkan profil, layanan, dan identitas pengembang dari MBC Lab secara informatif dan modern, dengan implementasi prinsip keamanan dasar dan deployment cloud.

##  Live Preview

[Klik di sini untuk mengakses langsung](https://mbc-lab.vercel.app)

---

##  Fitur Utama

-  Landing Page responsif
-  Struktur halaman:
  - Home
  - Divisi
  - Kontak
  - Developer
-  Form kontak yang terhubung dengan serverless API (Vercel)
-  Styling menggunakan TailwindCSS CDN
-  Backend ringan menggunakan Node.js API route (`/api/kirim-pesan`)


##  Struktur Folder

```bash
.
├── public/
│   ├── index.html
│   ├── kontak.html
│   ├── divisi.html
│   ├── developer.html
├── api/
│   └── kirim-pesan.js
├── README.md
├── package.json (opsional)
```


##  Teknologi yang Digunakan
- HTML5 + TailwindCSS
- Vercel Serverless Function (Node.js)
- Hosting with Vercel (GitHub-integrated CI/CD)


##  Deployment
Website ini telah di dideploy ke:
- **Vercel**


Untuk percobaan deployment sendiri,silahkan hubungkan folder `public/` ke GitHub, lalu sambungkan ke Vercel.

---

© Ahmad Rofi' Izzulhaq — 2025
