import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experiences } from "../data/resume";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-primary-500/5 to-transparent rounded-r-full" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-mono text-sm uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-cream-100 mt-4">
            Work Experience
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Building impactful solutions across startups and enterprises, from
            e-commerce platforms to enterprise ERP systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-dark-700 to-transparent hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 ${
                    index % 2 === 0
                      ? "right-0 translate-x-1/2 md:-right-2"
                      : "left-0 -translate-x-1/2 md:-left-2"
                  }`}
                />

                {/* Card */}
                <div className="p-6 lg:p-8 rounded-2xl bg-dark-900/60 border border-dark-800/50 hover:border-dark-700 card-hover group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-cream-100 group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-dark-400">
                        <Briefcase size={16} className="text-primary-500" />
                        <span className="text-primary-400">{exp.company}</span>
                        <span className="text-dark-600">•</span>
                        <span className="text-sm">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-400 bg-dark-800/50 px-3 py-1.5 rounded-full">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.slice(0, 4).map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-dark-300 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                    {exp.highlights.length > 4 && (
                      <li className="text-primary-500 text-sm pl-4">
                        +{exp.highlights.length - 4} more achievements
                      </li>
                    )}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-dark-800/80 text-dark-300 border border-dark-700/50 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
