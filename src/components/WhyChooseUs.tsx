import React from 'react';
import { BookOpen, CheckSquare, Zap, Sliders, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Industry Knowledge',
      desc: 'Strong understanding of hiring trends and talen acquisition best practices.',
      icon: BookOpen,
      color: 'bg-brand-teal/5 border-brand-teal/10 text-brand-teal'
    },
    {
      title: 'Quality-Driven Hiring',
      desc: 'Comprehensive screening and evaluation processes to identify the right candidates.',
      icon: CheckSquare,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600'
    },
    {
      title: 'Faster Recruitment',
      desc: 'Efficient sourcing and selection strategies that reduce hiring timelines.',
      icon: Zap,
      color: 'bg-brand-orange/5 border-brand-orange/10 text-brand-orange'
    },
    {
      title: 'Tailored Solutions',
      desc: 'Customized recruitment approaches designed around each client\'s unique needs.',
      icon: Sliders,
      color: 'bg-brand-teal/5 border-brand-teal/10 text-brand-teal'
    },
    {
      title: 'Long-Term Partnerships',
      desc: 'Focused on building lasting relationships with clients and candidates alike.',
      icon: Handshake,
      color: 'bg-rose-50 border-[2px] border-rose-100/50 text-rose-600'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="font-sans font-bold text-xs tracking-widest text-brand-teal uppercase">
              THE NVARAA ADVANTAGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mt-3 mb-4">
              Why Strategic Leaders Partner With Us
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
              We look beyond skill codes and title matches. Our framework is engineered to align commercial trajectories and create teams that foster high efficiency and high stability.
            </p>
          </div>
        </div>

        {/* Bento-like asymmetrical grid wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Larger featured item */}
          <div className="lg:col-span-2 group relative p-8 rounded-2xl bg-slate-950 text-white border border-slate-900 flex flex-col justify-between overflow-hidden shadow-lg shadow-slate-950/20">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-teal/15 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-orange border border-brand-teal/20 mb-6">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl mb-3 text-white">
                {points[1].title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {points[1].desc} Our rigorous standards ensure we validate candidate suitability across cognitive metrics, domain experience, culture-fit variables, and leadership goals.
              </p>
            </div>

            <div className="relative z-10 flex gap-6 mt-10 pt-6 border-t border-slate-900 text-xs font-mono text-slate-400">
              <span>● COGNITIVE PROFILES</span>
              <span>● PEER-VETTED CHECKS</span>
              <span>● CULTURE PLOT</span>
            </div>
          </div>

          {/* Card 2: standard sized point */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[0].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[0].desc}
              </p>
            </div>
          </div>

          {/* Card 3: Standard sized point */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-orange/5 border border-brand-orange/10 text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[2].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[2].desc}
              </p>
            </div>
          </div>

          {/* Card 4: Standard sized point */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[3].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[3].desc}
              </p>
            </div>
          </div>

          {/* Card 5: Larger / featured item item 5 */}
          <div className="lg:col-span-2 group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/5 rounded-full filter blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-[#f37a1b] mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3">
                {points[4].title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {points[4].desc} We partner for the long haul. Our relationship metrics ensure candidate integration support continuous follow-ups, and long-term advisory assistance.
              </p>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200/60 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                ✔ Executive Advisory
              </span>
              <span className="flex items-center gap-1">
                ✔ Candidate Nurtures
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
