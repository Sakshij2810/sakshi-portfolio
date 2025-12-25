import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo, navLinks } from "../data/resume";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-dark-800/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-dark-950 font-display font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                S
              </div>
              <span className="font-display text-lg font-semibold text-cream-100">
                Sakshi Jadhav
              </span>
            </a>
            <p className="text-sm text-dark-500 flex items-center gap-1">
              © {new Date().getFullYear()} Made with{" "}
              <Heart size={14} className="text-primary-500 fill-primary-500" /> in India
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-dark-400 hover:text-primary-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg bg-dark-800/50 hover:bg-dark-700 text-dark-400 hover:text-primary-500 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

