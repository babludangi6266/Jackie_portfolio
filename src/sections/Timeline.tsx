'use client';

import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui';
import { timeline, careerOverview } from '@/data/personal';

export const Timeline = () => {
  return (
    <Section id="timeline" className="bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/20 to-white pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeader
          title="Professional Journey"
          subtitle="How my experience evolved from client discovery and sales to technology consulting and startup execution."
          align="center"
        />

        {/* Career Overview Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card variant="outlined" padding="lg" className="bg-primary-50/30 border-primary-100 backdrop-blur-sm shadow-sm">
            <div className="flex gap-4 items-start">
              <span className="text-4xl flex-shrink-0">🗺️</span>
              <div>
                <h3 className="text-lg font-bold text-dark-900 mb-2">My Journey in Perspective</h3>
                <p className="text-dark-600 leading-relaxed text-sm md:text-base">
                  {careerOverview}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 -translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.period} className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 md:top-auto w-5 h-5 rounded-full bg-primary-600 border-4 border-white z-10 shadow-md animate-pulse" />
                  
                  {/* Left spacer / content for larger screens */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'}`}>
                    <Card
                      variant="outlined"
                      padding="md"
                      className="w-full md:max-w-md hover:border-primary-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl flex-shrink-0">{index < 3 ? '💼' : '🚀'}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{item.period}</span>
                            {item.current && (
                              <Badge variant="success" size="sm">Currently</Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-dark-900">{item.role}</h3>
                          <p className="text-primary-600 font-semibold text-sm mb-2">{item.company}</p>
                          <p className="text-dark-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Opposite empty space for larger screens */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
