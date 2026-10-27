import React from 'react';
import { motion } from 'motion/react';

interface BadarPortalProps {
  onNavigateToHadis40: () => void;
}

const tujuanList = [
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
];

export const BadarPortal: React.FC<BadarPortalProps> = ({ onNavigateToHadis40 }) => {
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
        <nav className="max-w-7xl mx-auto neu-raised rounded-2xl px-6 py-4 flex items-center justify-between border border-white/40">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="neu-raised-sm w-11 h-11 rounded-xl flex items-center justify-center text-teal-800">
              <i className="fa-solid fa-kaaba text-lg"></i>
            </div>
            <div>
              <h1 className="font-black text-teal-950 tracking-wider text-base sm:text-lg">BADAR</h1>
              <p className="text-[10px] text-teal-700 uppercase font-semibold">Badan Dakwah & Rohani</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-teal-900">
            <a
              href="#utama"
              onClick={(e) => { e.preventDefault(); scrollToSection('utama'); }}
              className="hover:text-teal-600 transition"
            >
              Utama
            </a>
            <a
              href="#pengenalan"
              onClick={(e) => { e.preventDefault(); scrollToSection('pengenalan'); }}
              className="hover:text-teal-600 transition"
            >
              Pengenalan
            </a>
            <a
              href="#visimisi"
              onClick={(e) => { e.preventDefault(); scrollToSection('visimisi'); }}
              className="hover:text-teal-600 transition"
            >
              Visi & Misi
            </a>
            <a
              href="#tujuan"
              onClick={(e) => { e.preventDefault(); scrollToSection('tujuan'); }}
              className="hover:text-teal-600 transition"
            >
              Tujuan
            </a>

            {/* Butang Khas Sudut Hadis 40 di Navbar */}
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <i className="fa-solid fa-book-quran"></i> Sudut Hadis 40
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <i className="fa-solid fa-book-quran text-xs"></i>
              <span>Hadis 40</span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* 2. HERO SECTION */}
      <section id="utama" className="scroll-mt-28 py-8 sm:py-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-5xl mx-auto neu-raised rounded-3xl p-8 sm:p-14 text-center border border-white/40"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 neu-inset px-4 py-1.5 rounded-full text-teal-800 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <i className="fa-solid fa-moon text-teal-700"></i> Membina Sahsiah Rabbani, Memperkasa Ummah
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-5xl font-extrabold text-teal-950 mb-4 tracking-tight leading-tight"
          >
            Selamat Datang ke Portal Rasmi <br className="hidden sm:inline" />
            <span className="text-teal-800">Badan Dakwah & Rohani (BADAR)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8"
          >
            Wadah kepimpinan murid dalam menyuburkan penghayatan Islam, mengimarahkan musolla, serta melahirkan generasi berilmu dan berakhlak mulia.
          </motion.p>

          {/* Butang-butang Tindakan Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-3 group"
            >
              <i className="fa-solid fa-book-open-reader text-lg"></i>
              <span>Masuk ke Sudut Hadis 40</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </button>

            <button
              onClick={() => scrollToSection('pengenalan')}
              className="neu-btn px-6 py-3.5 rounded-2xl font-semibold text-sm text-teal-950 flex items-center gap-2"
            >
              <i className="fa-solid fa-circle-info text-teal-700"></i> Ketahui Peranan Kami
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. PENGENALAN BADAR */}
      <section id="pengenalan" className="scroll-mt-28 py-10 px-4 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="neu-raised rounded-3xl p-8 sm:p-12 border border-white/40"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Ikon Hiasan Neumorphic */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="neu-inset w-28 h-28 sm:w-36 sm:h-36 rounded-3xl flex items-center justify-center text-teal-800 text-5xl flex-shrink-0"
            >
              <i className="fa-solid fa-mosque"></i>
            </motion.div>

            {/* Teks Penerangan */}
            <div className="space-y-4">
              <span className="neu-inset inline-block px-3.5 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-wider">
                Tentang Organisasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">
                Pengenalan Kepada BADAR
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                <strong>Badan Dakwah dan Rohani (BADAR)</strong> merupakan sebuah badan kepimpinan murid berteraskan Islam yang bernaung di bawah Panitia Pendidikan Islam dan Unit Hal Ehwal Murid (HEM).
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                BADAR berfungsi sebagai tulang belakang dalam memelihara disiplin kerohanian, menyuburkan amalan sunnah, serta bertindak sebagai <em>rakan pembimbing dakwah</em> (peer da'i) yang mendekati murid-murid lain dengan pendekatan kasih sayang, hikmah, dan nasihat yang murni.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. VISI & MISI BADAR */}
      <section id="visimisi" className="scroll-mt-28 py-10 px-4 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <span className="neu-inset inline-block px-3.5 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">
            Hala Tuju
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">Visi & Misi BADAR</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Gagasan perjuangan membentuk insan yang seimbang duniawi dan ukhrawi</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kad Visi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="neu-raised rounded-3xl p-8 border border-white/40 flex flex-col justify-between"
          >
            <div>
              <div className="neu-inset w-14 h-14 rounded-2xl flex items-center justify-center text-teal-800 text-2xl mb-5">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-xl font-extrabold text-teal-950 mb-3">Visi BADAR</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Melahirkan barisan generasi murid yang teguh aqidah, cemerlang sahsiah, dan berketerampilan sebagai duta dakwah yang memimpin ummah ke arah keredaan Allah SWT.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300/40">
              <span className="neu-inset px-3 py-1 rounded-lg text-[11px] font-bold text-teal-800">
                #KaramahInsaniah
              </span>
            </div>
          </motion.div>

          {/* Kad Misi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="neu-raised rounded-3xl p-8 border border-white/40 flex flex-col justify-between"
          >
            <div>
              <div className="neu-inset w-14 h-14 rounded-2xl flex items-center justify-center text-teal-800 text-2xl mb-5">
                <i className="fa-solid fa-compass"></i>
              </div>
              <h3 className="text-xl font-extrabold text-teal-950 mb-3">Misi BADAR</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-teal-700 mt-0.5"></i>
                  <span>Mengimarahkan musolla sekolah sebagai pusat ibadah, ilmu, dan penyatuan ukhuwah.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-teal-700 mt-0.5"></i>
                  <span>Menerapkan kefahaman fardu ain, adab, dan nilai murni melalui usrah serta tazkirah berterusan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-teal-700 mt-0.5"></i>
                  <span>Mempromosikan budaya hidup berlandaskan Sunnah Nabawiyyah dan Al-Quran dalam kehidupan seharian.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300/40">
              <span className="neu-inset px-3 py-1 rounded-lg text-[11px] font-bold text-teal-800">
                #DakwahBerhikmah
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TUJUAN BADAR DITUBUHKAN */}
      <section id="tujuan" className="scroll-mt-28 py-10 px-4 max-w-7xl mx-auto w-full">
        <div className="neu-raised rounded-3xl p-8 sm:p-12 border border-white/40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-10"
          >
            <span className="neu-inset inline-block px-3.5 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">
              Objektif Penubuhan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">Tujuan BADAR Ditubuhkan</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Peranan penting BADAR sebagai pemangkin persekitaran soleh di sekolah</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tujuanList.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="neu-inset rounded-2xl p-6 space-y-2"
              >
                <div className={`neu-raised-sm w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-3 ${
                  item.isHighlight ? 'text-amber-800' : 'text-teal-800'
                }`}>
                  {item.num}
                </div>
                <h4 className="font-bold text-teal-950 text-base">{item.tajuk}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANNER KHAS: JEMPUTAN KE SUDUT HADIS 40 */}
      <section className="py-12 px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="neu-raised rounded-3xl p-8 sm:p-12 border border-white/50 text-center space-y-6"
        >
          <span className="neu-inset inline-block px-4 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-widest">
            <i className="fa-solid fa-star-and-crescent mr-1.5 text-amber-700"></i> Ruang Ilmu Istimewa
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
            Sudut Hadis 40 Imam An-Nawawi
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan halaman interaktif khas yang menghimpunkan kesemua <strong>40 Hadis Al-Imam An-Nawawi</strong> lengkap dengan teks Arab, maksud, huraian mendalam, pengajaran berpandukan <strong>Modul Edisi Kedua KPM</strong>, serta carian pintar.
          </p>

          {/* BUTANG UTAMA JELAS DAN MENONJOL */}
          <div className="pt-2">
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 transition transform"
            >
              <i className="fa-solid fa-book-quran text-xl"></i>
              <span>Buka Sudut Hadis 40 Sekarang</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </motion.div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-10 px-4 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto neu-raised rounded-3xl p-8 border border-white/40 text-xs text-slate-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">BADAR Sekolah</h4>
              <p className="leading-relaxed">Badan Dakwah dan Rohani komited menyuburkan akhlak dan penghayatan Islam dalam kalangan warga institusi.</p>
            </div>
            <div>
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">Pautan Pantas</h4>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button onClick={() => scrollToSection('pengenalan')} className="hover:text-teal-800 text-left">
                    Pengenalan BADAR
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('visimisi')} className="hover:text-teal-800 text-left">
                    Visi & Misi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tujuan')} className="hover:text-teal-800 text-left">
                    Tujuan Penubuhan
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateToHadis40} className="text-teal-800 font-bold hover:underline text-left">
                    Halaman Sudut Hadis 40 →
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">Lokasi & Operasi</h4>
              <p><i className="fa-solid fa-location-dot text-teal-700 mr-1.5"></i> Musolla Utama / Bilik Gerakan BADAR</p>
              <p className="mt-1"><i className="fa-solid fa-hashtag text-teal-700 mr-1.5"></i> #hadis40dihatiku</p>
            </div>
          </div>
          <div className="border-t border-slate-300/40 mt-8 pt-4 text-center text-slate-500 space-y-1">
            <p>&copy; 2026 Badan Dakwah dan Rohani (BADAR) Sekolah Menengah Agama Nurul Ittifaq. Membina Sahsiah Rabbani.</p>
            <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">Dibangun dan Dibina Oleh Khir Al Hakim</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};
