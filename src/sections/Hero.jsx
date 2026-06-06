import React from 'react';
import { motion } from 'framer-motion';
import { tickerItems } from '../data/siteData';

// ─── Animation variants ────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const allTicker = [...tickerItems, ...tickerItems];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-cream-50">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Lime blob */}
      <div
        className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,74,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Amber blob */}
      <div
        className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Main hero content */}
      <div className="container-pad flex-1 flex flex-col justify-center pt-32 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Availability pill */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="tag-pill">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects • Transform your idea into reality
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-ink-900 leading-[0.95] tracking-tight mb-8"
          >
            Building software
            <br />
            that helps{' '}
            <span className="relative inline-block">
              businesses
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8 Q100 2 200 8 Q300 14 398 6"
                  stroke="#C8F04A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                />
              </svg>
            </span>
            <br />
            grow faster.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed mb-10 font-body"
          >
            We transform your idea into software that automates work, eliminates bottlenecks, and helps your business scale without you needing a technical co-founder.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-lime text-base py-4 px-8">
              Book a Free Consultation
              <span>→</span>
            </a>
            <a href="#projects" className="btn-outline text-base py-4 px-8">
              View Our Work
            </a>
          </motion.div>

          {/* Trust micro-signals */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 mt-10 text-sm text-ink-500"
          >
            {[
              '✓ 50+ projects delivered',
              '✓ No-lock-in contracts',
              '✓ MVP in 6–10 weeks',
            ].map((item) => (
              <span key={item} className="font-body">{item}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker strip */}
      <div className="border-y border-ink-900/10 py-4 bg-ink-900 overflow-hidden">
        <div className="ticker-inner gap-12 items-center">
          {allTicker.map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-white/60 whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-accent shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
