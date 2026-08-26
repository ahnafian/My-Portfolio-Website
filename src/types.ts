export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result: string;
  resultType: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  category: 'simulation' | 'automation' | 'tools' | 'languages';
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelBadge: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
  description: string;
  status: 'Completed' | 'In Progress';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  type: 'Industrial Internship' | 'Academic' | 'Full-time';
}

export type ResearchStatus = 'Completed Thesis' | 'Under Review' | 'Manuscript in Preparation';

export interface ResearchPaper {
  id: string;
  title: string;
  category: 'Undergraduate Thesis' | 'Antenna & RF' | 'Renewable Energy & AI' | 'Embedded AI & BCI';
  status: ResearchStatus;
  statusColor: 'emerald' | 'amber' | 'blue' | 'purple';
  abstract: string;
  highlights: string[];
  keywords: string[];
  toolsUsed: string[];
  role: string;
}

export interface AppliedProject {
  id: string;
  title: string;
  category: 'Industrial Automation & PLC' | 'Power Systems' | 'Embedded Systems';
  platform: string;
  summary: string;
  features: string[];
  technologies: string[];
  systemLogic: string;
  hmiFeatures?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  deliverables: string[];
  keyTools: string[];
}

export interface CoCurricularItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Professional Engagement' | 'Volunteering';
  description: string;
  responsibilities: string[];
}
