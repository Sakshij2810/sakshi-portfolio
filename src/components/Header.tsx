import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks } from "../data/resume";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Small delay to let the menu close animation start
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-dark-950 font-display font-bold text-xl group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <span className="font-display text-xl font-semibold text-cream-100 hidden sm:block">
              Sakshi
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-dark-300 hover:text-cream-100 transition-colors duration-300 link-underline"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-3"
          >
            <a
              href="https://drive.google.com/file/d/1sZDjLgnb7e5W3TU6_sFAMwyU5Ram2rpE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-primary-500/50 hover:border-primary-500 text-primary-500 hover:bg-primary-500/10 font-medium text-sm rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-dark-950 font-medium text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cream-100 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-dark-800"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="text-lg text-dark-300 hover:text-cream-100 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1sZDjLgnb7e5W3TU6_sFAMwyU5Ram2rpE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 border border-primary-500/50 text-primary-500 font-medium text-center rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, "#contact")}
                className="px-5 py-3 bg-primary-500 hover:bg-primary-600 text-dark-950 font-medium text-center rounded-full transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
