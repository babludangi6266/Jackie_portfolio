'use client';

import { Container, Section, SectionHeader, Card } from '@/components/ui';
import { aboutContent } from '@/data/personal';

export const About = () => {
  return (
    <Section id="about" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="About Me" 
          subtitle="Getting to know me beyond my work."
          align="center"
        />
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          {/* Left Column: Personal Narrative */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3">
              My Journey & Philosophy
            </h3>
            <div className="text-dark-600 text-sm md:text-base leading-relaxed space-y-4 font-normal">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Summary, Vision, Mission, Philosophy */}
          <div className="space-y-6">
            {/* Professional Summary */}
            <Card variant="outlined" padding="md" className="bg-dark-50/50 border-dark-200/60 shadow-sm">
              <h4 className="font-bold text-dark-900 text-sm uppercase tracking-wider mb-2">Professional Summary</h4>
              <p className="text-dark-600 text-xs md:text-sm leading-relaxed">
                {aboutContent.professionalSummary}
              </p>
            </Card>

            {/* Vision, Mission, Philosophy Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card variant="outlined" padding="md" className="bg-white border-dark-200/60 shadow-sm hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👁️‍🗨️</span>
                  <h5 className="font-bold text-dark-900 text-xs uppercase tracking-wider">Vision</h5>
                </div>
                <p className="text-dark-600 text-[11px] md:text-xs leading-relaxed">
                  {aboutContent.vision}
                </p>
              </Card>

              <Card variant="outlined" padding="md" className="bg-white border-dark-200/60 shadow-sm hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🚀</span>
                  <h5 className="font-bold text-dark-900 text-xs uppercase tracking-wider">Mission</h5>
                </div>
                <p className="text-dark-600 text-[11px] md:text-xs leading-relaxed">
                  {aboutContent.mission}
                </p>
              </Card>

              <Card variant="outlined" padding="md" className="bg-primary-50/40 border-primary-200 shadow-sm sm:col-span-2 hover:border-primary-400 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💡</span>
                  <h5 className="font-bold text-primary-800 text-xs uppercase tracking-wider">Core Philosophy</h5>
                </div>
                <p className="text-dark-700 text-xs leading-relaxed italic font-medium">
                  {aboutContent.philosophy}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};