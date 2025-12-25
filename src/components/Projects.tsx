import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { projects, projectCategories, type Project } from "../data/resume";
import {
  ExternalLink,
  Github,
  X,
  Star,
  Users,
  ChevronRight,
  Globe,
  Building2,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const categoryIcons = {
  globe: Globe,
  building: Building2,
  code: Code2,
};

// Project Card Component
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <div className="relative h-full rounded-2xl bg-dark-900/80 border border-dark-800/50 overflow-hidden hover:border-primary-500/40 transition-all duration-500">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />

          {/* Hover Overlay with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 rounded-full bg-primary-500 text-dark-950 hover:bg-primary-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 rounded-full bg-dark-800 text-cream-100 hover:bg-dark-700 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-cream-100 group-hover:text-primary-400 transition-colors mb-2 flex items-center gap-2">
            {project.title}
            <ArrowUpRight
              size={18}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </h3>

          {/* Description */}
          <p className="text-sm text-dark-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2.5 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex items-center gap-4 text-xs text-dark-400 pt-4 border-t border-dark-800/50">
              {project.metrics.users && (
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-primary-500" />
                  <span>{project.metrics.users}</span>
                </div>
              )}
              {project.metrics.rating && (
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span>{project.metrics.rating}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Read More Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2.5 bg-primary-500 hover:bg-primary-600 text-dark-950 font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2">
            Read More
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Project Modal Component
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-900 border border-dark-800/50 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-800/80 hover:bg-dark-700 text-cream-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 -mt-16 relative z-10">
          {/* Title & Links */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-cream-100 mb-2">
                {project.title}
              </h2>
              {project.company && (
                <p className="text-primary-400 font-medium">
                  {project.company}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-dark-950 font-medium rounded-lg transition-colors"
                >
                  <Globe size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-cream-100 font-medium rounded-lg transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex gap-6 mb-8">
              {project.metrics.users && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <Users size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-cream-100">
                      {project.metrics.users}
                    </p>
                    <p className="text-xs text-dark-400">Users</p>
                  </div>
                </div>
              )}
              {project.metrics.rating && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <Star
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-cream-100">
                      {project.metrics.rating}
                    </p>
                    <p className="text-xs text-dark-400">Rating</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-cream-100 mb-3">
              About Project
            </h3>
            <div className="text-dark-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-cream-100 mb-4">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-800/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-cream-100 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 text-sm rounded-lg bg-dark-800 text-dark-200 border border-dark-700/50 font-mono"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary-500 font-mono text-sm uppercase tracking-widest mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-cream-100"
          >
            Projects & <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            A showcase of enterprise applications, internal tools, and personal
            projects built with modern technologies and best practices.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary-500 text-dark-950"
                : "bg-dark-800/50 text-dark-300 hover:bg-dark-700 hover:text-cream-100"
            }`}
          >
            All Projects
          </button>
          {projectCategories.map((category) => {
            const Icon =
              categoryIcons[category.icon as keyof typeof categoryIcons];
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary-500 text-dark-950"
                    : "bg-dark-800/50 text-dark-300 hover:bg-dark-700 hover:text-cream-100"
                }`}
              >
                <Icon size={16} />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Sakshij2810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark-800/50 hover:bg-dark-700 border border-dark-700/50 hover:border-primary-500/50 rounded-full text-cream-100 font-medium transition-all duration-300 group"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
