import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { certifications, education } from "../data/resume";
import { Award, GraduationCap, Calendar } from "lucide-react";

export default function Certifications() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-cream-100">
                Education
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900/60 border border-dark-800/50">
              <h3 className="text-xl font-semibold text-cream-100 mb-2">
                {education.degree}
              </h3>
              <p className="text-primary-400 mb-2">{education.institution}</p>
              <p className="text-dark-400 text-sm mb-4">{education.location}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-dark-400">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                  CGPA: {education.cgpa}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <Award size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold text-cream-100">
                Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-dark-900/60 border border-dark-800/50 hover:border-dark-700 card-hover group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-cream-100 group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-dark-400 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-dark-800/80 text-dark-400 flex-shrink-0">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

