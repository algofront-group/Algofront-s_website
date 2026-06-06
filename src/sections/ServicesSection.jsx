import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function ServicesSection() {
  const { ref, inView } = useScrollReveal(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="section-pad bg-cream-50" ref={ref}>
      <div className="container-pad">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <SectionTag>What We Build</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-4">
            Every service built<br />
            <span className="text-ink-400">for business outcomes.</span>
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed">
            Not just code — solutions designed to generate revenue, save time, and help you scale.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(service.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative group rounded-2xl shadow-lg bg-white border border-cream-200 p-8 flex flex-col min-h-[340px] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated hover accent background */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === service.id ? 0.12 : 0 }}
                style={{ background: service.accent }}
                transition={{ duration: 0.2 }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon in accent circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl mb-5 shadow-sm"
                  style={{ background: service.accent + '22' }}>
                  <span className="text-3xl md:text-4xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-ink-900 mb-2 group-hover:text-ink-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-ink-600 leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-full bg-ink-900/10 text-ink-700 border border-cream-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow CTA */}
                <motion.div
                  className="mt-auto text-ink-500 text-sm font-semibold flex items-center gap-1 group-hover:text-ink-900 transition-colors"
                  animate={{ x: hovered === service.id ? 6 : 0 }}
                >
                  <span>Learn more</span>
                  <span aria-hidden="true">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
