import React from 'react';
import { Target, Search, Sparkles, Calendar, HeartHandshake } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: 1,
      title: 'Understanding Your Requirements',
      desc: 'We take the time to understand your business goals, team structure, and hiring needs.',
      details: 'We form a unique search footprint detailing both hard-skill prerequisites and soft organizational factors.',
      icon: Target,
      color: 'bg-brand-teal text-white'
    },
    {
      step: 2,
      title: 'Talent Sourcing',
      desc: 'We identify and engage qualified candidates through targeted sourcing strategies.',
      details: 'Our networks and domain lists ensure we tap active talent pipelines as well as passive, non-applicant stars.',
      icon: Search,
      color: 'bg-brand-orange text-white'
    },
    {
      step: 3,
      title: 'Screening & Evaluation',
      desc: 'Candidates undergo thorough assessment based on skills, experience, and role suitability.',
      details: 'Evaluations check logical performance, specific framework proficiency, past deliverables, and alignment.',
      icon: Sparkles,
      color: 'bg-brand-teal text-white'
    },
    {
      step: 4,
      title: 'Interview Coordination',
      desc: 'We manage the interview process and ensure seamless communication between clients and candidates.',
      details: 'We act as liaison officers, arranging dates, preparing participants, and compiling detailed loops.',
      icon: Calendar,
      color: 'bg-brand-orange text-white'
    },
    {
      step: 5,
      title: 'Offer & Joining Support',
      desc: 'From offer rollout to onboarding, we assist throughout the hiring journey.',
      details: 'Our recruiters remain actively involved to manage negotiations, mitigate notice-period drop-offs, and ensure seamless entry.',
      icon: HeartHandshake,
      color: 'bg-brand-teal text-white'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
            OUR PIPELINE METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mt-3 mb-4">
            How We Deliver Exceptional Quality At Speed
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Our strategic recruiting pipeline guarantees minimal friction, maximum candidate retention, and consistent alignment with company timelines.
          </p>
        </div>

        {/* Vertical unified pathway representation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Middle linking vertical vector */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-teal via-[#be6620] to-brand-orange -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-teal via-[#be6620] to-brand-orange sm:hidden" />

          {/* Individual step mapping */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.step} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Marker Bubble */}
                  <div className="absolute left-6 sm:left-1/2 top-1.5 -translate-x-1/2 z-15 flex items-center justify-center">
                    <div className="relative h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center font-display font-black text-slate-900 shadow-md">
                      <div className={`absolute -inset-1.5 rounded-full ${item.color} opacity-10 animate-pulse`} />
                      <span className="text-sm">{item.step}</span>
                    </div>
                  </div>

                  {/* Empty space block for structure balance */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Main Information Panel */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-10">
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all">
                      <div className="flex gap-3.5 items-center mb-4">
                        <div className={`p-2 rounded-lg bg-slate-950 text-slate-100`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="font-sans text-sm text-slate-700 leading-relaxed font-semibold mb-3">
                        {item.desc}
                      </p>

                      <p className="font-sans text-xs text-slate-500 leading-relaxed border-t border-slate-150 pt-3">
                        {item.details}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
