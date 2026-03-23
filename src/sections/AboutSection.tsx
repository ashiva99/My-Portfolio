import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';
import SectionTitle from '../components/SectionTitle';
import { Code2, Briefcase, Award } from 'lucide-react';

const timelineData = [
  {
    year: "2024",
    role: "Data Engineer",
    company: "Accenture",
    description: "Engineered scalable ETL pipelines for client ABB to migrate and transform data from legacy systems to Amazon S3 and Amazon Redshift using Python, AWS Glue, and Apache Spark, improving performance by 40% and reducing query latency by 35%, while developing optimized distributed workflows using PySpark, Spark SQL, and Hadoop for large-scale batch processing, and collaborating with cross-functional teams to deliver production-ready datasets and automate ETL pipelines with Apache Airflow, increasing overall workflow efficiency by 50%.",
    icon: <Code2 className="w-6 h-6" />,
    tech: ["Python", "Apache Spark", "PySpark", "AWS Glue", "Amazon Redshift"]
  },
  {
    year: "2021",
    role: "Data Engineer",
    company: "Accenture",
    description: "Architected an AWS Data Lakehouse for client Essity using Amazon S3, AWS Glue, PySpark, and Spark SQL to process large-scale supply chain data, increasing pipeline throughput by 40% and improving data ingestion performance through Kafka-based streaming pipelines, while directing enterprise workflow orchestration with Apache Airflow to enhance reliability and monitoring, and collaborating with cross-functional teams to deploy containerized data solutions using Docker and Kubernetes, improving scalability and reducing deployment effort.",
    icon: <Briefcase className="w-6 h-6" />,
    tech: ["Python", "Apache Spark", "Apache Kafka", "AWS Glue", "Docker"]
  },
  {
    year: "2020",
    role: "Application Data Analyst",
    company: "NxtWave Technologies",
    description: "Analyzed user behavior and engagement data using Python and SQL to generate actionable insights for product improvements, while building automated KPI dashboards in Power BI to support data-driven decision-making, improving reporting accuracy by standardizing SQL queries and validation checks to reduce manual effort by 30%, and collaborating with cross-functional teams to automate analytics workflows using Python, SQL, and AWS, enhancing reporting efficiency and reducing data preparation time.",
    icon: <Code2 className="w-6 h-6" />,
    tech: ["Python", "SQL", "Power BI", "AWS", "Data Analysis"]
  },
];

const achievements = [
  {
    title: "Master of Science in Information Systems Technology",
    description: "Wilmington University, Wilmington, DE"
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    description: "Gokaraju Rangaraju Institute of Engineering and Technology"
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-600 dark:to-dark-500">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Journey" 
          subtitle="A timeline of my professional evolution and key achievements in tech."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-secondary-500" />
              
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('right', index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative pl-20 pb-12 group"
                >
                  <div className="absolute left-[29px] w-4 h-4 rounded-full bg-white dark:bg-dark-400 border-4 border-primary-500 group-hover:scale-150 transition-transform duration-300" />
                  
                  <div className="absolute left-0 w-16 h-8 flex items-center justify-center bg-primary-500 text-white rounded-full text-sm font-semibold">
                    {item.year}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-dark-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {item.role}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Achievements Column */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              variants={slideIn('left', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="sticky top-24"
            >
              <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                  <Award className="text-primary-500" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      variants={fadeIn('left', index * 0.2)}
                      className="border-l-4 border-primary-500 pl-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;