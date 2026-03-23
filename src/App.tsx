import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/* Components */
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

/* Sections */
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import CertificatesSection from './sections/CertificatesSection';  /* ← NEW */
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function App() {
  useEffect(() => {
    document.title = 'Shiva Kumar Adicherla | Data Engineer';

    const handleSmoothScroll = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth',
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', handleSmoothScroll);
    });
    return () =>
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener('click', handleSmoothScroll)
      );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-700 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection /> {/* ← NEW */}
        <ContactSection />
        <FooterSection />
      </motion.div>
    </div>
  );
}

export default App;
