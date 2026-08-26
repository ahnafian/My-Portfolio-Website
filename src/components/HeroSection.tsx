import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  FileDown,
  Mail,
  Zap,
  Award,
  Cpu,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50"
    >
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-900 tracking-wide uppercase font-mono-tech">
                Actively Seeking Engineering Associate Opportunities
              </span>
            </div>

            {/* Bold Headline inspired by reference image */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                Hy! I Am
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-blue-950 tracking-tight leading-[1.08]">
                {personalInfo.name}
              </h1>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-snug">
              Electrical & Electronics Engineering Graduate{' '}
              <span className="text-blue-700 font-semibold block sm:inline">
                | Aspiring Engineering Associate
              </span>
            </p>

            {/* Credibility description */}
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed max-w-2xl">
              Recent EEE graduate from <strong>IIUC</strong> with hands-on research and practical training across{' '}
              <span className="text-slate-900 font-semibold">Power Systems</span>,{' '}
              <span className="text-slate-900 font-semibold">Rooftop Solar PV (PVsyst)</span>, and{' '}
              <span className="text-slate-900 font-semibold">Industrial Automation (Siemens PLC/SCADA)</span>. Author of an undergraduate thesis on solar feasibility and contributor to 3 ongoing research papers.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects & Research</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-300 hover:border-slate-400 shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-700" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md shadow-blue-900/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-300" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Highlight Mini Feature Pill (like reference style) */}
            <div className="pt-3 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-600">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono-tech">
                  Specialized Technical Focus
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Power Systems, Solar PV Feasibility & Siemens Industrial Automation
                </p>
              </div>
            </div>

            {/* Location & Institution mini badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Chattogram, Bangladesh
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                IIUC (CGPA 3.10 / 4.00)
              </span>
            </div>

          </div>

          {/* Right Column: Dynamic Geometric Visual with Headshot and Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Bold Geometric Polygonal Backdrop (Inspired by the Reference Composition) */}
              <div className="absolute inset-0 -m-4 sm:-m-6 pointer-events-none">
                {/* Red/Coral geometric slash */}
                <div className="absolute top-4 right-2 w-4/5 h-4/5 bg-gradient-to-tr from-red-600 to-rose-500 rounded-3xl transform rotate-6 shadow-xl opacity-95" />
                {/* Navy / Dark Indigo geometric slash */}
                <div className="absolute top-10 left-0 w-4/5 h-4/5 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 rounded-3xl transform -rotate-6 shadow-2xl" />
              </div>

              {/* Headshot Card */}
              <div className="relative z-10 mx-auto w-72 sm:w-80 md:w-96 rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-white/90">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top aspect-[4/5] hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4 text-white">
                  <p className="text-sm font-bold tracking-tight">{personalInfo.name}</p>
                  <p className="text-xs text-slate-300 font-mono-tech">BSc in EEE • Class of 2026</p>
                </div>
              </div>

              {/* Floating Badge 1: Research Publications (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-slate-900 font-heading">
                    4 Research
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                    1 Thesis • 3 Papers
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Academic Credential (Left Middle) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-blue-700" />
                </div>
                <div className="text-left">
                  <div className="text-base font-black text-blue-950 font-heading">
                    3.10 CGPA
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 whitespace-nowrap">
                    BSc in EEE, IIUC
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Automation Certification (Bottom Right / Edge) */}
              <div className="hidden sm:flex absolute bottom-8 -right-4 z-20 bg-slate-900/95 backdrop-blur-md text-white p-2.5 px-3 rounded-xl shadow-lg border border-slate-800 items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold">PLC / SCADA Certified</span>
              </div>

            </div>

          </div>

        </div>

        {/* Corporate / Academic Affiliation Ticker Bar (Bottom of Hero) */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-700 mb-6 font-mono-tech">
            Academic & Industrial Affiliations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            
            <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs flex items-center justify-center gap-2 hover:border-blue-300 transition-colors">
              <GraduationCap className="w-4 h-4 text-blue-900" />
              <span className="text-xs font-bold text-slate-800">IIUC Kumira</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs flex items-center justify-center gap-2 hover:border-blue-300 transition-colors">
              <Cpu className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold text-slate-800">Abul Khair Steel</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs flex items-center justify-center gap-2 hover:border-blue-300 transition-colors">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-slate-800">Eastern Cables</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs flex items-center justify-center gap-2 hover:border-blue-300 transition-colors">
              <Award className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-slate-800">Automation BD</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs flex items-center justify-center gap-2 hover:border-blue-300 transition-colors col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800">IEEE Member</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
