import { useState, useEffect } from 'react'
import SholatInteraktif from './SholatInteraktif'
import './Section.css'

const ANGKA = [
  { n: 1, nama: 'Satu', arab: '١', baca: 'wahid' },
  { n: 2, nama: 'Dua', arab: '٢', baca: 'itsnan' },
  { n: 3, nama: 'Tiga', arab: '٣', baca: 'tsalatsah' },
  { n: 4, nama: 'Empat', arab: '٤', baca: 'arba\'ah' },
  { n: 5, nama: 'Lima', arab: '٥', baca: 'khamsah' },
  { n: 6, nama: 'Enam', arab: '٦', baca: 'sittah' },
  { n: 7, nama: 'Tujuh', arab: '٧', baca: 'sab\'ah' },
  { n: 8, nama: 'Delapan', arab: '٨', baca: 'tsamaniyah' },
  { n: 9, nama: 'Sembilan', arab: '٩', baca: 'tis\'ah' },
  { n: 10, nama: 'Sepuluh', arab: '١٠', baca: 'asyarah' },
]

const KATA_RAMADAN = [
  { kata: 'Puasa', emoji: '🌙', arti: 'Tidak makan dan minum dari subuh sampai maghrib.' },
  { kata: 'Sahur', emoji: '🌅', arti: 'Makan sebelum subuh, menjelang puasa.' },
  { kata: 'Berbuka', emoji: '🫖', arti: 'Makan/minum saat maghrib untuk membatalkan puasa.' },
  { kata: 'Masjid', emoji: '🕌', arti: 'Rumah Allah, tempat salat dan belajar agama.' },
  { kata: 'Al-Quran', emoji: '📖', arti: 'Kitab suci umat Islam, wahyu dari Allah.' },
  { kata: 'Doa', emoji: '🤲', arti: 'Memohon dan berbicara kepada Allah.' },
  { kata: 'Sedekah', emoji: '🎁', arti: 'Memberi sebagian rezeki ke orang yang membutuhkan.' },
  { kata: 'Salat', emoji: '🤲', arti: 'Ibadah wajib 5 waktu dalam sehari.' },
]

const HARI_DALAM_SEMINGGU = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
]

const RUKUN_ISLAM = [
  { no: 1, nama: 'Syahadat', emoji: '🙏', penjelasan: 'Mengucap dua kalimat syahadat: bersaksi tidak ada Tuhan selain Allah, dan Nabi Muhammad utusan Allah. Ini pintu masuk Islam.' },
  { no: 2, nama: 'Salat', emoji: '🕌', penjelasan: 'Salat 5 waktu setiap hari: Subuh, Zuhur, Asar, Maghrib, dan Isya. Kita berbicara kepada Allah lewat salat.' },
  { no: 3, nama: 'Zakat', emoji: '🎁', penjelasan: 'Memberi sebagian harta ke orang yang membutuhkan. Zakat membuat rezeki kita berkah.' },
  { no: 4, nama: 'Puasa', emoji: '🌙', penjelasan: 'Berpuasa di bulan Ramadan: tidak makan dan minum dari subuh sampai maghrib. Kita belajar sabar dan bersyukur.' },
  { no: 5, nama: 'Haji', emoji: '🕋', penjelasan: 'Pergi ke Mekah untuk beribadah haji, bagi yang mampu. Ini rukun sekali seumur hidup jika mampu.' },
]

const RUKUN_IMAN = [
  { no: 1, nama: 'Iman kepada Allah', emoji: '🕋', penjelasan: 'Percaya bahwa Allah itu satu, Maha Esa, pencipta segala sesuatu. Kita menyembah hanya kepada Allah.' },
  { no: 2, nama: 'Iman kepada Malaikat', emoji: '👼', penjelasan: 'Percaya ada malaikat yang diciptakan Allah, misalnya Malaikat Jibril yang menyampaikan wahyu.' },
  { no: 3, nama: 'Iman kepada Kitab-kitab', emoji: '📖', penjelasan: 'Percaya Allah menurunkan kitab suci. Kitab kita adalah Al-Quran yang diturunkan kepada Nabi Muhammad.' },
  { no: 4, nama: 'Iman kepada Rasul', emoji: '🌟', penjelasan: 'Percaya kepada nabi dan rasul Allah. Nabi Muhammad adalah rasul terakhir yang membawa Islam.' },
  { no: 5, nama: 'Iman kepada Hari Kiamat', emoji: '📅', penjelasan: 'Percaya ada hari akhir: dunia berakhir dan semua manusia akan dibangkitkan untuk dihisab.' },
  { no: 6, nama: 'Iman kepada Qada dan Qadar', emoji: '🌿', penjelasan: 'Percaya bahwa baik dan buruk sudah ditakdirkan Allah. Kita tetap berusaha dan bertawakal.' },
]

const BACAAN_SHOLAT = [
  {
    nama: 'Niat (contoh Salat Subuh)',
    kapan: 'Di awal, dalam hati atau dilafalkan',
    arabic: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: 'Usholli fardhos subhi rok\'atayni mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.',
    arti: 'Aku berniat salat fardu Subuh dua rakaat menghadap kiblat karena Allah Ta\'ala.',
  },
  {
    nama: 'Takbiratul Ihram',
    kapan: 'Mengangkat tangan, awal salat',
    arabic: 'اللهُ أَكْبَرُ',
    latin: 'Allahu akbar.',
    arti: 'Allah Maha Besar.',
  },
  {
    nama: 'Doa Iftitah (panjang)',
    kapan: 'Setelah takbiratul ihram, sebelum Al-Fatihah',
    arabic: 'اللهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ',
    latin: 'Allahu akbar kabiiran wal hamdu lillaahi katsiiran wa subhaanallaahi bukratan wa as\'iilaa. Wajjahtu wajhiya lilladzi fatharas samaawaati wal ardhi haniifan wa maa ana minal musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil \'aalamiin. Laa syariika lah. Wa bidzaalika umirtu wa ana minal muslimiin.',
    arti: 'Allah Maha Besar dengan segala kebesaran, segala puji bagi Allah dengan pujian yang banyak, dan Mahasuci Allah di waktu pagi dan petang. Aku hadapkan wajahku kepada (Allah) yang menciptakan langit dan bumi dengan penuh ketulusan (hanif) dan aku bukanlah termasuk orang-orang yang musyrik. Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanya bagi Allah Tuhan semesta alam. Tidak ada sekutu bagi-Nya. Dan dengan demikian aku diperintahkan dan aku termasuk orang-orang yang berserah diri (muslim).',
  },
  {
    nama: 'Ta\'awudz',
    kapan: 'Sebelum Al-Fatihah di rakaat pertama',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    latin: 'A\'uudzu billaahi minash shaythoonir rojiim.',
    arti: 'Aku berlindung kepada Allah dari setan yang terkutuk.',
  },
  {
    nama: 'Bismillah',
    kapan: 'Awal bacaan tiap rakaat (sebelum Al-Fatihah)',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    latin: 'Bismillaahir rohmaanir rohiim.',
    arti: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.',
  },
  {
    nama: 'Al-Fatihah',
    kapan: 'Tiap rakaat (wajib)',
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    latin: 'Alhamdu lillaahi robbil \'aalamiin. Ar-rohmaanir rohiim. Maaliki yaumiddiin. Iyyaaka na\'budu wa iyyaaka nasta\'iin. Ihdinas shiroothol mustaqiim. Shirootholladziina an\'amta \'alaihim ghoiril maghdhuubi \'alaihim wa ladhdhoolliin.',
    arti: 'Segala puji bagi Allah Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukilah kami jalan yang lurus. (Yaitu) jalan orang-orang yang Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula) mereka yang sesat.',
  },
  {
    nama: 'Surat Pendek (Al-Ikhlas)',
    kapan: 'Rakaat 1 & 2 setelah Al-Fatihah',
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
    latin: 'Qul huwallaahu ahad. Allaahush shomad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad.',
    arti: 'Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat meminta. Tidak beranak dan tidak diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.',
  },
  {
    nama: 'Takbir (perpindahan gerakan)',
    kapan: 'Saat ruku\', sujud, duduk, berdiri',
    arabic: 'اللهُ أَكْبَرُ',
    latin: 'Allahu akbar.',
    arti: 'Allah Maha Besar.',
  },
  {
    nama: 'Tasbih Ruku\'',
    kapan: 'Saat ruku\' (bisa 3x)',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ',
    latin: 'Subhaana robbiyal \'azhiim wabihamdih.',
    arti: 'Mahasuci Tuhanku Yang Maha Agung dan dengan puji-Nya.',
  },
  {
    nama: 'Sami\'allahu liman hamidah',
    kapan: 'Saat bangun dari ruku\' (imam/makmum)',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
    latin: 'Sami\'allaahu liman hamidah.',
    arti: 'Allah mendengar orang yang memuji-Nya.',
  },
  {
    nama: 'Rabbana wa lakal hamd',
    kapan: 'Saat berdiri i\'tidal',
    arabic: 'رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
    latin: 'Robbanaa lakal hamdu mil-us samawaati wa mil-ul ardhi wa mil-u maa syi\'ta min syai\'in ba\'du.',
    arti: 'Wahai Tuhan kami, bagi-Mu segala puji sepenuh langit, sepenuh bumi, dan sepenuh apa yang Engkau kehendaki setelah itu.',
  },
  {
    nama: 'Tasbih Sujud',
    kapan: 'Saat sujud (bisa 3x)',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ',
    latin: 'Subhaana robbiyal a\'laa wabihamdih.',
    arti: 'Mahasuci Tuhanku Yang Maha Tinggi dan dengan puji-Nya.',
  },
  {
    nama: 'Doa Duduk Antara Dua Sujud',
    kapan: 'Duduk antara sujud pertama dan kedua',
    arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
    latin: 'Robbighfirlii warhamnii wajburnii warfa\'nii warzuqnii wahdinii wa\'aafinii wa\'fu \'annii.',
    arti: 'Wahai Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah aku, angkatlah derajatku, berilah rezeki kepadaku, berilah aku petunjuk, berilah kesehatan, dan maafkanlah aku.',
  },
  {
    nama: 'Tahiyat Awal & Akhir (At-Tahiyat)',
    kapan: 'Duduk tasyahhud',
    arabic: 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
    latin: 'Attahiyyaatul mubaarokaatus sholawaatuth thoyyibaatu lillaah. Assalaamu \'alaika ayyuhan nabiyyu wa rohmatullaahi wa barokaatuh. Assalaamu \'alainaa wa \'alaa \'ibaadillaahish shoolihiyn. Asyhadu allaa ilaaha illallaah wa asyhadu anna muhammadar rosuulullaah.',
    arti: 'Segala penghormatan, keberkahan, salat, dan kebaikan milik Allah. Salam sejahtera kepadamu wahai Nabi beserta rahmat Allah dan berkah-Nya. Salam sejahtera bagi kami dan hamba-hamba Allah yang saleh. Aku bersaksi tidak ada Tuhan selain Allah dan aku bersaksi Muhammad adalah utusan Allah.',
  },
  {
    nama: 'Sholawat (Tasyahhud akhir)',
    kapan: 'Di tasyahhud akhir, setelah tahiyat',
    arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    latin: 'Allahumma sholli \'alaa muhammadin wa \'alaa aali muhammadin kamaa shollaita \'alaa ibroohiima wa \'alaa aali ibroohiima innaka hamiidum majiid. Allahumma baarik \'alaa muhammadin wa \'alaa aali muhammadin kamaa baarokta \'alaa ibroohiima wa \'alaa aali ibroohiima innaka hamiidum majiid.',
    arti: 'Ya Allah, limpahkanlah salat kepada Muhammad dan keluarga Muhammad sebagaimana Engkau telah melimpahkan salat kepada Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berkahilah Muhammad dan keluarga Muhammad sebagaimana Engkau telah memberkahi Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.',
  },
  {
    nama: 'Doa Setelah Sholawat (Rabbana)',
    kapan: 'Setelah sholawat, sebelum salam',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    latin: 'Robbanaa aatinaa fid dunyaa hasanah wa fil aakhiroti hasanah wa qinaa \'adzaaban naari.',
    arti: 'Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.',
  },
  {
    nama: 'Salam',
    kapan: 'Akhir salat (menoleh kanan dan kiri)',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
    latin: 'Assalaamu \'alaikum warohmatullaahi wabarokaatuh.',
    arti: 'Semoga keselamatan, rahmat Allah, dan berkah-Nya (limpahkan) kepadamu.',
  },
]

const BELAJAR_HARI_INI = [
  { judul: 'Hitung bintang!', tugas: 'Klik angka 5 di bawah. Berapa bintang yang ada?', emoji: '⭐' },
  { judul: 'Rukun Islam', tugas: 'Buka tab "Rukun Islam". Ada berapa rukun? Buka kartu nomor 1 dan 4!', emoji: '🕌' },
  { judul: 'Angka Arab', tugas: 'Cari angka yang ditulis ٥. Itu angka berapa?', emoji: '٥' },
  { judul: 'Hari apa hari ini?', tugas: 'Lihat bagian "Hari dalam Seminggu". Hari ini hari apa?', emoji: '📅' },
  { judul: 'Rukun Iman', tugas: 'Buka tab "Rukun Iman". Baca kartu nomor 1 (Iman kepada Allah)!', emoji: '🌟' },
  { judul: 'Belajar Sholat', tugas: 'Buka tab "Sholat". Lihat urutan gerakan lalu buka bacaan Takbir dan Tasbih Sujud!', emoji: '🤲' },
  { judul: 'Semua angka', tugas: 'Coba klik setiap angka dari 1 sampai 10. Kamu bisa!', emoji: '🌟' },
]

const STORAGE_KEY = 'ramadhan_belajar_visits'

function getVisitCount() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return 0
    const data = JSON.parse(raw)
    const today = new Date().toDateString()
    if (data.date === today) return data.count
    return data.count || 0
  } catch {
    return 0
  }
}

function incrementVisit() {
  try {
    const today = new Date().toDateString()
    const raw = localStorage.getItem(STORAGE_KEY)
    let data = raw ? JSON.parse(raw) : { date: '', count: 0 }
    if (data.date !== today) {
      data = { date: today, count: 0 }
    }
    data.count += 1
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return data.count
  } catch {
    return 0
  }
}

export default function BelajarSection() {
  const [tab, setTab] = useState('angka')
  const [pilihAngka, setPilihAngka] = useState(null)
  const [bukaKata, setBukaKata] = useState(null)
  const [bukaRukunIslam, setBukaRukunIslam] = useState(null)
  const [bukaRukunIman, setBukaRukunIman] = useState(null)
  const [bukaBacaan, setBukaBacaan] = useState(null)
  const [visitCount, setVisitCount] = useState(0)
  const [visitIncremented, setVisitIncremented] = useState(false)

  const hariIni = new Date().getDay()
  const belajarHariIni = BELAJAR_HARI_INI[hariIni]

  useEffect(() => {
    setVisitCount(getVisitCount())
  }, [])

  useEffect(() => {
    if (visitIncremented) return
    setVisitIncremented(true)
    const newCount = incrementVisit()
    setVisitCount(newCount)
  }, [visitIncremented])

  return (
    <section className="section belajar-section">
      <h2 className="section-title">🔢 Belajar Ramadan</h2>

      {/* Belajar Hari Ini + Kunjungan */}
      <div className="belajar-hari-ini card">
        <p className="belajar-badge">📅 Belajar Hari Ini</p>
        <h3 className="belajar-hari-ini-judul">{belajarHariIni.emoji} {belajarHariIni.judul}</h3>
        <p className="belajar-hari-ini-tugas">{belajarHariIni.tugas}</p>
        <div className="belajar-kunjungan">
          {visitCount > 0 && (
            <p className="belajar-kunjungan-text">
              Kamu sudah buka Belajar <strong>{visitCount}</strong> kali hari ini. Terus semangat! 🌟
            </p>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="belajar-tabs">
        {[
          { id: 'angka', label: '🔢 Angka' },
          { id: 'kata', label: '📖 Kata' },
          { id: 'hari', label: '📅 Hari' },
          { id: 'rukun-islam', label: '🕌 Rukun Islam' },
          { id: 'rukun-iman', label: '🌟 Rukun Iman' },
          { id: 'sholat', label: '🤲 Sholat' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            className={`belajar-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Angka 1-10 */}
      {tab === 'angka' && (
        <div className="belajar-panel card">
          <p className="belajar-intro">Klik angka, lihat bentuk Arab dan cara baca dalam bahasa Arab. Hitung bintangnya!</p>
          <div className="angka-grid">
            {ANGKA.map((a) => (
              <button
                key={a.n}
                type="button"
                className={`angka-btn card ${pilihAngka === a.n ? 'selected' : ''}`}
                onClick={() => setPilihAngka(pilihAngka === a.n ? null : a.n)}
              >
                <span className="angka-nilai">{a.n}</span>
                <span className="angka-arab">{a.arab}</span>
                <span className="angka-bintang">{'⭐'.repeat(a.n)}</span>
              </button>
            ))}
          </div>
          {pilihAngka !== null && (
            <div className="hasil-angka card">
              <p className="big-text">
                Angka <strong>{pilihAngka}</strong> = <strong>{ANGKA[pilihAngka - 1].nama}</strong>
                <br />
                <span className="angka-arab-besar">{ANGKA[pilihAngka - 1].arab}</span> dibaca <strong>{ANGKA[pilihAngka - 1].baca}</strong> (bahasa Arab).
              </p>
              <p>Ada {pilihAngka} bintang di kartunya! 🌟</p>
            </div>
          )}
        </div>
      )}

      {/* Tab: Kata Ramadan */}
      {tab === 'kata' && (
        <div className="belajar-panel">
          <p className="belajar-intro">Klik kartu untuk tahu arti kata-kata penting di Ramadan.</p>
          <div className="kata-ramadan-grid">
            {KATA_RAMADAN.map((k, i) => (
              <button
                key={i}
                type="button"
                className={`kata-ramadan-card card ${bukaKata === i ? 'open' : ''}`}
                onClick={() => setBukaKata(bukaKata === i ? null : i)}
              >
                <span className="kata-ramadan-emoji">{k.emoji}</span>
                <span className="kata-ramadan-kata">{k.kata}</span>
                {bukaKata === i && <p className="kata-ramadan-arti">{k.arti}</p>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Hari dalam Seminggu */}
      {tab === 'hari' && (
        <div className="belajar-panel card">
          <p className="belajar-intro">Hari dalam satu minggu. Hari ini kita di hari apa?</p>
          <div className="hari-grid">
            {HARI_DALAM_SEMINGGU.map((nama, i) => (
              <div
                key={nama}
                className={`hari-item ${i === hariIni ? 'hari-ini' : ''}`}
              >
                <span className="hari-nama">{nama}</span>
                {i === hariIni && <span className="hari-badge">Hari ini</span>}
              </div>
            ))}
          </div>
          <p className="belajar-hari-kesimpulan">
            Hari ini hari <strong>{HARI_DALAM_SEMINGGU[hariIni]}</strong>. Besok hari {HARI_DALAM_SEMINGGU[(hariIni + 1) % 7]}.
          </p>
        </div>
      )}

      {/* Tab: Rukun Islam */}
      {tab === 'rukun-islam' && (
        <div className="belajar-panel">
          <p className="belajar-intro">Rukun Islam ada 5. Klik kartu untuk baca penjelasannya!</p>
          <div className="rukun-grid">
            {RUKUN_ISLAM.map((r, i) => (
              <button
                key={r.no}
                type="button"
                className={`rukun-card card ${bukaRukunIslam === i ? 'rukun-card--open' : ''}`}
                onClick={() => setBukaRukunIslam(bukaRukunIslam === i ? null : i)}
              >
                <span className="rukun-no">{r.no}</span>
                <span className="rukun-emoji">{r.emoji}</span>
                <span className="rukun-nama">{r.nama}</span>
                {bukaRukunIslam === i && <p className="rukun-penjelasan">{r.penjelasan}</p>}
              </button>
            ))}
          </div>
          <p className="belajar-rukun-kesimpulan">Rukun Islam = 5 hal pokok yang wajib kita jalankan sebagai Muslim. 🌟</p>
        </div>
      )}

      {/* Tab: Rukun Iman */}
      {tab === 'rukun-iman' && (
        <div className="belajar-panel">
          <p className="belajar-intro">Rukun Iman ada 6. Klik kartu untuk baca penjelasannya!</p>
          <div className="rukun-grid">
            {RUKUN_IMAN.map((r, i) => (
              <button
                key={r.no}
                type="button"
                className={`rukun-card card rukun-card--iman ${bukaRukunIman === i ? 'rukun-card--open' : ''}`}
                onClick={() => setBukaRukunIman(bukaRukunIman === i ? null : i)}
              >
                <span className="rukun-no">{r.no}</span>
                <span className="rukun-emoji">{r.emoji}</span>
                <span className="rukun-nama">{r.nama}</span>
                {bukaRukunIman === i && <p className="rukun-penjelasan">{r.penjelasan}</p>}
              </button>
            ))}
          </div>
          <p className="belajar-rukun-kesimpulan belajar-rukun-kesimpulan--iman">Rukun Iman = 6 hal yang kita percayai di dalam hati. ❤️</p>
        </div>
      )}

      {/* Tab: Sholat & Bacaan — interaktif: pilih jenis, gambar gerakan + bacaan per langkah */}
      {tab === 'sholat' && (
        <div className="belajar-panel">
          <p className="belajar-intro">Pilih jenis sholat, lalu ikuti gerakan dan bacaan dari awal sampai selesai!</p>
          <SholatInteraktif />

          <h3 className="sholat-subtitle">📖 Referensi: Daftar Bacaan Lengkap</h3>
          <div className="sholat-bacaan-list">
            {BACAAN_SHOLAT.map((b, i) => (
              <button
                key={i}
                type="button"
                className={`sholat-bacaan-card card ${bukaBacaan === i ? 'sholat-card--open' : ''}`}
                onClick={() => setBukaBacaan(bukaBacaan === i ? null : i)}
              >
                <span className="sholat-bacaan-nama">{b.nama}</span>
                <span className="sholat-bacaan-kapan">{b.kapan}</span>
                {bukaBacaan === i && (
                  <div className="sholat-bacaan-detail">
                    <p className="sholat-bacaan-arabic" dir="rtl">{b.arabic}</p>
                    <p className="sholat-bacaan-latin">{b.latin}</p>
                    <p className="sholat-bacaan-arti">"{b.arti}"</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
