import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function ProjectsSection() {
  const { ref, inView } = useScrollReveal(0.1);
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="section-pad bg-cream-100" ref={ref}>
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <SectionTag>Case Studies</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-4">
            Real problems.<br />
            <span className="text-ink-400">Real results.</span>
          </h2>
          <p className="text-ink-500 text-lg">
            A look at how we've helped businesses like yours.
          </p>
        </motion.div>

        {/* Tab selectors */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-ink-900 text-cream-50'
                  : 'bg-white border border-ink-900/10 text-ink-600 hover:border-ink-900/30'
              }`}
            >
              {p.client} — {p.industry}
            </button>
          ))}
        </div>

        {/* Active project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-ink-900/10"
          >
            {/* Left visual panel */}
            <div
              className="lg:col-span-2 p-10 flex flex-col justify-between min-h-64"
              style={{ background: projects[active].color }}
            >
              <div>
                <span className="text-xs font-mono font-medium tracking-widest uppercase text-ink-900/60 mb-3 block">
                  {projects[active].tag}
                </span>
                <h3 className="font-display text-4xl font-black text-ink-900 mb-1">
                  {projects[active].client}
                </h3>
                <p className="text-ink-700 text-sm">{projects[active].industry}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-ink-900 flex items-center justify-center">
                <span className="text-cream-50 text-lg">✦</span>
              </div>
            </div>

            {/* Right content panel */}
            <div className="lg:col-span-3 bg-white p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'The Problem', text: projects[active].problem, icon: '🔍' },
                { label: 'Our Solution', text: projects[active].solution, icon: '🔧' },
                { label: 'The Impact', text: projects[active].impact, icon: '📈' },
              ].map((col) => (
                <div key={col.label}>
                  <div className="text-xl mb-2">{col.icon}</div>
                  <h4 className="text-xs font-mono font-medium tracking-widest uppercase text-ink-400 mb-2">
                    {col.label}
                  </h4>
                  <p className="text-sm text-ink-700 leading-relaxed">{col.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Placeholder notice */}
        <p className="text-xs text-ink-400 mt-4 text-center font-mono">
          * Content is placeholder for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
