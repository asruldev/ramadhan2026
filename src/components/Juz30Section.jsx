import { useState } from 'react'
import { juz30Surahs, juz30SurahsLengkap } from '../data/juz30'
import './Section.css'

export default function Juz30Section() {
  const [bukaNo, setBukaNo] = useState(null)
  const [modeHafal, setModeHafal] = useState(false)
  const [surahHafal, setSurahHafal] = useState(null)
  const [ayatIndex, setAyatIndex] = useState(0)
  const [tampilLatin, setTampilLatin] = useState(true)
  const [tampilArti, setTampilArti] = useState(true)

  const surahAktif = surahHafal ? juz30Surahs.find((s) => s.no === surahHafal) : null
  const totalAyat = surahAktif ? surahAktif.verses.length : 0
  const ayatSekarang = surahAktif && totalAyat ? surahAktif.verses[ayatIndex] : null

  const mulaiHafal = (surah) => {
    setSurahHafal(surah.no)
    setAyatIndex(0)
    setTampilLatin(true)
    setTampilArti(true)
    setModeHafal(true)
  }

  const keluarHafal = () => {
    setModeHafal(false)
    setSurahHafal(null)
    setAyatIndex(0)
  }

  const ayatPrev = () => {
    if (ayatIndex > 0) setAyatIndex(ayatIndex - 1)
  }

  const ayatNext = () => {
    if (ayatIndex < totalAyat - 1) setAyatIndex(ayatIndex + 1)
  }

  return (
    <section className="section">
      <h2 className="section-title">📖 Juz 30 untuk Hafalan</h2>
      <p className="section-intro">
        Pilih surah, lalu pakai <strong>Mode Hafal</strong> agar fokus satu ayat. Sembunyikan latin/arti untuk latihan!
      </p>

      {/* Mode Hafal: satu ayat fokus */}
      {modeHafal && surahAktif && ayatSekarang && (
        <div className="juz30-mode-hafal card">
          <div className="juz30-mode-header">
            <span className="juz30-mode-title">
              {surahAktif.name} ({surahAktif.arti})
            </span>
            <button type="button" className="juz30-btn-keluar" onClick={keluarHafal}>
              ✕ Lihat semua ayat
            </button>
          </div>

          <p className="juz30-progress">
            Ayat {ayatIndex + 1} dari {totalAyat}
          </p>

          <div className="juz30-focus-ayat">
            {ayatIndex === 0 && (
              <>
                <p className="juz30-focus-bismillah" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="juz30-focus-bismillah-latin">Bismillahirrahmanirrahim</p>
              </>
            )}
            <div className="juz30-focus-no">{ayatIndex + 1}</div>
            <p className="juz30-focus-arabic" dir="rtl">
              {ayatSekarang.arabic}
            </p>
            {tampilLatin && <p className="juz30-focus-latin">{ayatSekarang.latin}</p>}
            {tampilArti && <p className="juz30-focus-arti">"{ayatSekarang.arti}"</p>}
          </div>

          <div className="juz30-toggles">
            <button
              type="button"
              className={`juz30-toggle ${tampilLatin ? 'on' : ''}`}
              onClick={() => setTampilLatin(!tampilLatin)}
            >
              {tampilLatin ? '🙈 Sembunyikan latin' : '👁️ Tampilkan latin'}
            </button>
            <button
              type="button"
              className={`juz30-toggle ${tampilArti ? 'on' : ''}`}
              onClick={() => setTampilArti(!tampilArti)}
            >
              {tampilArti ? '🙈 Sembunyikan arti' : '👁️ Tampilkan arti'}
            </button>
          </div>

          <div className="juz30-nav-ayat">
            <button
              type="button"
              className="juz30-nav-btn"
              onClick={ayatPrev}
              disabled={ayatIndex === 0}
              aria-label="Ayat sebelumnya"
            >
              ← Sebelumnya
            </button>
            <button
              type="button"
              className="juz30-nav-btn"
              onClick={ayatNext}
              disabled={ayatIndex >= totalAyat - 1}
              aria-label="Ayat berikutnya"
            >
              Berikutnya →
            </button>
          </div>
        </div>
      )}

      {/* Daftar surah 78-96 */}
      {!modeHafal && (
        <>
          <div className="juz30-list-awal">
            <h3 className="juz30-subtitle">Surah 78–96 (Juz Amma awal)</h3>
            <div className="juz30-chips">
              {juz30SurahsLengkap.map((s) => (
                <span key={s.no} className="juz30-chip">
                  {s.no}. {s.name}
                </span>
              ))}
            </div>
          </div>

          <h3 className="juz30-subtitle">Surah 97–114 — Baca atau mulai hafal</h3>
          <div className="juz30-grid">
            {juz30Surahs.map((surah) => (
              <div
                key={surah.no}
                className={`juz30-card card ${bukaNo === surah.no ? 'juz30-card-open' : ''}`}
              >
                <button
                  type="button"
                  className="juz30-header"
                  onClick={() => setBukaNo(bukaNo === surah.no ? null : surah.no)}
                >
                  <span className="juz30-no">{surah.no}</span>
                  <span className="juz30-name">{surah.name}</span>
                  <span className="juz30-arti">({surah.arti})</span>
                </button>
                {bukaNo === surah.no && (
                  <div className="juz30-ayat">
                    <button
                      type="button"
                      className="juz30-btn-hafal"
                      onClick={() => mulaiHafal(surah)}
                    >
                      🎯 Mulai hafal (satu ayat fokus)
                    </button>
                    <p className="juz30-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                    <p className="juz30-bismillah-latin">Bismillahirrahmanirrahim</p>
                    {surah.verses.map((ayat, i) => (
                      <div key={i} className="juz30-verse">
                        <span className="juz30-verse-no">{i + 1}</span>
                        <div className="juz30-verse-text">
                          <p className="doa-arabic juz30-arabic" dir="rtl">
                            {ayat.arabic}
                          </p>
                          <p className="juz30-latin">{ayat.latin}</p>
                          <p className="juz30-arti">"{ayat.arti}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
