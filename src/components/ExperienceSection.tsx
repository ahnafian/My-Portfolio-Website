import React from 'react';
import { experienceData } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Field Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Work & Industrial Experience
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Hands-on plant engineering exposure across heavy steel melting operations and high-voltage power cable manufacturing.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              id={`exp-card-${exp.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-900 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-500 font-mono-tech">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col items-end justify-between md:justify-center gap-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono-tech bg-blue-50 text-blue-900 border border-blue-200/60">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 font-mono-tech">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed my-5">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono-tech">
                  Key Technical Tasks & Contributions:
                </h4>
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1 font-mono-tech">
                  Systems Handled:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Industrial Competency Takeaways banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading">
              Ready for Industrial & Site Operations
            </h4>
            <p className="text-xs sm:text-sm text-blue-100">
              Experienced with plant safety protocols, single-line electrical schematics, and equipment maintenance.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm shrink-0"
          >
            Discuss Opportunities
          </a>
        </div>

      </div>
    </section>
  );
};
