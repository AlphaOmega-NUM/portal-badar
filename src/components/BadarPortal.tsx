import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../data/translations';

interface BadarPortalProps {
  onNavigateToHadis40: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  language?: Language;
  onOpenSettings?: () => void;
}

export const BadarPortal: React.FC<BadarPortalProps> = ({
  onNavigateToHadis40,
  isDarkMode = false,
  onToggleDarkMode,
  language = 'ms',
  onOpenSettings
}) => {
  const t = translations[language];

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
              <h1 className="font-black text-teal-950 tracking-wider text-base sm:text-lg">{t.badarTitle}</h1>
              <p className="text-[10px] text-teal-700 uppercase font-semibold">{t.badarSubtitle}</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-teal-900">
            <a
              href="#utama"
              onClick={(e) => { e.preventDefault(); scrollToSection('utama'); }}
              className="hover:text-teal-600 transition"
            >
              {t.navHome}
            </a>
            <a
              href="#pengenalan"
              onClick={(e) => { e.preventDefault(); scrollToSection('pengenalan'); }}
              className="hover:text-teal-600 transition"
            >
              {t.navIntro}
            </a>
            <a
              href="#visimisi"
              onClick={(e) => { e.preventDefault(); scrollToSection('visimisi'); }}
              className="hover:text-teal-600 transition"
            >
              {t.navVision}
            </a>
            <a
              href="#tujuan"
              onClick={(e) => { e.preventDefault(); scrollToSection('tujuan'); }}
              className="hover:text-teal-600 transition"
            >
              {t.navPurpose}
            </a>

            {/* Butang Khas Sudut Hadis 40 di Navbar */}
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <i className="fa-solid fa-book-quran"></i> {t.navHadis40}
            </button>

            {/* Butang Toggle Mod Gelap */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                title={isDarkMode ? t.darkModeLight : t.darkModeDark}
                aria-label={isDarkMode ? t.darkModeLight : t.darkModeDark}
                className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
              >
                <i className={isDarkMode ? "fa-solid fa-sun text-amber-400 text-sm" : "fa-solid fa-moon text-teal-700 text-sm"}></i>
              </button>
            )}

            {/* Butang Sistem Tetapan (Settings) */}
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                title={t.navSettings}
                aria-label={t.navSettings}
                className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
              >
                <i className="fa-solid fa-gear text-sm"></i>
              </button>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                title={t.navSettings}
                aria-label={t.navSettings}
                className="neu-btn w-8 h-8 rounded-xl flex items-center justify-center text-teal-800"
              >
                <i className="fa-solid fa-gear text-xs"></i>
              </button>
            )}

            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                title={isDarkMode ? t.darkModeLight : t.darkModeDark}
                aria-label="Tukar mod gelap atau cerah"
                className="neu-btn w-8 h-8 rounded-xl flex items-center justify-center text-teal-800"
              >
                <i className={isDarkMode ? "fa-solid fa-sun text-amber-400 text-xs" : "fa-solid fa-moon text-teal-700 text-xs"}></i>
              </button>
            )}

            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <i className="fa-solid fa-book-quran text-xs"></i>
              <span>{language === 'en' ? 'Hadith 40' : 'Hadis 40'}</span>
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
            <i className="fa-solid fa-moon text-teal-700"></i> {t.heroBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-5xl font-extrabold text-teal-950 mb-4 tracking-tight leading-tight"
          >
            {t.heroTitlePrefix} <br className="hidden sm:inline" />
            <span className="text-teal-800">{t.heroTitleSuffix}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8"
          >
            {t.heroDesc}
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
              <span>{t.heroBtnHadis}</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </button>

            <button
              onClick={() => scrollToSection('pengenalan')}
              className="neu-btn px-6 py-3.5 rounded-2xl font-semibold text-sm text-teal-950 flex items-center gap-2"
            >
              <i className="fa-solid fa-circle-info text-teal-700"></i> {t.heroBtnRole}
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
                {t.introTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">
                {t.introTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                {t.introP1}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                {t.introP2}
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
            {t.directionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">{t.vmTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">{t.vmSubtitle}</p>
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
              <h3 className="text-xl font-extrabold text-teal-950 mb-3">{t.visionTitle}</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {t.visionDesc}
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
              <h3 className="text-xl font-extrabold text-teal-950 mb-3">{t.missionTitle}</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {t.missionList.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-check text-teal-700 mt-0.5"></i>
                    <span>{misi}</span>
                  </li>
                ))}
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
              {t.purposeTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">{t.purposeTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{t.purposeSubtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.purposeList.map((item, index) => (
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
            <i className="fa-solid fa-star-and-crescent mr-1.5 text-amber-700"></i> {t.bannerBadge}
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
            {t.bannerTitle}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {t.bannerDesc}
          </p>

          {/* BUTANG UTAMA JELAS DAN MENONJOL */}
          <div className="pt-2">
            <button
              onClick={onNavigateToHadis40}
              className="neu-btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 transition transform"
            >
              <i className="fa-solid fa-book-quran text-xl"></i>
              <span>{t.bannerBtn}</span>
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
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">{t.footerSchoolTitle}</h4>
              <p className="leading-relaxed">{t.footerSchoolDesc}</p>
            </div>
            <div>
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">{t.footerLinksTitle}</h4>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button onClick={() => scrollToSection('pengenalan')} className="hover:text-teal-800 text-left">
                    {t.navIntro} BADAR
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('visimisi')} className="hover:text-teal-800 text-left">
                    {t.navVision}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tujuan')} className="hover:text-teal-800 text-left">
                    {t.navPurpose}
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateToHadis40} className="text-teal-800 font-bold hover:underline text-left">
                    {t.navHadis40} →
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-teal-950 text-sm mb-2">{t.footerLocationTitle}</h4>
              <p><i className="fa-solid fa-location-dot text-teal-700 mr-1.5"></i> {t.footerLocation}</p>
              <p className="mt-1"><i className="fa-solid fa-hashtag text-teal-700 mr-1.5"></i> #hadis40dihatiku</p>
            </div>
          </div>
          <div className="border-t border-slate-300/40 mt-8 pt-4 text-center text-slate-500 space-y-1">
            <p>{t.footerCopyright}</p>
            <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">{t.footerDevCredit}</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};
