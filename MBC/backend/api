// api/kirim-pesan.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const nama = params.get('nama');
      const email = params.get('email');
      const pesan = params.get('pesan');

      console.log("Pesan diterima:");
      console.log("Nama:", nama);
      console.log("Email:", email);
      console.log("Pesan:", pesan);

      res.status(200).json({ message: 'Pesan berhasil diterima' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}