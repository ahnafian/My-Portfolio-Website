import React from 'react';
import { ResearchPaper, AppliedProject } from '../types';
import {
  X,
  BookOpen,
  Cpu,
  CheckCircle2,
  Tag,
  Wrench,
  Layers,
  Sparkles,
  FileText,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface ProjectModalProps {
  item: ResearchPaper | AppliedProject | null;
  type: 'research' | 'applied' | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  item,
  type,
  onClose,
}) => {
  if (!item || !type) return null;

  const isResearch = type === 'research';
  const researchItem = isResearch ? (item as ResearchPaper) : null;
  const appliedItem = !isResearch ? (item as AppliedProject) : null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {isResearch && researchItem && (
              <>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-tech ${
                    researchItem.status === 'Completed Thesis'
                      ? 'bg-emerald-100 text-emerald-800'
                      : researchItem.status === 'Under Review'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {researchItem.status === 'Completed Thesis' ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                  <span>Status: {researchItem.status}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 font-mono-tech">
                  {researchItem.category}
                </span>
              </>
            )}

            {!isResearch && appliedItem && (
              <>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-tech bg-indigo-100 text-indigo-800">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Applied Automation Project</span>
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 font-mono-tech">
                  {appliedItem.platform}
                </span>
              </>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 leading-tight">
            {item.title}
          </h3>

          {isResearch && researchItem && (
            <p className="text-xs font-semibold text-blue-900 font-mono-tech mt-2">
              Role: {researchItem.role}
            </p>
          )}
        </div>

        {/* Modal Body */}
        {isResearch && researchItem && (
          <div className="space-y-5 text-left">
            {/* Abstract */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2">
                Executive Abstract & Scope:
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {researchItem.abstract}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2.5">
                Key Contributions & Methodology:
              </h4>
              <div className="space-y-2">
                {researchItem.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2">
                Research Keywords:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {researchItem.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 text-xs font-medium border border-blue-100"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 font-mono-tech">
                Tools & Software:
              </span>
              {researchItem.toolsUsed.map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {!isResearch && appliedItem && (
          <div className="space-y-5 text-left">
            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2">
                Project Overview:
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {appliedItem.summary}
              </p>
            </div>

            {/* System Logic */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2">
                Ladder Logic & Control Architecture:
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
                {appliedItem.systemLogic}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2.5">
                Implemented Control Functions:
              </h4>
              <div className="space-y-2">
                {appliedItem.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* HMI Features if available */}
            {appliedItem.hmiFeatures && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-tech mb-2">
                  HMI Operator Interface Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {appliedItem.hmiFeatures.map((hmi, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{hmi}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 font-mono-tech">
                Platform & Modules:
              </span>
              {appliedItem.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
