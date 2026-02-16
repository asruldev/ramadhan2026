import { useState } from 'react'
import StarsBackground from './components/StarsBackground'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AmalanSection from './components/AmalanSection'
import BelajarSection from './components/BelajarSection'
import AktivitasSection from './components/AktivitasSection'
import DoaHarianSection from './components/DoaHarianSection'
import Juz30Section from './components/Juz30Section'
import './App.css'

const sections = [
  { id: 'home', label: '🏠 Beranda', Component: HomeSection },
  { id: 'amalan', label: '✨ Amalan Baik', Component: AmalanSection },
  { id: 'doa', label: '🤲 Doa Harian', Component: DoaHarianSection },
  { id: 'juz30', label: '📖 Juz 30', Component: Juz30Section },
  { id: 'belajar', label: '🔢 Belajar', Component: BelajarSection },
  { id: 'aktivitas', label: '🌙 Aktivitas', Component: AktivitasSection },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const ActiveComponent = sections.find(s => s.id === activeSection)?.Component

  return (
    <>
      <StarsBackground />
      <Header />
      <nav className="nav-tabs">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-tab ${activeSection === id ? 'active' : ''}`}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <main className="main-content">
        {ActiveComponent && <ActiveComponent />}
      </main>
    </>
  )
}

export default App
