// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint untuk menerima data dari form kontak
app.post('/kirim-pesan', (req, res) => {
  const { nama, email, pesan } = req.body;

  console.log('Pesan diterima:');
  console.log(`Nama: ${nama}`);
  console.log(`Email: ${email}`);
  console.log(`Pesan: ${pesan}`);

  res.status(200).json({ message: 'Pesan berhasil diterima. Terima kasih!' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
