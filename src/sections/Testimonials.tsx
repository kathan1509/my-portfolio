import { motion } from "framer-motion";
import { Quote, Calendar } from "lucide-react";
import { testimonials } from "../data/portfolio";
import { useCalcom } from "../hooks/useCalcom";

export default function Testimonials() {
  const { getCalProps } = useCalcom("30min");

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Preferred & Endorsed by{" "}
            <span className="text-gray-600 dark:text-gray-400">
              Industry Experts!
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Client satisfaction is a top priority for me, so I'm grateful for
            all the positive feedback from the people I got to collaborate with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to be the next success story?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join these satisfied clients who have transformed their business
            with my development expertise.
          </p>
          <button
            {...getCalProps("kathan-patel/30min")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
          >
            <Calendar className="w-5 h-5" />
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
}
