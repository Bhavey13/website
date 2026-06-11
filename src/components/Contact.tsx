import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, FileText, Building2, User, Phone, Sliders, ArrowRight } from 'lucide-react';
import { JobRequirementSubmission, RoleType } from '../types';

interface ContactProps {
  onSubmitRequirement: (submission: JobRequirementSubmission) => void;
  activeRequirements: JobRequirementSubmission[];
  preselectedService: string;
}

export default function Contact({ onSubmitRequirement, activeRequirements, preselectedService }: ContactProps) {
  // Form states
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roleType, setRoleType] = useState<RoleType>('Permanent');
  const [requirementsSummary, setRequirementsSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Trigger form pre-filling if a service is clicked
  React.useEffect(() => {
    if (preselectedService) {
      if (preselectedService.includes('IT')) setRoleType('IT');
      else if (preselectedService.includes('Executive')) setRoleType('Executive');
      else if (preselectedService.includes('Non-IT')) setRoleType('Non-IT');
      else setRoleType('Permanent');

      setRequirementsSummary(`Seeking professional assistance for: ${preselectedService}. Please contact us to map our staffing blueprint...`);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const submission: JobRequirementSubmission = {
        id: 'req-' + Math.random().toString(36).substr(2, 9),
        companyName,
        contactName,
        email,
        phone,
        roleType,
        requirementsSummary,
        submittedAt: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        status: 'Pending'
      };

      onSubmitRequirement(submission);
      setIsSubmitting(false);
      setJustSubmitted(true);

      // Clear Form fields
      setCompanyName('');
      setContactName('');
      setEmail('');
      setPhone('');
      setRequirementsSummary('');
    }, 1200);
  };

  const copyEmail = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-brand-teal/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
            LET'S BUILD GREAT TEAMS TOGETHER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mt-3 mb-4">
            Partner with Nvaraa Solutions Today
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you're looking to hire exceptional talent or explore new career opportunities, Nvaraa Solutions is ready to support your journey. Get in touch with our consulting specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info and Active Submissions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm space-y-6">
              <h3 className="font-display font-extrabold text-xl text-slate-900 pb-4 border-b border-slate-100">
                Contact Details
              </h3>

              <div className="space-y-6">
                
                {/* Client Inquiries */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-teal/10 border border-brand-teal/20 text-brand-teal h-fit">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-sans font-bold text-xs text-slate-500 uppercase tracking-wider">
                      Client & General Inquiries
                    </span>
                    <button
                      onClick={() => copyEmail('contact@nvaraa.com')}
                      className="font-display font-bold text-base text-brand-teal hover:underline text-left mt-0.5 cursor-pointer focus:outline-none"
                    >
                      contact@nvaraa.com
                    </button>
                    {copiedText === 'contact@nvaraa.com' ? (
                      <p className="text-[10px] text-emerald-600 font-sans mt-0.5 font-bold">Copied to clipboard!</p>
                    ) : (
                      <p className="text-xs text-slate-500 font-sans mt-0.5">Click to copy address</p>
                    )}
                  </div>
                </div>

                {/* Candidate Inquiries */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange h-fit">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-sans font-bold text-xs text-slate-500 uppercase tracking-wider">
                      Candidate & Resume Submissions
                    </span>
                    <button
                      onClick={() => copyEmail('candidates@nvaraa.com')}
                      className="font-display font-bold text-base text-brand-orange hover:underline text-left mt-0.5 cursor-pointer focus:outline-none"
                    >
                      candidates@nvaraa.com
                    </button>
                    {copiedText === 'candidates@nvaraa.com' ? (
                      <p className="text-[10px] text-emerald-600 font-sans mt-0.5 font-bold">Copied to clipboard!</p>
                    ) : (
                      <p className="text-xs text-slate-500 font-sans mt-0.5">Click to copy address</p>
                    )}
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 h-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-bold text-xs text-slate-500 uppercase tracking-wider">
                      Office Location / Headquarters
                    </span>
                    <p className="font-display font-bold text-base text-slate-800 mt-0.5">
                      Bengaluru, Karnataka, India
                    </p>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">India's major technology nerve center</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Clean Inquiry Form Panel */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-150 shadow-sm">
            <div className="flex gap-3 items-center mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-brand-teal">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                  Get in Touch
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-0.5">Tell us about your staffing requirements or career goals.</p>
              </div>
            </div>

            {justSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border-4 border-emerald-50">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Message Sent Successfully
                </h3>
                <p className="font-sans text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! We have received your inquiry. An advisory specialist from Nvaraa Solutions will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => setJustSubmitted(false)}
                  className="font-sans font-bold text-xs uppercase tracking-wider text-brand-orange hover:underline inline-flex items-center gap-1.5 cursor-pointer mt-4"
                >
                  Send another message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Company Name */}
                <div>
                  <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Company / Organization Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. ScribeFlow Innovations"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                  />
                </div>

                {/* Primary Contact Person & Specialty */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. Rohan Deshmukh"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-slate-400" />
                      Primary Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value as RoleType)}
                      className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent cursor-pointer transition-all"
                    >
                      <option value="Permanent">Permanent Staffing</option>
                      <option value="Executive">Executive Search</option>
                      <option value="IT">IT Recruitment</option>
                      <option value="Non-IT">Non-IT Recruitment</option>
                    </select>
                  </div>
                </div>

                {/* Contact Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rohan@scribeflow.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 91234 56789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Core Job Requirements description */}
                <div>
                  <label className="block font-sans font-semibold text-xs text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    Describe Your Inquiry / Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your staffing needs or any other questions you may have..."
                    value={requirementsSummary}
                    onChange={(e) => setRequirementsSummary(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-205 rounded-xl font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none transition-all"
                  />
                </div>

                {/* Submission CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-sans font-bold text-xs uppercase tracking-widest bg-brand-teal hover:bg-brand-teal-dark text-white py-3.5 rounded-xl shadow-lg shadow-brand-teal/15 flex items-center justify-center gap-2 disabled:bg-slate-300 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 text-brand-orange" />
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
}
