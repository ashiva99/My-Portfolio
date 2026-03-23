import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { fadeIn, staggerContainer } from '../utils/motion';
import Meta from '../Assets/Certificates/Meta Full Stack Developer Professional Certificate.png';
import Google from '../Assets/Certificates/Google UX Design Professional Certificate.png';
import udemy from '../Assets/Certificates/UX & Web Design Master Course.png';


/* ─── Certificate data ────────────────────────────────────── */
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Meta Full Stack Developer',
    issuer: 'Meta',
    date: 'Aug 2023',
    image: Meta,
  },
  {
    id: 2,
    title: 'Google UX Design',
    issuer: 'Google',
    date: 'Jul 2023',
    image: Google,
  },
  {
    id: 2,
    title: 'UX & Web Design Master Course',
    issuer: 'udemy',
    date: 'Jul 2023',
    image: udemy,
  },
];
/* ─────────────────────────────────────────────────────────── */

const Modal = ({
  img,
  onClose,
}: {
  img: string;
  onClose: () => void;
}) => {
  // close on ESC
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        key="img"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <img
          src={img}
          alt="certificate enlarged"
          className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()} // prevent closing when img itself clicked
        />
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl leading-none"
          aria-label="close"
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const CertificatesSection = () => {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Certificates"
          subtitle="Highlights of my recent certifications."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, idx) => (
            <motion.button
              key={cert.id}
              variants={fadeIn('up', idx * 0.1)}
              onClick={() => setOpenImg(cert.image)}
              className="group text-left w-full rounded-xl overflow-hidden bg-white dark:bg-dark-400 shadow-md hover:shadow-xl focus:outline-none transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-500 dark:text-primary-400 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {openImg && <Modal img={openImg} onClose={() => setOpenImg(null)} />}
    </section>
  );
};

export default CertificatesSection;
