export type Language = 'ms' | 'en';

export interface TranslationDictionary {
  // Navigation
  badarTitle: string;
  badarSubtitle: string;
  navHome: string;
  navIntro: string;
  navVision: string;
  navPurpose: string;
  navHadis40: string;
  navSettings: string;
  navBackHome: string;
  navBackHadisCards: string;
  darkModeLight: string;
  darkModeDark: string;

  // Hero
  heroBadge: string;
  heroTitlePrefix: string;
  heroTitleSuffix: string;
  heroDesc: string;
  heroBtnHadis: string;
  heroBtnRole: string;

  // Intro
  introTag: string;
  introTitle: string;
  introP1: string;
  introP2: string;

  // Vision & Mission
  directionTag: string;
  vmTitle: string;
  vmSubtitle: string;
  visionTitle: string;
  visionDesc: string;
  missionTitle: string;
  missionList: string[];

  // Purpose (6 Objectives)
  purposeTag: string;
  purposeTitle: string;
  purposeSubtitle: string;
  purposeList: {
    num: string;
    tajuk: string;
    desc: string;
    isHighlight?: boolean;
  }[];

  // Banner
  bannerBadge: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerBtn: string;

  // Footer
  footerSchoolTitle: string;
  footerSchoolDesc: string;
  footerLinksTitle: string;
  footerLocationTitle: string;
  footerLocation: string;
  footerCopyright: string;
  footerDevCredit: string;

  // Hadis 40 Portal
  hadisPortalTitle: string;
  hadisIntroBadge: string;
  hadisIntroTitle: string;
  hadisIntroDesc: string;
  hadisPurposeTitle: string;
  hadisPurposeList: { title: string; desc: string }[];
  hadisWhyTitle: string;
  hadisWhyList: { title: string; desc: string }[];
  hadisBtnNawawi: string;
  hadisBtnSearch: string;

  // Biografi Nawawi
  authorBadge: string;
  authorTitle: string;
  authorSubtitle: string;
  authorBioTitle: string;
  authorBioList: { label: string; value: string }[];
  authorEduTitle: string;
  authorEduP1: string;
  authorEduP2: string;
  authorQualitiesTitle: string;
  authorQualities: {
    icon: string;
    color: string;
    tajuk: string;
    desc: string;
  }[];

  // Search & Grid
  searchBadge: string;
  searchTitle: string;
  searchDesc: string;
  searchPlaceholder: string;
  clearSearch: string;
  hadisCardsHeader: string;
  hadisCardsSubheader: string;
  displayingCount: (count: number) => string;
  noHadisFound: (query: string) => string;
  noHadisSub: string;
  openCard: string;

  // Detail View
  copyBtn: string;
  copiedBtn: string;
  hadisNumberBadge: (no: number) => string;
  meaningTitle: string;
  meaningSubtitle: string;
  explanationTitle: string;
  explanationSubtitle: string;
  lessonsTitle: string;
  lessonsSubtitle: string;
  valuesTitle: string;
  activitiesTitle: string;
  prevHadisBtn: string;
  allCardsBtn: string;
  nextHadisBtn: string;

  // Settings Modal
  settingsTitle: string;
  settingsSubtitle: string;
  langSectionTitle: string;
  langSectionDesc: string;
  langMalay: string;
  langEnglish: string;
  themeSectionTitle: string;
  themeSectionDesc: string;
  themeLight: string;
  themeDark: string;
  fontSizeSectionTitle: string;
  fontSizeSectionDesc: string;
  fontSizeNormal: string;
  fontSizeMedium: string;
  fontSizeLarge: string;
  closeBtn: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  ms: {
    badarTitle: "BADAR",
    badarSubtitle: "Badan Dakwah & Rohani",
    navHome: "Utama",
    navIntro: "Pengenalan",
    navVision: "Visi & Misi",
    navPurpose: "Tujuan",
    navHadis40: "Sudut Hadis 40",
    navSettings: "Tetapan",
    navBackHome: "Kembali ke Halaman Utama",
    navBackHadisCards: "Kembali ke Kad Hadis 40",
    darkModeLight: "Tukar ke Mod Cerah (Siang)",
    darkModeDark: "Tukar ke Mod Gelap (Malam)",

    heroBadge: "Membina Sahsiah Rabbani, Memperkasa Ummah",
    heroTitlePrefix: "Selamat Datang ke Portal Rasmi",
    heroTitleSuffix: "Badan Dakwah & Rohani (BADAR)",
    heroDesc: "Wadah kepimpinan murid dalam menyuburkan penghayatan Islam, mengimarahkan musolla, serta melahirkan generasi berilmu dan berakhlak mulia.",
    heroBtnHadis: "Masuk ke Sudut Hadis 40",
    heroBtnRole: "Ketahui Peranan Kami",

    introTag: "Tentang Organisasi",
    introTitle: "Pengenalan Kepada BADAR",
    introP1: "Badan Dakwah dan Rohani (BADAR) merupakan sebuah badan kepimpinan murid berteraskan Islam yang bernaung di bawah Panitia Pendidikan Islam dan Unit Hal Ehwal Murid (HEM).",
    introP2: "BADAR berfungsi sebagai tulang belakang dalam memelihara disiplin kerohanian, menyuburkan amalan sunnah, serta bertindak sebagai rakan pembimbing dakwah (peer da'i) yang mendekati murid-murid lain dengan pendekatan kasih sayang, hikmah, dan nasihat yang murni.",

    directionTag: "Hala Tuju",
    vmTitle: "Visi & Misi BADAR",
    vmSubtitle: "Gagasan perjuangan membentuk insan yang seimbang duniawi dan ukhrawi",
    visionTitle: "Visi BADAR",
    visionDesc: "Melahirkan barisan generasi murid yang teguh aqidah, cemerlang sahsiah, dan berketerampilan sebagai duta dakwah yang memimpin ummah ke arah keredaan Allah SWT.",
    missionTitle: "Misi BADAR",
    missionList: [
      "Mengimarahkan musolla sekolah sebagai pusat ibadah, ilmu, dan penyatuan ukhuwah.",
      "Menerapkan kefahaman fardu ain, adab, dan nilai murni melalui usrah serta tazkirah berterusan.",
      "Mempromosikan budaya hidup berlandaskan Sunnah Nabawiyyah dan Al-Quran dalam kehidupan seharian."
    ],

    purposeTag: "Objektif Penubuhan",
    purposeTitle: "Tujuan BADAR Ditubuhkan",
    purposeSubtitle: "Peranan penting BADAR sebagai pemangkin persekitaran soleh di sekolah",
    purposeList: [
      {
        num: "01",
        tajuk: "Memperkasa Ibadah Solat",
        desc: "Memastikan solat fardu berjemaah diamalkan secara tertib, mendisiplinkan saf, serta menghidupkan azan dan solat sunat di musolla."
      },
      {
        num: "02",
        tajuk: "Bimbingan Rakan Sebaya",
        desc: "Menjadi jambatan mesra kepada murid lain yang memerlukan bimbingan membaca al-Quran, fardu ain, serta sokongan emosi berlandaskan Islam."
      },
      {
        num: "03",
        tajuk: "Pembudayaan Sunnah",
        desc: "Menghidupkan sunnah Rasulullah SAW seperti memberi salam, senyum, adab makan, dan penghayatan Hadis 40 dalam sahsiah harian."
      },
      {
        num: "04",
        tajuk: "Mencegah Gejala Negatif",
        desc: "Membantu pihak sekolah membendung masalah sosial, buli, dan perbuatan merosakkan diri melalui nasihat berhemah (amar ma'ruf nahi mungkar)."
      },
      {
        num: "05",
        tajuk: "Melahirkan Pemimpin Da'i",
        desc: "Memberi pendedahan kepimpinan, pengurusan majlis ilmu, dan pengucapan awam kepada murid agar berani menegakkan kebenaran."
      },
      {
        num: "06",
        tajuk: "Penghayatan Hadis KPM",
        desc: "Menyokong agenda Kementerian Pendidikan Malaysia dalam memartabatkan Modul Penghayatan Hadis 40 Imam Nawawi di peringkat sekolah.",
        isHighlight: true
      }
    ],

    bannerBadge: "Ruang Ilmu Istimewa",
    bannerTitle: "Sudut Hadis 40 Imam An-Nawawi",
    bannerDesc: "Kami menyediakan halaman interaktif khas yang menghimpunkan kesemua 40 Hadis Al-Imam An-Nawawi lengkap dengan teks Arab, maksud, huraian mendalam, pengajaran berpandukan Modul Edisi Kedua KPM, serta carian pintar.",
    bannerBtn: "Buka Sudut Hadis 40 Sekarang",

    footerSchoolTitle: "BADAR SMA Nurul Ittifaq",
    footerSchoolDesc: "Badan Dakwah dan Rohani komited menyuburkan akhlak dan penghayatan Islam dalam kalangan warga institusi.",
    footerLinksTitle: "Pautan Pantas",
    footerLocationTitle: "Lokasi & Operasi",
    footerLocation: "Musolla Utama / Bilik Gerakan BADAR",
    footerCopyright: "© 2026 Badan Dakwah dan Rohani (BADAR) Sekolah Menengah Agama Nurul Ittifaq. Membina Sahsiah Rabbani.",
    footerDevCredit: "Dibangun dan Dibina Oleh Khir Al Hakim",

    hadisPortalTitle: "SUDUT HADIS 40",
    hadisIntroBadge: "Khazanah Nabawi Warga Sekolah",
    hadisIntroTitle: "Selamat Datang ke Sudut Hadis 40 Imam An-Nawawi",
    hadisIntroDesc: "Platform interaktif pendedahan hadis-hadis asas susunan Al-Imam Yahya bin Syaraf An-Nawawi, berteraskan Modul Penghayatan Hadis 40 (Edisi Kedua KPM) demi melahirkan murid yang berakhlak mulia dan berintegriti tinggi.",
    hadisPurposeTitle: "Tujuan Mendedahkan Hadis 40",
    hadisPurposeList: [
      {
        title: "Membina Asas Rohani",
        desc: "Mengukuhkan kefahaman aqidah, ibadah dan fardu ain murid sejak peringkat persekolahan."
      },
      {
        title: "Menyemai Karamah Insaniah",
        desc: "Menanam nilai belas kasihan, hormat-menghormati, serta keadilan merentasi kaum dan agama."
      },
      {
        title: "Mencegah Gejala Sosial",
        desc: "Memberi pedoman hadis sebagai benteng daripada salah laku buli, penipuan, dan kelakuan negatif."
      }
    ],
    hadisWhyTitle: "Mengapa Hadis 40 Sesuai untuk Pelajar?",
    hadisWhyList: [
      {
        title: "Jawami' al-Kalim",
        desc: "Matan hadisnya ringkas, bernas, dan mudah dihafaz tetapi mencakupi paksi perundangan Islam yang sangat luas."
      },
      {
        title: "Praktikal & Relevan",
        desc: "Merangkumi adab harian murid — bermula daripada niat belajar, memelihara lisan, mengawal kemarahan, menjaga makanan halal, sehinggalah adab berkasih sayang sesama sahabat."
      },
      {
        title: "Panduan Lengkap Kehidupan",
        desc: "Mengimbangi antara tuntutan kecemerlangan akademik dengan kemuliaan akhlak peribadi."
      }
    ],
    hadisBtnNawawi: "Terokai Imam An-Nawawi",
    hadisBtnSearch: "Cari Hadis 40",

    authorBadge: "Mengenali Pengarang Agung",
    authorTitle: "Al-Imam Yahya bin Syaraf An-Nawawi",
    authorSubtitle: "Tokoh Mujtahid, Muhaddith, dan Tiang Utama Mazhab Syafi'i (631H – 676H / 1233M – 1277M)",
    authorBioTitle: "Biodata Ringkas",
    authorBioList: [
      { label: "Nama Penuh", value: "Abu Zakariyya Yahya bin Syaraf bin Murri bin Hasan An-Nawawi." },
      { label: "Tempat Lahir", value: "Desa Nawa, berdekatan Damsyik, Syria pada tahun 631 Hijrah." },
      { label: "Gelaran", value: "Muhyiddin (Penghidup Agama — gelaran yang beliau elakkan atas sifat tawaduk)." },
      { label: "Mazhab Fiqh", value: "Mazhab Syafi'i (Beliau bersama Imam Ar-Rafi'i merupakan paksi tarjih hukum Mazhab Syafi'i)." },
      { label: "Kewafatan", value: "Meninggal dunia di kampung kelahirannya, Nawa pada tahun 676 Hijrah (ketika berusia sekitar 45 tahun Hijrah)." }
    ],
    authorEduTitle: "Ketekunan Pendidikan",
    authorEduP1: "Beliau menghafaz Al-Quran sebelum mencecah usia baligh. Pada usia 18 tahun, beliau berpindah ke Damsyik dan belajar di Madrasah Ar-Rawahiyyah.",
    authorEduP2: "12 Halaqah Ilmu Sehari: Beliau menghadiri dan mendalami 12 kelas pengajian sehari merangkumi Sahih al-Bukhari, Sahih Muslim, ilmu Usul Fiqh, Nahu, Bahasa Arab dan Perubatan. Beliau tidak mensia-siakan walau sesaat waktunya melainkan untuk mentelaah dan menulis ilmu.",
    authorQualitiesTitle: "Keistimewaan Unik Imam An-Nawawi",
    authorQualities: [
      {
        icon: "fa-clock-rotate-left",
        color: "text-amber-800",
        tajuk: "Keberkatan Usia Muda",
        desc: "Wafat pada usia yang sangat muda (~45 tahun), namun karya agung beliau seperti Riyadhus Solihin dan Hadis 40 kekal dihafaz di seluruh dunia sehingga kini."
      },
      {
        icon: "fa-hand-holding-heart",
        color: "text-teal-800",
        tajuk: "Wara' & Zuhud Tinggi",
        desc: "Menolak menerima gaji di Darul Hadis. Beliau hanya makan sekali sehari dan menolak makan buah Damsyik kerana bimbang syubhah tanah wakaf."
      },
      {
        icon: "fa-shield-halved",
        color: "text-red-700",
        tajuk: "Tegur Sultan Baybars",
        desc: "Sangat berani membela hak rakyat jelata. Beliau bersemuka dan menulis surat kepada Sultan Zahir Baybars membantah cukai perang ke atas rakyat."
      },
      {
        icon: "fa-feather",
        color: "text-blue-800",
        tajuk: "Membujang Kerana Ilmu",
        desc: "Tergolong dalam ulama besar yang tidak sempat berkahwin (Ulama' al-'Uzzab) kerana seluruh hidupnya diwakafkan untuk ilmu dan ummah."
      }
    ],

    searchBadge: "Carian Pintas Hadis",
    searchTitle: "Cari Kad Hadis Pilihan Anda",
    searchDesc: "Taip nombor hadis ataupun tajuk hadis yang berkenaan",
    searchPlaceholder: "Contoh: Hadis 1, Hadis 5, niat, ikhlas, doa...",
    clearSearch: "Padam carian",
    hadisCardsHeader: "Kad Hadis 40",
    hadisCardsSubheader: "Klik mana-mana kad untuk membuka helaian huraian penuh setiap hadis:",
    displayingCount: (c) => `Memaparkan ${c} Hadis`,
    noHadisFound: (q) => `Tiada hadis ditemui untuk "${q}".`,
    noHadisSub: "Sila masukkan nombor 1 hingga 40 atau kata kunci lain.",
    openCard: "Buka",

    copyBtn: "Salin",
    copiedBtn: "Disalin!",
    hadisNumberBadge: (no) => `Hadis #${no.toString().padStart(2, '0')}`,
    meaningTitle: "Maksud Hadis",
    meaningSubtitle: "Terjemahan lafaz sabda Rasulullah SAW",
    explanationTitle: "Huraian Hadis",
    explanationSubtitle: "Konteks, latar belakang dan ulasan syariat",
    lessonsTitle: "Pengajaran Hadis (Iktibar KPM)",
    lessonsSubtitle: "Poin penting yang wajib dihayati dalam kehidupan seharian",
    valuesTitle: "Fokus Nilai Murni",
    activitiesTitle: "Cadangan Aktiviti KPM",
    prevHadisBtn: "Hadis Sebelumnya",
    allCardsBtn: "Semua Kad Hadis 40",
    nextHadisBtn: "Hadis Seterusnya",

    settingsTitle: "Tetapan Sistem",
    settingsSubtitle: "Sesuaikan pengalaman portal mengikut keselesaan anda",
    langSectionTitle: "Pilihan Bahasa (Language)",
    langSectionDesc: "Pilih bahasa antara muka untuk portal",
    langMalay: "Bahasa Melayu (Asal)",
    langEnglish: "English (Inggeris)",
    themeSectionTitle: "Tema Paparan",
    themeSectionDesc: "Pilih mod warna untuk pencahayaan optimum",
    themeLight: "Mod Cerah",
    themeDark: "Mod Gelap",
    fontSizeSectionTitle: "Saiz Fon Teks Arab",
    fontSizeSectionDesc: "Ubah saiz tulisan khat Arab hadis untuk keselesaan membaca",
    fontSizeNormal: "Biasa",
    fontSizeMedium: "Sederhana",
    fontSizeLarge: "Besar",
    closeBtn: "Simpan & Tutup"
  },
  en: {
    badarTitle: "BADAR",
    badarSubtitle: "Islamic & Spiritual Dakwah Body",
    navHome: "Home",
    navIntro: "About",
    navVision: "Vision & Mission",
    navPurpose: "Objectives",
    navHadis40: "40 Hadiths Corner",
    navSettings: "Settings",
    navBackHome: "Back to Home",
    navBackHadisCards: "Back to Hadith Cards",
    darkModeLight: "Switch to Light Mode",
    darkModeDark: "Switch to Dark Mode",

    heroBadge: "Nurturing Rabbani Character, Empowering the Ummah",
    heroTitlePrefix: "Welcome to the Official Portal of",
    heroTitleSuffix: "Badan Dakwah & Rohani (BADAR)",
    heroDesc: "A student leadership platform cultivating Islamic values, enlivening the school musolla, and shaping knowledgeable and noble-charactered generations.",
    heroBtnHadis: "Enter 40 Hadiths Corner",
    heroBtnRole: "Discover Our Role",

    introTag: "About Organization",
    introTitle: "Introduction to BADAR",
    introP1: "Badan Dakwah dan Rohani (BADAR) is an Islamic student leadership council under the purview of the Islamic Education Panel and Student Affairs Unit (HEM).",
    introP2: "BADAR serves as the spiritual backbone maintaining religious discipline, nurturing prophetic traditions, and serving as peer da'wah mentors who engage fellow students with compassion, wisdom, and sincere guidance.",

    directionTag: "Strategic Direction",
    vmTitle: "Vision & Mission of BADAR",
    vmSubtitle: "A collective aspiration to nurture individuals balanced in both worldly affairs and the hereafter",
    visionTitle: "BADAR's Vision",
    visionDesc: "To produce a generation of students with steadfast faith, exemplary character, and leadership skills as ambassadors of da'wah guiding the community toward the pleasure of Allah SWT.",
    missionTitle: "BADAR's Mission",
    missionList: [
      "To enliven the school musolla as a central sanctuary of worship, knowledge, and mutual brotherhood.",
      "To inculcate fundamental religious understanding (fardhu 'ain), Islamic etiquette, and core values through continuous usrah and reminders.",
      "To promote a lifestyle grounded in the Prophetic Sunnah and the Holy Quran throughout daily routines."
    ],

    purposeTag: "Establishment Objectives",
    purposeTitle: "Purpose of BADAR's Establishment",
    purposeSubtitle: "BADAR's vital role as a catalyst for a righteous and uplifting school environment",
    purposeList: [
      {
        num: "01",
        tajuk: "Strengthening Congregational Prayers",
        desc: "Ensuring obligatory prayers are performed in order, rows are disciplined, and calls to prayer and voluntary prayers are revitalized in the musolla."
      },
      {
        num: "02",
        tajuk: "Peer Mentoring & Guidance",
        desc: "Acting as an approachable bridge for peers who need Quran recitation guidance, basic religious counseling, and faith-based emotional support."
      },
      {
        num: "03",
        tajuk: "Reviving Prophetic Traditions",
        desc: "Practicing the Sunnah of Prophet Muhammad SAW such as greeting with salam, smiling, dining manners, and living by the 40 Hadiths."
      },
      {
        num: "04",
        tajuk: "Preventing Negative Behaviors",
        desc: "Assisting school administration in curbing bullying, social ills, and harmful habits through gentle, constructive reminders (enjoining good, forbidding wrong)."
      },
      {
        num: "05",
        tajuk: "Developing Youth Leaders",
        desc: "Providing leadership training, event management experience, and public speaking opportunities so students courageously champion truth."
      },
      {
        num: "06",
        tajuk: "MoE 40 Hadiths Living Syllabus",
        desc: "Championing the Ministry of Education Malaysia's initiative in institutionalizing the 40 Hadiths of Imam An-Nawawi at the school level.",
        isHighlight: true
      }
    ],

    bannerBadge: "Special Knowledge Corner",
    bannerTitle: "40 Hadiths of Imam An-Nawawi",
    bannerDesc: "We provide an interactive portal compiling all 40 Hadiths of Al-Imam An-Nawawi complete with full Arabic calligraphy, translation, deep commentary, MoE 2nd Edition takeaways, and smart search.",
    bannerBtn: "Open 40 Hadiths Corner Now",

    footerSchoolTitle: "BADAR SMA Nurul Ittifaq",
    footerSchoolDesc: "Badan Dakwah dan Rohani is committed to instilling upright morals and spiritual values across the school community.",
    footerLinksTitle: "Quick Links",
    footerLocationTitle: "Location & Operations",
    footerLocation: "Main Musolla / BADAR Operation Room",
    footerCopyright: "© 2026 Badan Dakwah dan Rohani (BADAR) Sekolah Menengah Agama Nurul Ittifaq. Membina Sahsiah Rabbani.",
    footerDevCredit: "Developed and Built by Khir Al Hakim",

    hadisPortalTitle: "40 HADITHS CORNER",
    hadisIntroBadge: "Prophetic Treasures for Students",
    hadisIntroTitle: "Welcome to the 40 Hadiths of Imam An-Nawawi",
    hadisIntroDesc: "An interactive educational platform introducing essential prophetic traditions compiled by Al-Imam Yahya bin Sharaf An-Nawawi, based on the MoE 40 Hadiths Living Module (Second Edition).",
    hadisPurposeTitle: "Objectives of Introducing the 40 Hadiths",
    hadisPurposeList: [
      {
        title: "Building Spiritual Foundations",
        desc: "Consolidating students' understanding of Islamic creed, worship, and personal obligations from their school years."
      },
      {
        title: "Cultivating Human Dignity",
        desc: "Inculcating compassion, mutual respect, justice, and benevolence across diverse cultures and communities."
      },
      {
        title: "Deterring Social Misconduct",
        desc: "Equipping students with prophetic principles that safeguard against bullying, dishonesty, and negative habits."
      }
    ],
    hadisWhyTitle: "Why Are the 40 Hadiths Ideal for Students?",
    hadisWhyList: [
      {
        title: "Concise yet Comprehensive (Jawami' al-Kalim)",
        desc: "The texts are concise, eloquent, and easy to memorize while encapsulating universal Islamic legal and moral tenets."
      },
      {
        title: "Practical & Relevant to Youth",
        desc: "Encompasses student daily life — starting from sincere study intentions, guarding one's speech, anger management, halal nourishment, to fostering brotherhood."
      },
      {
        title: "Holistic Life Blueprint",
        desc: "Striking a harmonious balance between academic excellence and noble personal virtues."
      }
    ],
    hadisBtnNawawi: "Explore Imam An-Nawawi",
    hadisBtnSearch: "Search 40 Hadiths",

    authorBadge: "Meet the Renowned Scholar",
    authorTitle: "Al-Imam Yahya bin Sharaf An-Nawawi",
    authorSubtitle: "Mujtahid, Master Hadith Scholar, and Pillar of the Shafi'i School (631H – 676H / 1233CE – 1277CE)",
    authorBioTitle: "Brief Biography",
    authorBioList: [
      { label: "Full Name", value: "Abu Zakariyya Yahya bin Sharaf bin Murri bin Hasan An-Nawawi." },
      { label: "Birthplace", value: "Nawa village, near Damascus, Syria in the year 631 AH." },
      { label: "Honorific", value: "Muhyiddin (Reviver of the Faith — an honorific he avoided out of humility)." },
      { label: "Jurisprudence", value: "Shafi'i School (Alongside Imam Ar-Rafi'i, he is the foremost authority on Shafi'i legal rulings)." },
      { label: "Passing", value: "Passed away in his hometown of Nawa in the year 676 AH (at the age of approximately 45 Hijri years)." }
    ],
    authorEduTitle: "Scholarly Dedication",
    authorEduP1: "He memorized the Noble Quran before reaching puberty. At age 18, he moved to Damascus to study at Madrasah Ar-Rawahiyyah.",
    authorEduP2: "12 Scholarly Halaqahs Daily: He attended and mastered 12 intensive lectures every single day, covering Sahih al-Bukhari, Sahih Muslim, Usul Fiqh, Arabic Grammar, and Medicine without wasting a moment of his life.",
    authorQualitiesTitle: "Unique Attributes of Imam An-Nawawi",
    authorQualities: [
      {
        icon: "fa-clock-rotate-left",
        color: "text-amber-800",
        tajuk: "Blessed Youthful Legacy",
        desc: "Despite passing away at a very young age (~45), his masterpieces such as Riyadhus Solihin and 40 Hadiths remain memorized and studied across the globe."
      },
      {
        icon: "fa-hand-holding-heart",
        color: "text-teal-800",
        tajuk: "High Piety & Asceticism",
        desc: "Declined salary at Dar al-Hadith. He only ate one meal a day and refrained from eating Damascus orchard fruits over endowment equity concerns."
      },
      {
        icon: "fa-shield-halved",
        color: "text-red-700",
        tajuk: "Confronting Sultan Baybars",
        desc: "Courageously stood up for the general public, confronting and writing letters to Sultan Zahir Baybars against wartime tax burdens on citizens."
      },
      {
        icon: "fa-feather",
        color: "text-blue-800",
        tajuk: "Devoted Celibacy for Knowledge",
        desc: "Numbered among the eminent scholars who remained unmarried (Ulama' al-'Uzzab) because his entire lifetime was dedicated to Islamic knowledge."
      }
    ],

    searchBadge: "Quick Hadith Search",
    searchTitle: "Find Your Selected Hadith Card",
    searchDesc: "Type hadith number or relevant hadith title",
    searchPlaceholder: "Example: Hadis 1, Hadis 5, intention, modesty, prayer...",
    clearSearch: "Clear search",
    hadisCardsHeader: "40 Hadith Cards",
    hadisCardsSubheader: "Click any card to open the comprehensive commentary sheet:",
    displayingCount: (c) => `Displaying ${c} Hadiths`,
    noHadisFound: (q) => `No hadiths found matching "${q}".`,
    noHadisSub: "Please enter a number from 1 to 40 or another keyword.",
    openCard: "Open",

    copyBtn: "Copy",
    copiedBtn: "Copied!",
    hadisNumberBadge: (no) => `Hadith #${no.toString().padStart(2, '0')}`,
    meaningTitle: "Hadith Meaning",
    meaningSubtitle: "English translation of Prophet Muhammad's SAW words",
    explanationTitle: "Hadith Commentary",
    explanationSubtitle: "Context, background, and legal wisdom",
    lessonsTitle: "Hadith Lessons (KPM Takeaways)",
    lessonsSubtitle: "Essential takeaways to embody in daily school life",
    valuesTitle: "Moral Value Focus",
    activitiesTitle: "Suggested School Activities",
    prevHadisBtn: "Previous Hadith",
    allCardsBtn: "All 40 Hadith Cards",
    nextHadisBtn: "Next Hadith",

    settingsTitle: "System Settings",
    settingsSubtitle: "Customize your portal experience to your preference",
    langSectionTitle: "Language Selection",
    langSectionDesc: "Choose your preferred interface language",
    langMalay: "Bahasa Melayu (Default)",
    langEnglish: "English",
    themeSectionTitle: "Display Theme",
    themeSectionDesc: "Select light or dark mode for optimal viewing comfort",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    fontSizeSectionTitle: "Arabic Text Font Size",
    fontSizeSectionDesc: "Adjust the Arabic calligraphy font size for reading comfort",
    fontSizeNormal: "Normal",
    fontSizeMedium: "Medium",
    fontSizeLarge: "Large",
    closeBtn: "Save & Close"
  }
};

// English titles and meanings for all 40 hadiths
export const hadisEnglishData: Record<number, { tajukEn: string; rawiEn: string; maksudEn: string }> = {
  1: {
    tajukEn: "Sincerity and Intention in Actions",
    rawiEn: "Umar bin al-Khattab r.a.",
    maksudEn: "Actions are judged by intentions, and every person will get what he intended. So whoever emigrated for the sake of Allah and His Messenger, his emigration is for Allah and His Messenger. But whoever emigrated for some worldly benefit or to marry a woman, his emigration is for that for which he emigrated."
  },
  2: {
    tajukEn: "Islam, Iman, and Ihsan (Hadith of Jibril)",
    rawiEn: "Umar bin al-Khattab r.a.",
    maksudEn: "Islam is that you testify that there is no deity worthy of worship except Allah and that Muhammad is His Messenger, establish prayer, pay zakah, fast Ramadan, and make pilgrimage to the House if you are able. Iman is to believe in Allah, His angels, His books, His messengers, the Last Day, and in divine decree, both good and bad. Ihsan is to worship Allah as if you see Him; and if you cannot see Him, know that He surely sees you."
  },
  3: {
    tajukEn: "The Five Pillars of Islam",
    rawiEn: "Abdullah bin Umar r.a.",
    maksudEn: "Islam has been built upon five pillars: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving zakah, making pilgrimage to the House, and fasting during Ramadan."
  },
  4: {
    tajukEn: "Stages of Creation and Ultimate Destiny",
    rawiEn: "Abdullah bin Mas'ud r.a.",
    maksudEn: "Each one of you is constituted in the womb of his mother for forty days as a nutfah, then he is an 'alaqah for a similar period, then a mudghah for a similar period. Then an angel is sent to him who breathes the spirit into him and is commanded with four matters: to write down his provision, his lifespan, his deeds, and whether he will be wretched or blessed."
  },
  5: {
    tajukEn: "Rejection of Religious Innovations",
    rawiEn: "Aishah r.a.",
    maksudEn: "Whoever introduces something into this matter of ours that is not from it, it will be rejected."
  },
  6: {
    tajukEn: "Clarity of the Halal and Doubtful Matters",
    rawiEn: "An-Nu'man bin Basyir r.a.",
    maksudEn: "Truly, what is lawful is clear and what is unlawful is clear, and between them are doubtful matters about which many people have no knowledge. Whoever guards against doubtful matters has protected his religion and his honor. Truly, inside the body there is a morsel of flesh; if it is sound, the whole body is sound, and if it is corrupted, the whole body is corrupted. Truly, it is the heart."
  },
  7: {
    tajukEn: "The Essence of Religion is Sincere Advice",
    rawiEn: "Abu Ruqayyah Tamim ad-Dari r.a.",
    maksudEn: "The religion is sincere advice (Nasihah). We said: 'To whom?' The Prophet replied: 'To Allah, to His Book, to His Messenger, and to the leaders of the Muslims and their common folk.'"
  },
  8: {
    tajukEn: "The Sanctity and Rights of a Muslim",
    rawiEn: "Abdullah bin Umar r.a.",
    maksudEn: "I have been commanded to fight the people until they testify that there is no god but Allah and that Muhammad is the Messenger of Allah, establish prayer, and give zakah. If they do that, they have protected their blood and their property from me, except by right of Islam, and their reckoning is with Allah."
  },
  9: {
    tajukEn: "Obligations within One's Capacity",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "What I have forbidden you, avoid; and what I have commanded you, fulfill as much as you are able. Indeed, those before you were ruined only by their excessive questioning and their disputes with their prophets."
  },
  10: {
    tajukEn: "Consuming Pure Food and Acceptance of Prayers",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Indeed Allah the Almighty is pure and accepts only what is pure. Allah has commanded the believers what He commanded the messengers... Then he mentioned a man who journeys far, disheveled and dusty, raising his hands to the sky: 'O Lord! O Lord!' while his food is unlawful, his drink is unlawful, his clothing is unlawful, and he was nourished unlawfully; how then could he be answered?"
  },
  11: {
    tajukEn: "Leaving Doubt for Certainty",
    rawiEn: "Al-Hasan bin Ali r.a.",
    maksudEn: "Leave that which makes you doubt for that which does not make you doubt. For truth brings tranquility, while falsehood brings doubt."
  },
  12: {
    tajukEn: "Leaving That Which Does Not Concern You",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Part of a person's good Islam is leaving alone that which does not concern him."
  },
  13: {
    tajukEn: "Loving for Your Brother What You Love for Yourself",
    rawiEn: "Anas bin Malik r.a.",
    maksudEn: "None of you truly believes until he loves for his brother what he loves for himself."
  },
  14: {
    tajukEn: "The Sanctity of a Muslim's Blood",
    rawiEn: "Abdullah bin Mas'ud r.a.",
    maksudEn: "The blood of a Muslim who testifies that there is no god but Allah and that I am the Messenger of Allah cannot lawfully be shed except in three cases: a married person who commits adultery, a life for a life, and one who abandons his religion and splits away from the community."
  },
  15: {
    tajukEn: "Guarding Speech and Honoring Neighbors and Guests",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Whoever believes in Allah and the Last Day, let him speak good or remain silent. Whoever believes in Allah and the Last Day, let him honor his neighbor. And whoever believes in Allah and the Last Day, let him honor his guest."
  },
  16: {
    tajukEn: "The Prohibition and Restraint of Anger",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "A man said to the Prophet SAW: 'Counsel me.' He said: 'Do not become angry.' The man repeated his request several times, and each time the Prophet said: 'Do not become angry.'"
  },
  17: {
    tajukEn: "Prescribing Excellence (Ihsan) in All Things",
    rawiEn: "Syaddad bin Aus r.a.",
    maksudEn: "Indeed Allah has prescribed excellence in everything. So when you kill, kill well, and when you slaughter, slaughter well. Let each one of you sharpen his blade and bring ease to the animal he is slaughtering."
  },
  18: {
    tajukEn: "Taqwa and Noble Character Wherever You Are",
    rawiEn: "Abu Zar dan Mu'az bin Jabal r.a.",
    maksudEn: "Fear Allah wherever you are. Follow a bad deed with a good deed and it will wipe it out. And treat people with good character."
  },
  19: {
    tajukEn: "Preserving Allah's Commandments and Relying on Him",
    rawiEn: "Abdullah bin Abbas r.a.",
    maksudEn: "Be mindful of Allah and He will protect you. Be mindful of Allah and you will find Him in front of you. If you ask, ask of Allah; and if you seek help, seek help from Allah. Know that if the entire nation gathered to benefit you, they could not benefit you except with what Allah had already written for you."
  },
  20: {
    tajukEn: "The Noble Virtue of Modesty (Haya')",
    rawiEn: "Abu Mas'ud Uqbah bin Amr r.a.",
    maksudEn: "Among the words of the early prophets that have reached people is: 'If you feel no shame, then do whatever you wish.'"
  },
  21: {
    tajukEn: "Steadfastness in Faith (Istiqamah)",
    rawiEn: "Sufyan bin Abdillah ath-Thaqafi r.a.",
    maksudEn: "I said: 'O Messenger of Allah, tell me something about Islam which I could not ask of anyone other than you.' He replied: 'Say: I believe in Allah, then stand firm and steadfast.'"
  },
  22: {
    tajukEn: "Fulfilling Obligations as a Pathway to Paradise",
    rawiEn: "Jabir bin Abdillah r.a.",
    maksudEn: "A man asked the Messenger of Allah SAW: 'If I perform the prescribed prayers, fast Ramadan, treat the lawful as lawful, treat the unlawful as forbidden, and add nothing to that, will I enter Paradise?' He answered: 'Yes.'"
  },
  23: {
    tajukEn: "Purity, Prayer, and Deeds in Everyday Life",
    rawiEn: "Abu Malik al-Harith bin Asim al-Asy'ari r.a.",
    maksudEn: "Purification is half of faith. Al-hamdu lillah fills the scale. Subhanallah and Al-hamdu lillah fill what is between heaven and earth. Prayer is a light, charity is a proof, patience is illumination, and the Quran is an argument for you or against you. Every person starts his day, selling himself, either freeing himself or bringing about his ruin."
  },
  24: {
    tajukEn: "The Prohibition of Injustice (Hadith Qudsi)",
    rawiEn: "Abu Zar al-Ghifari r.a.",
    maksudEn: "Allah Almighty says: 'O My servants, indeed I have forbidden injustice for Myself and made it forbidden among you, so do not oppress one another...'"
  },
  25: {
    tajukEn: "The Multiplicity of Paths to Charity (Sadaqah)",
    rawiEn: "Abu Zar al-Ghifari r.a.",
    maksudEn: "Indeed, every glorification (tasbih) is a charity, every magnification (takbir) is a charity, every praise (tahmid) is a charity, every tahlil is a charity, enjoining good is a charity, forbidding evil is a charity, and in a man's intimacy with his wife is a charity."
  },
  26: {
    tajukEn: "Daily Charity Due Upon Every Human Joint",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Every joint of a person must give charity every day the sun rises: judging fairly between two people is charity; helping a man onto his mount or lifting his goods onto it is charity; a good word is charity; every step you take toward prayer is charity; and removing harmful obstacles from the road is charity."
  },
  27: {
    tajukEn: "Virtue and the Nature of Sin in the Conscience",
    rawiEn: "An-Nawwas bin Sam'an & Wabishah r.a.",
    maksudEn: "Righteousness is good character, and sin is that which wavers in your heart and which you would hate for people to find out about."
  },
  28: {
    tajukEn: "Adhering to the Prophetic Sunnah and Avoiding Innovation",
    rawiEn: "Al-'Irbad bin Sariyah r.a.",
    maksudEn: "Hold fast to my Sunnah and the Sunnah of the rightly guided Caliphs after me; bite onto it with your molar teeth. And beware of newly-invented matters, for every newly-invented matter is an innovation, and every innovation is misguidance."
  },
  29: {
    tajukEn: "Actions Leading to Paradise and Distance from Hellfire",
    rawiEn: "Mu'az bin Jabal r.a.",
    maksudEn: "Worship Allah and associate nothing with Him, establish prayer, pay zakah, fast Ramadan, and make pilgrimage to the House... Shall I not inform you of the foundation of all of this? Restrain this (pointing to his tongue)."
  },
  30: {
    tajukEn: "Respecting the Limits Set by Allah",
    rawiEn: "Abu Tha'labah al-Khushani r.a.",
    maksudEn: "Indeed Allah has ordained religious duties, so do not neglect them; He has set boundaries, so do not transgress them; He has forbidden things, so do not violate them; and He was silent about things as a mercy to you, not out of forgetfulness, so do not search into them."
  },
  31: {
    tajukEn: "True Asceticism (Zuhd) and the Love of Allah and People",
    rawiEn: "Sahl bin Sa'd as-Sa'idi r.a.",
    maksudEn: "Renounce attachment to the world and Allah will love you, and renounce attachment to what people possess and people will love you."
  },
  32: {
    tajukEn: "The Golden Rule: No Harming and No Reciprocating Harm",
    rawiEn: "Abu Sa'id Sa'd bin Malik al-Khudri r.a.",
    maksudEn: "There should be neither harming nor reciprocating harm."
  },
  33: {
    tajukEn: "Burden of Proof on the Claimant and Oath on the Denier",
    rawiEn: "Abdullah bin Abbas r.a.",
    maksudEn: "If people were given whatever they claimed, men would claim the wealth and lives of other people. But the burden of proof is upon the claimant, and an oath is upon the one who denies."
  },
  34: {
    tajukEn: "Changing Evil According to One's Ability",
    rawiEn: "Abu Sa'id al-Khudri r.a.",
    maksudEn: "Whoever among you sees an evil, let him change it with his hand; and if he is not able, then with his tongue; and if he is not able, then with his heart, and that is the weakest of faith."
  },
  35: {
    tajukEn: "Islamic Brotherhood and the Rights of Fellowship",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Do not envy one another, do not artificially inflate prices, do not hate one another, do not turn away from one another, and do not undercut each other in business. Be, O servants of Allah, brothers. A Muslim is the brother of a Muslim: he does not wrong him, forsake him, or despise him."
  },
  36: {
    tajukEn: "Relieving Hardships, Assisting Others, and Seeking Knowledge",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Whoever relieves a believer of a distress from the distresses of this world, Allah will relieve him of a distress from the distresses of the Day of Resurrection. Whoever makes things easy for one in difficulty, Allah will make things easy for him in this world and the Hereafter... And Allah remains in aid of His servant as long as the servant is in aid of his brother."
  },
  37: {
    tajukEn: "The Bounty of Allah in Good Deeds and Sins",
    rawiEn: "Abdullah bin Abbas r.a.",
    maksudEn: "Indeed Allah has written down the good deeds and the bad deeds, then He clarified how: whoever intends to perform a good deed and does not do it, Allah writes it down with Himself as a complete good deed..."
  },
  38: {
    tajukEn: "Attaining Proximity to Allah and the Protectors of Allah",
    rawiEn: "Abu Hurairah r.a.",
    maksudEn: "Allah Almighty says: 'Whoever shows enmity to a beloved servant of Mine, I have declared war upon him. My servant draws near to Me with nothing more beloved to Me than the duties I have obligated upon him...'"
  },
  39: {
    tajukEn: "Pardoning Mistakes, Forgetfulness, and What is Done Under Duress",
    rawiEn: "Abdullah bin Abbas r.a.",
    maksudEn: "Indeed Allah has forgiven for my ummah their mistakes, what they forget, and what they are coerced into doing."
  },
  40: {
    tajukEn: "Living in this World as a Stranger or Traveler",
    rawiEn: "Abdullah bin Umar r.a.",
    maksudEn: "Be in this world as though you were a stranger or a wayfarer on a path. When evening comes, do not anticipate the morning; and when morning comes, do not anticipate the evening. Take from your health for your illness, and from your life for your death."
  }
};
