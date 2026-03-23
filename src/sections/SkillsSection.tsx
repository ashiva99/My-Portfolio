import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import SectionTitle from '../components/SectionTitle';

interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

const skillCategories = [
  {
    "title:": "Programming & Data Processing",
    "skills": [
      { "name": "Python", "level": 95, "icon": "🐍" },
      { "name": "Pandas", "level": 90, "icon": "🐼" },
      { "name": "NumPy", "level": 88, "icon": "🔢" },
      { "name": "PySpark", "level": 92, "icon": "🔥" },
      { "name": "Spark SQL", "level": 90, "icon": "🧠" },
      { "name": "Apache Spark", "level": 93, "icon": "⚡" },
      { "name": "Hadoop", "level": 85, "icon": "🐘" }
    ]
  },
  {
    "title:": "Databases & Data Warehousing",
    "skills": [
      { "name": "SQL", "level": 95, "icon": "🗄️" },
      { "name": "PostgreSQL", "level": 88, "icon": "🐘" },
      { "name": "MySQL", "level": 87, "icon": "🐬" },
      { "name": "MongoDB", "level": 85, "icon": "🍃" },
      { "name": "Oracle Database", "level": 83, "icon": "🟥" },
      { "name": "Snowflake", "level": 90, "icon": "❄️" },
      { "name": "Amazon Redshift", "level": 88, "icon": "📊" }
    ]
  },
  {
    "title:": "Cloud, Orchestration & DevOps",
    "skills": [
      { "name": "AWS", "level": 92, "icon": "☁️" },
      { "name": "Azure", "level": 90, "icon": "🔷" },
      { "name": "Google Cloud Platform", "level": 88, "icon": "🌐" },
      { "name": "Apache Airflow", "level": 90, "icon": "🔄" },
      { "name": "Docker", "level": 88, "icon": "🐳" },
      { "name": "Kubernetes", "level": 85, "icon": "☸️" },
      { "name": "Terraform", "level": 84, "icon": "🏗️" },
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: Skill, index: number }) => {
  return (
    <motion.div
      variants={fadeIn('right', index * 0.1 + 0.2)}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
          <span className="text-xl">{skill.icon}</span> {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-600">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and proficiency levels."
        />
        
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeIn('up', categoryIndex * 0.1)}
              className="bg-white dark:bg-dark-400 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-dark-300">
                {category.title}
              </h3>
              
              {category.skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;