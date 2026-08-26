import React, { useState } from 'react';
import { researchPapersData, appliedProjectsData } from '../data/portfolioData';
import { ResearchPaper, AppliedProject } from '../types';
import {
  BookOpen,
  Cpu,
  CheckCircle2,
  Clock,
  FileEdit,
  ArrowRight,
  ExternalLink,
  Sliders,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';

interface ResearchAndProjectsSectionProps {
  onSelectProject: (
    item: ResearchPaper | AppliedProject,
    type: 'research' | 'applied'
  ) => void;
}

export const ResearchAndProjectsSection: React.FC<ResearchAndProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'research' | 'applied'>('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed Thesis':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tech bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed Thesis</span>
          </span>
        );
      case 'Under Review':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tech bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3.5 h-3.5" />
            <span>Under Review</span>
          </span>
        );
      case 'Manuscript in Preparation':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tech bg-blue-100 text-blue-800 border border-blue-200">
            <FileEdit className="w-3.5 h-3.5" />
            <span>Manuscript in Prep</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tech bg-slate-100 text-slate-700">
            <span>{status}</span>
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3 border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Research & Projects
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Distinguishing rigorous academic research investigations from practical hands-on industrial PLC automation systems.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="filter-btn-all"
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Technical Works (6)
          </button>
          
          <button
            id="filter-btn-research"
            onClick={() => setActiveFilter('research')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeFilter === 'research'
                ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research ({researchPapersData.length})</span>
          </button>

          <button
            id="filter-btn-applied"
            onClick={() => setActiveFilter('applied')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeFilter === 'applied'
                ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Applied Automation Projects ({appliedProjectsData.length})</span>
          </button>
        </div>

        {/* SECTION 1: ACADEMIC RESEARCH PAPERS */}
        {(activeFilter === 'all' || activeFilter === 'research') && (
          <div className="mb-16">
            
            {/* Category Subheader */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-900">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    Academic Research & Publications
                  </h3>
                  <p className="text-xs text-slate-500 font-mono-tech">
                    Undergraduate thesis and peer-reviewed journal / conference manuscripts
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold font-mono-tech text-slate-500">
                {researchPapersData.length} Research Papers
              </span>
            </div>

            {/* Research Papers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchPapersData.map((paper) => (
                <div
                  key={paper.id}
                  id={`research-card-${paper.id}`}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Status & Category row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      {getStatusBadge(paper.status)}
                      <span className="text-[11px] font-semibold text-slate-500 font-mono-tech bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                        {paper.category}
                      </span>
                    </div>

                    {/* Paper Title */}
                    <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-2">
                      {paper.title}
                    </h4>

                    {/* Role */}
                    <p className="text-xs font-semibold text-blue-900 font-mono-tech mb-3">
                      {paper.role}
                    </p>

                    {/* Abstract snippet */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {paper.abstract}
                    </p>

                    {/* Highlights bullet previews */}
                    <div className="space-y-1.5 mb-4">
                      {paper.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1"></span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tools and Modal trigger */}
                    <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {paper.toolsUsed.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/70 text-slate-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <button
                        id={`view-research-btn-${paper.id}`}
                        onClick={() => onSelectProject(paper, 'research')}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* SECTION 2: APPLIED INDUSTRIAL AUTOMATION & PLC PROJECTS */}
        {(activeFilter === 'all' || activeFilter === 'applied') && (
          <div>
            
            {/* Category Subheader */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-red-100 text-red-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    Applied Academic & Training Projects
                  </h3>
                  <p className="text-xs text-slate-500 font-mono-tech">
                    Siemens PLC ladder logic, HMI dashboards & process automation simulations
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs font-bold font-mono-tech text-slate-500">
                {appliedProjectsData.length} Applied Systems
              </span>
            </div>

            {/* Applied Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {appliedProjectsData.map((project) => (
                <div
                  key={project.id}
                  id={`applied-project-${project.id}`}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tech bg-red-50 text-red-700 border border-red-200">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Applied PLC Project</span>
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 font-mono-tech bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                        {project.platform}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-red-700 transition-colors leading-snug mb-2">
                      {project.title}
                    </h4>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* System Logic Snippet */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 mb-4">
                      <span className="text-[11px] font-bold text-slate-700 font-mono-tech uppercase block mb-1">
                        Control Logic Highlights:
                      </span>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {project.systemLogic}
                      </p>
                    </div>

                    {/* Key features preview */}
                    <div className="space-y-1.5 mb-4">
                      {project.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technologies and View Modal */}
                    <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/70 text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        id={`view-applied-btn-${project.id}`}
                        onClick={() => onSelectProject(project, 'applied')}
                        className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                      >
                        <span>View Control Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
