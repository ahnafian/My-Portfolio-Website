import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import {
  GraduationCap,
  Compass,
  Globe2,
  CheckCircle,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            About Ahnaf Tazwar
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            A technically grounded, research-driven early-career engineer passionate about power systems, clean energy transformation, and industrial automation.
          </p>
        </div>

        {/* Top Grid: Bio Narrative & Career Orientation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                AT
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Engineering Background & Philosophy
                </h3>
                <p className="text-xs text-slate-500 font-mono-tech">
                  International Islamic University Chittagong (IIUC)
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Analytical Rigor</span>
                  <span className="text-xs text-slate-600">Simulations with PVsyst, MATLAB & Proteus.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Hands-on Industrial Insight</span>
                  <span className="text-xs text-slate-600">Internships in steel & cable manufacturing.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Scientific Writing</span>
                  <span className="text-xs text-slate-600">Author of 1 thesis & 3 ongoing research papers.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Global Ambition</span>
                  <span className="text-xs text-slate-600">Aiming for advanced research & master's abroad.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tech">
                <Globe2 className="w-4 h-4 text-blue-700" />
                <span>Languages: Bangla (Native) • English (Proficient) • German (Basic)</span>
              </div>
              <button
                onClick={onOpenResume}
                className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View Full CV</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Career Ambition & Stage Callout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Stage Card */}
            <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3">
                <Compass className="w-4 h-4 text-red-400" />
                <span>Career Stage & Direction</span>
              </div>

              <h4 className="text-xl font-bold font-heading text-white mb-2">
                Aspiring Engineering Associate
              </h4>

              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                As a recent graduate entering the professional workforce, I am keen to apply my knowledge of electrical power infrastructure, solar simulations, and PLC logic to real-world industrial and consulting projects.
              </p>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/15 backdrop-blur-xs text-xs text-slate-200 space-y-1">
                <p className="font-semibold text-white">Target Roles:</p>
                <p>• Engineering Associate / Graduate Trainee Engineer</p>
                <p>• Renewable Energy / Solar PV Design Engineer</p>
                <p>• Industrial Automation & Control Systems Associate</p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
                <span>Immediate Availability</span>
                <a
                  href="#contact"
                  className="font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Hire / Connect
                </a>
              </div>
            </div>

            {/* Research Long-term Horizon */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-heading font-bold text-sm text-slate-900">
                  Long-Term Academic Horizon
                </h5>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Committed to pursuing advanced graduate studies and research abroad in Smart Grids, Renewable Energy Integration, and Edge AI.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Education Timeline */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Academic Qualifications
              </h3>
              <p className="text-xs text-slate-500 font-mono-tech">
                Formal education degrees and institutional achievements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={edu.id}
                id={`edu-card-${edu.id}`}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group hover:border-blue-300"
              >
                {/* Degree index badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold font-mono-tech uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {edu.period}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 uppercase block font-mono-tech">
                      {edu.resultType}
                    </span>
                    <span className="text-base font-black text-blue-900 font-heading">
                      {edu.result}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-900 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 mt-1 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
