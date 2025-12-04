import React from 'react';
import { PAIN_POINTS } from '../constants';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Gig Worker Crisis</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Millions of workers operate in a black box, facing algorithmic management without the tools to defend their rights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PAIN_POINTS.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 border border-slate-700 p-6 rounded-xl hover:border-slate-600 transition-colors"
            >
              <div className={`mb-4 p-3 rounded-lg bg-slate-900/50 w-fit ${point.color}`}>
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl border border-slate-700 bg-slate-800/20 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-50" />
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-serif italic text-slate-200 mb-6">
                "The gig economy exists in a legal grey zone where algorithms act as managers, but without the accountability of human HR."
              </p>
              <footer className="text-brand-teal font-semibold tracking-wide uppercase text-sm">
                — The Reality of 2025
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
