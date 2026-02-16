import { useState } from 'react'
import { NIAT, buildSholatSteps, BACAAN_STEP } from '../data/sholatSteps'
import { GerakanSholatSvg } from './GerakanSholatSvg'
import './SholatInteraktif.css'

const JENIS_OPTIONS = [
  { id: 'subuh', nama: 'Subuh', rakaat: 2, emoji: '🌅' },
  { id: 'zuhur', nama: 'Zuhur', rakaat: 4, emoji: '☀️' },
  { id: 'asar', nama: 'Asar', rakaat: 4, emoji: '🌤️' },
  { id: 'maghrib', nama: 'Maghrib', rakaat: 3, emoji: '🌇' },
  { id: 'isya', nama: 'Isya', rakaat: 4, emoji: '🌙' },
]

function getBacaan(step, niatData) {
  if (step.bacaanKey === 'niat' && step.niatData) {
    return { arabic: step.niatData.arabic, latin: step.niatData.latin, arti: step.niatData.arti }
  }
  return BACAAN_STEP[step.bacaanKey] || null
}

export default function SholatInteraktif() {
  const [jenis, setJenis] = useState(null)
  const [stepIndex, setStepIndex] = useState(0)

  const steps = jenis ? buildSholatSteps(jenis) : []
  const step = steps[stepIndex]
  const totalSteps = steps.length
  const niatData = jenis ? NIAT[jenis] : null

  const pilihJenis = (id) => {
    setJenis(id)
    setStepIndex(0)
  }

  const prev = () => setStepIndex((i) => (i > 0 ? i - 1 : i))
  const next = () => setStepIndex((i) => (i < totalSteps - 1 ? i + 1 : i))

  if (!jenis) {
    return (
      <div className="sholat-pilih-wrap">
        <p className="sholat-pilih-intro">Pilih sholat yang mau kamu pelajari. Lalu ikuti gerakan dan bacaannya dari awal sampai selesai!</p>
        <div className="sholat-pilih-grid">
          {JENIS_OPTIONS.map((j) => (
            <button
              key={j.id}
              type="button"
              className="sholat-pilih-btn card"
              onClick={() => pilihJenis(j.id)}
            >
              <span className="sholat-pilih-emoji">{j.emoji}</span>
              <span className="sholat-pilih-nama">{j.nama}</span>
              <span className="sholat-pilih-rakaat">{j.rakaat} rakaat</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const bacaan = step ? getBacaan(step, niatData) : null

  return (
    <div className="sholat-interaktif">
      <div className="sholat-header-row">
        <button type="button" className="sholat-ganti-btn" onClick={() => setJenis(null)}>
          ← Ganti sholat
        </button>
        <h3 className="sholat-judul-sekarang">
          {niatData?.nama} ({niatData?.rakaat} rakaat)
        </h3>
      </div>

      <div className="sholat-progress-bar">
        <div
          className="sholat-progress-fill"
          style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
        />
      </div>
      <p className="sholat-step-counter">
        Langkah {stepIndex + 1} dari {totalSteps}
      </p>

      {step && (
        <div className="sholat-step-card card">
          {step.rakaat > 0 && (
            <span className="sholat-step-rakaat">Rakaat {step.rakaat}</span>
          )}
          <div className="sholat-step-gerakan">
            <GerakanSholatSvg gerakan={step.gerakan} />
          </div>
          <h4 className="sholat-step-label">{step.label}</h4>
          {bacaan && (
            <div className="sholat-step-bacaan">
              <p className="sholat-step-arabic" dir="rtl">{bacaan.arabic}</p>
              <p className="sholat-step-latin">{bacaan.latin}</p>
              <p className="sholat-step-arti">"{bacaan.arti}"</p>
            </div>
          )}
        </div>
      )}

      <div className="sholat-nav">
        <button
          type="button"
          className="sholat-nav-btn"
          onClick={prev}
          disabled={stepIndex === 0}
        >
          ← Sebelumnya
        </button>
        <button
          type="button"
          className="sholat-nav-btn"
          onClick={next}
          disabled={stepIndex >= totalSteps - 1}
        >
          Berikutnya →
        </button>
      </div>
    </div>
  )
}
