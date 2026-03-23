import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";
import { fadeIn } from "../utils/motion";
import SectionTitle from "../components/SectionTitle";

interface FormData {
  name: string;
  email: string;
  message: string;
}

/* ─────────────────────────────────────────────────────────────
 *  Replace with your own Formspree ID
 *  Example:  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqkwyajb";
 * ───────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_FORM_ID";

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* ───────────── Form handlers */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data: any = await res.json().catch(() => null);
        setSubmitError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitError("Network error – please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-500">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ──────────── Form card */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:order-1 order-2"
          >
            <div className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-dark-400 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <form onSubmit={handleSubmit} className="p-8">
                {/* Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200 resize-none"
                  ></textarea>
                </div>

                {/* Error / Success */}
                {submitError && (
                  <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                {submitSuccess && (
                  <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                    Thank you for your interest. Your message has been sent sucessfully!!
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={16} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* ──────────── Info card */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:order-2 order-1 space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Contact Information
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out through the form or directly via the
              contact details below. I'm always open to discussing new projects,
              creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Mail className="text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:ashivakmr01@gmail.com"
                    className="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    ashivakmr01@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Phone className="text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:+1 484-252-6441"
                    className="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    +1 484-252-6441 
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <MapPin className="text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
                Follow Me
              </h4>
              <div className="flex space-x-4">
              {[
                { name: "GitHub", href: "https://github.com/" },
                { name: "LinkedIn", href: "http://www.linkedin.com/in/shivakumar997" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-dark-300 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all transform hover:-translate-y-1"
                  aria-label={platform.name}
                >
                  {platform.name.charAt(0)}
                </a>
              ))}
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
