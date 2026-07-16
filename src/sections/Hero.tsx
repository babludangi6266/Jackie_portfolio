'use client';

import { Hero04 } from '@/components/ui/hero-04';
import { personalInfo } from '@/data/personal';
import { Container } from '@/components/ui/Container';

export const Hero = () => {
  const heroValues = {
    title: personalInfo.name,
    titleLine2: "Business Consultant | Project Manager | Product Strategist | Founder",
    description: personalInfo.heroDescription,
    // A premium, high-quality, abstract tech dark gradient wash image
    washImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    primaryImage: personalInfo.profileImage, // Jackie's profile photo
    primaryAlt: personalInfo.name,
    animation: 'subtle' as const,
    primaryCTA: {
      ctaEnabled: true,
      text: 'View Projects',
      link: '#projects',
      variant: 'primary' as const,
      size: 'lg' as const,
    },
    secondaryCTA: {
      ctaEnabled: true,
      text: "Let's Connect",
      link: '#contact',
      variant: 'glassOutline' as const,
    },
  };

  return (
    <div id="home" className="relative bg-[#07090e] pt-0 border-b border-white/5 overflow-hidden">
      {/* Integrated Hero04 Component */}
      <Hero04 {...heroValues} />

      {/* Hero Social Links Bar - Premium Dark Glassmorphic Footer */}
      <div className="relative z-20 bg-dark-950/40 backdrop-blur-md border-t border-white/5 py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-xs sm:text-sm text-dark-300 font-medium">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-primary-400 transition-colors py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 hover:text-primary-400 transition-colors py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{personalInfo.email}</span>
            </a>
            
            <a 
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-2 hover:text-primary-400 transition-colors py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{personalInfo.phone}</span>
            </a>
            
            <span className="flex items-center gap-2 py-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personalInfo.location}</span>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};