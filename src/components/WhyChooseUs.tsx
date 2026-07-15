import React from 'react';
import { Compass, Sliders, Users2, ShieldCheck, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Founder-Led Thinking',
      desc: 'We understand that every early hire influences culture, execution, and long-term growth.',
      icon: Compass,
      color: 'bg-brand-teal/5 border-brand-teal/10 text-brand-teal'
    },
    {
      title: 'Boutique Search',
      desc: 'Every assignment is executed through a focused, high-touch search strategy rather than a volume-driven recruitment model.',
      icon: Sliders,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600'
    },
    {
      title: 'Strategic Candidate Positioning',
      desc: 'We communicate your vision, leadership philosophy, business goals, and long-term opportunity to engage exceptional talent.',
      icon: Users2,
      color: 'bg-brand-orange/5 border-brand-orange/10 text-brand-orange'
    },
    {
      title: 'Quality Over Quantity',
      desc: 'We deliver curated shortlists instead of overwhelming volumes of resumes.',
      icon: ShieldCheck,
      color: 'bg-brand-teal/5 border-brand-teal/10 text-brand-teal'
    },
    {
      title: 'Relationship-Driven Partnerships',
      desc: 'We become long-term hiring partners as your business continues to grow.',
      icon: Handshake,
      color: 'bg-rose-50 border-[2px] border-rose-100/50 text-rose-600'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
              THE NVARAA ADVANTAGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mt-3 mb-4">
              Experience That Goes Beyond Recruitment
            </h2>
          </div>
          <div className="lg:col-span-6 text-slate-600 font-sans text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Our founders have successfully partnered with multiple organizations to build teams from the ground up.
            </p>
            <p>
              Over the past several years, we've helped six companies grow from their first hires to teams of 30+ professionals, supporting founders through one of the most critical phases of business growth.
            </p>
            <p>
              Having worked closely with leadership teams during these journeys, we understand that early hiring decisions shape the future of an organization. That experience influences every search we undertake.
            </p>
          </div>
        </div>

        {/* Bento-like asymmetrical grid wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Founder-Led Thinking (Slate-950 Dark bg) */}
          <div className="lg:col-span-2 group relative p-8 rounded-2xl bg-slate-950 text-white border border-slate-900 flex flex-col justify-between overflow-hidden shadow-lg shadow-slate-950/20">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-teal/15 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-orange border border-brand-teal/20 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl mb-3 text-white">
                {points[0].title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {points[0].desc} Early talent shapes culture, defines operational speed, and lays the groundwork for all future scale.
              </p>
            </div>

            <div className="relative z-10 flex gap-6 mt-10 pt-6 border-t border-slate-900 text-xs font-mono text-slate-400">
              <span>● CULTURE PLOT</span>
              <span>● EXECUTION ALIGNMENT</span>
              <span>● COGNITIVE FIT</span>
            </div>
          </div>

          {/* Card 2: Boutique Search */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[1].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[1].desc}
              </p>
            </div>
          </div>

          {/* Card 3: Strategic Candidate Positioning */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-orange/5 border border-brand-orange/10 text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[2].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[2].desc}
              </p>
            </div>
          </div>

          {/* Card 4: Quality Over Quantity */}
          <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {points[3].title}
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {points[3].desc}
              </p>
            </div>
          </div>

          {/* Card 5: Relationship-Driven Partnerships */}
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
                {points[4].desc} We don't measure success by invoices sent, but by the business impact created by our placements as they elevate your organizational capabilities over the long term.
              </p>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200/60 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                ✔ High-Touch Collaboration
              </span>
              <span className="flex items-center gap-1">
                ✔ Talent Advisory Integrations
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
