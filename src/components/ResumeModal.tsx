import React from 'react';
import {
  personalInfo,
  educationData,
  skillCategories,
  languageData,
  certificationData,
  experienceData,
  researchPapersData,
  appliedProjectsData,
  coCurricularData,
} from '../data/portfolioData';
import {
  X,
  Printer,
  FileDown,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  BookOpen,
  Cpu,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold font-heading text-slate-900">
              Curriculum Vitae — {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-semibold">
              BSc in EEE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-cv-button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="close-cv-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Body */}
        <div id="printable-cv-content" className="p-6 sm:p-10 space-y-8 text-slate-900">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6">
            <h1 className="text-3xl font-extrabold font-heading text-slate-950 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-blue-900 mt-0.5">
              {personalInfo.title}
            </p>
            <p className="text-xs text-slate-600 mt-1 font-mono-tech">
              {personalInfo.department} • {personalInfo.institution}
            </p>

            {/* Contacts Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.linkedinHandle}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-3 pb-1 border-b border-slate-200">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-slate-600">{edu.institution}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{edu.description}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4 font-mono-tech">
                    <span className="font-bold text-blue-900 block">{edu.resultType}: {edu.result}</span>
                    <span className="text-slate-500 text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-3 pb-1 border-b border-slate-200">
              Research & Scientific Publications
            </h2>
            <div className="space-y-3">
              {researchPapersData.map((paper) => (
                <div key={paper.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-bold text-slate-900">{paper.title}</h3>
                    <span className="text-[11px] font-bold font-mono-tech px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      {paper.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-900 font-mono-tech">{paper.role}</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{paper.abstract}</p>
                  <p className="text-[11px] text-slate-500 font-mono-tech mt-1">
                    Tools: {paper.toolsUsed.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Applied Industrial Automation Projects */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-3 pb-1 border-b border-slate-200">
              Applied PLC & Automation Projects
            </h2>
            <div className="space-y-3">
              {appliedProjectsData.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-900">{proj.title}</h3>
                    <span className="text-[11px] font-mono-tech text-slate-500">{proj.platform}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{proj.summary}</p>
                  <p className="text-[11px] text-slate-500 font-mono-tech mt-0.5">
                    Logic: {proj.systemLogic}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-3 pb-1 border-b border-slate-200">
              Work & Industrial Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-slate-600 font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono-tech text-slate-500 shrink-0 ml-2">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-2 pb-1 border-b border-slate-200">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.id}>
                    <span className="font-bold text-slate-800">{cat.title}: </span>
                    <span className="text-slate-600">{cat.skills.join(', ')}</span>
                  </div>
                ))}
                <div>
                  <span className="font-bold text-slate-800">Languages: </span>
                  <span className="text-slate-600">Bangla (Native), English (Proficient), German (Basic)</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono-tech mb-2 pb-1 border-b border-slate-200">
                Certifications & Leadership
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900">{certificationData[0].title}</span>
                  <p className="text-slate-600">{certificationData[0].issuer} ({certificationData[0].date})</p>
                </div>
                <div className="pt-1">
                  <span className="font-bold text-slate-900">Secretary, Press & Publicity</span>
                  <p className="text-slate-600">IIUC EEE Club (Autumn 2025)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
