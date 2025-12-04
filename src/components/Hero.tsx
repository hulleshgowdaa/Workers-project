import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, CheckCircle, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-teal/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-tealLight text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              Built in 24 hours
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Bringing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tealLight to-blue-500">
                Transparency
              </span> <br />
              & Fairness to Gig Workers
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              GigGuard empowers workers with AI-driven insights, verifying earnings and generating dispute evidence instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold rounded-xl shadow-lg shadow-brand-orange/25 transition-all flex items-center gap-2 group">
                View Live Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-brand-tealLight text-slate-300 hover:text-brand-tealLight font-semibold rounded-xl transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Pitch Deck
              </button>
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-panel p-6 rounded-2xl shadow-2xl border-slate-700/50 transform lg:rotate-y-12 lg:rotate-x-6 perspective-1000">
              {/* Mock Header */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700" />
                  <div>
                    <div className="h-2.5 w-24 bg-slate-600 rounded mb-1.5" />
                    <div className="h-2 w-16 bg-slate-700 rounded" />
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Active
                </div>
              </div>

              {/* Mock Content */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <Gauge className="w-4 h-4" /> Fairness Score
                  </div>
                  <div className="text-3xl font-bold text-brand-tealLight">92<span className="text-sm text-slate-500 font-normal">/100</span></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <CheckCircle className="w-4 h-4" /> Earnings
                  </div>
                  <div className="text-3xl font-bold text-white">$1,240</div>
                </div>
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-700/50 flex items-center justify-center text-xs text-slate-500">IMG</div>
                      <div className="h-2 w-20 bg-slate-600 rounded" />
                    </div>
                    <div className="h-2 w-12 bg-slate-600 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements behind */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
