import React from 'react';
import { motion } from 'framer-motion';

const footerLinks = {
  Services: ['MVP Development', 'SaaS Development', 'Custom Software', 'Automation', 'APIs'],
  Company: ['About Us', 'Our Work', 'Process', 'Blog', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100 pt-20 pb-8">
      <div className="container-pad">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-lime-accent rounded-lg flex items-center justify-center">
                <span className="text-ink-900 font-mono font-bold text-sm">B</span>
              </div>
              <span className="font-display font-bold text-xl text-cream-50">algofront</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              We help founders and businesses transform ideas into software that automates work, improves operations, and scales.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['𝕏', 'in', '⬛'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-xs text-white/50 hover:border-lime-accent hover:text-lime-accent transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-mono font-medium tracking-widest uppercase text-white/30 mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/60 hover:text-cream-50 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} algofront. All rights reserved.</span>
          <span className="font-mono">hello@algofront.com · +91 98765 43210</span>
        </div>
      </div>
    </footer>
  );
}
