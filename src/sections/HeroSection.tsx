import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, slideIn } from '../utils/motion';
import bg from '../../src/Assets/background.png';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-dark-500 dark:to-dark-700 bg-opacity-90 dark:bg-opacity-90">
        <div
            className="absolute inset-0 bg-cover bg-center opacity-5"
              style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="block">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text animate-gradient bg-size-200">
              Shiva Kumar Adicherla
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <span className="relative inline-block">
              <span>Data Engineer</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400"></span>
            </span>
            
          </motion.h2>
          
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-gray-700 dark:text-gray-200 max-w-lg mb-12"
          >
            Designs, builds, and maintains scalable data pipelines to transform raw data into reliable insights for decision-making.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="btn-primary px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn-secondary px-6 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-500 transition-all transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;