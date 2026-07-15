import React from 'react';
import { Target, Sliders, Search, CheckSquare, Award, HeartHandshake, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: 1,
      title: 'Discover',
      desc: 'Deep dive into your business, vision, culture, and long-term milestones.',
      details: 'We go beyond standard JD parameters to understand the strategic and cultural alignment needed for the role.',
      icon: Target,
      color: 'bg-brand-teal text-white'
    },
    {
      step: 2,
      title: 'Design',
      desc: 'Architecting the search strategy, defining the ideal candidate persona, and mapping the target ecosystem.',
      details: 'We define role responsibilities, compensation benchmarks, and position the opportunity strategically to attract passive top-tier talent.',
      icon: Sliders,
      color: 'bg-brand-orange text-white'
    },
    {
      step: 3,
      title: 'Search',
      desc: 'Executing a focused, multi-channel boutique search across hand-picked talent pools.',
      details: 'We proactively engage exceptional passive candidates who aren\'t on job boards, leveraging our exclusive, trusted relationships.',
      icon: Search,
      color: 'bg-brand-teal text-white'
    },
    {
      step: 4,
      title: 'Assess',
      desc: 'Conducting rigorous talent assessments to evaluate capabilities, leadership philosophies, and values.',
      details: 'We evaluate behavioral indices, cultural adaptability, and core capability markers to ensure a perfect fit for your stage of growth.',
      icon: CheckSquare,
      color: 'bg-brand-orange text-white'
    },
    {
      step: 5,
      title: 'Present',
      desc: 'Delivering a highly curated, qualified shortlist with detailed search insights.',
      details: 'We introduce only 2-3 standout profiles with comprehensive assessment notes, saving you valuable leadership hours.',
      icon: Award,
      color: 'bg-brand-teal text-white'
    },
    {
      step: 6,
      title: 'Close',
      desc: 'Managing final stage alignment, compensation negotiation, and official offer sign-off.',
      details: 'We act as a trusted intermediary, facilitating transparent communication to establish a solid foundation from day one.',
      icon: HeartHandshake,
      color: 'bg-brand-orange text-white'
    },
    {
      step: 7,
      title: 'Beyond Joining',
      desc: 'Facilitating a smooth transition and continuous alignment check-ins post-onboarding.',
      details: 'We maintain close contact with both the hire and your leadership team to support successful assimilation and long-term retention.',
      icon: Sparkles,
      color: 'bg-brand-teal text-white'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
            Our Hiring Framework
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mt-3 mb-4">
            A Structured Process. Tailored Execution.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Our strategic hiring framework guarantees minimal friction, maximum talent retention, and consistent alignment with your growth timeline.
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
