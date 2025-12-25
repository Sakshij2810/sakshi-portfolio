import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/resume";

// Animated Text Component
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-2">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orb */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary Gradient Orb */}
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-dark-700/50 mb-8 backdrop-blur-sm"
          >
            <motion.span 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-dark-300">Available for new opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream-100 inline-block"
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="gradient-text inline-block relative"
            >
              {personalInfo.name.split(' ')[0]}
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-dark-300 mb-4 flex items-center justify-center gap-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.span>
              <motion.span
                className="inline-block w-1 h-8 bg-primary-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed">
              <AnimatedText text={personalInfo.summary} delay={0.6} />
            </p>
          </motion.div>

          {/* Stats with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { value: "30+", label: "Enterprise Modules" },
              { value: "100+", label: "Components Built" },
              { value: "1000+", label: "Conversations Handled" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl lg:text-4xl font-display font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1 + index * 0.15,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-dark-400 mt-1 group-hover:text-dark-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-dark-950 font-semibold rounded-full transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-dark-800/80 hover:bg-dark-700 text-cream-100 font-semibold rounded-full border border-dark-700 hover:border-dark-600 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-dark-800/50 hover:bg-dark-700 border border-dark-700/50 hover:border-primary-500/50 text-dark-300 hover:text-primary-500 transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors cursor-pointer group"
      >
        <motion.span 
          className="text-xs uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="group-hover:text-primary-500 transition-colors" />
        </motion.div>
      </motion.a>

      {/* Animated Border Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
    </section>
  );
}
