import { useState } from 'react'
import './Section.css'

export default function AktivitasSection() {
  const [klik, setKlik] = useState(0)
  const [tampilPesan, setTampilPesan] = useState(false)

  const handleKlikBulan = () => {
    setKlik((c) => c + 1)
    setTampilPesan(true)
  }

  return (
    <section className="section">
      <h2 className="section-title">🌙 Aktivitas Seru</h2>
      <p className="section-intro">Klik bulan di bawah sebanyak yang kamu mau. Setiap klik = satu kebaikan!</p>
      <div className="aktivitas-moon-wrap">
        <button
          type="button"
          className="moon-btn float"
          onClick={handleKlikBulan}
          aria-label="Klik bulan"
        >
          🌙
        </button>
      </div>
      {tampilPesan && (
        <div className="card hasil-aktivitas">
          <p className="big-text">Kamu sudah klik bulan <strong>{klik}</strong> kali!</p>
          <p>Terus berbuat baik ya. Allah sayang anak yang baik. ❤️</p>
        </div>
      )}
      <div className="card tip-box">
        <p>💡 <strong>Ide:</strong> Coba hitung berapa kali kamu klik sampai 10. Itu namanya belajar berhitung!</p>
      </div>
    </section>
  )
}
