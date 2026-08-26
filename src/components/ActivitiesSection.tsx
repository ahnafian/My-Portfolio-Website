import React from 'react';
import { coCurricularData } from '../data/portfolioData';
import {
  Users,
  Megaphone,
  Radio,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  BookOpen,
} from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3 border border-blue-100">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Co-Curricular & Leadership Activities
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Demonstrating communication leadership, executive teamwork, and active participation in IEEE engineering societies.
          </p>
        </div>

        {/* 2 Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coCurricularData.map((act) => (
            <div
              key={act.id}
              id={`activity-card-${act.id}`}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-mono-tech bg-blue-100 text-blue-900">
                    <Award className="w-3.5 h-3.5" />
                    <span>{act.type}</span>
                  </span>
                  <span className="text-xs font-mono-tech text-slate-500">
                    {act.period}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-bold shrink-0">
                    {act.id.includes('eee-club') ? (
                      <Megaphone className="w-5 h-5 text-amber-300" />
                    ) : (
                      <Radio className="w-5 h-5 text-emerald-300" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-900 transition-colors">
                      {act.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 font-mono-tech mt-0.5">
                      {act.organization}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {act.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech">
                    Key Outcomes & Contributions:
                  </h4>
                  {act.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {act.id.includes('eee-club') && (
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono-tech">
                  <span>IIUC EEE Student Club</span>
                  <span className="text-blue-900 font-bold">1,000+ Student Reach</span>
                </div>
              )}

              {act.id.includes('ieee') && (
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono-tech">
                  <span>IEEE Member</span>
                  <span className="text-emerald-700 font-bold">Continuous Learning</span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
