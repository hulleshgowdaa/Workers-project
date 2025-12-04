import React from 'react';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-brand-teal" />
          <span className="text-xl font-bold text-white">GigGuard</span>
        </div>

        <div className="text-slate-500 text-sm">
          © 2025 GigGuard. Built for the Global Hackathon.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>

      </div>
    </footer>
  );
}
