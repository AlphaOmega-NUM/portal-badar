import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { pangkalanHadis, searchHadis } from '../data/hadisData';
import { Language, translations, hadisEnglishData } from '../data/translations';
import { ArabicFontSize } from './SettingsModal';

interface Hadis40PortalProps {
  onNavigateHome: () => void;
  initialHadisNo?: number | null;
  onSelectHadis?: (no: number | null) => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  language?: Language;
  onOpenSettings?: () => void;
  arabicFontSize?: ArabicFontSize;
}

export const Hadis40Portal: React.FC<Hadis40PortalProps> = ({
  onNavigateHome,
  initialHadisNo = null,
  onSelectHadis,
  isDarkMode = false,
  onToggleDarkMode,
  language = 'ms',
  onOpenSettings,
  arabicFontSize = 'normal'
}) => {
  const [selectedHadisNo, setSelectedHadisNo] = useState<number | null>(initialHadisNo);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const t = translations[language];

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

  const currentEnData = currentHadis ? hadisEnglishData[currentHadis.no] : null;
  const currentTajuk = (language === 'en' && currentEnData?.tajukEn) ? currentEnData.tajukEn : currentHadis?.tajuk;
  const currentRawi = (language === 'en' && currentEnData?.rawiEn) ? currentEnData.rawiEn : currentHadis?.rawi;
  const currentMaksud = (language === 'en' && currentEnData?.maksudEn) ? currentEnData.maksudEn : currentHadis?.maksud;

  const salinTeksHadis = () => {
    if (!currentHadis) return;
    const textToCopy = `Hadis #${currentHadis.no}: ${currentTajuk}\nPerawi: ${currentRawi}\n\nMatan Arab:\n${currentHadis.matanArab}\n\nMaksud:\n"${currentMaksud}"\n\nHuraian:\n${currentHadis.huraian}\n\nPengajaran KPM:\n${currentHadis.pengajaran.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\nFokus Nilai: ${currentHadis.nilai}\nCadangan Aktiviti: ${currentHadis.aktiviti}`;
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

  const arabicFontSizeClass =
    arabicFontSize === 'large'
      ? 'text-3xl sm:text-4xl md:text-5xl leading-relaxed sm:leading-loose'
      : arabicFontSize === 'medium'
      ? 'text-2xl sm:text-3xl md:text-4xl leading-relaxed sm:leading-loose'
      : 'text-2xl sm:text-3xl leading-loose';

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
              <h1 className="font-black text-teal-950 tracking-wider text-sm sm:text-base">{t.hadisPortalTitle}</h1>
            </div>
          </div>

          {/* Butang Tindakan Kanan */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Butang Sistem Tetapan (Settings) */}
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                title={t.navSettings}
                aria-label={t.navSettings}
                className="neu-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
              >
                <i className="fa-solid fa-gear text-sm"></i>
              </button>
            )}

            {/* Butang Toggle Mod Gelap */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                title={isDarkMode ? t.darkModeLight : t.darkModeDark}
                aria-label="Tukar mod gelap atau cerah"
                className="neu-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
              >
                <i className={isDarkMode ? "fa-solid fa-sun text-amber-400 text-sm" : "fa-solid fa-moon text-teal-700 text-sm"}></i>
              </button>
            )}

            <button
              onClick={onNavigateHome}
              className="neu-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-teal-950 flex items-center gap-2 hover:text-amber-800 transition"
            >
              <i className="fa-solid fa-house text-teal-700 text-xs sm:text-sm"></i>
              <span className="hidden sm:inline">{t.navBackHome}</span>
              <span className="inline sm:hidden">{t.navHome}</span>
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
                    <i className="fa-solid fa-book-open text-teal-700"></i> {t.hadisIntroBadge}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
                    {t.hadisIntroTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {t.hadisIntroDesc}
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
                      <h3 className="font-extrabold text-teal-950 text-sm sm:text-base">{t.hadisPurposeTitle}</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                      {t.hadisPurposeList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fa-solid fa-check-circle text-teal-700 mt-1"></i>
                          <span><strong>{item.title}:</strong> {item.desc}</span>
                        </li>
                      ))}
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
                      <h3 className="font-extrabold text-teal-950 text-sm sm:text-base">{t.hadisWhyTitle}</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                      {t.hadisWhyList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fa-solid fa-star text-amber-600 mt-1"></i>
                          <span><strong>{item.title}:</strong> {item.desc}</span>
                        </li>
                      ))}
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
                  <button
                    onClick={() => scrollToSection('biografi-nawawi')}
                    className="neu-btn px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-teal-950 flex items-center gap-2.5 hover:text-amber-800 transition"
                  >
                    <i className="fa-solid fa-user-graduate text-teal-700 text-base"></i>
                    <span>{t.hadisBtnNawawi}</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('kad-hadis-section')}
                    className="neu-btn-primary px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <i className="fa-solid fa-magnifying-glass text-base"></i>
                    <span>{t.hadisBtnSearch}</span>
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
                      {t.authorBadge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950">
                      {t.authorTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {t.authorSubtitle}
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
                      <i className="fa-solid fa-id-card text-teal-700"></i> {t.authorBioTitle}
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      {t.authorBioList.map((bio, idx) => (
                        <li key={idx}><strong>{bio.label}:</strong> {bio.value}</li>
                      ))}
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
                      <i className="fa-solid fa-graduation-cap text-teal-700"></i> {t.authorEduTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {t.authorEduP1}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {t.authorEduP2}
                    </p>
                  </motion.div>
                </div>

                {/* Keistimewaan & Karisma Imam An-Nawawi */}
                <div>
                  <h3 className="font-bold text-teal-950 text-sm sm:text-base mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-star text-amber-600"></i> {t.authorQualitiesTitle}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.authorQualities.map((item, idx) => (
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
                      <i className="fa-solid fa-magnifying-glass mr-1.5 text-teal-600"></i> {t.searchBadge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-teal-950">
                      {t.searchTitle}
                    </h2>
                    <p className="text-xs text-slate-500 max-w-xl mx-auto">
                      {t.searchDesc}
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
                        placeholder={t.searchPlaceholder}
                        className="w-full bg-transparent text-sm sm:text-base text-teal-950 focus:outline-none placeholder-slate-400 font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          title={t.clearSearch}
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
                        <i className="fa-solid fa-shapes text-teal-700"></i> {t.hadisCardsHeader}
                      </h3>
                      <p className="text-xs text-slate-500">{t.hadisCardsSubheader}</p>
                    </div>
                    <span className="neu-inset px-3 py-1 rounded-xl text-xs font-bold text-teal-800">
                      {t.displayingCount(filteredHadis.length)}
                    </span>
                  </div>

                  {filteredHadis.length === 0 ? (
                    <div className="text-center py-12 neu-inset rounded-3xl">
                      <i className="fa-regular fa-folder-open text-3xl text-teal-700/60 mb-2 block"></i>
                      <p className="text-sm font-bold text-teal-950">{t.noHadisFound(searchQuery)}</p>
                      <p className="text-xs text-slate-500 mt-1">{t.noHadisSub}</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {filteredHadis.map((h, index) => {
                        const enData = hadisEnglishData[h.no];
                        const cardTajuk = (language === 'en' && enData?.tajukEn) ? enData.tajukEn : h.tajuk;
                        const cardRawi = (language === 'en' && enData?.rawiEn) ? enData.rawiEn : h.rawi;

                        return (
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
                                {t.hadisNumberBadge(h.no)}
                              </span>
                              <span className="text-teal-700 text-xs opacity-75 group-hover:translate-x-1 transition transform flex items-center gap-1">
                                {t.openCard} <i className="fa-solid fa-arrow-right text-[10px]"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-teal-950 group-hover:text-amber-800 transition line-clamp-1">
                                {cardTajuk}
                              </h4>
                              <p className="text-[11px] text-slate-500 truncate mt-1">
                                {cardRawi.split(' ')[0]} ...
                              </p>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 mt-12 text-center text-xs text-slate-500">
              <div className="max-w-7xl mx-auto border-t border-slate-300/40 pt-6 space-y-1">
                <p>{t.footerCopyright}</p>
                <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">{t.footerDevCredit}</p>
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
                className="flex items-center justify-between flex-wrap gap-3 neu-raised rounded-2xl p-4 border border-white/40"
              >
                <button
                  onClick={kembaliKeUtama}
                  className="neu-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-teal-900 flex items-center gap-2"
                >
                  <i className="fa-solid fa-arrow-left"></i> {t.navBackHadisCards}
                </button>
                <div className="flex items-center gap-2">
                  {onOpenSettings && (
                    <button
                      onClick={onOpenSettings}
                      title={t.navSettings}
                      aria-label={t.navSettings}
                      className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
                    >
                      <i className="fa-solid fa-gear text-xs"></i>
                    </button>
                  )}
                  {onToggleDarkMode && (
                    <button
                      onClick={onToggleDarkMode}
                      title={isDarkMode ? t.darkModeLight : t.darkModeDark}
                      aria-label="Tukar mod gelap atau cerah"
                      className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-teal-800 hover:text-amber-600 transition"
                    >
                      <i className={isDarkMode ? "fa-solid fa-sun text-amber-400 text-xs" : "fa-solid fa-moon text-teal-700 text-xs"}></i>
                    </button>
                  )}
                  <button
                    onClick={salinTeksHadis}
                    title="Salin maklumat hadis"
                    className="neu-raised-sm px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-900 hover:text-teal-700 transition flex items-center gap-1"
                  >
                    <i className={`fa-solid ${copied ? 'fa-check text-emerald-600' : 'fa-copy'}`}></i>
                    <span>{copied ? t.copiedBtn : t.copyBtn}</span>
                  </button>
                  <span className="neu-inset px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800">
                    {t.hadisNumberBadge(currentHadis.no)}
                  </span>
                  <button
                    onClick={onNavigateHome}
                    className="neu-raised-sm px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-900 hover:text-amber-800 transition hidden sm:inline-flex items-center"
                  >
                    <i className="fa-solid fa-house mr-1"></i> {t.navHome}
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
                    {currentRawi}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-teal-950 mb-4">
                    {currentTajuk}
                  </h2>
                  <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full"></div>
                </div>

                {/* Teks Matan Arab (Gaya Ukiran Inset dengan Pilihan Saiz) */}
                <div className="neu-inset rounded-2xl p-6 sm:p-8 my-4">
                  <p className={`font-arabic ${arabicFontSizeClass} text-right text-teal-950`} dir="rtl">
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
                    <h3 className="text-lg font-extrabold text-teal-950">{t.meaningTitle}</h3>
                    <p className="text-xs text-slate-500">{t.meaningSubtitle}</p>
                  </div>
                </div>
                <div className="neu-inset rounded-2xl p-5 text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &quot;{currentMaksud}&quot;
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
                    <h3 className="text-lg font-extrabold text-teal-950">{t.explanationTitle}</h3>
                    <p className="text-xs text-slate-500">{t.explanationSubtitle}</p>
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
                    <h3 className="text-lg font-extrabold text-teal-950">{t.lessonsTitle}</h3>
                    <p className="text-xs text-slate-500">{t.lessonsSubtitle}</p>
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
                    <h4 className="font-bold text-teal-950 text-sm">{t.valuesTitle}</h4>
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
                    <h4 className="font-bold text-teal-950 text-sm">{t.activitiesTitle}</h4>
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
                  <i className="fa-solid fa-chevron-left"></i> {t.prevHadisBtn}
                </button>
                <button
                  onClick={kembaliKeUtama}
                  className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hidden sm:block"
                >
                  {t.allCardsBtn}
                </button>
                <button
                  disabled={currentHadis.no >= 40}
                  onClick={() => navigasiHadis(1)}
                  className={`neu-btn px-4 py-2 rounded-xl text-xs font-bold text-teal-900 flex items-center gap-2 ${
                    currentHadis.no >= 40 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  {t.nextHadisBtn} <i className="fa-solid fa-chevron-right"></i>
                </button>
              </motion.div>

              {/* Footer Detail View */}
              <div className="pt-6 pb-4 text-center text-xs text-slate-500 space-y-1 border-t border-slate-300/40">
                <p>{t.footerCopyright}</p>
                <p className="text-[11px] font-medium text-teal-900/75 tracking-wide">{t.footerDevCredit}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
