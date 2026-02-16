// Niat per jenis sholat
export const NIAT = {
  subuh: { nama: 'Subuh', rakaat: 2, arabic: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى', latin: 'Usholli fardhos subhi rok\'atayni mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.', arti: 'Aku berniat salat fardu Subuh dua rakaat menghadap kiblat karena Allah Ta\'ala.' },
  zuhur: { nama: 'Zuhur', rakaat: 4, arabic: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى', latin: 'Usholli fardhodh dhuhri arba\'a roka\'aatin mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.', arti: 'Aku berniat salat fardu Zuhur empat rakaat menghadap kiblat karena Allah Ta\'ala.' },
  asar: { nama: 'Asar', rakaat: 4, arabic: 'أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى', latin: 'Usholli fardhol \'ashri arba\'a roka\'aatin mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.', arti: 'Aku berniat salat fardu Asar empat rakaat menghadap kiblat karena Allah Ta\'ala.' },
  maghrib: { nama: 'Maghrib', rakaat: 3, arabic: 'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى', latin: 'Usholli fardhol maghribi tsalaatsa roka\'aatin mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.', arti: 'Aku berniat salat fardu Maghrib tiga rakaat menghadap kiblat karena Allah Ta\'ala.' },
  isya: { nama: 'Isya', rakaat: 4, arabic: 'أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى', latin: 'Usholli fardhol \'isyaa-i arba\'a roka\'aatin mustaqbilal qiblati adaa-an lillaahi ta\'aalaa.', arti: 'Aku berniat salat fardu Isya empat rakaat menghadap kiblat karena Allah Ta\'ala.' },
}

export const BACAAN_STEP = {
  takbir: { arabic: 'اللهُ أَكْبَرُ', latin: 'Allahu akbar.', arti: 'Allah Maha Besar.' },
  iftitah: {
    arabic: 'اللهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ',
    latin: 'Allahu akbar kabiiran wal hamdu lillaahi katsiiran wa subhaanallaahi bukratan wa as\'iilaa. Wajjahtu wajhiya lilladzi fatharas samaawaati wal ardhi haniifan wa maa ana minal musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil \'aalamiin. Laa syariika lah. Wa bidzaalika umirtu wa ana minal muslimiin.',
    arti: 'Allah Maha Besar dengan segala kebesaran, segala puji bagi Allah dengan pujian yang banyak, dan Mahasuci Allah di waktu pagi dan petang. Aku hadapkan wajahku kepada (Allah) yang menciptakan langit dan bumi dengan penuh ketulusan (hanif) dan aku bukanlah termasuk orang-orang yang musyrik. Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanya bagi Allah Tuhan semesta alam. Tidak ada sekutu bagi-Nya. Dan dengan demikian aku diperintahkan dan aku termasuk orang-orang yang berserah diri (muslim).',
  },
  taawudz: { arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', latin: 'A\'uudzu billaahi minash shaythoonir rojiim.', arti: 'Aku berlindung kepada Allah dari setan yang terkutuk.' },
  bismillah: { arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Bismillaahir rohmaanir rohiim.', arti: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.' },
  fatihah: { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', latin: 'Alhamdu lillaahi robbil \'aalamiin. Ar-rohmaanir rohiim. Maaliki yaumiddiin. Iyyaaka na\'budu wa iyyaaka nasta\'iin. Ihdinas shiroothol mustaqiim. Shirootholladziina an\'amta \'alaihim ghoiril maghdhuubi \'alaihim wa ladhdhoolliin.', arti: 'Segala puji bagi Allah Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukilah kami jalan yang lurus. (Yaitu) jalan orang-orang yang Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula) mereka yang sesat.' },
  surat: { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', latin: 'Qul huwallaahu ahad. Allaahush shomad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad.', arti: 'Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat meminta. Tidak beranak dan tidak diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.' },
  tasbih_ruku: { arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ', latin: 'Subhaana robbiyal \'azhiim wabihamdih.', arti: 'Mahasuci Tuhanku Yang Maha Agung dan dengan puji-Nya.' },
  sami_allah: { arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ', latin: 'Sami\'allaahu liman hamidah.', arti: 'Allah mendengar orang yang memuji-Nya.' },
  rabbana_hamd: { arabic: 'رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ', latin: 'Robbanaa lakal hamdu mil-us samawaati wa mil-ul ardhi wa mil-u maa syi\'ta min syai\'in ba\'du.', arti: 'Wahai Tuhan kami, bagi-Mu segala puji sepenuh langit, sepenuh bumi, dan sepenuh apa yang Engkau kehendaki setelah itu.' },
  tasbih_sujud: { arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ', latin: 'Subhaana robbiyal a\'laa wabihamdih.', arti: 'Mahasuci Tuhanku Yang Maha Tinggi dan dengan puji-Nya.' },
  doa_duduk: { arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي', latin: 'Robbighfirlii warhamnii wajburnii warfa\'nii warzuqnii wahdinii wa\'aafinii wa\'fu \'annii.', arti: 'Wahai Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah aku, angkatlah derajatku, berilah rezeki kepadaku, berilah aku petunjuk, berilah kesehatan, dan maafkanlah aku.' },
  tahiyat: { arabic: 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ', latin: 'Attahiyyaatul mubaarokaatus sholawaatuth thoyyibaatu lillaah. Assalaamu \'alaika ayyuhan nabiyyu wa rohmatullaahi wa barokaatuh. Assalaamu \'alainaa wa \'alaa \'ibaadillaahish shoolihiyn. Asyhadu allaa ilaaha illallaah wa asyhadu anna muhammadar rosuulullaah.', arti: 'Segala penghormatan, keberkahan, salat, dan kebaikan milik Allah. Salam sejahtera kepadamu wahai Nabi beserta rahmat Allah dan berkah-Nya. Salam sejahtera bagi kami dan hamba-hamba Allah yang saleh. Aku bersaksi tidak ada Tuhan selain Allah dan aku bersaksi Muhammad adalah utusan Allah.' },
  sholawat: { arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ', latin: 'Allahumma sholli \'alaa muhammadin wa \'alaa aali muhammadin kamaa shollaita \'alaa ibroohiima wa \'alaa aali ibroohiima innaka hamiidum majiid. Allahumma baarik \'alaa muhammadin wa \'alaa aali muhammadin kamaa baarokta \'alaa ibroohiima wa \'alaa aali ibroohiima innaka hamiidum majiid.', arti: 'Ya Allah, limpahkanlah salat kepada Muhammad dan keluarga Muhammad sebagaimana Engkau telah melimpahkan salat kepada Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berkahilah Muhammad dan keluarga Muhammad sebagaimana Engkau telah memberkahi Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.' },
  rabbana: { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', latin: 'Robbanaa aatinaa fid dunyaa hasanah wa fil aakhiroti hasanah wa qinaa \'adzaaban naari.', arti: 'Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.' },
  salam: { arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ', latin: 'Assalaamu \'alaikum warohmatullaahi wabarokaatuh.', arti: 'Semoga keselamatan, rahmat Allah, dan berkah-Nya (limpahkan) kepadamu.' },
}

function satuRakaat(rakaatNum, denganSurat) {
  const s = [
    { rakaat: rakaatNum, gerakan: 'berdiri', bacaanKey: 'bismillah', label: 'Bismillah' },
    { rakaat: rakaatNum, gerakan: 'berdiri', bacaanKey: 'fatihah', label: 'Al-Fatihah' },
  ]
  if (denganSurat) s.push({ rakaat: rakaatNum, gerakan: 'berdiri', bacaanKey: 'surat', label: 'Surat pendek' })
  return s.concat([
    { rakaat: rakaatNum, gerakan: 'takbir', bacaanKey: 'takbir', label: 'Takbir' },
    { rakaat: rakaatNum, gerakan: 'ruku', bacaanKey: 'tasbih_ruku', label: 'Tasbih Ruku\'' },
    { rakaat: rakaatNum, gerakan: 'itidal', bacaanKey: 'sami_allah', label: 'Sami\'allahu liman hamidah' },
    { rakaat: rakaatNum, gerakan: 'itidal', bacaanKey: 'rabbana_hamd', label: 'Rabbana wa lakal hamd' },
    { rakaat: rakaatNum, gerakan: 'takbir', bacaanKey: 'takbir', label: 'Takbir' },
    { rakaat: rakaatNum, gerakan: 'sujud', bacaanKey: 'tasbih_sujud', label: 'Tasbih Sujud' },
    { rakaat: rakaatNum, gerakan: 'takbir', bacaanKey: 'takbir', label: 'Takbir' },
    { rakaat: rakaatNum, gerakan: 'duduk_sujud', bacaanKey: 'doa_duduk', label: 'Doa duduk antara sujud' },
    { rakaat: rakaatNum, gerakan: 'takbir', bacaanKey: 'takbir', label: 'Takbir' },
    { rakaat: rakaatNum, gerakan: 'sujud', bacaanKey: 'tasbih_sujud', label: 'Tasbih Sujud' },
  ])
}

export function buildSholatSteps(jenisId) {
  const niat = NIAT[jenisId]
  if (!niat) return []
  const total = niat.rakaat
  const steps = [
    { rakaat: 0, gerakan: 'niat', bacaanKey: 'niat', label: 'Niat', niatData: niat },
    { rakaat: 1, gerakan: 'takbir', bacaanKey: 'takbir', label: 'Takbiratul Ihram' },
    { rakaat: 1, gerakan: 'berdiri', bacaanKey: 'iftitah', label: 'Doa Iftitah' },
    { rakaat: 1, gerakan: 'berdiri', bacaanKey: 'taawudz', label: 'Ta\'awudz' },
    ...satuRakaat(1, true),
  ]
  for (let r = 2; r <= total; r++) {
    steps.push({ rakaat: r, gerakan: 'takbir', bacaanKey: 'takbir', label: `Takbir (rakaat ${r})` })
    steps.push(...satuRakaat(r, r <= 2))
    if (r === total) {
      steps.push({ rakaat: r, gerakan: 'tahiyat', bacaanKey: 'tahiyat', label: 'Tahiyat' })
      steps.push({ rakaat: r, gerakan: 'tahiyat', bacaanKey: 'sholawat', label: 'Sholawat' })
      steps.push({ rakaat: r, gerakan: 'tahiyat', bacaanKey: 'rabbana', label: 'Doa Rabbana' })
      steps.push({ rakaat: r, gerakan: 'salam', bacaanKey: 'salam', label: 'Salam' })
    }
  }
  return steps
}
