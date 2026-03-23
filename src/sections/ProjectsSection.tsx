import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeIn, staggerContainer, cardVariants } from '../utils/motion';
import SectionTitle from '../components/SectionTitle';
import project from '../../src/Assets/Exploring Weather Trends.png';

/* ─── Project data ─────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Exploring Weather Trends',
    description: 'Analyzed SQL-based temperature data with Python, Excel, and Tableau to detect trends and visualize global warming patterns.',
    image: project,
    tags: ['SQL', 'Python', 'Excel', 'Tableau', 'Data Cleaning & Preprocessing'],
    sourceCode: '#',
    liveDemo: '#',
  },
];

/* ─── Card component without duplicate props ──────────────── */
const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => (
  /* Fade‑in wrapper */
  <motion.div
    variants={fadeIn('up', index * 0.15)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    {/* Hover‑tilt card */}
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="rounded-2xl overflow-hidden bg-white dark:bg-dark-400 shadow-lg group"
      style={{ perspective: '1000px' }}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end gap-3">
            <a
              href={project.sourceCode}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-500 transition-colors"
              aria-label="View source code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href={project.liveDemo}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-500 transition-colors"
              aria-label="View live demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [activeTab] = useState('all'); // placeholder for future filtering

  const filteredProjects = projects; // currently unfiltered

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-500">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work, showcasing my skills and expertise."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Interested in working together?
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
