import React from 'react';
import { Target, Users2, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic graphic accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-teal/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase Block */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Highlighted core pillars */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-brand-teal/10 text-brand-teal p-3 rounded-xl h-fit">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">Strategic Alignment</h4>
                    <p className="font-sans text-sm text-slate-600">Working as an extension of your leadership to understand your business objectives first.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-xl h-fit">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">Boutique Search</h4>
                    <p className="font-sans text-sm text-slate-600">Thoughtful, relationship-driven talent assessment focusing on vision and culture fit.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#eefcf2] text-emerald-700 p-3 rounded-xl h-fit">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">Building Capability</h4>
                    <p className="font-sans text-sm text-slate-600">Adding key individuals who define, execute, scale, and influence future hiring positively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Content Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center animate-fade-in">
            <span className="block font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase mb-3">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6">
              Recruitment Is Easy. Building Teams Isn't.
            </h2>
            
            <div className="space-y-6 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-800 border-l-4 border-brand-orange pl-4 py-1 italic bg-brand-orange/5 rounded-r-lg">
                Hiring isn't about filling vacancies — it's about building capability.
              </p>
              
              <p>
                The right people influence culture, execution, customer experience, and the pace at which a business grows. That's why we don't begin with a job description; we begin with understanding your business.
              </p>
              
              <p>
                At Nvaraa, we work as an extension of your leadership team, taking the time to understand your vision, culture, growth plans, and hiring priorities before initiating any search.
              </p>
              
              <p className="text-base text-slate-500">
                Our approach is thoughtful, relationship-driven, and built around one objective — helping you build exceptional teams.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
