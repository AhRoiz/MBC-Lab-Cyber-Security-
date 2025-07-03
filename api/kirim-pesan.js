// api/kirim-pesan.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nama, email, pesan } = req.body;

    console.log("Pesan diterima:");
    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log("Pesan:", pesan);

    return res.status(200).json({ message: 'Pesan berhasil diterima' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}