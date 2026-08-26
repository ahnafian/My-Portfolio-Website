import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Engineering Associate Opportunity',
    subject: initialSubject,
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update subject if initialSubject changes
  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
        category: 'Project Consultation',
      }));
    }
  }, [initialSubject]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold font-mono-tech tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Get in Touch with Ahnaf
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Actively available for Engineering Associate roles, graduate engineering training, and research collaborations.
          </p>
        </div>

        {/* Grid: Contact Channels (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase font-mono-tech block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                id="copy-email-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-900 hover:bg-blue-50 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase font-mono-tech block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                id="copy-phone-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-900 hover:bg-blue-50 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Copied
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase font-mono-tech block">
                    LinkedIn Profile
                  </span>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-900 hover:underline flex items-center gap-1"
                  >
                    <span>{personalInfo.linkedinHandle}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase font-mono-tech block">
                  Location & Residence
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Quick availability note */}
            <div className="p-4 rounded-2xl bg-blue-950 text-white text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-blue-300 font-mono-tech">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Immediate Availability</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Open to relocation, hybrid, or on-site engineering roles in Bangladesh and international research opportunities.
              </p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-900">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 font-mono-tech">
                  Expect a prompt response within 24 hours
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold font-heading text-slate-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your message regarding{' '}
                  <span className="font-semibold text-blue-900">"{formData.subject || formData.category}"</span> has been logged and sent to <strong>{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      category: 'Engineering Associate Opportunity',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-700 font-mono-tech uppercase mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Rafiqul Islam / Recruiter"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 font-mono-tech uppercase mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-bold text-slate-700 font-mono-tech uppercase mb-1.5"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all"
                    >
                      <option value="Engineering Associate Opportunity">
                        Engineering Associate Role
                      </option>
                      <option value="Solar PV Feasibility Consultation">
                        Solar PV Feasibility (PVsyst)
                      </option>
                      <option value="Industrial Automation / PLC Programming">
                        Industrial Automation & PLC
                      </option>
                      <option value="Research Collaboration">
                        Research & Academic Collaboration
                      </option>
                      <option value="General Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold text-slate-700 font-mono-tech uppercase mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 font-mono-tech uppercase mb-1.5"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Provide details regarding the role, project scope, or academic inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  id="submit-contact-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-6 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Ahnaf</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
