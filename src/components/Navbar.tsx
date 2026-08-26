import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileDown, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research & Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              AT
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors flex items-center gap-1">
                {personalInfo.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-medium text-slate-700 tracking-wider uppercase font-mono-tech">
                EEE Graduate • Aspiring Assoc.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-blue-900 shadow-sm font-bold'
                      : 'text-slate-800 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-cv-button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-700 hover:text-blue-900 hover:bg-blue-50 border border-slate-200 transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-700" />
              <span>Curriculum Vitae</span>
            </button>
            <a
              id="nav-contact-button"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-950 text-white shadow-sm transition-all hover:shadow hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-cv-quick-btn"
              onClick={onOpenResume}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
              title="View CV"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-panel" className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-menu-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100 flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Download CV</span>
            </button>
            <a
              id="mobile-menu-contact-btn"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-950 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
