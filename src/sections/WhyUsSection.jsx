import React from 'react';
import { motion } from 'framer-motion';
import { whyUs } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function WhyUsSection() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section className="section-pad bg-cream-100 overflow-hidden relative" ref={ref}>
      {/* Decorative blob */}
      <div
        className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,240,74,0.15) 0%, transparent 70%)' }}
      />

      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTag>Why algofront</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-6">
              Not just an agency.
              <br />
              <span className="text-ink-400">Your tech partner.</span>
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-8">
              We don't disappear after launch. We think long-term, move fast, and communicate like partners — not vendors.
            </p>
            <a href="#contact" className="btn-primary">
              Start a conversation →
            </a>
          </motion.div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="card-glass p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-ink-900 mb-1.5 text-base">{item.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
