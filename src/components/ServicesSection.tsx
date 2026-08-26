import React from 'react';
import { servicesData } from '../data/portfolioData';
import {
  Sun,
  Cpu,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-red-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-900" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Consultation & Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Services & Technical Expertise
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Professional engineering analysis, simulation modeling, and automation programming for industrial clients and academic teams.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Subtitle */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {getServiceIcon(srv.icon)}
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-900 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 font-mono-tech mt-1 mb-3">
                  {srv.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech">
                    Standard Deliverables:
                  </h4>
                  {srv.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tools */}
                <div className="pt-4 border-t border-slate-100 mb-5">
                  <span className="text-[11px] font-bold text-slate-500 font-mono-tech block mb-2">
                    Key Tools Employed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.keyTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inquire CTA Button */}
                <button
                  id={`inquire-btn-${srv.id}`}
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Inquire / Discuss Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
