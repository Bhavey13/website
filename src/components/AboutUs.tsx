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
                    <h4 className="font-display font-bold text-slate-900 mb-1">Tailored Talent Sourcing</h4>
                    <p className="font-sans text-sm text-slate-600">Identifying exceptional professionals and self-starters who align with your organizational goals.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-brand-orange/10 text-brand-orange p-3 rounded-xl h-fit">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">Relationship Driven</h4>
                    <p className="font-sans text-sm text-slate-600">Connecting candidates' life goals with long-term client milestones.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#eefcf2] text-emerald-700 p-3 rounded-xl h-fit">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">Strategic Integration</h4>
                    <p className="font-sans text-sm text-slate-600">Operational cooperation representing your business as dynamic hiring partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Content Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center animate-fade-in">
            <span className="font-sans font-bold text-xs tracking-widest text-[#f37a1b] uppercase mb-3">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
              Recruitment Beyond Resumes
            </h2>
            
            <div className="space-y-6 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-800 border-l-4 border-brand-orange pl-4 py-1 italic bg-brand-orange/5 rounded-r-lg">
                At Nvaraa Solutions, we believe successful hiring is about more than matching skills with job descriptions. We focus on understanding both client requirements and candidate aspirations to create meaningful professional connections.
              </p>
              
              <p>
                Our recruitment specialists work closely with organizations to identify, attract, and secure top talent across diverse business functions. Through a consultative and personalized approach, we deliver hiring solutions that support long-term success for both employers and candidates.
              </p>
              
              <p className="text-base text-slate-500">
                Whether you need specialized leadership, permanent technical nodes, or versatile corporate specialists, we structure tailored sourcing pipelines. By treating your corporate ambitions with the highest level of professionalism, we fulfill critical recruitment milestones.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
