import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";

const iconMap = {
  Github,
  Linkedin,
  X,
  Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Sending message..." });

    try {
      // EmailJS configuration from environment variables or fallback config
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || emailjsConfig.serviceId;
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailjsConfig.templateId;
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailjsConfig.publicKey;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS not configured. Please set up your environment variables or config file."
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: personalInfo.email, // Your email where you want to receive messages
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
              Let's Talk
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Project Inquiry&body=Hi Kathan,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards`}
                    className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 break-all"
                    title="Send me an email"
                    aria-label="Send email to Kathan Patel"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus.type === "loading"}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus.type === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: formStatus.type === "loading" ? 1 : 0.98 }}
              >
                {formStatus.type === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {formStatus.type === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status Messages */}
              {formStatus.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                      : formStatus.type === "error"
                      ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                      : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                  }`}
                >
                  {formStatus.type === "success" && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  {formStatus.type === "error" && (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {formStatus.type === "loading" && (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  )}
                  <span className="text-sm font-medium">
                    {formStatus.message}
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
