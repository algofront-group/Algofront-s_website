import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function ProcessSection() {
  const { ref, inView } = useScrollReveal(0.08);

  return (
    <section id="process" className="section-pad bg-cream-50" ref={ref}>
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <SectionTag>How We Work</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-4">
            No surprises. No delays.<br />
            <span className="text-ink-400">Just a clear path forward.</span>
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed">
            Our 6-step process keeps you informed at every stage, from first call to final launch.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative card-outline p-7 overflow-hidden group hover:shadow-md transition-shadow duration-300"
            >
              {/* Step number background */}
              <div className="absolute -top-4 -right-4 font-display font-black text-8xl text-ink-900/5 select-none pointer-events-none">
                {step.num}
              </div>

              <div className="relative z-10">
                {/* Number badge */}
                <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center mb-4">
                  <span className="font-mono text-xs font-bold text-lime-accent">{step.num}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-ink-900 mb-2">{step.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{step.desc}</p>

                {/* Duration badge */}
                <span className="text-xs font-mono text-ink-400 border border-ink-900/10 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>

              {/* Connector arrow for non-last items on desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-lime-accent rounded-full flex items-center justify-center text-xs text-ink-900 font-bold">
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
