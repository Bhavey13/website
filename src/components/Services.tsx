import React, { useState } from 'react';
import { ShieldCheck, Compass, Cpu, Briefcase, Check } from 'lucide-react';

interface ServicesProps {
  onHireClick: (preselectedService?: string) => void;
}

export default function Services({ onHireClick }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services = [
    {
      id: 'permanent',
      title: 'Permanent Staffing',
      icon: ShieldCheck,
      description: 'Helping organizations find skilled professionals who align with their culture, values, and long-term business objectives. Focusing on building sustainable core competencies.',
      bullets: [
        'Culture-match guarantee',
        'Direct-hire positioning',
        'Strategic talent matching',
        'Long-term retention focus'
      ],
      tag: 'Scale Teams'
    },
    {
      id: 'executive',
      title: 'Executive Search',
      icon: Compass,
      description: 'Specialized recruitment solutions for leadership, management, and business-critical positions built with highest integrity.',
      bullets: [
        'C-Suite & Board search',
        'Discreet candidate vetting',
        'Competitive talent mapping',
        'Leadership suitability tools'
      ],
      tag: 'Leadership'
    },
    {
      id: 'it',
      title: 'IT Recruitment',
      icon: Cpu,
      description: 'Connecting businesses with talented technology professionals across software development, data engineering, cloud computing, artificial intelligence, cybersecurity, infrastructure, and emerging technologies.',
      bullets: [
        'Software & Data Engineers',
        'Cloud & AI practitioners',
        'Foundational (0-1) Tech Setups',
        'Technical screen logs'
      ],
      tag: 'Technology'
    },
    {
      id: 'non-it',
      title: 'Non-IT Recruitment',
      icon: Briefcase,
      description: 'End-to-end recruitment services for sales, finance, human resources, marketing, operations, customer support, engineering, and other business functions.',
      bullets: [
        'Finances & Marketing experts',
        'High-velocity sales hires',
        'GTM & Sales team execution',
        'HR & Operations personnel'
      ],
      tag: 'Corporate Core'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mt-3 mb-4">
            Recruitment Built Around Your Ambition
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            From emerging startups to multi-national corporations, we customize our search methodologies to accommodate your project's scale, architecture, and timeline.
          </p>
        </div>

        {/* Dynamic Category Filter bar (Swiss-design aesthetic) */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {['all', 'permanent', 'executive', 'it', 'non-it'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-teal text-white border-brand-teal shadow-md shadow-brand-teal/10'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {tab === 'all' ? 'All Services' : tab.replace('-', ' ') + ' SPECIALTY'}
            </button>
          ))}
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-xl hover:border-slate-200 hover:translate-y-[-2px] transition-all duration-300"
              >
                <div>
                  {/* Decorative Gradient Icon Border */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#f37a1b] bg-brand-orange/5 border border-brand-orange/10 rounded px-2.5 py-1">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-3 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 mb-2 border-t border-slate-100 pt-6">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
