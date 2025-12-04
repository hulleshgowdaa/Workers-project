import React from 'react';
import { TECH_STACK } from '../constants';

export default function TechStack() {
  return (
    <section className="py-12 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {TECH_STACK.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
              <tech.icon className="w-5 h-5" />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
          <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-400 font-mono">
            Hackathon-ready
          </div>
        </div>
      </div>
    </section>
  );
}
