import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className={`border-b border-ink-900/10 last:border-0 transition-colors duration-200 ${
        isOpen ? 'bg-lime-accent/5' : ''
      }`}
    >
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-6 px-0 gap-4 group"
      >
        <span className="font-body font-medium text-ink-900 text-base md:text-lg leading-snug group-hover:text-ink-700 transition-colors">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-ink-400 shrink-0 font-light leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-ink-500 text-base leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const { ref, inView } = useScrollReveal(0.1);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad bg-cream-50" ref={ref}>
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>FAQ</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight mb-5">
              Questions
              <br />
              founders ask.
            </h2>
            <p className="text-ink-500 text-base leading-relaxed mb-8">
              Still have something on your mind? Book a free call and we'll answer everything in 30 minutes.
            </p>
            <a href="#contact" className="btn-primary text-sm">
              Book a free call →
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
