import React, { useState } from 'react';
import { skillCategories, languageData, certificationData } from '../data/portfolioData';
import {
  Cpu,
  Sliders,
  FileText,
  Award,
  Globe,
  CheckCircle2,
  Layers,
  Wrench,
  Search,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'simulation':
        return <Cpu className="w-5 h-5 text-blue-700" />;
      case 'automation':
        return <Sliders className="w-5 h-5 text-red-600" />;
      case 'tools':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-slate-700" />;
    }
  };

  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      skill,
      categoryTitle: category.title,
      categoryId: category.id,
    }))
  );

  const filteredSkills = allSkills.filter((item) => {
    const matchesTab = activeTab === 'all' || item.categoryId === activeTab;
    const matchesSearch = item.skill.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3 border border-blue-100">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Skills & Certifications
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Comprehensive toolkit spanning engineering simulation software, PLC/SCADA industrial controllers, and project documentation.
          </p>
        </div>

        {/* Top Controls: Category Tabs & Quick Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id="skill-tab-all"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === cat.id
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title} ({cat.skills.length})
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PLC, PVsyst)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        {activeTab === 'all' && searchQuery === '' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                id={`skill-group-${category.id}`}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-200">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono-tech text-slate-500">
                        {category.skills.length} Tools & Technologies
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs hover:border-blue-300 hover:text-blue-900 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 mb-16">
            {filteredSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-xs flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {item.skill}
                  </span>
                  <span className="text-[10px] font-mono-tech text-slate-500">
                    {item.categoryTitle}
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            ))}
            {filteredSkills.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 text-sm">
                No matching skills found for "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* Featured Section: Professional Certification & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certification Spotlight (Automation BD) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold font-mono-tech">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Professional Credential</span>
              </div>
              <span className="text-xs font-mono-tech text-slate-300">
                {certificationData[0].date}
              </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0 border border-white/10">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {certificationData[0].title}
                </h3>
                <p className="text-sm font-semibold text-blue-300 font-mono-tech mt-0.5">
                  Issued by: {certificationData[0].issuer} • {certificationData[0].credentialId}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {certificationData[0].description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-tech mb-3">
                Core Competencies Covered:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certificationData[0].skillsCovered.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2 rounded-lg border border-white/5"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Matrix */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Language Proficiencies
                  </h3>
                  <p className="text-xs text-slate-500 font-mono-tech">
                    Multilingual engineering communication
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {languageData.map((lang, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-slate-900">
                        {lang.language}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono-tech bg-blue-50 text-blue-900 border border-blue-100">
                        {lang.levelBadge}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700">
                      {lang.proficiency}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {lang.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-600">
                Prepared for international research collaborations & global technical teams.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
