import React from 'react';
import { Compass, ShieldCheck, Check } from 'lucide-react';

interface ServicesProps {
  onHireClick: (preselectedService?: string) => void;
}

export default function Services({ onHireClick }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase">
            Our Specialized Hiring Practices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mt-3 mb-4">
            Different Stages. Different Hiring Strategies.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Every stage of growth demands a different approach to hiring. Instead of following a one-size-fits-all recruitment model, Nvaraa operates through two specialized hiring practices designed around the unique challenges of growing businesses.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Practice 1: Founding Team Practice */}
          <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-xl hover:border-slate-200 hover:translate-y-[-2px] transition-all duration-300">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#f37a1b] bg-brand-orange/5 border border-brand-orange/10 rounded px-2.5 py-1">
                  Practice 1
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
                Founding Team Practice
              </h3>
              
              <p className="font-sans font-semibold text-sm text-[#f37a1b] mb-4">
                Strategic Hiring for Startups & GCCs Building Teams from the Ground Up
              </p>

              <div className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6 space-y-4">
                <p>
                  The first few hires define everything that follows. They establish culture, build processes, influence future hiring, and drive execution.
                </p>
                <p>
                  Founding team hiring is fundamentally different from traditional recruitment. It requires strategic search, founder alignment, thoughtful evaluation, and the ability to identify individuals who thrive in fast-changing environments.
                </p>
                <p>
                  Our Founding Team Practice follows a boutique search model with a dedicated team focused exclusively on early-stage hiring engagements.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-sans font-bold text-xs uppercase text-slate-900 mb-3 tracking-wider">Ideal for:</h4>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Startups launching new teams</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>GCCs establishing operations</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>New business units</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Expansion initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-auto border-t border-slate-100 pt-6">
              <p className="font-sans text-xs italic text-slate-500 mb-4">
                Every search is personalized, high-touch, and executed with speed, precision, and long-term thinking.
              </p>
              <button
                onClick={() => onHireClick('Founding Team Practice')}
                className="w-full font-sans font-bold text-xs tracking-wider uppercase bg-slate-900 hover:bg-brand-teal hover:text-white text-white py-3 px-4 rounded-xl transition-all cursor-pointer text-center"
              >
                Engage Founding Team Search
              </button>
            </div>
          </div>

          {/* Practice 2: Growth Hiring Practice */}
          <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-xl hover:border-slate-200 hover:translate-y-[-2px] transition-all duration-300">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#f37a1b] bg-brand-orange/5 border border-brand-orange/10 rounded px-2.5 py-1">
                  Practice 2
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
                Growth Hiring Practice
              </h3>
              
              <p className="font-sans font-semibold text-sm text-[#f37a1b] mb-4">
                Scaling Teams Without Compromising Quality
              </p>

              <div className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6 space-y-4">
                <p>
                  As businesses grow, hiring priorities evolve. The challenge shifts from making the first few hires to building teams consistently, efficiently, and at scale.
                </p>
                <p>
                  Our Growth Hiring Practice supports organizations that have moved beyond the initial stage and are now expanding functions, strengthening leadership, and building high-performing teams.
                </p>
                <p>
                  With dedicated hiring partners, structured processes, and proactive talent engagement, we help businesses scale without compromising hiring quality or candidate experience.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-sans font-bold text-xs uppercase text-slate-900 mb-3 tracking-wider">Ideal for:</h4>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Scaling teams consistently</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Expanding business functions</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Strengthening leadership</span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Active talent engagement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-auto border-t border-slate-100 pt-6">
              <p className="font-sans text-xs italic text-slate-500 mb-4">
                Structured hiring pipelines built for long-term capability and consistent onboarding speed.
              </p>
              <button
                onClick={() => onHireClick('Growth Hiring Practice')}
                className="w-full font-sans font-bold text-xs tracking-wider uppercase bg-slate-900 hover:bg-brand-teal hover:text-white text-white py-3 px-4 rounded-xl transition-all cursor-pointer text-center"
              >
                Engage Growth Scale Search
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
