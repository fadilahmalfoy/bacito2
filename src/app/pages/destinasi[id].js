import { useRouter } from 'next/router';

const destinasiDetail = {
  1: { nama: 'Pantai Kemala', deskripsi: 'Pantai indah dengan pasir putih dan sunset menawan.', lokasi: 'Balikpapan', hargaTiket: 'Rp 10.000' },
  2: { nama: 'Hutan Mangrove Margomulyo', deskripsi: 'Area konservasi ekosistem mangrove.', lokasi: 'Balikpapan', hargaTiket: 'Gratis' },
  3: { nama: 'Bukit Bangkirai', deskripsi: 'Wisata alam dengan hutan tropis dan jembatan gantung.', lokasi: 'Kutai Kartanegara', hargaTiket: 'Rp 20.000' },
};

export default function DetailWisata() {
  const router = useRouter();
  const { id } = router.query;
  const wisata = destinasiDetail[id];

  if (!wisata) return <p>Tempat wisata tidak ditemukan!</p>;

  return (
    <div>
      <h1>{wisata.nama}</h1>
      <p>{wisata.deskripsi}</p>
      <p>Lokasi: {wisata.lokasi}</p>
      <p>Harga Tiket: {wisata.hargaTiket}</p>
    </div>
  );
}
