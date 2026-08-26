import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickHighlights } from './components/QuickHighlights';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResearchAndProjectsSection } from './components/ResearchAndProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ResearchPaper, AppliedProject } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ResearchPaper | AppliedProject | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<'research' | 'applied' | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleSelectProject = (
    item: ResearchPaper | AppliedProject,
    type: 'research' | 'applied'
  ) => {
    setSelectedProject(item);
    setSelectedProjectType(type);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setSelectedProjectType(null);
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactSubject(`Inquiry regarding: ${serviceTitle}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenResume={handleOpenResume} />

        {/* Feature Highlights Strip */}
        <QuickHighlights />

        {/* About & Education */}
        <AboutSection onOpenResume={handleOpenResume} />

        {/* Skills & Certifications */}
        <SkillsSection />

        {/* Industrial Experience */}
        <ExperienceSection />

        {/* Research & Applied Projects */}
        <ResearchAndProjectsSection onSelectProject={handleSelectProject} />

        {/* Services & Consultation */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Leadership & Co-Curricular */}
        <ActivitiesSection />

        {/* Contact & Inquiry */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        item={selectedProject}
        type={selectedProjectType}
        onClose={handleCloseProjectModal}
      />

      {/* Printable ATS-Style Resume / CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
