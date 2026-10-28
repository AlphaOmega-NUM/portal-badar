import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../data/translations';

export type ArabicFontSize = 'normal' | 'medium' | 'large';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  arabicFontSize: ArabicFontSize;
  onFontSizeChange: (size: ArabicFontSize) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
  arabicFontSize,
  onFontSizeChange,
}) => {
  const t = translations[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg neu-raised rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-white/10 z-10 space-y-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-300/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="neu-inset w-10 h-10 rounded-xl flex items-center justify-center text-teal-800 text-lg">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div>
                  <h3 className="text-lg font-black text-teal-950">{t.settingsTitle}</h3>
                  <p className="text-xs text-slate-500">{t.settingsSubtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup tetapan"
                className="neu-btn w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-teal-900 transition"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Section 1: Pilihan Bahasa (Language Selection) */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-globe text-teal-700"></i> {t.langSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.langSectionDesc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Bahasa Melayu */}
                <button
                  type="button"
                  onClick={() => onLanguageChange('ms')}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    language === 'ms'
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="text-2xl">🇲🇾</span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">Bahasa Melayu</h4>
                    <p className="text-[10px] text-slate-500">Bahasa Rasmi</p>
                  </div>
                  {language === 'ms' && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>

                {/* English */}
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    language === 'en'
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">English</h4>
                    <p className="text-[10px] text-slate-500">powered by David</p>
                  </div>
                  {language === 'en' && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>
              </div>
            </div>

            {/* Section 2: Tema Paparan (Theme) */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-palette text-teal-700"></i> {t.themeSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.themeSectionDesc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Mod Cerah */}
                <button
                  type="button"
                  onClick={() => { if (isDarkMode) onToggleDarkMode(); }}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    !isDarkMode
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-amber-500 text-sm">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">{t.themeLight}</h4>
                    <p className="text-[10px] text-slate-500">Pencahayaan Siang</p>
                  </div>
                  {!isDarkMode && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>

                {/* Mod Gelap */}
                <button
                  type="button"
                  onClick={() => { if (!isDarkMode) onToggleDarkMode(); }}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-left transition ${
                    isDarkMode
                      ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                      : 'neu-btn hover:border hover:border-teal-400/30'
                  }`}
                >
                  <span className="neu-raised-sm w-8 h-8 rounded-xl flex items-center justify-center text-teal-300 text-sm">
                    <i className="fa-solid fa-moon"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-teal-950">{t.themeDark}</h4>
                    <p className="text-[10px] text-slate-500">Pencahayaan Malam</p>
                  </div>
                  {isDarkMode && (
                    <i className="fa-solid fa-circle-check text-teal-700 ml-auto text-sm"></i>
                  )}
                </button>
              </div>
            </div>

            {/* Section 3: Saiz Fon Teks Arab Hadis */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <i className="fa-solid fa-font text-teal-700"></i> {t.fontSizeSectionTitle}
                </label>
                <p className="text-[11px] text-slate-500">{t.fontSizeSectionDesc}</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'medium', 'large'] as ArabicFontSize[]).map((size) => {
                  const isSelected = arabicFontSize === size;
                  const label =
                    size === 'normal'
                      ? t.fontSizeNormal
                      : size === 'medium'
                      ? t.fontSizeMedium
                      : t.fontSizeLarge;
                  const previewText = size === 'normal' ? 'بِسْمِ اللَّهِ' : size === 'medium' ? 'بِسْمِ اللَّهِ' : 'بِسْمِ اللَّهِ';
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => onFontSizeChange(size)}
                      className={`p-3 rounded-2xl text-center transition flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'neu-inset border-2 border-teal-600/50 bg-teal-500/10'
                          : 'neu-btn'
                      }`}
                    >
                      <span className="font-arabic text-sm sm:text-base text-teal-950 font-medium">
                        {previewText}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full neu-btn-primary py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fa-solid fa-check"></i>
                <span>{t.closeBtn}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
