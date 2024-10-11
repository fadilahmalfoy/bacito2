import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Wisata Balikpapan</h1>
      <p>Temukan tempat wisata terbaik di Balikpapan!</p>
      <Link href="/destinasi">
        <a>Lihat Destinasi Wisata</a>
      </Link>
    </div>
  );
}

