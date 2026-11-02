import { QuizLevel } from './quizLevels1to5';

export const quizLevels6to10: QuizLevel[] = [
  {
    level: 6,
    namaMs: "Tahap 6: Zuhud, Sedekah & Menjaga Lisan",
    namaEn: "Level 6: Asceticism, Charity & Guarding the Tongue",
    peneranganMs: "Uji kefahaman mengenai hakikat zuhud, kepelbagaian sedekah dan bahaya lidah.",
    peneranganEn: "Test knowledge on genuine asceticism, dimensions of charity, and the tongue's perils.",
    tahapKesukaranMs: "Sederhana",
    tahapKesukaranEn: "Medium",
    soalanPool: [
      {
        id: "L6-Q1",
        hadisNo: 31,
        soalanMs: "Menurut huraian Hadis 31, apakah konsep 'Zuhud' yang sebenarnya dalam Islam?",
        soalanEn: "According to the commentary on Hadith 31, what is the true concept of 'Zuhud' in Islam?",
        pilihan: [
          { label: 'A', textMs: "Membuang semua harta benda dan enggan bekerja mencari rezeki", textEn: "Throwing away all wealth and refusing to work for a livelihood" },
          { label: 'B', textMs: "Hati tidak dikuasai oleh kemewahan dunia dan mengutamakan balasan akhirat", textEn: "The heart is free from worldliness and prioritizes the rewards of the Hereafter" },
          { label: 'C', textMs: "Memakai pakaian yang koyak dan kotor agar kelihatan miskin", textEn: "Wearing torn clothes to deliberately appear impoverished" },
          { label: 'D', textMs: "Tidur di masjid sepanjang hari tanpa berinteraksi", textEn: "Sleeping in the mosque without interacting with family" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Zuhud bukanlah menolak kekayaan sama sekali (seperti contoh Abdul Rahman bin 'Auf r.a.), tetapi hati tidak terikat dan mendahulukan akhirat.",
        peneranganEn: "Zuhud does not mean destitution, but ensuring the heart remains detached from worldly glitz, preferring Allah."
      },
      {
        id: "L6-Q2",
        hadisNo: 26,
        soalanMs: "Berdasarkan Hadis 26, manusia dituntut bersedekah pada setiap sendi tubuh badan setiap hari. Berapakah jumlah sendi utama yang disebut dalam hadis lain?",
        soalanEn: "Based on Hadith 26, charity is due on every joint daily. How many joints are mentioned in authentic tradition?",
        pilihan: [
          { label: 'A', textMs: "360 sendi", textEn: "360 joints" },
          { label: 'B', textMs: "100 sendi", textEn: "100 joints" },
          { label: 'C', textMs: "500 sendi", textEn: "500 joints" },
          { label: 'D', textMs: "240 sendi", textEn: "240 joints" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Rasulullah SAW menyebut manusia diciptakan dengan 360 sendi tulang yang perlu disyukuri setiap hari.",
        peneranganEn: "The Prophet SAW explained that man has 360 joints, each requiring daily gratitude and charity."
      },
      {
        id: "L6-Q3",
        hadisNo: 25,
        soalanMs: "Dalam Hadis 25, apakah jawapan Rasulullah SAW kepada para sahabat miskin yang berasa cemburu melihat orang kaya banyak bersedekah?",
        soalanEn: "In Hadith 25, how did the Prophet console the poor Companions who longed to give charity like the wealthy?",
        pilihan: [
          { label: 'A', textMs: "Tasbih, tahmid, tahlil, takbir, amar makruf nahi mungkar semuanya adalah sedekah", textEn: "Every tasbih, tahmid, tahlil, takbir, and promoting good/forbidding wrong is charity" },
          { label: 'B', textMs: "Menyuruh mereka meminjam wang untuk bersedekah", textEn: "Advising them to borrow money to give charity" },
          { label: 'C', textMs: "Menyatakan bahawa hanya orang kaya yang masuk syurga", textEn: "Stating that only the wealthy attain paradise" },
          { label: 'D', textMs: "Melarang mereka bergaul dengan orang yang berada", textEn: "Forbidding them from associating with the affluent" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Rasulullah SAW menerangkan bahawa setiap zikir tasbih, tahmid, tahlil, takbir, amar makruf nahi mungkar adalah sedekah maknawi.",
        peneranganEn: "The Prophet SAW clarified that tasbih, tahmid, tahlil, takbir, and righteous acts are counted as charity."
      },
      {
        id: "L6-Q4",
        hadisNo: 29,
        soalanMs: "Dalam Hadis 29, Rasulullah SAW memegang lidah baginda seraya bersabda kepada Mu'az: 'Kuffa 'alayka hadha' yang bermaksud:",
        soalanEn: "In Hadith 29, the Prophet SAW took hold of his tongue and told Mu'adh: 'Kuffa 'alayka hadha', which means:",
        pilihan: [
          { label: 'A', textMs: "Tahanlah dan kawallah lidahmu ini", textEn: "Restrain and guard this tongue of yours" },
          { label: 'B', textMs: "Keluarkanlah lidahmu untuk diperiksa", textEn: "Stick out your tongue for examination" },
          { label: 'C', textMs: "Basahkanlah lidahmu dengan air sejuk", textEn: "Moisten your tongue with cool water" },
          { label: 'D', textMs: "Bercakaplah sebanyak mana yang kamu mahu", textEn: "Speak as much as you possibly desire" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Baginda berpesan mengawal lidah kerana kebanyakan orang terhumban ke neraka akibat daripada hasil tuaian lidah mereka.",
        peneranganEn: "He commanded guarding speech because the harvests of the tongue drag most people into Hellfire."
      },
      {
        id: "L6-Q5",
        hadisNo: 27,
        soalanMs: "Apakah nasihat Rasulullah SAW kepada Wabisah bin Ma'bad dalam Hadis 27 ketika beliau ingin mengetahui hakikat dosa dan pahala?",
        soalanEn: "What was the Prophet's instruction to Wabisah bin Ma'bad in Hadith 27 regarding virtue and sin?",
        pilihan: [
          { label: 'A', textMs: "Istafti qalbaka (Tanyalah kepada hatimu sendiri)", textEn: "Istafti qalbaka (Consult your own heart)" },
          { label: 'B', textMs: "Tanyalah kepada semua orang di pasar", textEn: "Inquire from everyone at the market" },
          { label: 'C', textMs: "Ikutlah hawa nafsu yang paling mudah", textEn: "Follow whichever whim feels easiest" },
          { label: 'D', textMs: "Tunggu sehingga mimpi yang benar datang", textEn: "Wait until a true dream arrives" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Baginda bersabda: 'Istafti qalbaka' (Tanyalah hatimu). Kebaikan mententeramkan hati, manakala dosa meresahkan jiwa.",
        peneranganEn: "The Prophet SAW told him: 'Consult your heart. Righteousness brings tranquility, while sin causes turmoil.'"
      },
      {
        id: "L6-Q6",
        hadisNo: 28,
        soalanMs: "Apakah nasihat Rasulullah SAW dalam Hadis 28 apabila umat Islam berhadapan dengan perselisihan yang banyak?",
        soalanEn: "What was the Prophet's advice in Hadith 28 when facing widespread discord and differing views?",
        pilihan: [
          { label: 'A', textMs: "Berpegang teguh dengan Sunnah baginda dan Sunnah Khulafa' al-Rasyidin serta menjauhi bidaah", textEn: "Hold fast to his Sunnah and the Sunnah of the Rightly-Guided Caliphs, avoiding bid'ah" },
          { label: 'B', textMs: "Mengabaikan semua pandangan ulama terdahulu", textEn: "Ignore all past scholarly rulings entirely" },
          { label: 'C', textMs: "Mencipta cara ibadah baharu mengikut selera sendiri", textEn: "Invent new rituals suited to personal liking" },
          { label: 'D', textMs: "Menentang pemerintah secara kekerasan", textEn: "Oppose authority through violent uprising" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda baginda: 'Fa'alaykum bi-sunnati wa sunnatil khulafa-ir rasyidin... 'addu 'alayha bin-nawajiz.'",
        peneranganEn: "He advised holding firmly to his Sunnah and that of the Khulafa ar-Rashidin, biting onto it with molars."
      },
      {
        id: "L6-Q7",
        hadisNo: 30,
        soalanMs: "Dalam Hadis 30, perkara-perkara yang didiamkan oleh syariat tanpa dinyatakan hukum halal/haramnya adalah merupakan:",
        soalanEn: "In Hadith 30, matters where the Shariah remained silent without specifying a prohibition represent:",
        pilihan: [
          { label: 'A', textMs: "Rahmat dan kelonggaran daripada Allah SWT bukannya kerana terlupa", textEn: "A mercy and allowance from Allah SWT, not out of forgetfulness" },
          { label: 'B', textMs: "Perkara yang wajib dijauhi sama sekali", textEn: "Matters that must be entirely boycotted" },
          { label: 'C', textMs: "Kelemahan perundangan Islam", textEn: "A deficiency in Islamic legislation" },
          { label: 'D', textMs: "Sesuatu yang tiada nilai dalam kehidupan", textEn: "Something devoid of any worldly value" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Wa sakata 'an asy-ya-a rahmatan lakum ghayra nisyān, falā tabhathū 'anhā.'",
        peneranganEn: "The Prophet said: 'He was silent concerning some things as a mercy to you, not forgetfully, so do not pursue them.'"
      }
    ]
  },
  {
    level: 7,
    namaMs: "Tahap 7: Kaedah Fiqh & Keadilan Kehakiman",
    namaEn: "Level 7: Legal Maxims & Judicial Justice",
    peneranganMs: "Fahami kaedah syarak 'La Dharara wa La Dhirar', asas pembuktian, dan hak sesama Muslim.",
    peneranganEn: "Understand legal maxims, burden of proof, and mutual Muslim sanctuaries.",
    tahapKesukaranMs: "Sukar",
    tahapKesukaranEn: "Hard",
    soalanPool: [
      {
        id: "L7-Q1",
        hadisNo: 32,
        soalanMs: "Apakah kaedah fiqh agung yang terkandung dalam Hadis ke-32 riwayat Abu Said al-Khudri r.a.?",
        soalanEn: "What profound Islamic legal maxim is articulated in Hadith 32 narrated by Abu Sa'id al-Khudri r.a.?",
        pilihan: [
          { label: 'A', textMs: "لاَ ضَرَرَ وَلاَ ضِرَارَ (Tidak boleh memudaratkan diri sendiri dan orang lain)", textEn: "La darara wa la dirar (No harming and no reciprocating harm)" },
          { label: 'B', textMs: "الأُمُورُ بِمَقَاصِدِهَا (Segala urusan mengikut niat)", textEn: "Matters are judged by their intentions" },
          { label: 'C', textMs: "اليَقِينُ لاَ يَزُولُ بِالشَّكِّ (Keyakinan tidak hilang oleh keraguan)", textEn: "Certainty is not dispelled by doubt" },
          { label: 'D', textMs: "المَشَقَّةُ تَجْلِبُ التَّيْسِيرَ (Kesusahan membawa kemudahan)", textEn: "Hardship brings forth ease" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Kaedah 'La dharara wa la dhirar' menjadi tunjang pencegahan mudarat dalam perundangan Islam, perubatan, dan alam sekitar.",
        peneranganEn: "The legal maxim 'La darara wa la dirar' forbids causing injury or returning harm maliciously."
      },
      {
        id: "L7-Q2",
        hadisNo: 33,
        soalanMs: "Menurut Hadis 33 (Asas Penghakiman), siapakah pihak yang bertanggungjawab mengemukakan bukti (al-Bayyinah)?",
        soalanEn: "According to Hadith 33 (Judicial Procedure), who bears the responsibility of producing proof (al-Bayyinah)?",
        pilihan: [
          { label: 'A', textMs: "Pihak yang mendakwa / menuduh (Al-Mudda'i)", textEn: "The claimant / plaintiff (Al-Mudda'i)" },
          { label: 'B', textMs: "Pihak yang dituduh / tertuduh (Al-Mudda'a 'alayh)", textEn: "The defendant / accused" },
          { label: 'C', textMs: "Hakim mahkamah sendiri yang mencari bukti", textEn: "The judge himself must produce evidence" },
          { label: 'D', textMs: "Orang ramai yang lalu-lalang di kawasan kejadian", textEn: "Passersby who happened to be nearby" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Prinsip syarak: 'Al-Bayyinatu 'alal mudda'i, wal yaminu 'ala man ankara' (Bukti atas penuduh, sumpah atas yang menafikan).",
        peneranganEn: "The legal maxim states: 'The burden of proof is on the claimant, and an oath is upon the one who denies.'"
      },
      {
        id: "L7-Q3",
        hadisNo: 34,
        soalanMs: "Apakah susunan tiga peringkat mencegah kemungkaran seperti yang diajar dalam Hadis 34?",
        soalanEn: "What is the proper sequence of the three stages of rectifying wrong taught in Hadith 34?",
        pilihan: [
          { label: 'A', textMs: "Tangan (kuasa fizikal/autoriti), Lidah (nasihat/teguran), Hati (ingkar & doa)", textEn: "Hand (authority/power), Tongue (speech/advice), Heart (rejection & prayer)" },
          { label: 'B', textMs: "Hati, kemudian tangan, kemudian lidah", textEn: "Heart, then hand, then tongue" },
          { label: 'C', textMs: "Lidah, kemudian hati, kemudian tangan", textEn: "Tongue, then heart, then hand" },
          { label: 'D', textMs: "Terus menghukum tanpa memberi nasihat", textEn: "Punishing immediately without prior guidance" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: Ubah dengan tangan, jika tak mampu dengan lidah, jika tak mampu dengan hati (selemah-lemah iman).",
        peneranganEn: "The sequence is: change with one's hand; if unable, then tongue; if unable, then with the heart."
      },
      {
        id: "L7-Q4",
        hadisNo: 35,
        soalanMs: "Dalam Hadis 35, apakah tiga kehormatan seorang Muslim yang haram dicabuli oleh saudara Muslim yang lain?",
        soalanEn: "In Hadith 35, what three sacred sanctuaries of a Muslim are inviolable to fellow Muslims?",
        pilihan: [
          { label: 'A', textMs: "Darahnya (nyawa), Hartanya, dan Maruahnya (Damuhu, Maluhu, 'Irdhuhu)", textEn: "His blood (life), his wealth, and his honor (Damuhu, Maluhu, 'Irdhuhu)" },
          { label: 'B', textMs: "Rumahnya, keretanya, dan kedai perniagaannya", textEn: "His house, his vehicle, and his retail shop" },
          { label: 'C', textMs: "Buku latihannya, penselnya, dan beg sekolahnya", textEn: "His workbook, pencil, and school bag" },
          { label: 'D', textMs: "Pakaiannya, makanannya, dan minumannya", textEn: "His garments, his meal, and his beverages" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Kullul muslimi 'alal muslimi haram: damuhu, wa maluhu, wa 'irdhuhu.'",
        peneranganEn: "The Prophet said: 'All of a Muslim is sacred to a Muslim: his blood, his property, and his honor.'"
      },
      {
        id: "L7-Q5",
        hadisNo: 35,
        soalanMs: "Apakah yang dimaksudkan dengan 'Najasy' (Tanajusyu) yang dilarang dalam Hadis 35?",
        soalanEn: "What is meant by 'Najash' (Tanajushu) prohibited in Hadith 35?",
        pilihan: [
          { label: 'A', textMs: "Menawar harga tinggi secara palsu untuk memperdaya pembeli lain", textEn: "Bidding up prices deceitfully to trick genuine buyers" },
          { label: 'B', textMs: "Menjual barangan yang rosak dengan harga murah", textEn: "Selling defective goods at discounted rates" },
          { label: 'C', textMs: "Memberi diskaun kepada rakan karib", textEn: "Offering special discounts to close friends" },
          { label: 'D', textMs: "Menutup kedai pada hari Jumaat", textEn: "Closing shop during Friday prayer times" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Najasy ialah tipu daya dalam jual beli dengan menaikkan tawaran harga tanpa niat membeli demi menipu orang lain.",
        peneranganEn: "Najash is falsely inflating an item's bid to dupe buyers into paying an exorbitant price."
      },
      {
        id: "L7-Q6",
        hadisNo: 34,
        soalanMs: "Mengapakah mencegah kemungkaran dengan hati dianggap sebagai 'selemah-lemah iman'?",
        soalanEn: "Why is rejecting wrong only in the heart classified as the 'weakest degree of faith'?",
        pilihan: [
          { label: 'A', textMs: "Kerana ia merupakan tahap minima apabila seseorang tidak berdaya mengubah secara zahir", textEn: "Because it is the bare minimum when one lacks physical or verbal capacity to alter it" },
          { label: 'B', textMs: "Kerana amalan tersebut tidak ada pahala", textEn: "Because this silent rejection brings zero reward" },
          { label: 'C', textMs: "Kerana ia menunjukkan persetujuan terhadap kezaliman", textEn: "Because it signifies agreement with injustice" },
          { label: 'D', textMs: "Kerana syarak menolak niat di dalam hati", textEn: "Because Shariah disregards heart intentions" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Mencegah dengan hati ialah benteng terakhir iman agar tidak meredai kemungkaran apabila tiada kuasa atau keupayaan lisan.",
        peneranganEn: "Hating evil in the heart is the baseline faith requirement when one lacks power to intervene outwardly."
      },
      {
        id: "L7-Q7",
        hadisNo: 33,
        soalanMs: "Apakah tujuan syariat menetapkan bahawa pihak penafi dakwaan perlu bersumpah dengan nama Allah?",
        soalanEn: "What is the Shariah's purpose in requiring the denying defendant to take an oath by Allah's Name?",
        pilihan: [
          { label: 'A', textMs: "Sebagai penghormatan kepada nama Allah dan pencegah daripada pembohongan", textEn: "Venerating Allah's Name and deterring false denials under spiritual accountability" },
          { label: 'B', textMs: "Supaya perbicaraan selesai tanpa perlu mendengar saksi", textEn: "To end trials without hearing witnesses" },
          { label: 'C', textMs: "Untuk memaksa tertuduh membayar denda tunai", textEn: "To compel the accused to pay immediate cash fines" },
          { label: 'D', textMs: "Sekadar adat kebiasaan masyarakat Arab zaman dahulu", textEn: "Merely an archaic cultural habit of ancient Arabia" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sumpah dengan nama Allah menuntut keikhlasan batin dan mendatangkan rasa gerun terhadap azab jika berani bersumpah palsu.",
        peneranganEn: "The judicial oath invokes divine awe and warns against perjured testimony and perjury consequences."
      }
    ]
  },
  {
    level: 8,
    namaMs: "Tahap 8: Keluasan Rahmat & Janji Ganjaran Ilahi",
    namaEn: "Level 8: The Ocean of Divine Mercy & Recompense",
    peneranganMs: "Kaji Hadis Qudsi mengenai keluasan ampunan Allah, gandaan pahala, dan bantuan sesama Muslim.",
    peneranganEn: "Examine Hadith Qudsi regarding infinite mercy, multiplied rewards, and aiding believers.",
    tahapKesukaranMs: "Sukar",
    tahapKesukaranEn: "Hard",
    soalanPool: [
      {
        id: "L8-Q1",
        hadisNo: 37,
        soalanMs: "Menurut Hadis 37, jika seseorang berniat melakukan satu kebaikan tetapi tidak sempat mengerjakannya, apakah yang dicatatkan untuknya?",
        soalanEn: "According to Hadith 37, if someone intends a good deed but cannot carry it out, what is recorded for him?",
        pilihan: [
          { label: 'A', textMs: "Satu pahala kebaikan yang sempurna (Hasanatan kamilah)", textEn: "A complete good deed (Hasanatan kamilah)" },
          { label: 'B', textMs: "Separuh pahala sahaja", textEn: "Only half a good deed" },
          { label: 'C', textMs: "Tiada apa-apa dicatatkan", textEn: "Nothing is recorded until he acts" },
          { label: 'D', textMs: "Satu dosa kerana tidak menepati janji", textEn: "One sin for not fulfilling the thought" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Allah SWT mencatatkan satu kebaikan sempurna (kamila) di sisi-Nya atas kemuliaan niat baik hamba-Nya.",
        peneranganEn: "Allah SWT records it with Himself as a full, complete good deed merely for the sincere intention."
      },
      {
        id: "L8-Q2",
        hadisNo: 37,
        soalanMs: "Sekiranya seseorang berniat melakukan kejahatan lalu membatalkannya kerana takut kepada Allah, apakah ganjarannya?",
        soalanEn: "If someone contemplates an evil act but desists out of consciousness of Allah, what is recorded?",
        pilihan: [
          { label: 'A', textMs: "Ditulis untuknya satu kebaikan yang sempurna di sisi Allah", textEn: "Recorded with Allah as one complete good deed" },
          { label: 'B', textMs: "Ditulis satu dosa kecil", textEn: "Recorded as a minor sin" },
          { label: 'C', textMs: "Dihukum dengan denda sedekah", textEn: "Penalized with compulsory almsgiving" },
          { label: 'D', textMs: "Malaikat memadam namanya dari buku catatan", textEn: "The angel deletes his name from the registry" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis menegaskan bahawa meninggalkan kejahatan demi Allah dinilai sebagai satu pahala kebaikan yang sempurna.",
        peneranganEn: "Refraining from sin for Allah's sake is credited as an intentional righteous act of obedience."
      },
      {
        id: "L8-Q3",
        hadisNo: 36,
        soalanMs: "Dalam Hadis 36, apakah ganjaran bagi orang yang menempuh jalan untuk menuntut ilmu agama?",
        soalanEn: "In Hadith 36, what reward is promised to one who travels a path seeking Islamic knowledge?",
        pilihan: [
          { label: 'A', textMs: "Allah SWT akan mempermudah baginya jalan menuju ke syurga", textEn: "Allah SWT makes easy for him a path to Paradise" },
          { label: 'B', textMs: "Diberikan kekayaan wang ringgit dengan serta-merta", textEn: "Granted instant financial riches" },
          { label: 'C', textMs: "Dikecualikan daripada menunaikan solat fardu", textEn: "Exempted from performing obligatory prayers" },
          { label: 'D', textMs: "Diberi kedudukan jawatan pemerintah tertinggi", textEn: "Appointed to the highest political office" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Man salaka tariqan yaltamisu fihi 'ilman sahhalallahu lahu bihi tariqan ilal jannah.'",
        peneranganEn: "The Prophet said: 'Whoever treads a path seeking knowledge, Allah eases for him a path to Paradise.'"
      },
      {
        id: "L8-Q4",
        hadisNo: 24,
        soalanMs: "Dalam Hadis Qudsi 24, apakah perumpamaan yang diberikan oleh Allah SWT sekiranya Dia menunaikan seluruh permintaan seluruh jin dan manusia?",
        soalanEn: "In Hadith Qudsi 24, what parable is given by Allah if He granted every wish of all mankind and jinn together?",
        pilihan: [
          { label: 'A', textMs: "Tidak mengurangkan kekayaan-Nya melainkan seperti jarum dicelup ke dalam lautan", textEn: "It diminishes His kingdom no more than a needle dipped into the ocean" },
          { label: 'B', textMs: "Mengurangkan separuh daripada perbendaharaan langit", textEn: "Diminishes half of the heavens' treasury" },
          { label: 'C', textMs: "Umpama mengalirkan sebatang sungai kecil", textEn: "Like diverting a small stream" },
          { label: 'D', textMs: "Perbendaharaan Allah menjadi berkurang sedikit demi sedikit", textEn: "Allah's treasury slowly depletes bit by bit" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Kekayaan Allah SWT Maha Luas dan tidak susut sedikit pun, ibarat titisan air pada jarum yang dikeluarkan dari laut.",
        peneranganEn: "Allah's riches are limitless; fulfilling every prayer subtracts nothing, just like a needle lifted from sea."
      },
      {
        id: "L8-Q5",
        hadisNo: 36,
        soalanMs: "Apakah yang akan menaungi para penuntut ilmu yang berhimpun di rumah Allah membaca dan mentadarus al-Quran?",
        soalanEn: "What descends upon believers who gather in Allah's house reading and studying the Quran?",
        pilihan: [
          { label: 'A', textMs: "Ketenangan (Sakinah), Rahmat, naungan Malaikat, dan disebut oleh Allah SWT di sisi para malaikat-Nya", textEn: "Tranquility (Sakinah), Mercy, Angels' wings, and Allah mentioning them to His company" },
          { label: 'B', textMs: "Angin kencang dan hujan lebat", textEn: "Heavy winds and torrential rains" },
          { label: 'C', textMs: "Rasa letih dan mengantuk yang berpanjangan", textEn: "Exhaustion and prolonged lethargy" },
          { label: 'D', textMs: "Pertelingkahan pendapat", textEn: "Disputes and friction" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Majlis ilmu al-Quran dilimpahi empat kemuliaan: Sakinah, Rahmat, Naungan Malaikat, dan sebutan mulia di sisi Allah.",
        peneranganEn: "Four divine blessings descend: serenity, mercy, angels' embrace, and mention in the highest assembly."
      },
      {
        id: "L8-Q6",
        hadisNo: 24,
        soalanMs: "Apakah ikrar Allah SWT terhadap sifat zalim di permulaan Hadis Qudsi ke-24?",
        soalanEn: "What solemn decree does Allah declare concerning injustice at the start of Hadith Qudsi 24?",
        pilihan: [
          { label: 'A', textMs: "Sesungguhnya Aku mengharamkan kezaliman ke atas diri-Ku dan menjadikannya haram antara kamu", textEn: "I have forbidden oppression upon Myself and made it unlawful among you" },
          { label: 'B', textMs: "Kezaliman dibolehkan sekiranya berniat baik", textEn: "Oppression is permissible if one has good intentions" },
          { label: 'C', textMs: "Kezaliman hanya haram dilakukan terhadap pemimpin", textEn: "Oppression is only unlawful when done against leaders" },
          { label: 'D', textMs: "Kezaliman adalah sifat tabi'i manusia yang tidak berdosa", textEn: "Injustice is natural and incurs no penalty" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Firman Allah dalam hadis Qudsi: 'Inni harramtuz zulma 'ala nafsi wa ja'altuhu baynakum muharraman fala tazhalamu.'",
        peneranganEn: "Allah declared: 'O My servants, I have forbidden injustice for Myself and made it forbidden among you.'"
      },
      {
        id: "L8-Q7",
        hadisNo: 36,
        soalanMs: "Apakah maksud sabda Rasulullah SAW di akhir Hadis 36: 'Wa man baththa-a bihi 'amaluhu, lam yusri' bihi nasabuhu'?",
        soalanEn: "What is meant by the Prophet's closing words in Hadith 36: 'Whoever is slowed by his deeds will not be quickened by his lineage'?",
        pilihan: [
          { label: 'A', textMs: "Sesiapa yang lambat amal solehnya, maka nasab keturunan mulia tidak dapat mengangkat darjatnya di akhirat", textEn: "Whoever is held back by lack of deeds cannot be elevated merely by aristocratic lineage" },
          { label: 'B', textMs: "Keturunan bangsawan sentiasa diutamakan masuk syurga", textEn: "Noble pedigree guarantees priority entry into paradise" },
          { label: 'C', textMs: "Orang yang beramal soleh tidak perlu menghormati ibu bapanya", textEn: "Those doing good deeds have no need to honor parents" },
          { label: 'D', textMs: "Nasab keluarga menentukan segala timbangan pahala seseorang", textEn: "Family pedigree determines the entire scale of deeds" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Kemuliaan di sisi Allah SWT diukur melalui ketaqwaan dan amal ibadah, bukan sekadar kebanggaan keturunan darah.",
        peneranganEn: "Honor before Allah is earned through piety and righteousness, not tribal pride or noble genealogy."
      }
    ]
  },
  {
    level: 9,
    namaMs: "Tahap 9: Maqasid Syariah, Kewalian & Rukhsah",
    namaEn: "Level 9: Higher Objectives, Wilayah & Concessions",
    peneranganMs: "Kefahaman tingkat tinggi tentang konsep Wali Allah, rukhsah kesalahan dan falsafah hidup musafir.",
    peneranganEn: "Advanced comprehension of divine guardianship, legal exemptions, and wayfarer mindset.",
    tahapKesukaranMs: "Sukar",
    tahapKesukaranEn: "Hard",
    soalanPool: [
      {
        id: "L9-Q1",
        hadisNo: 38,
        soalanMs: "Dalam Hadis Qudsi 38, apakah amalan yang paling dicintai Allah SWT yang mendekatkan seorang hamba kepada-Nya?",
        soalanEn: "In Hadith Qudsi 38, what is the most beloved deed by which a servant draws near to Allah SWT?",
        pilihan: [
          { label: 'A', textMs: "Amalan fardu yang diwajibkan oleh Allah ke atasnya", textEn: "The obligatory duties (fardh) commanded upon him" },
          { label: 'B', textMs: "Solat sunat tahajjud sepanjang malam tanpa tidur", textEn: "Voluntary night vigil without any rest" },
          { label: 'C', textMs: "Menyumbangkan seluruh harta sehingga tiada nafkah keluarga", textEn: "Donating all personal assets leaving no sustenance" },
          { label: 'D', textMs: "Mengasingkan diri ke dalam gua pergunungan", textEn: "Isolating oneself in remote mountain caves" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Firman Allah SWT: 'Wa ma taqarraba ilayya 'abdi bi syay-in ahabba ilayya mimmaf-taradhtuhu 'alayh' (Tiada amalan lebih Aku sukai daripada apa yang Aku fardukan).",
        peneranganEn: "Allah declared: 'My servant draws near to Me with nothing more beloved to Me than what I made obligatory.'"
      },
      {
        id: "L9-Q2",
        hadisNo: 38,
        soalanMs: "Apakah amaran keras Allah SWT terhadap sesiapa yang memusuhi wali-wali-Nya?",
        soalanEn: "What stern warning does Allah issue to anyone who harbors animosity toward His beloved awliya'?",
        pilihan: [
          { label: 'A', textMs: "Allah SWT mengisytiharkan perang terhadapnya (Faqad azanthuhu bil-harb)", textEn: "Allah SWT declares war against him (Faqad azanthuhu bil-harb)" },
          { label: 'B', textMs: "Dia tidak boleh masuk ke pasar kaum Muslimin", textEn: "He is barred from entering the Muslim marketplace" },
          { label: 'C', textMs: "Hartanya dirampas oleh orang miskin", textEn: "His earthly possessions are confiscated by the poor" },
          { label: 'D', textMs: "Umurnya dipendekkan separuh", textEn: "His biological lifespan is instantly halved" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW dalam hadis Qudsi: 'Man 'ada li waliyyan faqad azanthuhu bil-harb' (Sesiapa memusuhi wali-Ku, Aku isytihar perang).",
        peneranganEn: "Allah warned: 'Whoever demonstrates hostility to a friend of Mine, I have declared war upon him.'"
      },
      {
        id: "L9-Q3",
        hadisNo: 39,
        soalanMs: "Apakah tiga keadaan di mana umat Nabi Muhammad SAW dimaafkan dan tidak dikira berdosa dalam Hadis 39?",
        soalanEn: "What three circumstances are pardoned and free of sin for this Ummah in Hadith 39?",
        pilihan: [
          { label: 'A', textMs: "Tersilap tanpa sengaja (Al-Khatha'), Terlupa (An-Nisyan), dan Dipaksa (Al-Istikrah)", textEn: "Unintentional mistake (Al-Khata'), Forgetfulness (An-Nisyan), and Coercion (Al-Istikrah)" },
          { label: 'B', textMs: "Mengantuk, lapar, dan dahaga", textEn: "Sleepiness, hunger, and thirst" },
          { label: 'C', textMs: "Sakit kepala, demam, dan selsema", textEn: "Headaches, fever, and common cold" },
          { label: 'D', textMs: "Ketiadaan wang tunai, ketiadaan kenderaan, dan hujan", textEn: "Lack of cash, lack of transport, and rain" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Innallaha tajawaza li 'an ummati: al-khatha', wan-nisyana, wa mastukrihu 'alayh.'",
        peneranganEn: "The Prophet said: 'Allah has pardoned for my ummah their mistakes, forgetfulness, and what they are forced to do.'"
      },
      {
        id: "L9-Q4",
        hadisNo: 39,
        soalanMs: "Walaupun perbuatan tidak sengaja dimaafkan dosanya di sisi Allah, bagaimanakah hukum syarak sekiranya ia melibatkan kerugian harta orang lain (contoh: memecahkan cermin jiran tanpa sengaja)?",
        soalanEn: "Though accidental acts carry no divine sin, what is the Shariah rule if someone unintentionally breaks a neighbor's property?",
        pilihan: [
          { label: 'A', textMs: "Tiada dosa tetapi wajib mengganti rugi kerosakan harta benda tersebut (Dhamān)", textEn: "No sin is incurred, yet compensating the damaged property (Dhaman) remains mandatory" },
          { label: 'B', textMs: "Tidak perlu mengganti rugi kerana ia bukan sengaja", textEn: "No compensation is due because it was purely accidental" },
          { label: 'C', textMs: "Dikenakan hukuman penjara mandatori", textEn: "Mandatory imprisonment is sentenced" },
          { label: 'D', textMs: "Jiran itu pula yang perlu membayar ganti rugi", textEn: "The neighbor must pay for the damage instead" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Aspek dosa terhapus kerana tiada niat jahat, namun hak sesama makhluk (habluminannas) menuntut gantirugi kerosakan fizikal.",
        peneranganEn: "Moral sin is forgiven, but civil liability and restitution for private property damage remains binding."
      },
      {
        id: "L9-Q5",
        hadisNo: 40,
        soalanMs: "Apakah nasihat Saiyidina Abdullah bin Umar r.a. yang melengkapi pesanan Rasulullah SAW dalam Hadis 40?",
        soalanEn: "What profound counsel did Sayyidina Abdullah bin Umar r.a. add to the Prophet's words in Hadith 40?",
        pilihan: [
          { label: 'A', textMs: "Bila petang jangan nantikan pagi, bila pagi jangan nantikan petang; rebut sihat sebelum sakit dan hidup sebelum mati", textEn: "In the evening don't await morning, in the morning don't await evening; take from health before sickness and life before death" },
          { label: 'B', textMs: "Janganlah tidur melebihi empat jam setiap malam", textEn: "Do not sleep more than four hours each night" },
          { label: 'C', textMs: "Tinggallah di kawasan perkampungan sahaja", textEn: "Reside only in pastoral rural villages" },
          { label: 'D', textMs: "Binalah rumah yang paling kukuh daripada batu gunung", textEn: "Build the most durable fortress using mountain rock" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Ibn Umar berpesan agar tidak panjang angan-angan (tulul amal) dan segera beramal soleh memanfaatkan waktu sihat dan muda.",
        peneranganEn: "Ibn Umar exhorted seizing present opportunity, avoiding procrastinating hopes, and taking advantage of health."
      },
      {
        id: "L9-Q6",
        hadisNo: 40,
        soalanMs: "Apakah metafora kehidupan di dunia yang dipesankan oleh Rasulullah SAW ketika memegang bahu Ibn Umar dalam Hadis 40?",
        soalanEn: "What worldly metaphor did the Prophet teach while grasping Ibn Umar's shoulder in Hadith 40?",
        pilihan: [
          { label: 'A', textMs: "Hiduplah di dunia seperti orang asing (Gharib) atau seorang musafir yang melintasi jalan ('Abiru sabil)", textEn: "Be in this world as though you were a stranger (Gharib) or a passing wayfarer ('Abiru sabil)" },
          { label: 'B', textMs: "Hiduplah seperti seorang raja yang memerintah istana", textEn: "Live like an emperor governing a palace" },
          { label: 'C', textMs: "Hiduplah seperti seorang petani yang tidak pernah bermusafir", textEn: "Live like a farmer who never travels" },
          { label: 'D', textMs: "Hiduplah seperti seorang pelaut yang mencari harta karun", textEn: "Live like a sailor in search of buried treasure" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Kun fid-dunya ka-annaka gharibun aw 'abiru sabil' (Jadilah kamu seperti orang asing atau musafir).",
        peneranganEn: "He stated: 'Be in this world as though you were a stranger or a wayfarer on a path.'"
      },
      {
        id: "L9-Q7",
        hadisNo: 38,
        soalanMs: "Bagaimanakah seseorang hamba dapat meningkatkan kedudukan dirinya sehingga dicintai Allah SWT selepas menyempurnakan amalan fardu?",
        soalanEn: "How does a believer elevate himself to earn Allah's intense love after fulfilling obligatory commands?",
        pilihan: [
          { label: 'A', textMs: "Melazimi amalan-amalan sunat secara berterusan (An-Nawāfil)", textEn: "Constantly performing voluntary deeds with perseverance (An-Nawafil)" },
          { label: 'B', textMs: "Memuji diri sendiri di khalayak ramai", textEn: "Praising one's piety openly before crowds" },
          { label: 'C', textMs: "Mengkritik ibadah orang lain", textEn: "Finding faults in the worship of others" },
          { label: 'D', textMs: "Mengurangkan bacaan doa harian", textEn: "Cutting back on daily supplications" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis Qudsi 38: 'Hamba-Ku sentiasa mendekatkan diri kepada-Ku dengan amalan-amalan sunat sehinggalah Aku mengasihinya.'",
        peneranganEn: "Hadith Qudsi 38: 'My servant continues to draw near to Me with supererogatory works until I love him.'"
      }
    ]
  },
  {
    level: 10,
    namaMs: "Tahap 10: Ujian Sarjana & Analisis Hadis 40 (KBAT)",
    namaEn: "Level 10: Master Scholar & High-Order Synthesis",
    peneranganMs: "Ujian kemuncak merangkumi analisis hukum, asbab wurud, integrasi sunnah, dan aplikasi praktikal.",
    peneranganEn: "Ultimate examination encompassing juristic synthesis, context, and modern applications.",
    tahapKesukaranMs: "Pakar",
    tahapKesukaranEn: "Expert",
    soalanPool: [
      {
        id: "L10-Q1",
        hadisNo: 1,
        soalanMs: "Apakah peristiwa sejarah (asbab wurud) yang melatarbelakangi penegasan Rasulullah SAW mengenai hijrah kerana wanita dalam Hadis 1?",
        soalanEn: "What historical occasion (asbab al-wurud) prompted the Prophet's explicit mention of migrating for a woman in Hadith 1?",
        pilihan: [
          { label: 'A', textMs: "Seorang lelaki berhijrah ke Madinah semata-mata untuk mengahwini wanita bernama Ummu Qais (Muhajir Ummi Qais)", textEn: "A man who emigrated to Madinah purely to marry a woman known as Ummu Qais (Muhajir Ummi Qais)" },
          { label: 'B', textMs: "Peristiwa perkahwinan Saiyidina Ali dengan Saidatina Fatimah", textEn: "The wedding of Sayyidina Ali and Sayyidatina Fatimah" },
          { label: 'C', textMs: "Perjanjian Hudaibiyah antara Quraisy dan Muslimin", textEn: "The signing of the Treaty of Hudaybiyyah" },
          { label: 'D', textMs: "Peristiwa hijrah pertama para sahabat ke Habsyah", textEn: "The first migration of Companions to Abyssinia" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Lelaki tersebut dikenali sebagai 'Muhajir Ummi Qais' kerana matlamat hijrahnya adalah untuk mengahwini Ummu Qais, bukan semata-mata kerana Allah.",
        peneranganEn: "The man was referred to as 'Muhajir Ummi Qais' because his migration was motivated by marriage rather than Allah."
      },
      {
        id: "L10-Q2",
        hadisNo: 5,
        soalanMs: "Imam an-Nawawi dan para ulama hadis menetapkan bahawa Hadis 1 dan Hadis 5 merupakan dua neraca pengukur amalan. Apakah perbezaan neraca kedua-dua hadis tersebut?",
        soalanEn: "Scholars establish that Hadith 1 and Hadith 5 serve as dual balances for all deeds. How do these two scales differ?",
        pilihan: [
          { label: 'A', textMs: "Hadis 1 adalah neraca amalan batin (keikhlasan niat), manakala Hadis 5 adalah neraca amalan zahir (menepati sunnah syariat)", textEn: "Hadith 1 balances inner intention (sincerity), while Hadith 5 balances outer conformity to Sunnah" },
          { label: 'B', textMs: "Hadis 1 khusus untuk wanita, manakala Hadis 5 khusus untuk lelaki", textEn: "Hadith 1 is exclusively for women, Hadith 5 for men" },
          { label: 'C', textMs: "Hadis 1 untuk solat fardu, manakala Hadis 5 untuk sedekah", textEn: "Hadith 1 is for obligatory prayer, Hadith 5 for charity" },
          { label: 'D', textMs: "Hadis 1 telah dimansukhkan oleh hukum Hadis 5", textEn: "Hadith 1 has been abrogated by Hadith 5" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Syarat penerimaan amalan ada dua: Ikhlas niat kerana Allah (Hadis 1) dan mengikut petunjuk syariat Nabi SAW (Hadis 5).",
        peneranganEn: "Deed acceptance requires dual criteria: Sincere inner intention (Hadith 1) and external adherence to the Sunnah (Hadith 5)."
      },
      {
        id: "L10-Q3",
        hadisNo: 4,
        soalanMs: "Dalam Hadis 4, apakah empat ketetapan taqdir yang diperintahkan kepada malaikat untuk ditulis ketika janin berusia 120 hari?",
        soalanEn: "In Hadith 4, what four decrees is the angel commanded to write when the fetus reaches 120 days?",
        pilihan: [
          { label: 'A', textMs: "Rezekinya (Rizqihi), Ajalnya (Ajalihi), Amalannya ('Amalihi), dan Celaka atau Bahagianya (Syaqiyyun aw Sa'id)", textEn: "His livelihood (Rizq), lifespan (Ajal), deeds ('Amal), and whether wretched or blessed (Shaqi or Sa'id)" },
          { label: 'B', textMs: "Namanya, warna kulitnya, bahasanya, dan negaranya", textEn: "His name, skin complexion, native tongue, and nation" },
          { label: 'C', textMs: "Pangkatnya, hartanya, rumahnya, dan kenderaannya", textEn: "His rank, assets, residence, and vehicles" },
          { label: 'D', textMs: "Sekolahnya, pekerjaannya, kawan-kawannya, dan hobinya", textEn: "His school, occupation, acquaintances, and hobbies" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Malaikat diperintahkan menulis empat kalimah: bi-katbi rizqihi, wa ajalihi, wa 'amalihi, wa syaqiyyun aw sa'id.",
        peneranganEn: "The angel writes four destinies: livelihood, lifespan, actions, and whether damned or felicitous."
      },
      {
        id: "L10-Q4",
        hadisNo: 28,
        soalanMs: "Imam al-Syafie membahagikan perkara bidaah kepada dua kategori utama berasaskan kefahaman Hadis 5 dan Hadis 28. Apakah dua kategori tersebut?",
        soalanEn: "Imam al-Shafi'i classified newly introduced matters (bid'ah) into two categories based on Hadiths 5 & 28. What are they?",
        pilihan: [
          { label: 'A', textMs: "Bidaah Mahmudah (terpuji selaras dengan usul syarak) dan Bidaah Mazmumah (tercela yang menyalahi syarak)", textEn: "Bid'ah Mahmudah (praiseworthy aligned with Shariah principles) and Bid'ah Madhmumah (blameworthy)" },
          { label: 'B', textMs: "Bidaah wajib dan bidaah makruh", textEn: "Mandatory bid'ah and disliked bid'ah" },
          { label: 'C', textMs: "Bidaah orang kaya dan bidaah orang miskin", textEn: "Wealthy bid'ah and poor bid'ah" },
          { label: 'D', textMs: "Bidaah zaman dahulu dan bidaah moden", textEn: "Ancient bid'ah and contemporary bid'ah" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Menurut Imam al-Syafie, perkara baharu yang bertepatan dengan usul syariat dan membawa maslahat adalah bidaah mahmudah/hasanah.",
        peneranganEn: "Imam al-Shafi'i identified innovations conforming to the Quran/Sunnah as praiseworthy, and contrary ones as blameworthy."
      },
      {
        id: "L10-Q5",
        hadisNo: 17,
        soalanMs: "Apakah pengajaran tertinggi daripada Hadis 17 (Kewajipan Ihsan pada setiap perkara) dalam pembinaan tamadun insaniah?",
        soalanEn: "What is the supreme principle from Hadith 17 (Obligation of Ihsan upon everything) in cultivating civilization?",
        pilihan: [
          { label: 'A', textMs: "Budaya ketelitian kualiti (itqan), belas kasihan sejagat, dan penambahbaikan berterusan dalam semua bidang kehidupan", textEn: "A culture of meticulous quality (itqan), universal compassion, and continual improvement across all sectors" },
          { label: 'B', textMs: "Mengutamakan kepantasan kerja tanpa mempedulikan kualiti hasil", textEn: "Prioritizing speed over quality of outcome" },
          { label: 'C', textMs: "Berbuat baik hanya apabila diselia oleh majikan", textEn: "Acting conscientiously only when supervised by superiors" },
          { label: 'D', textMs: "Menghapuskan bidang penternakan dan perikanan", textEn: "Abolishing livestock farming and fisheries" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Ihsan merupakan tunjang tamadun Islam: ketelitian kerja, etika kemanusiaan, dan pemeliharaan hak haiwan serta alam sekitar.",
        peneranganEn: "Ihsan demands utmost excellence, precision (itqan), and boundless mercy toward all created beings."
      },
      {
        id: "L10-Q6",
        hadisNo: 23,
        soalanMs: "Dalam Hadis 23, apakah perbezaan makna antara perkataan 'Nuur' bagi Solat dan 'Dhiyaa'' bagi Sabar?",
        soalanEn: "In Hadith 23, what is the subtle nuance between 'Nur' (Light) for Prayer and 'Diya'' (Radiance) for Patience?",
        pilihan: [
          { label: 'A', textMs: "Solat adalah Nuur (cahaya lembut yang memberi ketenangan), manakala Sabar adalah Dhiyaa' (sinaran terang bersuhu haba yang memerlukan perjuangan)", textEn: "Prayer is Nur (gentle soothing illumination), while Patience is Diya' (piercing radiance with burning heat requiring struggle)" },
          { label: 'B', textMs: "Nuur adalah gelap gelita manakala Dhiyaa' adalah lampu minyak", textEn: "Nur is complete darkness while Diya' is an oil lamp" },
          { label: 'C', textMs: "Tiada sebarang perbezaan makna dalam bahasa Arab", textEn: "There is no difference in Arabic linguistics" },
          { label: 'D', textMs: "Nuur untuk waktu siang manakala Dhiyaa' untuk waktu malam", textEn: "Nur applies to daytime, Diya' to nighttime" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Para ulama menerangkan 'Dhiyaa'' ialah sinaran bercahaya yang disertai kehangatan/haba mujahadah (seperti matahari), manakala 'Nuur' cahaya lembut yang menyejukkan hati.",
        peneranganEn: "Scholars note that 'Diya'' denotes light accompanied by burning heat/struggle, whereas 'Nur' is serene illuminating light."
      },
      {
        id: "L10-Q7",
        hadisNo: 32,
        soalanMs: "Apakah beza antara perkataan 'Dharar' (ضَرَر) dan 'Dhirar' (ضِرَار) dalam hadis 'La dharara wa la dhirar'?",
        soalanEn: "What is the juristic distinction between 'Darar' and 'Dirar' in the hadith 'La darara wa la dirar'?",
        pilihan: [
          { label: 'A', textMs: "Dharar ialah memudaratkan orang lain tanpa mendapat faedah, manakala Dhirar ialah membalas kemudaratan dengan kemudaratan secara zalim atau disengajakan", textEn: "Darar is causing harm without personal gain, while Dirar is retaliating with unlawful harm or willful reciprocal malice" },
          { label: 'B', textMs: "Dharar untuk haiwan, Dhirar untuk manusia", textEn: "Darar applies to animals, Dirar applies to humans" },
          { label: 'C', textMs: "Dharar adalah perkara halal, Dhirar adalah makruh", textEn: "Darar is permissible, Dirar is discouraged" },
          { label: 'D', textMs: "Dharar ialah kerugian wang, Dhirar ialah kerosakan bangunan", textEn: "Darar is financial loss, Dirar is structural damage" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Ulama menerangkan Dharar ialah perbuatan memudaratkan orang lain, manakala Dhirar ialah perbuatan membalas keburukan dengan cara yang melampaui batas.",
        peneranganEn: "Darar refers to causing unilateral harm, while Dirar entails reciprocal harm done out of spite without legitimate justification."
      }
    ]
  }
];
