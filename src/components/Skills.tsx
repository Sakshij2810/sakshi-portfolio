import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { skills } from "../data/resume";
import { techLogos, techColors } from "./TechLogos";

// Primary tech stack for infinite scroller
const primaryTech = [
  "TypeScript",
  "React",
  "Node.js",
  "Redux",
  "MongoDB",
  "Socket.IO",
  "PostgreSQL",
  "Python",
  "Express",
  "Tailwind",
  "Git",
  "Docker",
];

// Infinite Scroll Component
function InfiniteScroller() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900/90 to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Track */}
      <motion.div 
        className="flex gap-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Double the items for seamless loop */}
        {[...primaryTech, ...primaryTech, ...primaryTech].map((tech, index) => (
          <motion.div
            key={`${tech}-${index}`}
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div 
              className="relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-dark-800/60 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 min-w-[120px]"
              style={{
                boxShadow: `0 0 0 0 ${techColors[tech] || '#ed7424'}00`,
              }}
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${techColors[tech] || '#ed7424'}20 0%, transparent 70%)`,
                }}
              />
              
              {/* Logo */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                {techLogos[tech] || (
                  <span className="text-2xl font-bold text-dark-300">{tech.charAt(0)}</span>
                )}
              </div>
              
              {/* Name */}
              <span className="relative z-10 text-sm text-dark-300 group-hover:text-cream-100 transition-colors font-medium whitespace-nowrap">
                {tech}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Animated Skill Tag
function SkillTag({ skill, index, categoryIndex }: { 
  skill: string; 
  index: number;
  categoryIndex: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.03,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(237, 116, 36, 0.2)",
        borderColor: "rgba(237, 116, 36, 0.5)",
      }}
      viewport={{ once: true }}
      className="px-3 py-1.5 text-sm rounded-lg bg-dark-800/80 text-dark-200 border border-dark-700/50 hover:text-primary-400 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const skillCategories = [
    {
      title: "Programming",
      skills: skills.programming,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Development",
      skills: skills.webDevelopment,
      color: "from-primary-500 to-orange-500",
    },
    {
      title: "Tools & DevOps",
      skills: skills.toolsAndDevOps,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-dark-900/30"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ x: backgroundX, rotate: backgroundRotate }}
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-5"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            fill="currentColor"
            className="text-primary-500"
            points="100,10 40,198 190,78 10,78 160,198"
          />
        </svg>
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-500 font-mono text-sm uppercase tracking-widest mb-4"
          >
            Technical Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-cream-100"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            A comprehensive toolkit built through hands-on experience in enterprise development,
            from frontend frameworks to backend systems and DevOps tools.
          </motion.p>
        </motion.div>

        {/* Primary Tech Stack - Infinite Scroller */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mx-auto max-w-md mb-6"
            />
            <h3 className="text-xl font-semibold text-cream-100 mb-2">
              Primary Stack
            </h3>
            <p className="text-sm text-dark-400">
              Technologies I work with daily
            </p>
          </div>
          
          {/* Infinite Scroller */}
          <InfiniteScroller />
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    categoryIndex === 0 ? "#3B82F6" : 
                    categoryIndex === 1 ? "#ED7424" : "#10B981"
                  }20, transparent)`
                }}
              />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-dark-900/80 border border-dark-800/50 hover:border-dark-700/80 transition-all duration-500">
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: categoryIndex * 0.3,
                    }}
                  />
                  <h3 className="text-xl font-semibold text-cream-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      index={skillIndex}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>

                {/* Animated Corner Accent */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10 bg-gradient-to-tl ${category.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.15 + 0.3 
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary-500/50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
