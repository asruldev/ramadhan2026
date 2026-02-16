import { useState } from 'react'
import './Section.css'

const amalan = [
  { emoji: '🤲', title: 'Salat', desc: 'Salat 5 waktu tepat waktu.', tip: 'Ayah Bunda pasti senang!', color: 'hijau' },
  { emoji: '📖', title: 'Baca Al-Quran', desc: 'Baca atau dengar Al-Quran sedikit setiap hari.', tip: 'Sedikit saja, yang penting istiqomah.', color: 'emas' },
  { emoji: '😊', title: 'Berkata baik', desc: 'Jangan marah-marah, berkata yang baik saja.', tip: 'Kata baik = pahala.', color: 'biru' },
  { emoji: '🤝', title: 'Bantu orang tua', desc: 'Bantu Ayah dan Bunda di rumah.', tip: 'Tolong ambilkan air, rapikan mainan.', color: 'ungu' },
  { emoji: '🎁', title: 'Bersedekah', desc: 'Berbagi makanan atau mainan ke yang kurang mampu.', tip: 'Allah sayang anak yang dermawan.', color: 'merah' },
]

const colorClass = {
  hijau: 'amalan-card--hijau',
  emas: 'amalan-card--emas',
  biru: 'amalan-card--biru',
  ungu: 'amalan-card--ungu',
  merah: 'amalan-card--merah',
}

export default function AmalanSection() {
  const [diklik, setDiklik] = useState({})

  const handleKlik = (i) => {
    setDiklik((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section className="section amalan-section">
      <h2 className="section-title">✨ Amalan Baik di Ramadan</h2>
      <p className="amalan-intro">
        Yuk lakukan 5 hal baik ini! Klik kartunya untuk lihat tips. 💪
      </p>

      <div className="amalan-grid">
        {amalan.map((item, i) => (
          <button
            key={i}
            type="button"
            className={`amalan-card card ${colorClass[item.color]} ${diklik[i] ? 'amalan-card--open' : ''}`}
            onClick={() => handleKlik(i)}
          >
            <span className="amalan-number">{i + 1}</span>
            <span className="amalan-emoji-big">{item.emoji}</span>
            <h3 className="amalan-title">{item.title}</h3>
            <p className="amalan-desc">{item.desc}</p>
            {diklik[i] && <p className="amalan-tip">💡 {item.tip}</p>}
            <span className="amalan-tap-hint">{diklik[i] ? 'Klik lagi untuk tutup' : 'Klik aku!'}</span>
          </button>
        ))}
      </div>

      <p className="amalan-closing">
        Kalau kamu lakukan ini, kamu hebat! Allah sayang anak yang berusaha. 🌟
      </p>
    </section>
  )
}
