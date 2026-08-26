import React from 'react';
import { Sun, Cpu, Radio, Award, ArrowUpRight } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'stat-edu',
      icon: Award,
      iconBg: 'bg-blue-100 text-blue-900',
      title: 'BSc in EEE Graduate',
      subtitle: 'IIUC Kumira • CGPA 3.1/4.0',
      description: 'Solid foundation in power systems, electrical machines, electromagnetics, and automation.',
      accent: 'border-l-4 border-blue-900',
    },
    {
      id: 'stat-solar',
      icon: Sun,
      iconBg: 'bg-amber-100 text-amber-700',
      title: 'Solar PV & Power',
      subtitle: 'PVsyst Feasibility Studies',
      description: 'Undergraduate thesis lead author evaluating rooftop grid-tied solar systems and LCOE economics.',
      accent: 'border-l-4 border-amber-600',
    },
    {
      id: 'stat-automation',
      icon: Cpu,
      iconBg: 'bg-red-100 text-red-600',
      title: 'Industrial Automation',
      subtitle: 'Siemens PLC & SCADA',
      description: 'Certified in ladder logic, HMI operator screens, MCC motor control, and industrial sensor safety.',
      accent: 'border-l-4 border-red-600',
    },
    {
      id: 'stat-rf-ai',
      icon: Radio,
      iconBg: 'bg-purple-100 text-purple-700',
      title: 'RF & Embedded AI',
      subtitle: 'Antennas & TinyBCI MCUs',
      description: 'Research contributions in ring-slot brain tumor antenna and adaptive neural inference on MCUs.',
      accent: 'border-l-4 border-purple-600',
    },
  ];

  return (
    <section id="quick-highlights" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-300 group-hover:text-blue-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 font-mono-tech mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
