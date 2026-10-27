/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { BadarPortal } from './components/BadarPortal';
import { Hadis40Portal } from './components/Hadis40Portal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portal' | 'hadis40'>('portal');
  const [activeHadisNo, setActiveHadisNo] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#hadis-')) {
        const num = parseInt(hash.replace('#hadis-', ''), 10);
        if (!isNaN(num) && num >= 1 && num <= 40) {
          setCurrentPage('hadis40');
          setActiveHadisNo(num);
          return;
        }
      }
      
      if (hash === '#hadis40' || hash === '#biografi-nawawi' || hash === '#kad-hadis-section') {
        setCurrentPage('hadis40');
        setActiveHadisNo(null);
        return;
      }

      // Default or home section hashes
      if (hash === '' || hash === '#utama' || hash === '#pengenalan' || hash === '#visimisi' || hash === '#tujuan') {
        setCurrentPage('portal');
        setActiveHadisNo(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const navigateToHadis40 = (hadisNo?: number) => {
    setCurrentPage('hadis40');
    if (hadisNo) {
      setActiveHadisNo(hadisNo);
      window.location.hash = `hadis-${hadisNo}`;
    } else {
      setActiveHadisNo(null);
      window.location.hash = 'hadis40';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    setCurrentPage('portal');
    setActiveHadisNo(null);
    window.location.hash = sectionId ? `#${sectionId}` : '';
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#27372d] selection:bg-teal-200 selection:text-teal-900 relative">
      {/* Scroll Progress Bar with Spring Momentum Delay */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-amber-500 origin-left z-50 shadow-[0_2px_8px_rgba(15,118,110,0.35)]"
        style={{ scaleX }}
      />

      {currentPage === 'portal' ? (
        <BadarPortal onNavigateToHadis40={() => navigateToHadis40()} />
      ) : (
        <Hadis40Portal
          onNavigateHome={() => navigateToHome('utama')}
          initialHadisNo={activeHadisNo}
          onSelectHadis={(no) => setActiveHadisNo(no)}
        />
      )}

      {/* Floating Scroll to Top button with smooth Neumorphic styling */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          title="Kembali ke atas"
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-6 right-6 z-40 neu-btn w-12 h-12 rounded-2xl flex items-center justify-center text-teal-800 hover:text-amber-700 shadow-lg border border-white/40"
        >
          <i className="fa-solid fa-arrow-up text-base"></i>
        </motion.button>
      )}
    </div>
  );
}
