export interface QuizOption {
  label: 'A' | 'B' | 'C' | 'D';
  textMs: string;
  textEn: string;
}

export interface QuizQuestion {
  id: string;
  hadisNo: number;
  soalanMs: string;
  soalanEn: string;
  pilihan: QuizOption[];
  jawapanBetulIndex: number; // 0: A, 1: B, 2: C, 3: D
  peneranganMs: string;
  peneranganEn: string;
}

export interface QuizLevel {
  level: number;
  namaMs: string;
  namaEn: string;
  peneranganMs: string;
  peneranganEn: string;
  tahapKesukaranMs: 'Mudah' | 'Sederhana' | 'Sukar' | 'Pakar';
  tahapKesukaranEn: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  soalanPool: QuizQuestion[];
}

export const quizLevels1to5: QuizLevel[] = [
  {
    level: 1,
    namaMs: "Tahap 1: Asas & Perawi Utama Hadis",
    namaEn: "Level 1: Fundamentals & Major Hadith Narrators",
    peneranganMs: "Kenali perawi-perawi utama dan tema permulaan Hadis 40 Imam Nawawi.",
    peneranganEn: "Learn the primary narrators and introductory themes of Imam Nawawi's 40 Hadiths.",
    tahapKesukaranMs: "Mudah",
    tahapKesukaranEn: "Easy",
    soalanPool: [
      {
        id: "L1-Q1",
        hadisNo: 1,
        soalanMs: "Siapakah sahabat Rasulullah SAW yang meriwayatkan Hadis Pertama berkenaan keutamaan niat?",
        soalanEn: "Who is the noble Companion who narrated the First Hadith concerning intentions?",
        pilihan: [
          { label: 'A', textMs: "Amirul Mukminin Abu Hafs Saiyidina Umar bin al-Khattab r.a.", textEn: "Amirul Mukminin Abu Hafs Umar bin al-Khattab r.a." },
          { label: 'B', textMs: "Abu Hurairah Abdul Rahman bin Sakhr r.a.", textEn: "Abu Hurairah Abdul Rahman bin Sakhr r.a." },
          { label: 'C', textMs: "Abdullah bin Mas'ud r.a.", textEn: "Abdullah bin Mas'ud r.a." },
          { label: 'D', textMs: "Anas bin Malik r.a.", textEn: "Anas bin Malik r.a." }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis 1 diriwayatkan oleh Amirul Mukminin Abu Hafs Umar bin al-Khattab r.a. (Riwayat al-Bukhari & Muslim).",
        peneranganEn: "Hadith 1 was narrated by Amirul Mukminin Abu Hafs Umar bin al-Khattab r.a. (Bukhari & Muslim)."
      },
      {
        id: "L1-Q2",
        hadisNo: 1,
        soalanMs: "Menurut Hadis 1, apakah perbezaan utama antara ibadah dengan kebiasaan/adat harian?",
        soalanEn: "According to Hadith 1, what is the main distinction between an act of worship and a daily habit?",
        pilihan: [
          { label: 'A', textMs: "Tempat perbuatan dilakukan", textEn: "The place where the deed is performed" },
          { label: 'B', textMs: "Niat yang ikhlas kerana Allah SWT", textEn: "Sincere intention purely for Allah SWT" },
          { label: 'C', textMs: "Waktu pagi atau petang", textEn: "Morning or evening time" },
          { label: 'D', textMs: "Pakaian yang dipakai semasa beramal", textEn: "The clothing worn during the action" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Niat di dalam hati membezakan sama ada sesuatu perbuatan dinilai sebagai ibadah berpahala atau sekadar adat.",
        peneranganEn: "Intention in the heart differentiates whether an action is rewarded as worship or just a customary habit."
      },
      {
        id: "L1-Q3",
        hadisNo: 20,
        soalanMs: "Apakah ungkapan daripada nabi-nabi terdahulu yang disebut dalam Hadis ke-20?",
        soalanEn: "What expression from earlier prophets is mentioned in the 20th Hadith?",
        pilihan: [
          { label: 'A', textMs: "Jika kamu tiada sifat malu, buatlah apa sahaja yang kamu mahu", textEn: "If you feel no shame, then do whatever you wish" },
          { label: 'B', textMs: "Kebersihan itu sebahagian daripada iman", textEn: "Purity is half of faith" },
          { label: 'C', textMs: "Tinggalkan perkara yang meragukanmu", textEn: "Leave that which makes you doubt" },
          { label: 'D', textMs: "Agama itu nasihat", textEn: "Religion is sincere advice" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Jika kamu sudah tiada sifat malu maka buatlah apa sahaja yang kamu mahu' (Riwayat al-Bukhari).",
        peneranganEn: "The Prophet SAW said: 'If you have no shame, then do as you please' (Narrated by al-Bukhari)."
      },
      {
        id: "L1-Q4",
        hadisNo: 3,
        soalanMs: "Berapakah rukun Islam yang dinyatakan dalam Hadis ke-3 riwayat Abdullah bin Umar r.a.?",
        soalanEn: "How many pillars of Islam are specified in Hadith 3 narrated by Abdullah bin Umar r.a.?",
        pilihan: [
          { label: 'A', textMs: "3 rukun", textEn: "3 pillars" },
          { label: 'B', textMs: "4 rukun", textEn: "4 pillars" },
          { label: 'C', textMs: "5 rukun", textEn: "5 pillars" },
          { label: 'D', textMs: "6 rukun", textEn: "6 pillars" }
        ],
        jawapanBetulIndex: 2,
        peneranganMs: "Islam dibina atas lima rukun: Syahadah, Solat, Zakat, Haji, dan Puasa Ramadan.",
        peneranganEn: "Islam is built on five pillars: Shahadah, Salah, Zakah, Hajj, and Fasting in Ramadan."
      },
      {
        id: "L1-Q5",
        hadisNo: 16,
        soalanMs: "Apakah pesanan ringkas yang diulang oleh Rasulullah SAW apabila diminta wasiat dalam Hadis 16?",
        soalanEn: "What concise advice did the Prophet SAW repeat when asked for counsel in Hadith 16?",
        pilihan: [
          { label: 'A', textMs: "Janganlah kamu marah (La taghdhab)", textEn: "Do not get angry (La taghdhab)" },
          { label: 'B', textMs: "Perbanyakkanlah sedekah", textEn: "Give plenty of charity" },
          { label: 'C', textMs: "Berhati-hatilah pada perkara syubhah", textEn: "Beware of doubtful matters" },
          { label: 'D', textMs: "Lazimilah berpuasa sunat", textEn: "Maintain voluntary fasting" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Rasulullah SAW berpesan berulang kali: 'Janganlah kamu marah' (Riwayat al-Bukhari).",
        peneranganEn: "The Prophet SAW repeatedly advised: 'Do not become angry' (Narrated by al-Bukhari)."
      },
      {
        id: "L1-Q6",
        hadisNo: 11,
        soalanMs: "Siapakah cucunda Rasulullah SAW yang meriwayatkan Hadis 11 tentang meninggalkan keraguan?",
        soalanEn: "Who is the grandchild of the Prophet SAW who narrated Hadith 11 on leaving doubt?",
        pilihan: [
          { label: 'A', textMs: "Abu Muhammad al-Hasan bin Ali bin Abu Talib r.a.", textEn: "Abu Muhammad al-Hasan bin Ali bin Abu Talib r.a." },
          { label: 'B', textMs: "Al-Husain bin Ali r.a.", textEn: "Al-Husain bin Ali r.a." },
          { label: 'C', textMs: "Usamah bin Zaid r.a.", textEn: "Usamah bin Zaid r.a." },
          { label: 'D', textMs: "Abdullah bin Abbas r.a.", textEn: "Abdullah bin Abbas r.a." }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis 11 diriwayatkan oleh cucunda kesayangan Rasulullah SAW, Saiyidina al-Hasan bin Ali r.a.",
        peneranganEn: "Hadith 11 was narrated by the Prophet's beloved grandson, al-Hasan bin Ali r.a."
      },
      {
        id: "L1-Q7",
        hadisNo: 5,
        soalanMs: "Siapakah Ummul Mukminin yang meriwayatkan Hadis ke-5 mengenai amalan yang tertolak?",
        soalanEn: "Which Mother of the Believers narrated Hadith 5 regarding rejected innovations?",
        pilihan: [
          { label: 'A', textMs: "Saidatina Khadijah r.a.", textEn: "Lady Khadijah r.a." },
          { label: 'B', textMs: "Saidatina 'Aisyah r.a.", textEn: "Lady 'Aisyah r.a." },
          { label: 'C', textMs: "Saidatina Hafsah r.a.", textEn: "Lady Hafsah r.a." },
          { label: 'D', textMs: "Saidatina Ummu Salamah r.a.", textEn: "Lady Ummu Salamah r.a." }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Hadis 5 diriwayatkan oleh Ummul Mukminin Ummu Abdillah Saidatina 'Aisyah r.a.",
        peneranganEn: "Hadith 5 was narrated by the Mother of the Believers, Sayyidatina 'Aisyah r.a."
      }
    ]
  },
  {
    level: 2,
    namaMs: "Tahap 2: Intipati & Maksud Terjemahan Hadis",
    namaEn: "Level 2: Meanings & Core Translations",
    peneranganMs: "Uji kefahaman terhadap terjemahan dan maksud hadis 1 hingga 15.",
    peneranganEn: "Test your understanding of translations and meanings from Hadiths 1 to 15.",
    tahapKesukaranMs: "Mudah",
    tahapKesukaranEn: "Easy",
    soalanPool: [
      {
        id: "L2-Q1",
        hadisNo: 12,
        soalanMs: "Apakah tanda keindahan dan keelokan Islam seseorang menurut Hadis 12?",
        soalanEn: "What is an indication of the excellence of a person's Islam according to Hadith 12?",
        pilihan: [
          { label: 'A', textMs: "Meninggalkan sesuatu yang tidak berfaedah dan tidak berkaitan dengannya", textEn: "Leaving alone that which does not concern or benefit him" },
          { label: 'B', textMs: "Mempunyai harta kekayaan yang melimpah", textEn: "Possessing abundant wealth" },
          { label: 'C', textMs: "Banyak bertanya soalan yang rumit", textEn: "Asking many complicated questions" },
          { label: 'D', textMs: "Memulaukan orang yang berbeza pandangan", textEn: "Boycotting those with differing views" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Antara keindahan Islam seseorang ialah dia meninggalkan sesuatu yang tidak berkaitan dengan dirinya.'",
        peneranganEn: "The Prophet SAW said: 'Part of the perfection of one's Islam is leaving that which does not concern him.'"
      },
      {
        id: "L2-Q2",
        hadisNo: 13,
        soalanMs: "Mengikut Hadis 13, bilakah iman seseorang Muslim dianggap sempurna?",
        soalanEn: "According to Hadith 13, when is a Muslim's faith considered truly complete?",
        pilihan: [
          { label: 'A', textMs: "Apabila dia berjaya mengatasi semua pesaingnya", textEn: "When he triumphs over all his competitors" },
          { label: 'B', textMs: "Apabila dia menyukai saudaranya beroleh kebaikan seperti dirinya sendiri", textEn: "When he loves for his brother what he loves for himself" },
          { label: 'C', textMs: "Apabila dia menghafal seluruh isi kitab agama", textEn: "When he memorizes the entire book of religion" },
          { label: 'D', textMs: "Apabila dia tidak bergaul dengan orang lain", textEn: "When he isolates himself from society" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Nabi SAW bersabda: 'Tidak sempurna iman seseorang sehingga dia menyukai saudaranya beroleh apa yang dia sukakan untuk dirinya.'",
        peneranganEn: "The Prophet SAW stated: 'None of you truly believes until he loves for his brother what he loves for himself.'"
      },
      {
        id: "L2-Q3",
        hadisNo: 15,
        soalanMs: "Berdasarkan Hadis 15, apakah tiga adab orang yang beriman kepada Allah dan hari akhirat?",
        soalanEn: "Based on Hadith 15, what are the three manners of someone who believes in Allah and the Last Day?",
        pilihan: [
          { label: 'A', textMs: "Berkata baik atau diam, memuliakan jiran, dan memuliakan tetamu", textEn: "Speak good or remain silent, honour the neighbour, and honour the guest" },
          { label: 'B', textMs: "Membayar hutang, menunaikan haji, dan mendirikan solat sunat", textEn: "Pay debts, perform hajj, and pray voluntary prayers" },
          { label: 'C', textMs: "Berpuasa setiap hari, berniaga, dan menuntut ilmu", textEn: "Fast every day, trade, and seek knowledge" },
          { label: 'D', textMs: "Membina masjid, bersedekah emas, dan mengembara", textEn: "Build mosques, donate gold, and travel" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis 15 menyebut: '...berkata yang baik atau diam... memuliakan jirannya... memuliakan tetamunya.'",
        peneranganEn: "Hadith 15 outlines: speak good or be silent, honour the neighbour, and honour the guest."
      },
      {
        id: "L2-Q4",
        hadisNo: 7,
        soalanMs: "Apakah erti 'Al-Dinu an-Nasihah' yang diterangkan oleh Rasulullah SAW dalam Hadis 7?",
        soalanEn: "What does 'Al-Dinu an-Nasihah' mean as explained by the Messenger of Allah SAW in Hadith 7?",
        pilihan: [
          { label: 'A', textMs: "Agama itu ialah perdebatan yang panjang", textEn: "Religion is a lengthy debate" },
          { label: 'B', textMs: "Agama itu nasihat (tulus setia menunaikan tanggungjawab)", textEn: "Religion is sincere advice and devotion" },
          { label: 'C', textMs: "Agama itu memaksakan kehendak peribadi", textEn: "Religion is enforcing personal will" },
          { label: 'D', textMs: "Agama itu hanya amalan di masjid", textEn: "Religion is solely ritual in mosques" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Agama itu nasihat kepada Allah, kitab-Nya, rasul-Nya, pemimpin umat Islam, dan orang awam.",
        peneranganEn: "Religion is sincerity towards Allah, His Book, His Messenger, and Muslim leaders and public."
      },
      {
        id: "L2-Q5",
        hadisNo: 10,
        soalanMs: "Mengapakah doa seorang musafir yang kusut masai dalam Hadis 10 tidak diperkenankan Allah SWT?",
        soalanEn: "Why was the prayer of the disheveled traveler in Hadith 10 not answered by Allah SWT?",
        pilihan: [
          { label: 'A', textMs: "Kerana perjalanannya terlalu singkat", textEn: "Because his journey was too short" },
          { label: 'B', textMs: "Kerana makanan, minuman, pakaian dan sumbernya adalah daripada yang haram", textEn: "Because his food, drink, clothing, and nourishment were from the haram" },
          { label: 'C', textMs: "Kerana dia tidak menadah kedua tangannya", textEn: "Because he did not raise both hands" },
          { label: 'D', textMs: "Kerana dia berdoa dalam bahasa asing", textEn: "Because he prayed in a foreign language" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Doa terhalang kerana makanannya haram, minumannya haram, pakaiannya haram dan dia diberi makan dari yang haram.",
        peneranganEn: "His prayer was blocked because his food, drink, clothes, and sustenance were haram."
      },
      {
        id: "L2-Q6",
        hadisNo: 9,
        soalanMs: "Apakah faktor yang telah membinasakan umat-umat terdahulu menurut sabda Nabi SAW dalam Hadis 9?",
        soalanEn: "What factor caused the destruction of past nations according to Hadith 9?",
        pilihan: [
          { label: 'A', textMs: "Banyak bertanya perkara remeh dan mempertikai nabi-nabi mereka", textEn: "Excessive questioning and disputing with their prophets" },
          { label: 'B', textMs: "Kekurangan makanan dan kemarau panjang", textEn: "Shortage of food and prolonged droughts" },
          { label: 'C', textMs: "Kelemahan kekuatan fizikal tenteranya", textEn: "Lack of military and physical strength" },
          { label: 'D', textMs: "Tidak mahu bermusafir ke tempat lain", textEn: "Refusal to travel to other lands" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: '...perkara yang membinasakan umat yang terdahulu adalah banyak bertanya dan mempertikai para nabi mereka.'",
        peneranganEn: "The Prophet SAW warned: 'Those before you were ruined only by excessive questioning and disputing with their prophets.'"
      },
      {
        id: "L2-Q7",
        hadisNo: 6,
        soalanMs: "Dalam Hadis 6, perumpamaan penggembala ternakan berhampiran kawasan larangan raja merujuk kepada:",
        soalanEn: "In Hadith 6, the parable of the shepherd grazing near a king's sanctuary refers to:",
        pilihan: [
          { label: 'A', textMs: "Orang yang bermain di tepi sungai yang dalam", textEn: "A person playing near deep rivers" },
          { label: 'B', textMs: "Orang yang berlegar di sekitar perkara syubhah sehingga terjerumus ke dalam haram", textEn: "Someone lingering around doubtful matters until falling into haram" },
          { label: 'C', textMs: "Orang yang menjaga binatang peliharaan dengan baik", textEn: "A farmer taking good care of animals" },
          { label: 'D', textMs: "Orang yang takut kepada pengawal keselamatan", textEn: "Someone afraid of royal guards" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Penggembala dekat kawasan larangan raja umpama orang yang mendekati syubhah lalu tergelincir ke dalam perkara haram.",
        peneranganEn: "The shepherd grazing near the forbidden pasture resembles one who nears doubtful zones and enters haram."
      }
    ]
  },
  {
    level: 3,
    namaMs: "Tahap 3: Tiga Teras Agama (Hadis Jibril)",
    namaEn: "Level 3: The Three Foundations (Hadith of Jibril)",
    peneranganMs: "Kuasai kefahaman mendalam tentang Islam, Iman, Ihsan dan tanda kiamat dalam Hadis 2.",
    peneranganEn: "Master the profound understanding of Islam, Iman, Ihsan, and Hour signs from Hadith 2.",
    tahapKesukaranMs: "Sederhana",
    tahapKesukaranEn: "Medium",
    soalanPool: [
      {
        id: "L3-Q1",
        hadisNo: 2,
        soalanMs: "Apakah takrifan 'Ihsan' yang dinyatakan oleh Rasulullah SAW kepada Malaikat Jibril?",
        soalanEn: "What definition of 'Ihsan' did the Prophet SAW provide to Angel Jibril?",
        pilihan: [
          { label: 'A', textMs: "Menunaikan zakat dan haji mengikut masa yang ditetapkan", textEn: "Paying zakat and hajj at the appointed time" },
          { label: 'B', textMs: "Kamu beribadah kepada Allah seolah-olah melihat-Nya, jika tidak melihat-Nya sesungguhnya Dia melihat kamu", textEn: "Worship Allah as though you see Him, for if you do not see Him, He truly sees you" },
          { label: 'C', textMs: "Berbuat baik hanya kepada orang yang berbuat baik kepada kita", textEn: "Doing good only to those who do good to us" },
          { label: 'D', textMs: "Membaca al-Quran dengan tartil di hadapan orang ramai", textEn: "Reciting the Quran melodiously in public" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Ihsan ialah: 'An ta'budallaha ka-annaka tarahu, fa-in lam takun tarahu fa-innahu yaraka.'",
        peneranganEn: "Ihsan is to worship Allah as if you see Him, and if you cannot see Him, He sees you."
      },
      {
        id: "L3-Q2",
        hadisNo: 2,
        soalanMs: "Antara tanda hari kiamat yang disebut dalam Hadis 2 ialah:",
        soalanEn: "Among the signs of the Day of Judgment cited in Hadith 2 is:",
        pilihan: [
          { label: 'A', textMs: "Hamba perempuan melahirkan tuannya & penggembala kambing berlumba mendirikan bangunan tinggi", textEn: "A slave woman gives birth to her mistress & barefoot shepherds compete in tall buildings" },
          { label: 'B', textMs: "Semua lautan menjadi kering kontang", textEn: "All the oceans completely dry up" },
          { label: 'C', textMs: "Matahari tidak terbit selama setahun", textEn: "The sun ceases to rise for an entire year" },
          { label: 'D', textMs: "Manusia tidak lagi memerlukan makanan dan minuman", textEn: "Humans no longer require food or water" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Tanda kiamat dalam hadis: '...hamba perempuan melahirkan tuannya, dan melihat penggembala miskin berlumba membina bangunan tinggi.'",
        peneranganEn: "The sign mentions the bondwoman giving birth to her master, and destitute shepherds constructing high towers."
      },
      {
        id: "L3-Q3",
        hadisNo: 2,
        soalanMs: "Apakah gelaran yang diberikan oleh para ulama kepada Hadis ke-2 (Hadis Jibril)?",
        soalanEn: "What title is bestowed by Islamic scholars upon Hadith 2 (Hadith Jibril)?",
        pilihan: [
          { label: 'A', textMs: "Ummus Sunnah (Ibu Segala Sunnah)", textEn: "Umm as-Sunnah (Mother of the Sunnah)" },
          { label: 'B', textMs: "Hadis Qudsi Pilihan", textEn: "Selected Hadith Qudsi" },
          { label: 'C', textMs: "Ayat Kursi Maknawi", textEn: "Spiritual Ayat al-Kursi" },
          { label: 'D', textMs: "Himpunan Dua Kalimah", textEn: "Collection of Two Testimonies" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis Jibril digelar 'Ummus Sunnah' kerana merangkumi kesemua sendi aqidah, syariah, dan tasawuf.",
        peneranganEn: "Hadith Jibril is called 'Umm as-Sunnah' because it integrates creed, law, and spiritual excellence."
      },
      {
        id: "L3-Q4",
        hadisNo: 2,
        soalanMs: "Bagaimanakah penampilan Malaikat Jibril semasa menjelma dan hadir di majlis ilmu para sahabat?",
        soalanEn: "How did Angel Jibril appear when he arrived at the Companions' gathering?",
        pilihan: [
          { label: 'A', textMs: "Memakai pakaian berdebu dan bertongkat besi", textEn: "Wearing dusty garments and leaning on an iron cane" },
          { label: 'B', textMs: "Berpakaian sangat putih, rambut sangat hitam, dan tiada tanda perjalanan jauh", textEn: "Extremely white clothing, pitch black hair, and no signs of travel" },
          { label: 'C', textMs: "Berbaju besi seperti panglima perang", textEn: "Armed with steel armour like a military commander" },
          { label: 'D', textMs: "Menaiki seekor kuda putih bersayap", textEn: "Riding upon a winged white horse" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Penampilan Malaikat Jibril menunjukkan adab kesucian pakaian dan kerapian diri semasa menghadiri majlis ilmu.",
        peneranganEn: "Jibril appeared with spotless white robes and dark hair, teaching students the etiquette of cleanliness."
      },
      {
        id: "L3-Q5",
        hadisNo: 2,
        soalanMs: "Berapakah rukun Iman yang disahkan oleh Rasulullah SAW kepada Jibril dalam Hadis 2?",
        soalanEn: "How many articles of Faith (Iman) were confirmed by the Prophet SAW to Jibril in Hadith 2?",
        pilihan: [
          { label: 'A', textMs: "5 perkara", textEn: "5 articles" },
          { label: 'B', textMs: "6 perkara (Allah, Malaikat, Kitab, Rasul, Hari Akhirat, Qadar)", textEn: "6 articles (Allah, Angels, Books, Messengers, Last Day, Destiny)" },
          { label: 'C', textMs: "7 perkara", textEn: "7 articles" },
          { label: 'D', textMs: "4 perkara", textEn: "4 articles" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Iman mengandungi 6 rukun: beriman kepada Allah, para malaikat, kitab-kitab, para rasul, hari kiamat, dan takdir qada & qadar.",
        peneranganEn: "Iman comprises 6 pillars: belief in Allah, Angels, Books, Messengers, the Last Day, and divine decree."
      },
      {
        id: "L3-Q6",
        hadisNo: 3,
        soalanMs: "Dalam Hadis 3, ibadah manakah yang digelarkan dalam hadis lain sebagai 'Tiang Agama' (As-Solatu 'Imaduddin)?",
        soalanEn: "In Hadith 3, which act of worship is described in authentic tradition as the 'Pillar of Religion'?",
        pilihan: [
          { label: 'A', textMs: "Mendirikan solat fardu lima waktu", textEn: "Establishing the five daily obligatory prayers" },
          { label: 'B', textMs: "Membayar zakat perniagaan", textEn: "Paying zakat on commercial wealth" },
          { label: 'C', textMs: "Berpuasa sepanjang tahun", textEn: "Fasting throughout the entire year" },
          { label: 'D', textMs: "Melakukan tawaf di Kaabah", textEn: "Circumambulating the Ka'bah" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Solat merupakan tiang agama; sesiapa mendirikannya menegakkan agama, dan sesiapa meruntuhkannya meruntuhkan agama.",
        peneranganEn: "Prayer is the pillar of religion; whoever establishes it upholds the faith."
      },
      {
        id: "L3-Q7",
        hadisNo: 2,
        soalanMs: "Apakah jawapan Nabi SAW apabila Jibril bertanya: 'Khabarkan kepadaku tentang waktu berlakunya Kiamat'?",
        soalanEn: "What was the Prophet's response when Jibril asked: 'Tell me about the Hour'?",
        pilihan: [
          { label: 'A', textMs: "Ia akan berlaku dalam tempoh 100 tahun lagi", textEn: "It will occur within the next 100 years" },
          { label: 'B', textMs: "Orang yang ditanya tidaklah lebih mengetahui daripada yang bertanya", textEn: "The one questioned knows no more than the questioner" },
          { label: 'C', textMs: "Hanya para malaikat yang mengetahuinya", textEn: "Only the angels possess knowledge of it" },
          { label: 'D', textMs: "Kiamat tidak akan berlaku sama sekali", textEn: "The Hour will never take place" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Jawapan baginda: 'Ma al-mas'ulu 'anha bi-a'lama minas sa-il' (Orang yang ditanya tidak lebih tahu dari yang bertanya).",
        peneranganEn: "He replied: 'The one who is asked about it knows no more than the one who is asking.'"
      }
    ]
  },
  {
    level: 4,
    namaMs: "Tahap 4: Akhlak, Muamalat & Pemeliharaan Hati",
    namaEn: "Level 4: Manners, Conduct & Purifying the Heart",
    peneranganMs: "Uji pengetahuan berkaitan konsep halal-haram, sifat syubhah dan penjagaan rohani.",
    peneranganEn: "Test insights on lawful-unlawful bounds, doubtful matters, and spiritual wellness.",
    tahapKesukaranMs: "Sederhana",
    tahapKesukaranEn: "Medium",
    soalanPool: [
      {
        id: "L4-Q1",
        hadisNo: 6,
        soalanMs: "Dalam Hadis 6, apakah 'seketul daging' yang jika ia baik maka baik seluruh jasad, dan jika rosak maka rosak seluruh jasad?",
        soalanEn: "In Hadith 6, what is the 'morsel of flesh' which if sound, the whole body is sound, and if corrupt, the body is corrupt?",
        pilihan: [
          { label: 'A', textMs: "Otak / Akal fikiran", textEn: "The intellect / brain" },
          { label: 'B', textMs: "Hati (Al-Qalb)", textEn: "The heart (Al-Qalb)" },
          { label: 'C', textMs: "Lidah (Al-Lisan)", textEn: "The tongue (Al-Lisan)" },
          { label: 'D', textMs: "Perut (Al-Baqar)", textEn: "The stomach" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Sabda Nabi SAW: 'Ala wa hiya al-qalb' (Ketahuilah sesungguhnya ia adalah hati).",
        peneranganEn: "The Prophet SAW declared: 'Truly, it is the heart (al-Qalb).'"
      },
      {
        id: "L4-Q2",
        hadisNo: 14,
        soalanMs: "Berdasarkan Hadis 14, bilakah darah seorang Muslim halal ditumpahkan (hukuman bunuh oleh pemerintah)?",
        soalanEn: "According to Hadith 14, in which three cases is shedding a Muslim's blood lawful by legitimate authority?",
        pilihan: [
          { label: 'A', textMs: "Penzina yang pernah berkahwin, membunuh dengan sengaja (qisas), dan murtad keluar jemaah", textEn: "A married adulterer, intentional murder (qisas), and apostasy leaving the fold" },
          { label: 'B', textMs: "Mencuri duit, bergaduh mulut, dan ponteng sekolah", textEn: "Stealing money, verbal disputes, and skipping school" },
          { label: 'C', textMs: "Meninggalkan solat sunat dan tidak membayar sedekah", textEn: "Abandoning voluntary prayers and giving no charity" },
          { label: 'D', textMs: "Melanggar peraturan lalu lintas jalan raya", textEn: "Violating municipal road traffic regulations" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Tiga jenayah berat: Al-thayyibuz zani, An-nafsu bin-nafsi, dan At-tariku lidinihil mufariqu lil-jama'ah.",
        peneranganEn: "Three grave crimes: the married adulterer, life for a life (qisas), and the apostate rebel."
      },
      {
        id: "L4-Q3",
        hadisNo: 17,
        soalanMs: "Apakah arahan ihsan yang ditekankan oleh Rasulullah SAW ketika menyembelih binatang dalam Hadis 17?",
        soalanEn: "What instruction of excellence (ihsan) is stressed when slaughtering animals in Hadith 17?",
        pilihan: [
          { label: 'A', textMs: "Menajamkan pisau sembelihan dan merehatkan (tidak menyeksa) binatang sembelihan", textEn: "Sharpening the knife blade and giving comfort (minimizing agony) to the animal" },
          { label: 'B', textMs: "Menyembelih binatang di hadapan anak-anaknya", textEn: "Slaughtering the animal in front of its offspring" },
          { label: 'C', textMs: "Menggunakan pisau yang tumpul agar tidak terluka", textEn: "Using a blunt knife so the butcher is not injured" },
          { label: 'D', textMs: "Mengikat binatang tanpa memberinya makan semalaman", textEn: "Starving the animal overnight prior to slaughter" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Rasulullah SAW memerintahkan menajamkan pisau dan menyegerakan sembelihan tanpa menyeksa haiwan.",
        peneranganEn: "The Prophet SAW ordered that one sharpen the blade and relieve the sacrificial animal from pain."
      },
      {
        id: "L4-Q4",
        hadisNo: 18,
        soalanMs: "Apakah nasihat kedua dalam Hadis 18 selepas perintah bertakwa kepada Allah di mana sahaja kamu berada?",
        soalanEn: "What was the second counsel in Hadith 18 after commanding mindfulness of Allah wherever you are?",
        pilihan: [
          { label: 'A', textMs: "Susulkan kejahatan dengan kebaikan nescaya kebaikan akan menghapuskannya", textEn: "Follow up an evil deed with a good deed and it will wipe it out" },
          { label: 'B', textMs: "Jangan bergaul dengan orang yang berdosa", textEn: "Do not socialize with people who have sinned" },
          { label: 'C', textMs: "Sentiasa berdiam diri sepanjang hari", textEn: "Remain quiet throughout the whole day" },
          { label: 'D', textMs: "Menyimpan harta untuk hari tua", textEn: "Hoard wealth for old age" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Wa-atbi'is sayyi-atal hasanata tamhuha' (Susulkan kejahatan dengan kebaikan nescaya terhapus).",
        peneranganEn: "He said: 'Follow up a bad deed with a good deed and it will erase it.'"
      },
      {
        id: "L4-Q5",
        hadisNo: 8,
        soalanMs: "Menurut Hadis 8 dan modul KPM, apakah matlamat sebenar syariat dalam memelihara darah dan harta orang lain?",
        soalanEn: "According to Hadith 8 and the KPM syllabus, what is the ultimate aim of the Shariah in protecting lives and wealth?",
        pilihan: [
          { label: 'A', textMs: "Memelihara kehormatan manusia dan menegakkan perdamaian tanpa paksaan beragama", textEn: "Upholding human dignity and securing peace without religious coercion" },
          { label: 'B', textMs: "Memaksa setiap individu menyerahkan harta kepada pemerintah", textEn: "Forcing all individuals to surrender assets to the government" },
          { label: 'C', textMs: "Menghapuskan perdagangan antarabangsa", textEn: "Abolishing international commerce and trade" },
          { label: 'D', textMs: "Melarang sebarang bentuk pergaulan dengan masyarakat bukan Islam", textEn: "Forbidding any peaceful interaction with non-Muslims" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Islam memelihara maqasid syariah (agama, nyawa, akal, keturunan, harta) dan mengamalkan prinsip tiada paksaan dalam beragama.",
        peneranganEn: "Islam protects human life, property, and freedom of conscience with no religious compulsion."
      },
      {
        id: "L4-Q6",
        hadisNo: 16,
        soalanMs: "Apakah antara amalan praktikal yang diajarkan oleh Sunnah untuk menenangkan diri ketika ditimpa perasaan marah?",
        soalanEn: "What is a practical action taught in the Sunnah to calm oneself when anger strikes?",
        pilihan: [
          { label: 'A', textMs: "Mengambil wuduk, berzikir, dan duduk jika sedang berdiri", textEn: "Performing ablution (wudhu), reciting dhikr, and sitting down if standing" },
          { label: 'B', textMs: "Membalas dengan jeritan yang lebih kuat", textEn: "Retaliating with louder shouting" },
          { label: 'C', textMs: "Menulis luahan kemarahan di media sosial", textEn: "Venting anger on social media platforms" },
          { label: 'D', textMs: "Menghempas barang di sekeliling", textEn: "Breaking surrounding objects" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Cara menahan marah: beristiazah dari syaitan, mengambil wuduk atau mandi, duduk atau baring, serta berdiam diri.",
        peneranganEn: "Ways to subdue anger: seek refuge in Allah, perform ablution, sit down, and keep silent."
      },
      {
        id: "L4-Q7",
        hadisNo: 15,
        soalanMs: "Dalam huraian Hadis 15 KPM, lingkungan kejiranan yang mempunyai hak ke atas kita meliputi sehingga berapa buah rumah?",
        soalanEn: "In the KPM commentary on Hadith 15, neighbours with rights over us extend up to how many houses?",
        pilihan: [
          { label: 'A', textMs: "10 buah rumah", textEn: "10 houses" },
          { label: 'B', textMs: "40 buah rumah", textEn: "40 houses" },
          { label: 'C', textMs: "7 buah rumah", textEn: "7 houses" },
          { label: 'D', textMs: "100 buah rumah", textEn: "100 houses" }
        ],
        jawapanBetulIndex: 1,
        peneranganMs: "Jiran merangkumi mereka yang tinggal berhampiran sehingga 40 buah rumah dari sekeliling.",
        peneranganEn: "Neighbours under Islamic ethics encompass up to 40 houses in every direction."
      }
    ]
  },
  {
    level: 5,
    namaMs: "Tahap 5: Sambungan Matan & Potongan Lafaz Arab",
    namaEn: "Level 5: Arabic Matn Completion & Expressions",
    peneranganMs: "Uji ketepatan hafazan matan Arab dan kalimah kunci Hadis 40.",
    peneranganEn: "Test your memory of key Arabic phrases and matn segments of the 40 Hadiths.",
    tahapKesukaranMs: "Sederhana",
    tahapKesukaranEn: "Medium",
    soalanPool: [
      {
        id: "L5-Q1",
        hadisNo: 1,
        soalanMs: "Lengkapkan potongan matan Hadis 1: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ ...'",
        soalanEn: "Complete the phrase from Hadith 1: 'Innamal a'malu bin-niyyat, wa innama likulli-mri-in ...'",
        pilihan: [
          { label: 'A', textMs: "مَا نَوَى (Ma nawa)", textEn: "Ma nawa (what he intended)" },
          { label: 'B', textMs: "مَا عَمِلَ (Ma 'amila)", textEn: "Ma 'amila (what he did)" },
          { label: 'C', textMs: "مَا كَتَبَ (Ma kataba)", textEn: "Ma kataba (what he wrote)" },
          { label: 'D', textMs: "مَا تَمَنَّى (Ma tamanna)", textEn: "Ma tamanna (what he wished)" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sambungan tepat ialah 'مَا نَوَى' (apa yang diniatkannya).",
        peneranganEn: "The correct completion is 'مَا نَوَى' (what he intended)."
      },
      {
        id: "L5-Q2",
        hadisNo: 5,
        soalanMs: "Apakah sambungan lafaz Hadis 5: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ ...'?",
        soalanEn: "What is the completion of Hadith 5: 'Man ahdatha fi amrina hadha ma laysa minhu fahuwa ...'?",
        pilihan: [
          { label: 'A', textMs: "رَدٌّ (Radd)", textEn: "Radd (rejected)" },
          { label: 'B', textMs: "مَقْبُولٌ (Maqbul)", textEn: "Maqbul (accepted)" },
          { label: 'C', textMs: "صَحِيحٌ (Sahih)", textEn: "Sahih (authentic)" },
          { label: 'D', textMs: "حَرَامٌ (Haram)", textEn: "Haram (unlawful)" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Lafaz hadis ialah 'فَهُوَ رَدٌّ' yang bererti maka perbuatan itu tertolak.",
        peneranganEn: "The phrase concludes with 'فَهُوَ رَدٌّ' (it is utterly rejected)."
      },
      {
        id: "L5-Q3",
        hadisNo: 11,
        soalanMs: "Lengkapkan sabda Nabi SAW dalam Hadis 11: 'دَعْ مَا يَرِيبُكَ إِلَى ...'",
        soalanEn: "Complete the Prophet's saying in Hadith 11: 'Da' ma yaribuka ila ...'?",
        pilihan: [
          { label: 'A', textMs: "مَا لَا يَرِيبُكَ (Ma la yaribuka)", textEn: "Ma la yaribuka (that which does not make you doubt)" },
          { label: 'B', textMs: "مَا يُعْجِبُكَ (Ma yu'jibuka)", textEn: "Ma yu'jibuka (what pleases you)" },
          { label: 'C', textMs: "مَا تَعْلَمُهُ (Ma ta'lamuhu)", textEn: "Ma ta'lamuhu (what you know)" },
          { label: 'D', textMs: "مَا يَسُرُّكَ (Ma yasurruka)", textEn: "Ma yasurruka (what makes you happy)" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Lafaz lengkap: 'Da' ma yaribuka ila ma la yaribuka' (Tinggalkan apa yang meragukanmu kepada apa yang tidak meragukanmu).",
        peneranganEn: "The full phrasing is 'Da' ma yaribuka ila ma la yaribuka' (Leave what causes you doubt for what brings no doubt)."
      },
      {
        id: "L5-Q4",
        hadisNo: 23,
        soalanMs: "Apakah potongan awal lafaz Hadis ke-23 riwayat Abu Malik al-Asy'ari r.a.?",
        soalanEn: "What is the opening clause of Hadith 23 narrated by Abu Malik al-Asy'ari r.a.?",
        pilihan: [
          { label: 'A', textMs: "الطُّهُورُ شَطْرُ الْإِيمَانِ (At-Tuhuru syatrul iman)", textEn: "At-Tuhuru shatrul iman (Purity is half of faith)" },
          { label: 'B', textMs: "الصَّلَاةُ عِمَادُ الدِّينِ (As-Solatu 'imaduddin)", textEn: "As-Salah is the pillar of faith" },
          { label: 'C', textMs: "الْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ (Al-Hamdulillah)", textEn: "Al-Hamdulillah fills the scales" },
          { label: 'D', textMs: "الصَّوْمُ جُنَّةٌ (As-Sawmu junnah)", textEn: "Fasting is a protective shield" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Hadis 23 bermula dengan: 'الطُّهُورُ شَطْرُ الْإِيمَانِ' (Kesucian adalah sebahagian daripada iman).",
        peneranganEn: "Hadith 23 opens with: 'الطُّهُورُ شَطْرُ الْإِيمَانِ' (Purity is half of faith)."
      },
      {
        id: "L5-Q5",
        hadisNo: 19,
        soalanMs: "Dalam pesanan kepada Ibnu Abbas (Hadis 19), apakah sabda Nabi SAW: 'احْفَظِ اللَّهَ ...'?",
        soalanEn: "In the advice to Ibn Abbas (Hadith 19), how does the Prophet continue: 'Ihfazhillah ...'?",
        pilihan: [
          { label: 'A', textMs: "يَحْفَظْكَ (Yahfazhka - nescaya Dia menjagamu)", textEn: "Yahfazhka (He will protect you)" },
          { label: 'B', textMs: "يَنْصُرْكَ (Yansurka)", textEn: "Yansurka (He will grant you victory)" },
          { label: 'C', textMs: "يَرْزُقْكَ (Yarzuqka)", textEn: "Yarzuqka (He will provide for you)" },
          { label: 'D', textMs: "يَغْفِرْ لَكَ (Yaghfir laka)", textEn: "Yaghfir laka (He will forgive you)" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Sabda Nabi SAW: 'Ihfazhillaha yahfazhka, ihfazhillaha tajidhu tujahaka' (Peliharalah hak Allah nescaya Dia menjagamu).",
        peneranganEn: "The Prophet said: 'Be mindful of Allah, and He will protect you; be mindful of Allah, you will find Him before you.'"
      },
      {
        id: "L5-Q6",
        hadisNo: 21,
        soalanMs: "Apakah dua kalimah yang diajarkan oleh Rasulullah SAW kepada Sufyan bin Abdullah dalam Hadis 21?",
        soalanEn: "What two phrases did the Prophet SAW instruct Sufyan bin Abdullah in Hadith 21?",
        pilihan: [
          { label: 'A', textMs: "قُلْ: آمَنْتُ بِاللَّهِ، ثُمَّ اسْتَقِمْ (Katakanlah: Aku beriman kepada Allah, kemudian istiqamahlah)", textEn: "Say: I believe in Allah, and then remain steadfast" },
          { label: 'B', textMs: "قُلْ: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ (Katakanlah: Tiada tuhan selain Allah)", textEn: "Say: There is no deity but Allah alone" },
          { label: 'C', textMs: "قُلْ: رَبِّ اغْفِرْ لِي (Katakanlah: Ya Tuhanku ampunilah daku)", textEn: "Say: My Lord, forgive me" },
          { label: 'D', textMs: "قُلْ: حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", textEn: "Say: Sufficient for us is Allah" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Nabi SAW bersabda: 'Qul: Amantu billahi thummastaqim' (Katakanlah aku beriman kepada Allah, kemudian beristiqamahlah).",
        peneranganEn: "The Prophet answered: 'Say: I believe in Allah, and then stand firm and steadfast.'"
      },
      {
        id: "L5-Q7",
        hadisNo: 29,
        soalanMs: "Dalam Hadis 29, apakah yang disifatkan oleh Nabi SAW sebagai 'Puncak / Kemuncak Segala Perkara' (Zirwatu Sanamihi)?",
        soalanEn: "In Hadith 29, what did the Prophet describe as the 'Apex / Summit of the Matter' (Zirwatu Sanamihi)?",
        pilihan: [
          { label: 'A', textMs: "الْجِهَادُ (Al-Jihad)", textEn: "Al-Jihad (Striving in the cause of Allah)" },
          { label: 'B', textMs: "الصَّوْمُ (As-Sawm)", textEn: "Fasting" },
          { label: 'C', textMs: "الصَّدَقَةُ (As-Sadaqah)", textEn: "Charity" },
          { label: 'D', textMs: "الْحَجُّ (Al-Hajj)", textEn: "The Pilgrimage" }
        ],
        jawapanBetulIndex: 0,
        peneranganMs: "Pokok urusan ialah Islam, tiangnya solat, dan kemuncaknya (zirwatu sanamihi) ialah jihad.",
        peneranganEn: "The head of the affair is Islam, its pillar is prayer, and its summit is Jihad."
      }
    ]
  }
];
