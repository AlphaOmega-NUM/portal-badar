import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { pangkalanHadis, searchHadis } from '../data/hadisData';

interface Hadis40PortalProps {
  onNavigateHome: () => void;
  initialHadisNo?: number | null;
  onSelectHadis?: (no: number | null) => void;
}

const keistimewaanList = [
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
];

export const Hadis40Portal: React.FC<Hadis40PortalProps> = ({
  onNavigateHome,
  initialHadisNo = null,
  onSelectHadis
}) => {
  const [selectedHadisNo, setSelectedHadisNo] = useState<number | null>(initialHadisNo);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialHadisNo !== undefined) {
      setSelectedHadisNo(initialHadisNo);
    }
  }, [initialHadisNo]);

  const filteredHadis = useMemo(() => {
    return searchHadis(searchQuery, pangkalanHadis);
  }, [searchQuery]);

  const currentHadis = useMemo(() => {
    if (!selectedHadisNo) return null;
    return pangkalanHadis.find(h => h.no === selectedHadisNo) || null;
  }, [selectedHadisNo]);

  const bukaHalamanHadis = (no: number) => {
    setSelectedHadisNo(no);
    if (onSelectHadis) onSelectHadis(no);
    window.location.hash = `hadis-${no}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const kembaliKeUtama = () => {
    setSelectedHadisNo(null);
    if (onSelectHadis) onSelectHadis(null);
    window.location.hash = 'hadis40';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigasiHadis = (arah: number) => {
    if (!selectedHadisNo) return;
    const sasaran = selectedHadisNo + arah;
    if (sasaran >= 1 && sasaran <= 40) {
      bukaHalamanHadis(sasaran);
    }
  };

  const salinTeksHadis = () => {
    if (!currentHadis) return;
    const textToCopy = `Hadis #${currentHadis.no}: ${currentHadis.tajuk}\nPerawi: ${currentHadis.rawi}\n\nMatan Arab:\n${currentHadis.matanArab}\n\nMaksud:\n"${currentHadis.maksud}"\n\nHuraian:\n${currentHadis.huraian}\n\nPengajaran KPM:\n${currentHadis.pengajaran.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\nFokus Nilai: ${currentHadis.nilai}\nCadangan Aktiviti: ${currentHadis.aktiviti}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. NAVIGATION BAR */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-4 z-40 px-4 sm:px-8 mb-6"
      >
        <nav className="max-w-7xl mx-auto neu-raised rounded-2xl px-5 py-3.5 sm:py-4 flex items-center justify-between border border-white/40">
          {/* Logo & Jenama */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onNavigateHome}
              className="neu-raised-sm w-10 h-10 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-700 transition"
              title="Ke Halaman Utama BADAR"
            >
              <i className="fa-solid fa-kaaba text-base"></i>
            </button>
            <div>
              <h1 className="font-black text-teal-950 tracking-wider text-sm sm:text-base">SUDUT HADIS 40</h1>
            </div>
          </div>

          {/* Butang Kembali ke Halaman Utama */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="neu-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-teal-950 flex items-center gap-2 hover:text-amber-800 transition"
            >
              <i className="fa-solid fa-house text-teal-700 text-xs sm:text-sm"></i>
              <span>Kembali ke Halaman Utama</span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* VIEW 1: PORTAL SUDUT HADIS (If no hadis selected) */}
      <AnimatePresence mode="wait">
        {!currentHadis ? (
          <motion.div
            key="view-utama"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="view-utama"
            className="flex flex-col flex-1"
          >
            <main className="px-4 max-w-7xl mx-auto w-full space-y-8 flex-1">
              {/* 2. INTRO SUDUT HADIS (TUJUAN, KESESUAIAN & CADANGAN) */}
              <motion.section
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="neu-raised rounded-3xl p-6 sm:p-12 border border-white/40 space-y-6"
              >
                {/* Tajuk Utama Intro */}
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 neu-inset px-4 py-1.5 rounded-full text-teal-800 text-xs font-bold uppercase tracking-wider">
                    <i className="fa-solid fa-book-open text-teal-700"></i> Khazanah Nabawi Warga Sekolah
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
                    Selamat Datang ke Sudut Hadis 40 Imam An-Nawawi
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Platform interaktif pendedahan hadis-hadis asas susunan Al-Imam Yahya bin Syaraf An-Nawawi, berteraskan <strong>Modul Penghayatan Hadis 40 (Edisi Kedua KPM)</strong> demi melahirkan murid yang berakhlak mulia dan berintegriti tinggi.
                  </p>
                </div>

                {/* Kad Huraian 2 Kolum: Tujuan & Mengapa Sesuai */}
                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  {/* Tujuan Pendedahan Hadis 40 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="neu-inset rounded-2xl p-6 space-y-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="neu-raised-sm w-9 h-9 rounded-xl flex items-center justify-center text-teal-800 text-sm">
                        <i className="fa-solid fa-bullseye"></i>
                      </span>
                      <h3 className="font-extrabold text-teal-950 text-sm sm:text-base">Tujuan Mendedahkan Hadis 40</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-check-circle text-teal-700 mt-1"></i>
                        <span><strong>Membina Asas Rohani:</strong> Mengukuhkan kefahaman aqidah, ibadah dan fardu ain murid sejak peringkat persekolahan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-check-circle text-teal-700 mt-1"></i>
                        <span><strong>Menyemai Karamah Insaniah:</strong> Menanam nilai belas kasihan, hormat-menghormati, serta keadilan merentasi kaum dan agama.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-check-circle text-teal-700 mt-1"></i>
                        <span><strong>Mencegah Gejala Sosial:</strong> Memberi pedoman hadis sebagai benteng daripada salah laku buli, penipuan, dan kelakuan negatif.</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Mengapa Hadis 40 Sangat Sesuai untuk Pelajar */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="neu-inset rounded-2xl p-6 space-y-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="neu-raised-sm w-9 h-9 rounded-xl flex items-center justify-center text-amber-800 text-sm">
                        <i className="fa-solid fa-lightbulb"></i>
                      </span>
                      <h3 className="font-extrabold text-teal-950 text-sm sm:text-base">Mengapa Hadis 40 Sesuai untuk Pelajar?</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-star text-amber-600 mt-1"></i>
                        <span><strong>Jawami' al-Kalim:</strong> Matan hadisnya ringkas, bernas, dan mudah dihafaz tetapi mencakupi paksi perundangan Islam yang sangat luas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-star text-amber-600 mt-1"></i>
                        <span><strong>Praktikal & Relevan:</strong> Merangkumi adab harian murid — bermula daripada niat belajar, memelihara lisan, mengawal kemarahan, menjaga makanan halal, sehinggalah adab berkasih sayang sesama sahabat.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-star text-amber-600 mt-1"></i>
                        <span><strong>Panduan Lengkap Kehidupan:</strong> Mengimbangi antara tuntutan kecemerlangan akademik dengan kemuliaan akhlak peribadi.</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* DUA BUTANG TINDAKAN PANJANG */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="pt-4 flex flex-wrap justify-center items-center gap-4"
                >
                  {/* Butang 1: Terokai Imam An-Nawawi */}
                  <button
                    onClick={() => scrollToSection('biografi-nawawi')}
                    className="neu-btn px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-teal-950 flex items-center gap-2.5 hover:text-amber-800 transition"
                  >
                    <i className="fa-solid fa-user-graduate text-teal-700 text-base"></i>
                    <span>Terokai Imam An-Nawawi</span>
                  </button>

                  {/* Butang 2: Cari Hadis 40 */}
                  <button
                    onClick={() => scrollToSection('kad-hadis-section')}
                    className="neu-btn-primary px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <i className="fa-solid fa-magnifying-glass text-base"></i>
                    <span>Cari Hadis 40</span>
                  </button>
                </motion.div>
              </motion.section>

              {/* 3. BAHAGIAN BIOGRAFI, PENDIDIKAN & KEISTIMEWAAN IMAM NAWAWI */}
              <section id="biografi-nawawi" className="scroll-mt-28 neu-raised rounded-3xl p-6 sm:p-10 border border-white/40 space-y-8">
                {/* Tajuk Seksyen Tokoh */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col sm:flex-row items-center gap-6 border-b border-slate-300/40 pb-6"
                >
                  <div className="neu-inset w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center text-teal-800 text-4xl sm:text-5xl flex-shrink-0">
                    <i className="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div className="text-center sm:text-left space-y-1.5">
                    <span className="neu-inset inline-block px-3 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-wider">
                      Mengenali Pengarang Agung
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">
                      Al-Imam Yahya bin Syaraf An-Nawawi
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Tokoh Mujtahid, Muhaddith, dan Tiang Utama Mazhab Syafi'i (631H – 676H / 1233M – 1277M)
                    </p>
                  </div>
                </motion.div>

                {/* Grid Biodata & Pendidikan */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Biodata Ringkas */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="neu-inset rounded-2xl p-6 space-y-3"
                  >
                    <h3 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
                      <i className="fa-solid fa-id-card text-teal-700"></i> Biodata Ringkas
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li><strong>Nama Penuh:</strong> Abu Zakariyya Yahya bin Syaraf bin Murri bin Hasan An-Nawawi.</li>
                      <li><strong>Tempat Lahir:</strong> Desa Nawa, berdekatan Damsyik, Syria pada tahun 631 Hijrah.</li>
                      <li><strong>Gelaran:</strong> <em>Muhyiddin</em> (Penghidup Agama — gelaran yang beliau elakkan atas sifat tawaduk).</li>
                      <li><strong>Mazhab Fiqh:</strong> Mazhab Syafi'i (Beliau bersama Imam Ar-Rafi'i merupakan paksi tarjih hukum Mazhab Syafi'i).</li>
                      <li><strong>Kewafatan:</strong> Meninggal dunia di kampung kelahirannya, Nawa pada tahun 676 Hijrah (ketika berusia sekitar 45 tahun Hijrah).</li>
                    </ul>
                  </motion.div>

                  {/* Ketekunan Pendidikan */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="neu-inset rounded-2xl p-6 space-y-3"
                  >
                    <h3 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
                      <i className="fa-solid fa-graduation-cap text-teal-700"></i> Ketekunan Pendidikan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Beliau menghafaz Al-Quran sebelum mencecah usia baligh. Pada usia 18 tahun, beliau berpindah ke Damsyik dan belajar di <em>Madrasah Ar-Rawahiyyah</em>.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>12 Halaqah Ilmu Sehari:</strong> Beliau menghadiri dan mendalami 12 kelas pengajian sehari merangkumi Sahih al-Bukhari, Sahih Muslim, ilmu Usul Fiqh, Nahu, Bahasa Arab dan Perubatan. Beliau tidak mensia-siakan walau sesaat waktunya melainkan untuk mentelaah dan menulis ilmu.
                    </p>
                  </motion.div>
                </div>

                {/* Keistimewaan & Karisma Imam An-Nawawi */}
                <div>
                  <h3 className="font-bold text-teal-950 text-sm sm:text-base mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-star text-amber-600"></i> Keistimewaan Unik Imam An-Nawawi
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {keistimewaanList.map((item, idx) => (
                      <motion.div
                        key={item.tajuk}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1 + idx * 0.12,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="neu-raised-sm rounded-2xl p-4 space-y-1.5 border border-white/40"
                      >
                        <span className={`${item.color} text-base`}><i className={`fa-solid ${item.icon}`}></i></span>
                        <h4 className="font-bold text-xs sm:text-sm text-teal-950">{item.tajuk}</h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. SEARCH BAR & KAD HADIS 40 */}
              <section id="kad-hadis-section" className="scroll-mt-28 space-y-6">
                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="neu-raised rounded-3xl p-6 sm:p-8 border border-white/40 space-y-4"
                >
                  <div className="text-center space-y-1">
                    <span className="neu-inset inline-block px-3.5 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-widest mb-1">
                      <i className="fa-solid fa-magnifying-glass mr-1.5 text-teal-600"></i> Carian Pintas Hadis
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-teal-950">
                      Cari Kad Hadis Pilihan Anda
                    </h2>
                    <p className="text-xs text-slate-500 max-w-xl mx-auto">
                      Taip nombor hadis ataupun tajuk hadis yang berkenaan
                    </p>
                  </div>

                  {/* Input Carian */}
                  <div className="max-w-xl mx-auto">
                    <div className="neu-inset rounded-2xl px-5 py-3.5 flex items-center">
                      <i className="fa-solid fa-magnifying-glass text-teal-700 mr-3 text-base"></i>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Contoh: Hadis 1, Hadis 5, niat, ikhlas, doa..."
                        className="w-full bg-transparent text-sm sm:text-base text-teal-950 focus:outline-none placeholder-slate-400 font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          title="Padam carian"
                          className="text-xs text-slate-400 hover:text-teal-800 ml-2 p-1"
                        >
                          <i className="fa-solid fa-xmark text-base"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Kad Hadis 40 Grid */}
                <div className="neu-raised rounded-3xl p-6 sm:p-8 border border-white/40">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-6 border-b border-slate-300/40 pb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-teal-950 flex items-center gap-2">
                        <i className="fa-solid fa-shapes text-teal-700"></i> Kad Hadis 40
                      </h3>
                      <p className="text-xs text-slate-500">Klik mana-mana kad untuk membuka helaian huraian penuh setiap hadis:</p>
                    </div>
                    <span className="neu-inset px-3 py-1 rounded-xl text-xs font-bold text-teal-800">
                      Memaparkan {filteredHadis.length} Hadis
                    </span>
                  </div>

                  {/* Grid Butang/Kad Hadis 1 hingga 40 dengan Kesan Delay Skrol */}
                  {filteredHadis.length === 0 ? (
                    <div className="text-center py-12 neu-inset rounded-3xl">
                      <i className="fa-regular fa-folder-open text-3xl text-teal-700/60 mb-2 block"></i>
                      <p className="text-sm font-bold text-teal-950">Tiada hadis ditemui untuk &quot;{searchQuery}&quot;.</p>
                      <p className="text-xs text-slate-500 mt-1">Sila masukkan nombor 1 hingga 40 atau kata kunci lain.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {filteredHadis.map((h, index) => (
                        <motion.button
                          key={h.no}
                          initial={{ opacity: 0, y: 25 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.5,
                            delay: (index % 4) * 0.08,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          onClick={() => bukaHalamanHadis(h.no)}
                          className="neu-btn p-4 rounded-2xl flex flex-col justify-between text-left group w-full border border-white/30"
                        >
                          <div className="flex items-center justify-between w-full mb-2">
                            <span className="neu-raised-sm px-2.5 py-1 rounded-xl text-xs font-black text-teal-800">
                              Hadis #{h.no.toString().padStart(2, '0')}
                            </span>
                            <span className="text-teal-700 text-xs opacity-75 group-hover:translate-x-1 transition transform flex items-center gap-1">
                              Buka <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-teal-950 group-hover:text-amber-800 transition line-clamp-1">
                              {h.tajuk}
                            </h4>
                            <p className="text-[11px] text-slate-500 truncate mt-1">
                              {h.rawi.split(' ')[0]} ...
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 mt-12 text-center text-xs text-slate-500">
              <div className="max-w-7xl mx-auto border-t border-slate-300/40 pt-6 space-y-1">
                <p>&copy; 2026 Badan Dakwah dan Rohani (BADAR) Sekolah Menengah Agama Nurul Ittifaq. Membina Sahsiah Rabbani.</p>
                <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">Dibangun dan Dibina Oleh Khir Al Hakim</p>
              </div>
            </footer>
          </motion.div>
        ) : (
          /* VIEW 2: HALAMAN BAHARU TERPERINCI HADIS */
          <motion.div
            key="view-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            id="view-detail"
            className="flex flex-col flex-1 py-6 px-4"
          >
            <div className="max-w-4xl mx-auto w-full space-y-6">
              {/* Navigasi Atas Halaman Baharu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex items-center justify-between neu-raised rounded-2xl p-4 border border-white/40"
              >
                <button
                  onClick={kembaliKeUtama}
                  className="neu-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-teal-900 flex items-center gap-2"
                >
                  <i className="fa-solid fa-arrow-left"></i> Kembali ke Kad Hadis 40
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={salinTeksHadis}
                    title="Salin maklumat hadis"
                    className="neu-raised-sm px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-900 hover:text-teal-700 transition flex items-center gap-1"
                  >
                    <i className={`fa-solid ${copied ? 'fa-check text-emerald-600' : 'fa-copy'}`}></i>
                    <span>{copied ? 'Disalin!' : 'Salin'}</span>
                  </button>
                  <span className="neu-inset px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800">
                    Hadis #{currentHadis.no.toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={onNavigateHome}
                    className="neu-raised-sm px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-900 hover:text-amber-800 transition hidden sm:inline-flex items-center"
                  >
                    <i className="fa-solid fa-house mr-1"></i> Halaman Utama
                  </button>
                </div>
              </motion.div>

              {/* Kad Tajuk & Teks Arab */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="neu-raised rounded-3xl p-6 sm:p-10 border border-white/40"
              >
                <div className="text-center mb-6">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">
                    {currentHadis.rawi}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 mb-4">
                    {currentHadis.tajuk}
                  </h2>
                  <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full"></div>
                </div>

                {/* Teks Matan Arab (Gaya Ukiran Inset) */}
                <div className="neu-inset rounded-2xl p-6 sm:p-8 my-4">
                  <p className="font-arabic text-2xl sm:text-3xl text-right text-teal-950 leading-loose" dir="rtl">
                    {currentHadis.matanArab}
                  </p>
                </div>
              </motion.div>

              {/* Kad 1: Maksud Hadis */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="neu-raised rounded-3xl p-6 sm:p-8 border border-white/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="neu-inset w-10 h-10 rounded-xl flex items-center justify-center text-teal-800 text-lg">
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-teal-950">Maksud Hadis</h3>
                    <p className="text-xs text-slate-500">Terjemahan lafaz sabda Rasulullah SAW</p>
                  </div>
                </div>
                <div className="neu-inset rounded-2xl p-5 text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &quot;{currentHadis.maksud}&quot;
                </div>
              </motion.div>

              {/* Kad 2: Huraian Hadis */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="neu-raised rounded-3xl p-6 sm:p-8 border border-white/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="neu-inset w-10 h-10 rounded-xl flex items-center justify-center text-amber-700 text-lg">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-teal-950">Huraian Hadis</h3>
                    <p className="text-xs text-slate-500">Konteks, latar belakang dan ulasan syariat</p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  {currentHadis.huraian}
                </div>
              </motion.div>

              {/* Kad 3: Pengajaran Hadis */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="neu-raised rounded-3xl p-6 sm:p-8 border border-white/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="neu-inset w-10 h-10 rounded-xl flex items-center justify-center text-emerald-700 text-lg">
                    <i className="fa-solid fa-list-check"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-teal-950">Pengajaran Hadis (Iktibar KPM)</h3>
                    <p className="text-xs text-slate-500">Poin penting yang wajib dihayati dalam kehidupan seharian</p>
                  </div>
                </div>
                <ul className="neu-inset rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {currentHadis.pengajaran.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-teal-700 mt-1 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Kad 4: Fokus Nilai & Cadangan Aktiviti KPM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Fokus Nilai */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="neu-raised rounded-3xl p-6 border border-white/40"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="neu-inset w-8 h-8 rounded-lg flex items-center justify-center text-teal-800 text-sm">
                      <i className="fa-solid fa-gem"></i>
                    </span>
                    <h4 className="font-bold text-teal-950 text-sm">Fokus Nilai Murni</h4>
                  </div>
                  <p className="neu-inset rounded-xl p-3 text-xs font-semibold text-teal-800">
                    {currentHadis.nilai}
                  </p>
                </motion.div>

                {/* Cadangan Aktiviti */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="neu-raised rounded-3xl p-6 border border-white/40"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="neu-inset w-8 h-8 rounded-lg flex items-center justify-center text-amber-800 text-sm">
                      <i className="fa-solid fa-calendar-check"></i>
                    </span>
                    <h4 className="font-bold text-teal-950 text-sm">Cadangan Aktiviti KPM</h4>
                  </div>
                  <p className="neu-inset rounded-xl p-3 text-xs text-slate-700">
                    {currentHadis.aktiviti}
                  </p>
                </motion.div>
              </div>

              {/* Navigasi Bawah: Hadis Sebelumnya / Seterusnya (Dihadkan 1-40) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="neu-raised rounded-2xl p-4 flex items-center justify-between border border-white/40"
              >
                <button
                  disabled={currentHadis.no <= 1}
                  onClick={() => navigasiHadis(-1)}
                  className={`neu-btn px-4 py-2 rounded-xl text-xs font-bold text-teal-900 flex items-center gap-2 ${
                    currentHadis.no <= 1 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <i className="fa-solid fa-chevron-left"></i> Hadis Sebelumnya
                </button>
                <button
                  onClick={kembaliKeUtama}
                  className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hidden sm:block"
                >
                  Semua Kad Hadis 40
                </button>
                <button
                  disabled={currentHadis.no >= 40}
                  onClick={() => navigasiHadis(1)}
                  className={`neu-btn px-4 py-2 rounded-xl text-xs font-bold text-teal-900 flex items-center gap-2 ${
                    currentHadis.no >= 40 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  Hadis Seterusnya <i className="fa-solid fa-chevron-right"></i>
                </button>
              </motion.div>

              {/* Footer Detail View */}
              <div className="pt-6 pb-4 text-center text-xs text-slate-500 space-y-1 border-t border-slate-300/40">
                <p>&copy; 2026 Badan Dakwah dan Rohani (BADAR) Sekolah Menengah Agama Nurul Ittifaq. Membina Sahsiah Rabbani.</p>
                <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">Dibangun dan Dibina Oleh Khir Al Hakim</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
