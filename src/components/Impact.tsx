import React from 'react';

export default function Impact() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why This Matters</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-full min-h-[3rem] bg-brand-teal rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">For Workers</h3>
                  <p className="text-slate-400">Financial stability and a shield against arbitrary deactivations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-full min-h-[3rem] bg-blue-500 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">For Platforms</h3>
                  <p className="text-slate-400">Reduced churn and improved trust through transparent practices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-full min-h-[3rem] bg-purple-500 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">For Policymakers</h3>
                  <p className="text-slate-400">Real-world data to inform fair labor regulations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Quote */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl blur-2xl opacity-20" />
            <div className="relative bg-slate-900 border border-slate-700 p-10 rounded-2xl">
              <p className="text-2xl md:text-4xl font-bold leading-tight text-white">
                "We don’t break platform algorithms. We build <span className="text-brand-teal">transparency</span> around them."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
