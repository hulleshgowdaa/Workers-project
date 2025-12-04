import React from 'react';
import { PILLARS } from '../constants';
import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GigGuard in 3 Pillars</h2>
          <p className="text-slate-400">Restoring power balance through technology.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              whileHover={{ scale: 1.03, borderColor: 'rgba(45, 212, 191, 0.3)' }}
              className="glass-card p-8 rounded-2xl group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-brand-teal/10 transition-all">
                <pillar.icon className="w-7 h-7 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
