import { motion } from "framer-motion";

export default function Skills() {
  // All skills in a simple array
  const allSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Firebase",
    "AWS",
    "Docker",
    "Git",
    "GitHub",
    "Figma",
    "Photoshop",
    "Jest",
    "Cypress",
    "Webpack",
    "Vite",
    "REST APIs",
    "GraphQL",
    "Socket.io",
    "React Native",
    "Flutter",
    "Prisma",
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>

        {/* Simple Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
        >
          {allSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
