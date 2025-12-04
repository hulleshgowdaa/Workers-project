import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { BarChart3, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

const TABS = [
  { id: 'dashboard', label: 'Worker Dashboard', icon: BarChart3 },
  { id: 'fairness', label: 'Fairness AI', icon: CheckCircle },
  { id: 'dispute', label: 'Dispute Report', icon: FileText },
];

export default function DemoPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section id="demo" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See GigGuard in Action</h2>
          <p className="text-slate-400">Interactive preview of the worker interface.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all",
                  activeTab === tab.id 
                    ? "bg-brand-teal text-slate-900 shadow-lg shadow-brand-teal/20" 
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mock Window */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
            {/* Window Header */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="ml-4 text-xs text-slate-500 font-mono">app.gigguard.com/dashboard</div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 bg-slate-950">
              <AnimatePresence mode="wait">
                {activeTab === 'dashboard' && (
                  <motion.div 
                    key="dashboard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-sm mb-1">Total Earnings</div>
                        <div className="text-2xl font-bold text-white">$2,450.00</div>
                        <div className="text-xs text-green-400 mt-2">+12% vs last week</div>
                      </div>
                      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-sm mb-1">Hours Online</div>
                        <div className="text-2xl font-bold text-white">34.5 hrs</div>
                      </div>
                      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-sm mb-1">Fairness Score</div>
                        <div className="text-2xl font-bold text-brand-teal">88/100</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-4">Recent Trips</h4>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-700">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                                <span className="text-xs font-mono text-slate-500">ID#{1000+i}</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">Downtown Delivery</div>
                                <div className="text-xs text-slate-500">2:30 PM • 4.2 miles</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-white">$14.50</div>
                              <div className="text-xs text-green-400">Verified</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'fairness' && (
                  <motion.div 
                    key="fairness"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid md:grid-cols-2 gap-8 items-center h-full"
                  >
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">Algorithm Analysis</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-300">Wage Consistency</span>
                            <span className="text-brand-teal">92%</span>
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-teal w-[92%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-300">Route Efficiency</span>
                            <span className="text-yellow-400">78%</span>
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 w-[78%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-300">Transparency</span>
                            <span className="text-red-400">45%</span>
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-400 w-[45%]" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-red-400">Anomaly Detected</h4>
                            <p className="text-xs text-red-300/80 mt-1">
                              Your last 3 trips were paid 15% below the promised rate based on distance/time calculation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                       {/* CSS Gauge */}
                       <div className="relative w-48 h-48 rounded-full border-[12px] border-slate-800 flex items-center justify-center">
                          <div className="absolute inset-0 border-[12px] border-brand-teal rounded-full border-r-transparent border-b-transparent rotate-45" />
                          <div className="text-center">
                            <div className="text-4xl font-bold text-white">B+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Rating</div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'dispute' && (
                  <motion.div 
                    key="dispute"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                      <h3 className="text-lg font-bold text-white mb-4">Generate Dispute Letter</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
                            Issue Type: <span className="text-white">Unpaid Wait Time</span>
                          </div>
                          <div className="p-3 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
                            Date: <span className="text-white">Oct 24, 2025</span>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-950 border border-slate-800 rounded font-mono text-xs text-slate-400 leading-relaxed">
                          To Whom It May Concern,<br/><br/>
                          I am writing to formally dispute the payment for Trip ID #8823. According to the platform's terms of service regarding wait times exceeding 5 minutes, I am owed an additional $4.50.<br/><br/>
                          Attached is the GPS log verifying my arrival time and wait duration.<br/><br/>
                          Sincerely,<br/>
                          [Worker Name]
                        </div>
                        <div className="flex justify-end gap-3">
                          <button className="px-4 py-2 text-sm text-slate-400 hover:text-white">Edit</button>
                          <button className="px-4 py-2 bg-brand-teal text-slate-900 font-bold rounded hover:bg-brand-tealLight">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
