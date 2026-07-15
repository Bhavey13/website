import React from 'react';
import { Heart, ArrowUp, Mail, Linkedin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Main info panel */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <Logo lightText={true} />
            </div>

            <p className="font-display font-semibold text-sm bg-gradient-to-r from-brand-teal to-brand-orange bg-clip-text text-transparent">
              Talent Partners for Startups & GCCs
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping Startups and GCCs build exceptional teams through strategic talent acquisition.
            </p>

            {/* Quick Contacts */}
            <div className="pt-4 space-y-3 text-xs font-sans text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="mailto:contact@nvaraa.com" className="text-white hover:text-brand-orange hover:underline transition-all font-mono">
                  contact@nvaraa.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-brand-teal shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/nvaraa-solutions/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-brand-orange hover:underline transition-all font-sans"
                >
                  Nvaraa
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f37a1b]" />
                <a href="tel:+918660405328" className="text-white hover:text-brand-orange hover:underline transition-all font-mono">
                  +91 86604 05328
                </a>
              </div>
            </div>
          </div>

          {/* Quick links group 1 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-300">
              Our Specialized Practices
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Founding Team Practice</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Growth Hiring Practice</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Technical Leadership & Core</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Strategic & Operational Core</a>
              </li>
            </ul>
          </div>

          {/* Quick links group 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-300">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">Who We Are</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-orange transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-orange transition-colors">Our Hiring Framework</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-orange transition-colors">Start the Conversation</a>
              </li>
            </ul>
          </div>

          {/* Top of page trigger */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start pt-2">
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Top of Page
              <ArrowUp className="w-4 h-4 text-slate-500" />
            </button>
          </div>

        </div>

        {/* Closing details & compliance footer rail */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500">
          <div>
            © {new Date().getFullYear()} Nvaraa. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built for 
            <span className="font-semibold text-slate-400"> Exceptional Businesses</span> 
            with 
            <Heart className="w-3.5 h-3.5 text-brand-orange shrink-0 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
