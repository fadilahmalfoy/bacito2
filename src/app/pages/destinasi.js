export default function Destinasi() {
    const destinasi = [
      { id: 1, nama: 'Pantai Kemala', lokasi: 'Balikpapan', deskripsi: 'Pantai indah dengan pemandangan sunset.' },
      { id: 2, nama: 'Hutan Mangrove Margomulyo', lokasi: 'Balikpapan', deskripsi: 'Tempat ekowisata mangrove yang asri.' },
      { id: 3, nama: 'Bukit Bangkirai', lokasi: 'Kutai Kartanegara', deskripsi: 'Hutan wisata dengan jembatan gantung.' },
    ];
  
    return (
      <div>
        <h1>Daftar Tempat Wisata</h1>
        <ul>
          {destinasi.map((item) => (
            <li key={item.id}>
              <a href={`/destinasi/${item.id}`}>
                <h3>{item.nama}</h3>
                <p>{item.lokasi}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}
  