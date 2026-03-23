import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeToggle } from '../hooks/useThemeToggle';

/* ── update navLinks ───────────────────────────────────────── */
const navLinks = [
  { name: 'Home',        href: '#home' },
  { name: 'About',       href: '#about' },
  { name: 'Projects',    href: '#projects' },
  { name: 'Skills',      href: '#skills' },
  { name: 'Certificates', href: '#certificates' },   // ← NEW
  { name: 'Contact',     href: '#contact' }
];
/* ──────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeToggle();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-500/80 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-400 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-dark-400 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={mobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white dark:bg-dark-500"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 py-2"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200"
          >
            {isDarkMode ? (
              <>
                <Sun size={18} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={18} /> Dark Mode
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
