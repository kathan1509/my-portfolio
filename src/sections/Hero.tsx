import { motion } from "framer-motion";
import { Calendar, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Typewriter from "../components/Typewriter";
import { personalInfo, currentStatus } from "../data/portfolio";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kathanpatel",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kathan-patel-ktk03",
      icon: "Linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ktk_0303",
      icon: "Twitter",
    },
  ];

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 hero-mobile hero-xs"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxOSwgMjE5LCAyMTksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="section-padding">
          <motion.div
            className="container-custom text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main heading with gradient name */}
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-2 text-gray-700 dark:text-gray-300">
                Hey 👋, I'm
              </span>
              <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>
              <span className="block text-gray-700 dark:text-gray-300">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            {/* Subtitle with typewriter effect */}
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 lg:mb-10 font-normal"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typewriter
                texts={[
                  "Full Stack Developer",
                  "Data Engineer",
                  "Application Developer",
                ]}
                delay={1000}
                speed={80}
                pauseDuration={2000}
              />
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-normal"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-md sm:max-w-none mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-xs sm:max-w-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium text-sm sm:text-base mobile-button"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule a Call
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto max-w-xs sm:max-w-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base mobile-button"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Get in Touch
              </a>
            </motion.div>

            {/* Status Section - Mobile Optimized */}
            <motion.div
              className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                It's {currentStatus.currentTime} {currentStatus.timezone}, let's
                discuss over a coffee! ☕
              </div>

              {/* Social Links - Mobile Optimized */}
              <div className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Freelance Availability - Clean Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="mt-6 sm:mt-8"
              >
                <motion.a
                  href={personalInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Pulse Dot */}
                  <motion.div className="flex items-center gap-3">
                    <motion.div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    {/* Main Text */}
                    <motion.span className="font-medium text-xs sm:text-sm tracking-wide text-gray-700 dark:text-gray-300">
                      <span className="hidden sm:inline">
                        AVAILABLE FOR FREELANCE WORK
                      </span>
                      <span className="sm:hidden">AVAILABLE FOR WORK</span>
                    </motion.span>
                  </motion.div>

                  {/* Side sparkles - More subtle */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-1 h-1 bg-green-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-1 h-1 bg-green-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5,
                    }}
                  />
                </motion.a>

                {/* Subtitle */}
                <motion.p
                  className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  ✨ Let's build something amazing together!
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
