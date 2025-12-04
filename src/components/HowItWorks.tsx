import React from 'react';
import { STEPS } from '../constants';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-800" />
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Circle Indicator */}
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-400 font-bold flex items-center justify-center mb-6 z-10 group-hover:border-brand-teal group-hover:text-brand-teal transition-colors">
                  {step.id}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
