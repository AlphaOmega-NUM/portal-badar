export interface HadisItem {
  no: number;
  tajuk: string;
  rawi: string;
  matanArab: string;
  maksud: string;
  huraian: string;
  pengajaran: string[];
  nilai: string;
  aktiviti: string;
}

export const pangkalanHadis: HadisItem[] = [
  {
    no: 1,
    tajuk: "Keutamaan Niat",
    rawi: "Amirul Mukminin Abu Hafs Umar bin al-Khattab r.a.",
    matanArab: "عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Daripada Amirul Mukminin Abu Hafs Saiyidina Umar bin al-Khattab r.a., beliau berkata: Aku telah mendengar Rasulullah SAW bersabda: \"Sesungguhnya, segala amalan bergantung kepada niat. Sesungguhnya, setiap orang akan memperoleh apa yang dia niatkan. Maka, sesiapa yang berhijrah semata-mata kerana Allah dan rasul-Nya, hijrahnya adalah kepada Allah dan rasul-Nya. Sesiapa yang berhijrah kerana habuan dunia yang hendak diperoleh atau kerana wanita yang hendak dikahwininya, maka hijrahnya dikira mengikut apa yang dia niatkan.\"",
    huraian: "Hadis ini merupakan paksi asas seluruh ajaran Islam. Niat di dalam hati membezakan sama ada sesuatu perbuatan bernilai ibadah yang berpahala ataupun sekadar kebiasaan adat harian. Asbab wurud hadis ini berkait dengan seorang sahabat yang berhijrah kerana ingin mengahwini seorang wanita bernama Ummu Qais.",
    pengajaran: [
      "Peringatan untuk sentiasa mengikhlaskan niat hanya kerana Allah SWT.",
      "Niat membezakan antara amalan ibadah dengan kebiasaan/adat harian.",
      "Pahala dikurniakan mengikut kadar dan ketulusan niat seseorang.",
      "Penghijrahan sikap dan tindakan merupakan faktor utama kejayaan seorang murid."
    ],
    nilai: "Keyakinan, Ihsan, Ikhlas",
    aktiviti: "Usrah mingguan, Forum Hijrah, Program Niat menuntut ilmu di sekolah"
  },
  {
    no: 2,
    tajuk: "Islam, Iman dan Ihsan",
    rawi: "Umar bin al-Khattab r.a.",
    matanArab: "عَنْ عُمَرَ رَضِيَ اللَّهُ عَنْهُ أَيْضًا قَالَ: بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ، إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعْرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Kedatangan Malaikat Jibril a.s. menyerupai seorang lelaki berpakaian putih dan berambut hitam untuk mengajarkan asas agama: Islam (5 Rukun), Iman (6 Rukun), Ihsan (beribadah seolah-olah melihat Allah), dan tanda-tanda Kiamat.",
    huraian: "Hadis ini dinamakan sebagai Hadis Jibril atau Ibu Sunnah. Ia menerangkan integrasi tiga rukun agama iaitu amalan jasmani (Islam), pegangan aqidah batin (Iman), dan kesedaran muraqabah iaitu merasakan kehadiran Allah (Ihsan).",
    pengajaran: [
      "Islam, Iman, dan Ihsan adalah tiga teras utama agama yang saling melengkapi.",
      "Ihsan ialah melaksanakan amalan secara terbaik kerana meyakini Allah sentiasa pengawas dan pemerhati.",
      "Masa berlakunya Kiamat adalah rahsia Allah SWT; manusia perlu mengambil iktibar daripada tanda-tandanya.",
      "Adab menuntut ilmu: menjaga kebersihan diri, berpakaian sopan dan tertib di majlis ilmu."
    ],
    nilai: "Keyakinan, Hormat, Ihsan",
    aktiviti: "Halaqah ilmu, Usrah mingguan, Bacaan dan hafazan hadis"
  },
  {
    no: 3,
    tajuk: "Rukun Islam",
    rawi: "Abu 'Abd al-Rahman 'Abdullah bin 'Umar r.a.",
    matanArab: "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Islam dibina atas lima perkara: Mengucap dua kalimah syahadah, mendirikan solat, mengeluarkan zakat, mengerjakan haji di Baitullah, dan berpuasa pada bulan Ramadan.",
    huraian: "Rasulullah SAW menggambarkan Islam seperti sebuah bangunan kukuh yang bersandarkan kepada lima tiang penyokong. Tanpa salah satu tiang ini, kestabilan bangunan agama seseorang akan terjejas.",
    pengajaran: [
      "Islam ibarat struktur bangunan dengan lima tiang kukuh.",
      "Solat adalah tiang utama agama (al-Solatu 'imaduddin).",
      "Ibadah zakat dan haji membina hubungan harmonis sesama manusia dan ketaatan harta.",
      "Puasa mendidik jiwa bersabar dan merasai kesusahan golongan miskin."
    ],
    nilai: "Keyakinan, Kesejahteraan",
    aktiviti: "Pengucapan awam, Kuliah 5 minit, Sudut rukun Islam"
  },
  {
    no: 4,
    tajuk: "Penciptaan Manusia dan Takdir",
    rawi: "Abu 'Abd al-Rahman 'Abdullah bin Mas'ud r.a.",
    matanArab: "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ الصَّادِقُ الْمَصْدُوقُ: إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Proses kejadian manusia dalam rahim (40 hari nutfah, 40 hari 'alaqah, 40 hari mudghah), peniupan roh, serta penulisan 4 ketetapan takdir: rezeki, ajal, amalan, dan bahagia atau celaka.",
    huraian: "Hadis ini membuktikan mukjizat saintifik kenabian berkaitan peringkat embriologi manusia serta mengajar keyakinan terhadap takdir dan ketentuan Allah SWT yang mendahului segala ciptaan-Nya.",
    pengajaran: [
      "Membuktikan kebesaran Allah SWT dalam penciptaan manusia secara berperingkat.",
      "Umat Islam digalakkan sentiasa memohon husnul khatimah dan tidak bersikap sombong.",
      "Dilarang mudah menghukum atau memandang hina orang lain kerana hidayah milik Allah."
    ],
    nilai: "Keyakinan, Hormat",
    aktiviti: "Menziarahi rumah kebajikan/orang tua, Menonton video sains janin"
  },
  {
    no: 5,
    tajuk: "Amalan yang Tertolak",
    rawi: "Ummul Mukminin Ummu 'Abdillah 'Aisyah r.a.",
    matanArab: "عَنْ أُمِّ الْمُؤْمِنِينَ أُمِّ عَبْدِ اللَّهِ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Sesiapa yang mereka-reka dalam urusan agama perkara yang tiada asas dengannya, maka amalan itu tertolak.",
    huraian: "Hadis ini menetapkan neraca bagi penerimaan amalan zahir. Syarat ibadah diterima ada dua: ikhlas kerana Allah (Hadis 1) dan mengikut tatacara sunnah Rasulullah SAW (Hadis 5).",
    pengajaran: [
      "Islam ialah agama yang sempurna; amalan mestilah berasaskan al-Quran dan al-Sunnah.",
      "Setiap ibadah terikat dengan syarat dan syariat yang ditetapkan.",
      "Mempelajari syariat secara sahih mengelakkan amalan bidaah yang tidak diterima."
    ],
    nilai: "Kesejahteraan, Keyakinan",
    aktiviti: "Kempen solat berjemaah, Amalan sunah harian"
  },
  {
    no: 6,
    tajuk: "Berhati-hati Terhadap Perkara Syubhah",
    rawi: "Abu 'Abdillah al-Nu'man bin Basyir r.a.",
    matanArab: "عَنْ أَبِي عَبْدِ اللَّهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا مُشْتَبَهَاتٌ... أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Halal dan haram adalah jelas, manakala di antaranya terdapat perkara syubhah. Sesiapa menjaga syubhah memelihara agama dan maruahnya. Dalam jasad ada seketul daging (hati), jika baik ia maka baiklah seluruh jasad.",
    huraian: "Mendidik umat Islam bersikap wara' (berhati-hati) terutamanya dalam aspek pemakanan dan pendapatan harian. Hati merupakan raja kepada sekalian anggota tubuh fizikal.",
    pengajaran: [
      "Penggunaan makanan, minuman dan sumber kewangan mesti dipastikan halal secara yakin.",
      "Kebersihan hati mempengaruhi akhlak dan tingkah laku zahir manusia.",
      "Menjauhi syubhah membina integriti peribadi murid."
    ],
    nilai: "Kesejahteraan, Keyakinan",
    aktiviti: "Semakan logo Halal JAKIM, Pembudayaan integriti murid"
  },
  {
    no: 7,
    tajuk: "Nasihat Tonggak Agama",
    rawi: "Abu Ruqayyah Tamim bin Aus al-Dari r.a.",
    matanArab: "عَنْ أَبِي رُقَيَّةَ تَمِيمِ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ. (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Agama itu adalah nasihat.\" Sahabat bertanya: \"Untuk siapa?\" Baginda bersabda: \"Untuk Allah, Kitab-Nya, Rasul-Nya, para pemimpin Muslimin, dan seluruh umat Islam.\"",
    huraian: "Nasihat bererti keikhlasan mengharapkan kebaikan buat pihak lain. Amalan saling berpesan dengan kebenaran mengekalkan kekuatan dan keharmonian ummah.",
    pengajaran: [
      "Nasihat adalah tiang kekuatan dan kelangsungan umat Islam.",
      "Teguran hendaklah disampaikan secara hikmah, bertempat dan beradab.",
      "Sentiasa berlapang dada menerima teguran yang membina."
    ],
    nilai: "Ihsan, Hormat",
    aktiviti: "Tazkirah, Dakwah Rakan Sebaya, Perkongsian positif media sosial"
  },
  {
    no: 8,
    tajuk: "Kehormatan Seorang Muslim",
    rawi: "Abdullah bin Umar r.a.",
    matanArab: "عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Perintah memelihara hak dan kebebasan agama, darah dan harta. Prinsip utama Islam menekankan tiada paksaan dalam beragama (Surah al-Baqarah: 256) serta kewajipan berbuat baik dan adil kepada semua manusia (al-Birr & al-Qist).",
    huraian: "Syariat Islam menjaga kehormatan setiap insan. Keadilan universal diamalkan tanpa mengira perbezaan pegangan, selari dengan perlembagaan dan perpaduan negara.",
    pengajaran: [
      "Islam mengharamkan pencerobohan nyawa, pembulian, dan kezaliman.",
      "Prinsip keadilan dan saling menghormati antara warganegara berbilang kaum.",
      "Urusan hati adalah hak perhitungan Allah SWT semata-mata."
    ],
    nilai: "Kemampanan, Kesejahteraan, Hormat",
    aktiviti: "Halaqah harmoni, Program dialog antara budaya"
  },
  {
    no: 9,
    tajuk: "Larangan Pertanyaan dan Pertikaian Melampau",
    rawi: "Abu Hurairah 'Abd al-Rahman bin Sakhr r.a.",
    matanArab: "عَنْ أَبِي هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَافْعَلُوا مِنْهُ مَا اسْتَطَعْتُمْ... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Jauhilah larangan dan laksanakan perintah mengikut kemampuan. Kebinasaan umat dahulu disebabkan banyak bertanyakan soalan helah dan mempertikaikan nabi mereka.",
    huraian: "Islam mengutamakan amal berbanding perdebatan kosong. Suruhan dilaksanakan mengikut kemampuan fizikal, manakala larangan wajib ditinggalkan keseluruhannya.",
    pengajaran: [
      "Mengelakkan daripada soalan yang tidak mendatangkan manfaat atau helah.",
      "Menumpukan kudrat kepada pelaksanaan amalan ibadah secara berdisiplin.",
      "Syariat Islam membawa prinsip kemudahan dan rahmat."
    ],
    nilai: "Keyakinan, Kepatuhan",
    aktiviti: "Bengkel penghayatan syariat, Sesi soal jawab fiqh santai"
  },
  {
    no: 10,
    tajuk: "Rezeki Halal Asas Penerimaan Doa",
    rawi: "Abu Hurairah r.a.",
    matanArab: "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Allah Maha Baik dan hanya menerima yang baik. Makanan, minuman, dan pakaian daripada sumber haram menjadi penghalang utama makbulnya doa.",
    huraian: "Doa merupakan munajat agung hamba kepada Pencipta, tetapi hijab terbesar makbulnya doa adalah makanan, minuman dan hasil daripada punca yang haram.",
    pengajaran: [
      "Keberkatan hidup dan kemakbulan doa berpunca daripada rezeki yang suci dan halal.",
      "Makanan syubhah menggelapkan hati dan melemahkan semangat untuk menuntut ilmu.",
      "Mengamalkan sifat qana'ah dan sentiasa bersyukur dengan rezeki halal."
    ],
    nilai: "Ihsan, Integriti, Kesyukuran",
    aktiviti: "Kempen rezeki berkat, Amalan pemakanan toyyibah di kantin"
  },
  {
    no: 11,
    tajuk: "Meninggalkan Keraguan",
    rawi: "Abu Muhammad al-Hasan bin 'Ali r.a.",
    matanArab: "عَنْ أَبِي مُحَمَّدٍ الْحَسَنِ بْنِ عَلِيِّ بْنِ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: حَفِظْتُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ. (رَوَاهُ التِّرْمِذِيُّ وَالنَّسَائِيُّ)",
    maksud: "\"Tinggalkanlah apa yang meragukanmu kepada apa yang tidak meragukanmu.\"",
    huraian: "Hadis ini mengajar prinsip warak iaitu meninggalkan perkara syak demi keyakinan.",
    pengajaran: [
      "Meninggalkan perkara syak dan berpegang kepada keyakinan.",
      "Sifat warak melahirkan jiwa yang tenang dan berprinsip."
    ],
    nilai: "Keyakinan, Ketelitian",
    aktiviti: "Tazkirah sifat warak, Ujian pemahaman fiqh thaharah"
  },
  {
    no: 12,
    tajuk: "Meninggalkan Perkara Tidak Berfaedah",
    rawi: "Abu Hurairah r.a.",
    matanArab: "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ. (حَدِيثٌ حَسَنٌ رَوَاهُ التِّرْمِذِيُّ)",
    maksud: "\"Sebahagian daripada keelokan Islam seseorang itu ialah dia meninggalkan perkara yang tidak bermanfaat baginya.\"",
    huraian: "Kematangan iman seseorang terbukti melalui kawalan masa dan lisan daripada perkara sia-sia.",
    pengajaran: [
      "Keindahan Islam seseorang dilihat melalui pengurusan masa dan lisan.",
      "Menumpukan masa kepada pembelajaran dan aktiviti berfaedah."
    ],
    nilai: "Disiplin, Menghargai Masa",
    aktiviti: "Kempen pengurusan masa murid, Program detox gajet dan media sosial"
  },
  {
    no: 13,
    tajuk: "Menyukai Kebaikan Sesama Muslim",
    rawi: "Anas bin Malik r.a.",
    matanArab: "عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "\"Tidak sempurna iman seseorang daripada kamu sehinggalah dia menyukai untuk saudaranya apa yang dia sukai untuk dirinya sendiri.\"",
    huraian: "Tanda kemanisan iman adalah hati yang bersih daripada hasad dengki.",
    pengajaran: [
      "Tanda kesempurnaan iman ialah menyukai kebaikan untuk saudaranya.",
      "Menjauhi hasad dengki dan sifat mementingkan diri sendiri."
    ],
    nilai: "Kasih Sayang, Ukhuwah",
    aktiviti: "Program rakan mentor akademik, Tabung sumbangan kebajikan BADAR"
  },
  {
    no: 14,
    tajuk: "Kesan Jenayah Berat dalam Islam",
    rawi: "Abdullah bin Mas'ud r.a.",
    matanArab: "عَنِ ابْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ. (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "\"Tidak halal darah seorang Muslim melainkan kerana penzina yang berkahwin, membunuh jiwa, dan murtad meninggalkan jemaah.\"",
    huraian: "Memelihara Maqasid Syariah iaitu Agama, Nyawa, Akal, Keturunan, dan Harta.",
    pengajaran: [
      "Kepentingan memelihara Maqasid Syariah.",
      "Islam menjaga ketenteraman masyarakat dan mencegah jenayah besar."
    ],
    nilai: "Keadilan, Kesejahteraan",
    aktiviti: "Ceramah kesedaran undang-undang dan bahaya jenayah juvana"
  },
  {
    no: 15,
    tajuk: "Berkata Baik, Memuliakan Jiran & Tetamu",
    rawi: "Abu Hurairah r.a.",
    matanArab: "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "\"Sesiapa yang beriman kepada Allah dan hari akhirat, maka berkatalah yang baik atau diam. Muliakanlah jiran dan tetamunya.\"",
    huraian: "Adab lisan dan pergaulan kemasyarakatan adalah bukti konkrit keimanan.",
    pengajaran: [
      "Menjaga lidah daripada perkataan kotor dan mengumpat.",
      "Menghormati jiran tetangga dan memuliakan tetamu."
    ],
    nilai: "Budi Pekerti, Menghormati Jiran",
    aktiviti: "Kempen santun lisan di sekolah, Projek ziarah ukhuwah kejiranan"
  },
  {
    no: 16,
    tajuk: "Menjauhi Sifat Pemarah",
    rawi: "Abu Hurairah r.a.",
    matanArab: "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَجُلًا قَالَ لِلنَّبِّيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي، قَالَ: لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ. (رَوَاهُ الْبُخَارِيُّ)",
    maksud: "\"Jangan marah.\" (Baginda mengulanginya beberapa kali).",
    huraian: "Nafsu amarah adalah punca keretakan hubungan. Kekuatan sebenar adalah mengawal diri.",
    pengajaran: [
      "Pesanan berulang: 'Jangan marah' untuk memelihara kestabilan emosi.",
      "Kekuatan terletak pada keupayaan menahan amarah."
    ],
    nilai: "Kesabaran, Kawalan Diri",
    aktiviti: "Bengkel pengurusan emosi dan stres murid"
  },
  {
    no: 17,
    tajuk: "Kesempurnaan (Ihsan) dalam Kebaikan",
    rawi: "Syaddad bin Aus r.a.",
    matanArab: "عَنْ شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Sesungguhnya Allah mewajibkan berlaku ihsan dalam setiap perkara...\"",
    huraian: "Konsep ihsan merangkumi belas kasihan terhadap haiwan, alam sekitar, dan ketelitian kerja (itqan).",
    pengajaran: [
      "Berbuat ihsan dalam semua perkara termasuk terhadap haiwan.",
      "Melaksanakan tugasan dengan kualiti dan mutu tertinggi."
    ],
    nilai: "Kasih Sayang, Kecemerlangan (Itqan)",
    aktiviti: "Kempen kelestarian alam dan menjaga kebersihan surau sekolah"
  },
  {
    no: 18,
    tajuk: "Takwa dan Akhlak Mulia",
    rawi: "Abu Zar & Mu'az bin Jabal r.a.",
    matanArab: "اتَّقِ اللَّهِ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ. (رَوَاهُ التِّرْمِذِيُّ)",
    maksud: "\"Bertakwalah di mana jua kamu berada, iringilah kejahatan dengan kebaikan nescaya memadamkannya, dan berakhlaklah sesama manusia dengan akhlak mulia.\"",
    huraian: "Tiga wasiat agung: Hubungan dengan Allah, pembersihan diri, dan adab sesama manusia.",
    pengajaran: [
      "Bertakwalah di mana jua berada sama ada di khalayak mahupun bersendirian.",
      "Menunjukkan budi pekerti yang mulia kepada semua orang."
    ],
    nilai: "Takwa, Akhlak Mulia",
    aktiviti: "Kempen amalan senyum dan salam di sekolah"
  },
  {
    no: 19,
    tajuk: "Panduan Pengukuhan Iman Anak Muda",
    rawi: "Abdullah bin 'Abbas r.a.",
    matanArab: "يَا غُلَامُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ... (رَوَاهُ التِّرْمِذِيُّ)",
    maksud: "\"Wahai anak muda! Peliharalah Allah nescaya Allah menjagamu...\"",
    huraian: "Wasiat kebergantungan mutlak dan tawakal kepada Allah SWT sejak usia muda.",
    pengajaran: [
      "Wasiat Rasulullah: 'Jagalah Allah, nescaya Allah menjagamu.'",
      "Memohon perlindungan dan pertolongan hanya kepada Allah."
    ],
    nilai: "Tawakal, Keyakinan Teguh",
    aktiviti: "Halaqah pengukuhan aqidah belia dan murid"
  },
  {
    no: 20,
    tajuk: "Keutamaan Sifat Malu",
    rawi: "Abu Mas'ud al-Ansari r.a.",
    matanArab: "إِذَا لَمْ تَسْتَحْيِ فَاصْنَعْ مَا شِئْتَ. (رَوَاهُ الْبُخَارِيُّ)",
    maksud: "\"Sekiranya engkau tidak merasa malu, maka lakukanlah apa yang engkau kehendaki.\"",
    huraian: "Sifat malu adalah perisai paling ampuh daripada maksiat.",
    pengajaran: [
      "Malu adalah cabang iman dan benteng kejahatan.",
      "Menjaga adab sopan dan maruah diri seorang Muslim."
    ],
    nilai: "Sopan Santun, Menjaga Maruah",
    aktiviti: "Kempen penghayatan adab dan busana sopan"
  },
  {
    no: 21,
    tajuk: "Iman dan Istiqamah",
    rawi: "Sufyan bin 'Abdillah r.a.",
    matanArab: "قُلْ: آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ. (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Katakanlah: Aku beriman kepada Allah, kemudian beristiqamahlah.\"",
    huraian: "Istiqamah dalam aqidah dan amal soleh adalah tunjang kejayaan sejati.",
    pengajaran: [
      "Beriman kepada Allah dan istiqamah dalam solat serta amalan."
    ],
    nilai: "Keteguhan Jiwa, Istiqamah",
    aktiviti: "Buku rekod amalan harian murid"
  },
  {
    no: 22,
    tajuk: "Syarat Asas Masuk Syurga",
    rawi: "Jabir bin 'Abdillah r.a.",
    matanArab: "أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ... أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ. (رَوَاهُ مُسْلِمٌ)",
    maksud: "Solat fardu, puasa Ramadan, halalkan yang halal dan haramkan yang haram membawa ke syurga.",
    huraian: "Islam itu mudah dan memelihara kewajipan asas syariat.",
    pengajaran: [
      "Ketaatan kepada perkara asas fardu dan menjauhi yang haram."
    ],
    nilai: "Kepatuhan Syariat",
    aktiviti: "Program pencerahan hukum fiqh fardu ain"
  },
  {
    no: 23,
    tajuk: "Ganjaran Kebersihan & Amalan",
    rawi: "Abu Malik al-Asy'ari r.a.",
    matanArab: "الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Kebersihan itu sebahagian iman, zikir memenuhi neraca, dan solat itu cahaya...\"",
    huraian: "Kesucian fizikal dan zikir lisan adalah tonggak kekuatan seorang mukmin.",
    pengajaran: [
      "Kesucian sebahagian iman, zikir memenuhi Mizan."
    ],
    nilai: "Kebersihan, Kesabaran",
    aktiviti: "Gotong-royong imarah musolla sekolah"
  },
  {
    no: 24,
    tajuk: "Keluasan Limpah Kurnia Allah",
    rawi: "Abu Zar al-Ghifari r.a. (Hadis Qudsi)",
    matanArab: "يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا... (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Wahai hamba-Ku! Sesungguhnya Aku haramkan kezaliman ke atas diri-Ku...\"",
    huraian: "Pengharaman segala bentuk kezaliman dan keluasan rahmat Allah.",
    pengajaran: [
      "Allah mengharamkan kezaliman dan menjamin ganjaran adil."
    ],
    nilai: "Keadilan, Keinsafan",
    aktiviti: "Sesi muhasabah diri dan tadabbur Asmaul Husna"
  },
  {
    no: 25,
    tajuk: "Persaingan dalam Kebaikan",
    rawi: "Abu Zar al-Ghifari r.a.",
    matanArab: "إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Setiap tasbih, tahmid, takbir, amar ma'ruf dan nahi mungkar adalah sedekah.",
    huraian: "Pintu kebajikan dan sedekah terbuka luas tanpa had wang ringgit.",
    pengajaran: [
      "Berlumba-lumba dalam kebajikan rohani."
    ],
    nilai: "Kedermawanan, Semangat Beramal",
    aktiviti: "Amalan zikir harian selepas solat fardu"
  },
  {
    no: 26,
    tajuk: "Pelbagai Sarana Sedekah",
    rawi: "Abu Hurairah r.a.",
    matanArab: "كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Mendamaikan manusia, membantu mengangkat barang, membuang duri di jalan adalah sedekah.",
    huraian: "Kesyukuran terhadap nikmat kesihatan fizikal dizahirkan melalui khidmat sosial.",
    pengajaran: [
      "Khidmat membantu manusia dikira sebagai sedekah harian."
    ],
    nilai: "Prihatin, Khidmat Masyarakat",
    aktiviti: "Operasi bersihkan tangga dan laluan sekolah"
  },
  {
    no: 27,
    tajuk: "Tanda Kebaikan dan Dosa",
    rawi: "Al-Nawwas bin Sam'an r.a.",
    matanArab: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ. (رَوَاهُ مُسْلِمٌ)",
    maksud: "\"Kebaikan itu akhlak mulia. Dosa ialah apa yang meresahkan jiwamu dan benci diketahui orang.\"",
    huraian: "Hati nurani orang beriman adalah pengesan semula jadi terhadap perbuatan maksiat.",
    pengajaran: [
      "Dosa meragukan hati, manakala kebaikan menenangkan jiwa."
    ],
    nilai: "Integriti, Muhasabah Diri",
    aktiviti: "Sesi refleksi sahsiah peribadi murid"
  },
  {
    no: 28,
    tajuk: "Pesanan Takwa dan Sunah",
    rawi: "Al-'Irbadh bin Sariyah r.a.",
    matanArab: "فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ... (رَوَاهُ أَبُو دَاوُدَ وَالتِّرْمِذِيُّ)",
    maksud: "Berpegang teguh dengan Sunnah Nabi dan Sunnah Khulafa' ar-Rasyidin.",
    huraian: "Panduan penyelamat ketika berlakunya perselisihan adalah kembali kepada sunnah sahih.",
    pengajaran: [
      "Berpegang teguh dengan Sunnah dan menjauhi bidaah."
    ],
    nilai: "Ketaatan Sunnah",
    aktiviti: "Kajian sirah Khulafa' ar-Rasyidin"
  },
  {
    no: 29,
    tajuk: "Jalan ke Syurga",
    rawi: "Mu'az bin Jabal r.a.",
    matanArab: "أَلَا أُخْبِرُكَ بِمَلَاكِ ذَلِكَ كُلِّهِ؟ ... كُفَّ عَلَيْكَ هَذَا. (رَوَاهُ التِّرْمِذِيُّ)",
    maksud: "Solat, puasa perisai, sedekah pemadam dosa, dan kemuncaknya ialah menahan lidah.",
    huraian: "Lidah adalah penentu utama keselamatan akhirat seseorang insan.",
    pengajaran: [
      "Menjaga lidah daripada fitnah dan umpatan."
    ],
    nilai: "Disiplin Diri, Menjaga Lisan",
    aktiviti: "Program Qiamullail murid asrama"
  },
  {
    no: 30,
    tajuk: "Larangan Melampaui Batasan Syarak",
    rawi: "Abu Tha'labah al-Khusyani r.a.",
    matanArab: "إِنَّ اللَّهَ فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا... (رَوَاهُ الدَّارَقُطْنِيُّ)",
    maksud: "Peliharalah kewajipan fardu dan jangan melampaui batasan syarak.",
    huraian: "Menjaga batas halal dan haram tanpa menambah kesulitan yang tidak disyariatkan.",
    pengajaran: [
      "Melaksanakan fardu dan tidak melanggar batasan hukum Allah."
    ],
    nilai: "Disiplin Syariah",
    aktiviti: "Bengkel fiqh batasan pergaulan remaja"
  },
  {
    no: 31,
    tajuk: "Konsep Zuhud",
    rawi: "Sahl bin Sa'ad r.a.",
    matanArab: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا فِي أَيْدِي النَّاسِ يُحِبَّكَ النَّاسُ. (رَوَاهُ ابْنُ مَاجَهْ)",
    maksud: "\"Zuhudlah pada dunia nescaya dicintai Allah, zuhudlah pada milik manusia nescaya dicintai manusia.\"",
    huraian: "Hati tidak diperhambakan oleh harta dan tidak iri terhadap rezeki orang lain.",
    pengajaran: [
      "Zuhud melahirkan ketenangan batin dan kasih sayang sesama insan."
    ],
    nilai: "Qana'ah, Rendah Diri",
    aktiviti: "Tazkirah hidup bersederhana"
  },
  {
    no: 32,
    tajuk: "Menghindari Mudarat",
    rawi: "Abu Sa'id al-Khudri r.a.",
    matanArab: "لَا ضَرَرَ وَلَا ضِرَارَ. (رَوَاهُ ابْنُ مَاجَهْ وَالدَّارَقُطْنِيُّ)",
    maksud: "\"Tidak boleh memudaratkan dan tidak boleh membalas kemudaratan.\"",
    huraian: "Kaedah fiqh agung yang melarang segala bahaya fizikal, emosi, dan membalas dendam.",
    pengajaran: [
      "Prinsip tidak memudaratkan diri sendiri atau orang lain."
    ],
    nilai: "Kesejahteraan Diri",
    aktiviti: "Kempen anti-vape dan anti-buli"
  },
  {
    no: 33,
    tajuk: "Asas Penghakiman dalam Islam",
    rawi: "Abdullah bin 'Abbas r.a.",
    matanArab: "الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ. (رَوَاهُ الْبَيْهَقِيُّ)",
    maksud: "Bukti wajib ke atas pendakwa dan sumpah ke atas orang yang menafikan.",
    huraian: "Menjamin keadilan dan mengelakkan tuduhan palsu terhadap orang tidak bersalah.",
    pengajaran: [
      "Tidak menuduh rakan tanpa bukti kukuh."
    ],
    nilai: "Integriti, Keadilan",
    aktiviti: "Bengkel adab siasatan disiplin pengawas"
  },
  {
    no: 34,
    tajuk: "Tanggungjawab Mengubah Kemungkaran",
    rawi: "Abu Sa'id al-Khudri r.a.",
    matanArab: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Ubah kemungkaran dengan kuasa, lisan, atau ingkar di dalam hati.",
    huraian: "Amar makruf nahi mungkar dilaksanakan mengikut kapasiti dan hikmah.",
    pengajaran: [
      "Pengawas BADAR berperanan menegur salah laku dengan bijaksana."
    ],
    nilai: "Keberanian Moral",
    aktiviti: "Latihan ketegasan berhemah pengawas"
  },
  {
    no: 35,
    tajuk: "Hak Persaudaraan Muslim",
    rawi: "Abu Hurairah r.a.",
    matanArab: "لَا تَحَاسَدُوا، وَلَا تَبَاغَضُوا... وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، الْمُسْلِمُ أَخُو الْمُسْلِمِ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Dilarang hasad, membenci, berpaling muka; Muslim adalah saudara Muslim.",
    huraian: "Persaudaraan Islam menuntut saling membantu dan menghapuskan penindasan.",
    pengajaran: [
      "Dilarang menghina, menzalimi atau memulaukan saudara seagama."
    ],
    nilai: "Ukhuwah, Perpaduan",
    aktiviti: "Kempen 'Sayangi Sahabat' peringkat sekolah"
  },
  {
    no: 36,
    tajuk: "Menunaikan Keperluan Saudara & Ilmu",
    rawi: "Abu Hurairah r.a.",
    matanArab: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً... نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ... (رَوَاهُ مُسْلِمٌ)",
    maksud: "Meringankan kesusahan mukmin, menutup aibnya, dan menuntut ilmu dimudahkan jalan ke syurga.",
    huraian: "Ganjaran besar membantu rakan dan menuntut ilmu dengan ikhlas.",
    pengajaran: [
      "Menutup aib saudara dan gigih menuntut ilmu."
    ],
    nilai: "Prihatin, Cintakan Ilmu",
    aktiviti: "Kumpulan belajar bersama (study group) BADAR"
  },
  {
    no: 37,
    tajuk: "Rahmat Allah Berkaitan Pahala & Dosa",
    rawi: "Abdullah bin 'Abbas r.a. (Hadis Qudsi)",
    matanArab: "فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً... (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)",
    maksud: "Niat kebaikan ditulis 1 pahala; jika dilakukan diganda 10 hingga 700 kali ganda.",
    huraian: "Keluasan rahmat Allah SWT yang melipatgandakan ganjaran kebajikan.",
    pengajaran: [
      "Sentiasa berniat baik dalam setiap langkah kehidupan."
    ],
    nilai: "Kesyukuran, Husnuzon",
    aktiviti: "Sesi tadabbur keluasan rahmat Allah"
  },
  {
    no: 38,
    tajuk: "Kedudukan Wali Allah",
    rawi: "Abu Hurairah r.a. (Hadis Qudsi)",
    matanArab: "مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ... وَلَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ... (رَوَاهُ الْبُخَارِيُّ)",
    maksud: "Mendekati Allah dengan amalan fardu dan memperbanyakkan amalan sunat.",
    huraian: "Amalan nawafil (sunat) mengundang cinta dan pertolongan istimewa Allah.",
    pengajaran: [
      "Menyempurnakan fardu dan menghidupkan solat serta puasa sunat."
    ],
    nilai: "Ketaatan Rohani",
    aktiviti: "Amalan solat Dhuha dan Rawatib harian di surau"
  },
  {
    no: 39,
    tajuk: "Kesalahan yang Dimaafkan",
    rawi: "Abdullah bin 'Abbas r.a.",
    matanArab: "إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي: الْخَطَأَ، وَالنِّسْيَانَ، وَمَا اسْتُكْرِهُوا عَلَيْهِ. (رَوَاهُ ابْنُ مَاجَهْ)",
    maksud: "Dimaafkan kesilapan tanpa sengaja, terlupa, dan perkara yang dipaksa.",
    huraian: "Prinsip rahmat syariat yang tidak membebankan manusia di luar kawalan niat.",
    pengajaran: [
      "Memaafkan kesilapan rakan yang tidak disengajakan."
    ],
    nilai: "Pemaaf, Toleransi",
    aktiviti: "Perbincangan fiqh rukhsah dan kemudahan syarak"
  },
  {
    no: 40,
    tajuk: "Merebut Peluang Beramal",
    rawi: "Abdullah bin 'Umar r.a.",
    matanArab: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ... (رَوَاهُ الْبُخَارِيُّ)",
    maksud: "\"Jadilah kamu di dunia seperti orang asing atau pengembara yang melintasi jalan.\"",
    huraian: "Dunia bersifat sementara; jangan bertangguh dalam membuat kebaikan dan menuntut ilmu.",
    pengajaran: [
      "Memanfaatkan waktu muda dan sihat sebelum tiba waktu sukar."
    ],
    nilai: "Menghargai Usia, Ketangkasan",
    aktiviti: "Bengkel penetapan matlamat hidup murid"
  }
];

export function searchHadis(query: string, list: HadisItem[] = pangkalanHadis): HadisItem[] {
  const raw = query.trim();
  const q = raw.toLowerCase();
  if (!q) return list;

  const corakNombor = q.match(/^(?:hadis|hadith|h|no\.?|nombor)?\s*(\d+)$/i);
  if (corakNombor) {
    const nomborDicari = parseInt(corakNombor[1], 10);
    return list.filter(h => h.no === nomborDicari);
  }

  const kataBersih = q.replace(/^(hadis|hadith)\s*/i, '');
  return list.filter(h =>
    h.tajuk.toLowerCase().includes(kataBersih) ||
    h.tajuk.toLowerCase().includes(q) ||
    h.maksud.toLowerCase().includes(kataBersih) ||
    h.nilai.toLowerCase().includes(kataBersih) ||
    h.rawi.toLowerCase().includes(kataBersih) ||
    (h.huraian && h.huraian.toLowerCase().includes(kataBersih))
  );
}
