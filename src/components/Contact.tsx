import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { personalInfo } from "../data/resume";
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Using Web3Forms - Free email service (get access key from https://web3forms.com)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          name: formState.name,
          email: formState.email,
          message: formState.message,
          to_email: personalInfo.email,
          subject: `Portfolio Contact from ${formState.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try email directly.");
      // Fallback to mailto
      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(`Hi Sakshi,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      }, 2000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sakshjadhav",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sakshij2810",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-dark-900/30">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-950 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[128px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-mono text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-cream-100 mt-4">
            Let's Work Together
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-display font-semibold text-cream-100 mb-6">
              Contact Information
            </h3>
            <p className="text-dark-400 mb-8 leading-relaxed">
              Ready to bring your ideas to life? I specialize in building scalable
              web applications with modern technologies. Let's discuss how I can
              contribute to your team or project.
            </p>

            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" || contact.label === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/60 border border-dark-800/50 hover:border-primary-500/30 group card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                    <contact.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">{contact.label}</p>
                    <p className="text-cream-100 group-hover:text-primary-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center gap-3 text-dark-400"
            >
              <MapPin size={18} className="text-primary-500" />
              <span>Maharashtra, India (Open to Remote)</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-dark-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-800/50 text-cream-100 placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-dark-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-800/50 text-cream-100 placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  disabled={status === "loading"}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-dark-800/50 text-cream-100 placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage || "Something went wrong. Opening email client..."}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-500 hover:bg-primary-600 text-dark-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>

              <p className="text-xs text-dark-500 text-center">
                Or email me directly at{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-primary-500 hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
