import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-10 bg-white dark:bg-dark-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* ── Disclaimer + Copyright ─────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Shiva Kumar Adicherla. All rights reserved.
            </p>
          </div>

          {/* ── Back-to-Top Button ────────────────────────────────── */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
