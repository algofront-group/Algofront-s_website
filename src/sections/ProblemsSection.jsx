import React from 'react';
import { motion } from 'framer-motion';
import { problems } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function ProblemsSection() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section className="section-pad bg-ink-900 text-cream-50 overflow-hidden relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,240,74,0.08) 0%, transparent 70%)' }}
      />

      <div className="container-pad" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <SectionTag>Pain Points</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Sound familiar?
            <br />
            <span className="text-white/40">We solve this daily.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 border-b border-white/10 py-7 hover:border-lime-accent/40 transition-all duration-300 cursor-default"
            >
              {/* Problem */}
              <div className="md:w-1/2 flex items-start gap-4">
                <span className="text-red-400/70 text-lg mt-0.5 shrink-0">✗</span>
                <span className="text-white/60 font-body text-lg group-hover:text-white/80 transition-colors duration-300">
                  {item.problem}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex md:w-24 justify-center">
                <motion.span
                  className="text-lime-accent opacity-30 group-hover:opacity-100 text-xl"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>

              {/* Solution */}
              <div className="md:w-1/2 flex items-start gap-4">
                <span className="text-lime-accent text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-cream-50 font-body font-medium text-lg">
                  {item.solution}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <a href="#contact" className="btn-lime">
            Let's solve yours →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
