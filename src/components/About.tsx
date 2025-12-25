import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Code2, Zap, Users, Rocket } from "lucide-react";

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed with code splitting, memoization, and efficient state management.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Thriving in team environments with strong communication and agile workflows.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Building cutting-edge solutions with real-time integrations and modern APIs.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 font-mono text-sm uppercase tracking-widest">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-cream-100 mt-4 mb-6">
                Building digital
                <br />
                <span className="gradient-text">experiences that matter</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-dark-300 leading-relaxed"
            >
              <p>
                I'm a passionate Full Stack Developer with a focus on building robust, 
                user-centric web applications. My journey in tech has equipped me with 
                deep expertise in the <strong className="text-cream-100">React ecosystem</strong>, 
                backend development with <strong className="text-cream-100">Node.js</strong>, 
                and real-time systems using <strong className="text-cream-100">Socket.IO</strong>.
              </p>
              <p>
                At Addcomposites, I've had the privilege of developing enterprise-grade 
                solutions that serve multi-tenant businesses, creating everything from 
                CRM systems to real-time WhatsApp integrations handling 1000+ conversations.
              </p>
              <p>
                I believe in writing code that's not just functional, but maintainable, 
                scalable, and performant. Every component I build is designed with 
                reusability in mind, and every feature with the end-user experience at heart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors group"
              >
                View my experience
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/30 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-cream-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

