import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container-custom py-12 px-4">
        <div className="text-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800 dark:border-gray-700"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> in India
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
