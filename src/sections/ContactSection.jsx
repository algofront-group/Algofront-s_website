import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTag from '../components/SectionTag';

const budgetOptions = [
  'Under ₹2L', '₹2L – ₹5L', '₹5L – ₹15L', '₹15L+', 'Let\'s discuss',
];

export default function ContactSection() {
  const { ref, inView } = useScrollReveal(0.1);
  const [form, setForm] = useState({
    name: '', email: '', company: '', description: '', budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual Google Form action URL
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-ink-900 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,240,74,0.08) 0%, transparent 70%)' }}
      />

      <div className="container-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionTag>Get in Touch</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-5">
              Let's build something
              <br />
              <span className="text-lime-accent">worth building.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Tell us about your project. We'll get back within 24 hours with a plan, not a pitch.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Email', value: 'hello@buildkraft.in' },
                { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
                { icon: '📍', label: 'Location', value: 'Remote-first · India' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-base">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-mono uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-white/80 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Got it!</h3>
                <p className="text-ink-500">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-6">Start a Project</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-ink-900/15 bg-cream-50 text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-lime-accent/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-ink-900/15 bg-cream-50 text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-lime-accent/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5">Company / Startup</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-ink-900/15 bg-cream-50 text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-lime-accent/30 transition-all"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5">Project Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Tell us what you're building and the problem it solves..."
                      className="w-full px-4 py-3 rounded-xl border border-ink-900/15 bg-cream-50 text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-lime-accent/30 transition-all resize-none"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, budget: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                            form.budget === opt
                              ? 'bg-ink-900 text-cream-50 border-ink-900'
                              : 'border-ink-900/15 text-ink-600 hover:border-ink-900/40'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-lime w-full justify-center mt-2 py-4"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-ink-400 text-center font-mono">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}