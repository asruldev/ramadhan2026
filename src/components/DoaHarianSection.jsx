import { useState } from 'react'
import './Section.css'

const doaList = [
  { id: 'bangun', title: 'Doa Bangun Tidur', arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', latin: 'Alhamdullillahilladzi ahyaanaa ba\'da maa amaatanaa wa ilaihin nusyuur.', arti: 'Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dikumpulkan.', emoji: '☀️', color: 'hijau' },
  { id: 'memakai-baju', title: 'Doa Memakai Baju', arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', latin: 'Alhamdulillahilladzi kasaanii haadzaa wa rozaqoniihi min ghoiri haulin minnii wa laa quwwah.', arti: 'Segala puji bagi Allah yang memberiku pakaian ini dan memberi rezeki kepadaku tanpa daya dan kekuatan dariku.', emoji: '👕', color: 'biru' },
  { id: 'masuk-kamar-mandi', title: 'Doa Masuk Kamar Mandi', arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', latin: 'Bismillahi allahumma innii a\'uudzu bika minal khubutsi wal khoobaits.', arti: 'Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari godaan setan laki-laki dan setan perempuan.', emoji: '🚿', color: 'ungu' },
  { id: 'keluar-kamar-mandi', title: 'Doa Keluar Kamar Mandi', arabic: 'غُفْرَانَكَ', latin: 'Ghufronak.', arti: '(Aku memohon) ampunan-Mu.', emoji: '✨', color: 'ungu' },
  { id: 'sebelum-makan', title: 'Doa Sebelum Makan', arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', latin: 'Allahumma baarik lanaa fiimaa razaqtanaa wa qinaa \'adzaaban naari.', arti: 'Ya Allah, berkahilah rezeki yang Engkau beri kepada kami dan lindungilah kami dari siksa api neraka.', emoji: '🍽️', color: 'emas' },
  { id: 'sesudah-makan', title: 'Doa Sesudah Makan', arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', latin: 'Alhamdulillahilladzi ath\'amani haadzaa wa rozaqoniihi min ghoiri haulin minnii wa laa quwwatin.', arti: 'Segala puji bagi Allah yang memberiku makan ini dan memberi rezeki kepadaku tanpa daya dan kekuatan dariku.', emoji: '🙏', color: 'emas' },
  { id: 'sebelum-tidur', title: 'Doa Sebelum Tidur', arabic: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ', latin: 'Bismikallohumma ahyaa wa amuut.', arti: 'Dengan nama-Mu ya Allah, aku hidup dan aku mati.', emoji: '🌙', color: 'biru' },
  { id: 'keluar-rumah', title: 'Doa Keluar Rumah', arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', latin: 'Bismillahi tawakkaltu \'alallahi wa laa hawla wa laa quwwata illaa billaahi.', arti: 'Dengan nama Allah, aku bertawakal kepada Allah. Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.', emoji: '🏠', color: 'hijau' },
  { id: 'masuk-masjid', title: 'Doa Masuk Masjid', arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', latin: 'Allahummaftah lii abwaaba rohmatik.', arti: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.', emoji: '🕌', color: 'hijau' },
  { id: 'niat-puasa', title: 'Niat Puasa Ramadan', arabic: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذَا الْعَامِ لِلَّهِ تَعَالَى', latin: 'Nawaitu shauma ghadin \'an ada\'i fardhi syahri ramadhana hadzal \'aami lillahi ta\'aala.', arti: 'Aku niat berpuasa esok hari untuk menunaikan kewajiban bulan Ramadan tahun ini karena Allah Ta\'ala.', emoji: '🌙', color: 'hijau' },
  { id: 'berbuka', title: 'Doa Berbuka Puasa', arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ', latin: 'Allahumma laka sumtu wa bika aamantu wa \'alaa rizqika afthortu.', arti: 'Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka.', emoji: '🫖', color: 'emas' },
  { id: 'doa-hujan', title: 'Doa Ketika Turun Hujan', arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا', latin: 'Allahumma shayyiban naafi\'an.', arti: 'Ya Allah, (jadikanlah) hujan yang bermanfaat.', emoji: '🌧️', color: 'biru' },
  { id: 'doa-berkendara', title: 'Doa Berkendara', arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ', latin: 'Subhanalladzi sakhkhara lanaa haadzaa wa maa kunna lahu muqrinin wa innaa ilaa robbinaa lamunqolibuun.', arti: 'Mahasuci (Allah) yang telah menundukkan kendaraan ini untuk kami. Kami tidak mampu (menundukkan)nya. Dan sesungguhnya kami akan kembali kepada Tuhan kami.', emoji: '🚗', color: 'merah' },
]

const colorClass = {
  hijau: 'doa-card--hijau',
  emas: 'doa-card--emas',
  biru: 'doa-card--biru',
  ungu: 'doa-card--ungu',
  merah: 'doa-card--merah',
}

export default function DoaHarianSection() {
  const [bukaId, setBukaId] = useState(null)
  const [tampilLatin, setTampilLatin] = useState(true)
  const [tampilArti, setTampilArti] = useState(true)
  const [bintang, setBintang] = useState({})

  const doaBuka = doaList.find((d) => d.id === bukaId)

  const toggleBintang = (id, e) => {
    e.stopPropagation()
    setBintang((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const bukaCard = (id) => {
    if (bukaId === id) return
    setBukaId(id)
    setTampilLatin(true)
    setTampilArti(true)
  }

  const tutupCard = () => setBukaId(null)

  return (
    <section className="section doa-harian-section">
      <h2 className="section-title">🤲 Doa Harian Anak</h2>
      <p className="doa-intro">
        Klik kartu doa untuk baca dan hafal. Sembunyikan latin/arti kalau mau latihan! ⭐
      </p>

      <div className="doa-harian-grid">
        {doaList.map((doa) => (
          <div
            key={doa.id}
            role="button"
            tabIndex={0}
            onClick={() => (bukaId === doa.id ? tutupCard() : bukaCard(doa.id))}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (bukaId === doa.id ? tutupCard() : bukaCard(doa.id))}
            className={`doa-harian-card card ${colorClass[doa.color]} ${bukaId === doa.id ? 'doa-harian-card--open' : ''}`}
          >
            <button
              type="button"
              className={`doa-bintang ${bintang[doa.id] ? 'doa-bintang--on' : ''}`}
              onClick={(e) => toggleBintang(doa.id, e)}
              aria-label={bintang[doa.id] ? 'Batalkan bintang' : 'Sudah hafal'}
              title={bintang[doa.id] ? 'Batalkan' : 'Aku sudah hafal!'}
            >
              {bintang[doa.id] ? '⭐' : '☆'}
            </button>
            <span className="doa-harian-emoji">{doa.emoji}</span>
            <span className="doa-harian-title">{doa.title}</span>
            {bukaId === doa.id && doaBuka?.id === doa.id && (
              <div className="doa-harian-detail" onClick={(e) => e.stopPropagation()}>
                <p className="doa-harian-arabic" dir="rtl">{doa.arabic}</p>
                {tampilLatin && <p className="doa-harian-latin">{doa.latin}</p>}
                {tampilArti && <p className="doa-harian-arti">"{doa.arti}"</p>}
                <div className="doa-harian-toggles">
                  <button type="button" className="doa-toggle-btn" onClick={() => setTampilLatin(!tampilLatin)}>
                    {tampilLatin ? '🙈 Sembunyikan latin' : '👁️ Tampilkan latin'}
                  </button>
                  <button type="button" className="doa-toggle-btn" onClick={() => setTampilArti(!tampilArti)}>
                    {tampilArti ? '🙈 Sembunyikan arti' : '👁️ Tampilkan arti'}
                  </button>
                </div>
                <p className="doa-harian-tap-hint">Klik di luar kartu untuk menutup</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
