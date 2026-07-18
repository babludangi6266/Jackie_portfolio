'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 ${
      isScrolled ? 'pt-4' : 'pt-6'
    }`}>
      <div className={`mx-auto max-w-6xl transition-all duration-500 rounded-2xl ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border border-dark-200/80 px-6 py-2.5' 
          : 'bg-transparent px-4 py-0'
      }`}>
        <div className="flex items-center justify-between h-14">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-dark-900 hover:text-primary-600' : 'text-white hover:text-primary-400'
            }`}
          >
            JM
          </a>
          
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-xs font-bold transition-colors uppercase tracking-wider ${
                  isScrolled ? 'text-dark-600 hover:text-primary-600' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={() => scrollToSection('#contact')}>
              Let's Connect
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-xl ${
              isScrolled ? 'text-dark-600 hover:bg-dark-100/60' : 'text-white/80 hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dark-100/60 mt-2 animate-slide-down">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 text-sm font-semibold text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" className="w-full mt-1" onClick={() => scrollToSection('#contact')}>
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};