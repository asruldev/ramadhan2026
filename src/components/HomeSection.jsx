import { useState } from 'react'
import { juz30Surahs } from '../data/juz30'
import './Section.css'

// Kumpulkan semua ayat + info surah, lalu ambil satu acak (setiap refresh = mount baru = ayat baru)
function getRandomAyat() {
  const semua = []
  juz30Surahs.forEach((s) => {
    s.verses.forEach((v, i) => {
      semua.push({
        ...v,
        surahName: s.name,
        surahArti: s.arti,
        noSurah: s.no,
        noAyat: i + 1,
      })
    })
  })
  return semua[Math.floor(Math.random() * semua.length)]
}

export default function HomeSection() {
  const [ayatHariIni] = useState(getRandomAyat)

  return (
    <section className="section home-page">
      {/* Hero + Ayat 1 setiap refresh */}
      <div className="home-hero card">
        <p className="home-badge">🌟 Ayat untuk hari ini</p>
        <p className="home-ayat-arabic" dir="rtl">
          {ayatHariIni.arabic}
        </p>
        <p className="home-ayat-latin">{ayatHariIni.latin}</p>
        <p className="home-ayat-arti">"{ayatHariIni.arti}"</p>
        <p className="home-ayat-sumber">
          — {ayatHariIni.surahName} ({ayatHariIni.surahArti}), ayat {ayatHariIni.noAyat}
        </p>
        <p className="home-ayat-tip">Refresh halaman untuk dapat ayat lain!</p>
      </div>

      {/* Apa itu Ramadan */}
      <div className="home-ramadan card">
        <h2 className="section-title">🌙 Apa itu Ramadan?</h2>
        <div className="section-content">
          <p className="big-text">
            Ramadan adalah <strong>bulan istimewa</strong> dalam Islam. Di bulan ini, kita belajar <strong>berpuasa</strong> dan berbuat <strong>baik</strong>.
          </p>
          <div className="home-info-grid">
            <div className="info-box">
              <span className="emoji">⏰</span>
              <p>Kita tidak makan dan minum dari <strong>subuh</strong> sampai <strong>maghrib</strong> (saat matahari terbenam).</p>
            </div>
            <div className="info-box">
              <span className="emoji">❤️</span>
              <p>Kita juga harus <strong>berbuat baik</strong>, sayang keluarga, dan berbagi dengan yang membutuhkan.</p>
            </div>
          </div>
          <p className="closing">Semua itu kita lakukan karena cinta kepada Allah. Alhamdulillah!</p>
        </div>
      </div>

      {/* CTA ringan */}
      <div className="home-cta">
        <p>Jelajahi <strong>Doa Harian</strong> dan <strong>Juz 30</strong> untuk belajar & hafal ya! 📖</p>
      </div>
    </section>
  )
}
