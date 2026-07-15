import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Building2, Briefcase, Mail } from 'lucide-react';

interface HeroProps {
  onHireClick: () => void;
  onExploreServicesClick: () => void;
}

export default function Hero({ onHireClick, onExploreServicesClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-teal/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Futuristic grid overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text panel */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Promo Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-orange tracking-wide uppercase mb-6 shadow-xl shadow-black/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              Talent Partners for Startups & GCCs
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Building Teams That Shape Businesses.
              </span>
            </motion.h1>

            {/* Tagline / Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-xl sm:text-2xl font-semibold bg-gradient-to-r from-slate-100 to-brand-orange bg-clip-text text-transparent leading-snug mb-6"
            >
              Helping Startups and Global Capability Centers (GCCs) build exceptional teams through strategic talent acquisition.
            </motion.p>

            {/* Description / Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10"
            >
              Every company has a hiring strategy. Very few have a team-building strategy.
              <br /><br />
              At Nvaraa, we partner with startups and Global Capability Centers (GCCs) to build teams that become the foundation of long-term growth. Whether you're making your first hire or scaling rapidly, we combine strategic hiring with a boutique search approach to help you hire people who create lasting business impact.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onHireClick}
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-base bg-brand-teal hover:bg-brand-teal-light text-white px-7 py-3.5 rounded-xl shadow-lg shadow-brand-teal/25 transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <Mail className="w-5 h-5 text-brand-orange" />
                Book a Discovery Call
              </button>

              <button
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-base bg-slate-900 border border-slate-700 hover:border-brand-orange hover:bg-slate-800 text-slate-100 px-7 py-3.5 rounded-xl transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-brand-orange" />
                Our Hiring Practices
              </button>
            </motion.div>
          </div>

          {/* Graphical decorative showcase panel */}
          <div className="lg:col-span-12 xl:col-span-5 relative flex justify-center items-center mt-10 xl:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 p-0.5 border border-slate-810 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-orange/20 rounded-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-[14px] bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                
                {/* Micro tech indicators */}
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>FOUNDATION / CORE</span>
                  <span>TALENT ACQUISITION FRAMEWORK</span>
                </div>

                {/* Main branding visual */}
                <div className="my-auto flex flex-col gap-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center border border-brand-teal-light/20 text-brand-orange font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-200">Founding Team Practice</h4>
                      <p className="text-xs text-slate-400">Targeted boutique search for early-stage setups</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange-light font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-200">Strategic Assessment</h4>
                      <p className="text-xs text-slate-400">Thoughtful evaluation of Vision-Culture fit</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center border border-brand-teal-light/20 text-brand-orange font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-200 font-sans">Growth Hiring Practice</h4>
                      <p className="text-xs text-slate-400">Consistent expansion without quality compromise</p>
                    </div>
                  </div>
                </div>

                {/* Static graphic indicators */}
                <div className="flex justify-between items-center bg-slate-900/50 rounded-xl p-4 border border-slate-900">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                    <span className="font-sans text-xs font-medium text-slate-400">Hiring Partners Active</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
