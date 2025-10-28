import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      {/* Simple Logo Container */}
      <motion.div
        className="relative w-12 h-12 flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Logo Image */}
        <motion.img
          src="/image.png"
          alt="Kathan Patel Logo"
          className="w-12 h-12 object-cover rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          onError={(e) => {
            // Fallback to text if image fails to load
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
        />

        {/* Fallback Text (hidden by default) */}
        <motion.span
          className="text-gray-900 dark:text-white font-bold text-lg select-none"
          style={{ display: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          KP
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
