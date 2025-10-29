import { motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  DollarSign,
  User,
  Clock,
  Shield,
  Calendar,
} from "lucide-react";
import { freelancerAdvantages } from "../data/portfolio";
import { useCalcom } from "../hooks/useCalcom";
import { useLocalTime } from "../hooks/useLocalTime";

const iconMap = {
  User,
  DollarSign,
  CheckCircle,
  Code,
  Clock,
  Shield,
};

export default function FreelancerAdvantages() {
  const { getCalProps } = useCalcom("30min");
  const { time, timezone } = useLocalTime();

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 dark:text-white">
            Why Choose Me Over Agencies?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Unlike other freelancer software engineers, I won't treat your
            project as just one of many. I specialize in building custom
            solutions with personal attention to detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {freelancerAdvantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Availability CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            It's {time} {timezone}, let's discuss your project over a coffee! ☕
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              {...getCalProps("kathan-patel/30min")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
