import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowUp,
  Heart,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
                AT
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Electrical and Electronic Engineering graduate from International Islamic University Chittagong (IIUC), actively pursuing an Engineering Associate career in power systems, solar PV feasibility, and industrial automation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-tech">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home & Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Education</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Certifications</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Industrial Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Research & PLC Projects</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Engineering Services</a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Resume */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-tech">
              Recruiter & Academic Inquiries
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available immediately for Engineering Associate roles, graduate interviews, and academic research collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                id="footer-cv-btn"
                onClick={onOpenResume}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-900 hover:bg-blue-800 text-white transition-colors cursor-pointer text-center"
              >
                View Curriculum Vitae
              </button>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors text-center border border-slate-800"
              >
                Contact Ahnaf
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono-tech">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. • Chattogram, Bangladesh
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
