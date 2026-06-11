import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onExploreClick: () => void;
  onHireClick: () => void;
}

export default function Header({ onExploreClick, onHireClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Nvaraa', href: '#why-us' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 focus:outline-none group"
          >
            <Logo lightText={!isScrolled} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans font-medium text-sm text-slate-600 hover:text-brand-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onExploreClick}
              className="font-sans font-medium text-sm text-slate-700 hover:text-brand-orange px-4 py-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal rounded-md cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={onHireClick}
              className="inline-flex items-center gap-1.5 font-sans font-bold text-sm bg-brand-teal hover:bg-brand-teal-dark text-white px-5 py-2.5 rounded-lg shadow-sm shadow-slate-200 transition-all hover:translate-y-[-1px] focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal cursor-pointer"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-slate-600 hover:text-brand-orange md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="flex flex-col gap-3 px-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans font-medium text-base text-slate-700 hover:text-brand-orange py-2 hover:bg-slate-50 rounded-lg px-3 transition-all"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-slate-100 my-1" />
            <div className="flex flex-col gap-2.5 px-3 pt-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onExploreClick();
                }}
                className="w-full text-center font-sans font-medium text-slate-700 hover:text-brand-orange py-2 transition-colors border border-slate-200 rounded-lg cursor-pointer"
              >
                Our Services
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onHireClick();
                }}
                className="w-full text-center font-sans font-semibold text-white bg-brand-teal hover:bg-brand-teal-dark py-2.5 rounded-lg shadow-sm cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
