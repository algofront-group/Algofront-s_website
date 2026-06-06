import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

export default function TrustSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="bg-cream-100 pt-8 pb-20" ref={ref}>
      <div className="container-pad pt-4 pb-0">

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTag>Track Record</SectionTag>
        </motion.div>

        {/* Founder trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              quote: '"They shipped our MVP in 7 weeks. We raised our seed round 2 months later."',
              name: 'Rahul M.',
              role: 'Founder, PropNest',
            },
            {
              quote: '"Finally a tech team that thinks like a business. Not just coders."',
              name: 'Priya S.',
              role: 'CEO, FitFolio',
            },
            {
              quote: '"Cut our ops admin time by 18 hours a week. ROI in the first month."',
              name: 'Arjun K.',
              role: 'Director, LogiTrack',
            },
          ].map((testimonial, i) => (
            <div key={i} className="card-outline p-6">
              <p className="text-ink-700 font-body text-sm leading-relaxed mb-4 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ink-200 flex items-center justify-center text-xs font-bold text-ink-700">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">{testimonial.name}</div>
                  <div className="text-xs text-ink-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
