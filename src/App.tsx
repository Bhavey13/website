/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { JobRequirementSubmission } from './types';

export default function App() {
  const [activeRequirements, setActiveRequirements] = useState<JobRequirementSubmission[]>([]);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Hydrate states on local lifecycle initialization
  useEffect(() => {
    try {
      const storedReqs = localStorage.getItem('nvaraa_requirements');
      if (storedReqs) setActiveRequirements(JSON.parse(storedReqs));
    } catch (e) {
      console.warn('Local storage hydration skipped:', e);
    }
  }, []);

  const handleRequirementSuccess = (submission: JobRequirementSubmission) => {
    const updated = [submission, ...activeRequirements];
    setActiveRequirements(updated);
    try {
      localStorage.setItem('nvaraa_requirements', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleScrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServicesSearchInitiate = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleScrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-teal selection:text-white">
      {/* Dynamic Header */}
      <Header
        onExploreClick={() => handleScrollToSection('services')}
        onHireClick={() => {
          setPreselectedService('');
          handleScrollToSection('contact');
        }}
      />

      <main>
        {/* Dynamic Hero banner */}
        <Hero
          onHireClick={() => {
            setPreselectedService('');
            handleScrollToSection('contact');
          }}
          onExploreServicesClick={() => {
            handleScrollToSection('services');
          }}
        />

        {/* Philosophy section */}
        <AboutUs />

        {/* Dynamic specialties list */}
        <Services onHireClick={handleServicesSearchInitiate} />

        {/* Strategic values grids */}
        <WhyChooseUs />

        {/* Sequence pipeline diagram */}
        <Process />

        {/* Strategic Contact and dynamic employer submit forms */}
        <Contact
          onSubmitRequirement={handleRequirementSuccess}
          activeRequirements={activeRequirements}
          preselectedService={preselectedService}
        />
      </main>

      {/* Structured global footer */}
      <Footer />
    </div>
  );
}

