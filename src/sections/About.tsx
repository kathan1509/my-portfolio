import { motion } from "framer-motion";
import {
  personalInfo,
  experience,
  education,
  certifications,
} from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 px-3 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mobile-spacing">
            Get to know me better - my journey, passion, and what drives me to
            create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              My Story
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                With a passion for clean code and innovative solutions, I've
                spent years honing my skills in both frontend and backend
                development. I believe in the power of technology to solve
                real-world problems and create meaningful user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {job.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {job.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-green-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    {cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        View Credential →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
