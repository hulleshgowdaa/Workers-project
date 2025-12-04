import React from 'react';
import { TEAM } from '../constants';

export default function Team() {
  return (
    <section id="team" className="py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Judges Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why this stands out</h3>
            <ul className="space-y-4">
              {[
                'Addresses a massive, global labor market gap.',
                'Uses AI for empowerment, not replacement.',
                'Scalable architecture ready for multi-platform integration.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-teal" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">The Team</h3>
            <div className="flex flex-wrap gap-6">
              {TEAM.map((member, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-800/50 p-3 pr-6 rounded-full border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {member.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{member.name}</div>
                    <div className="text-xs text-brand-teal">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
