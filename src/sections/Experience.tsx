'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui';
import { experiences, projectStats } from '@/data/experience';
import { timeline, rolesICanContribute, coreExpertise, careerHighlights } from '@/data/personal';

type Experience = typeof experiences[0];
type ExperienceDetail = Experience & {
  solutions?: string[];
  learnings?: string;
};

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'details' | 'roles' | 'expertise' | 'highlights'>('timeline');
  const [activeExperience, setActiveExperience] = useState<ExperienceDetail>(experiences[0]);

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'details', label: 'Details', icon: '📋' },
    { id: 'roles', label: 'Roles I Contribute In', icon: '🎯' },
    { id: 'expertise', label: 'Core Expertise', icon: '💡' },
    { id: 'highlights', label: 'Career Highlights', icon: '⭐' },
  ];

  return (
    <Section id="experience" className="bg-dark-50">
      <Container>
        <SectionHeader 
          title="Professional Experience" 
          subtitle="Every professional experience has shaped how I think about technology, business, and execution."
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-dark-600 hover:bg-primary-50 hover:text-primary-600 border border-dark-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'timeline' && (
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-400" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.period} className="relative flex">
                  <div className="absolute left-8 top-4 w-4 h-4 rounded-full bg-primary-500 border-4 border-white z-10 shadow-lg" />
                  <div className="ml-16 w-full">
                    <Card variant="outlined" padding="md" className="relative hover:border-primary-300 transition-colors">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl flex-shrink-0">{index < 3 ? '📍' : '🚀'}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-primary-600">{item.period}</span>
                            {item.current && (
                              <Badge variant="success" size="sm">Current</Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-dark-900">{item.role}</h3>
                          <p className="text-primary-600 font-medium">{item.company}</p>
                          {item.location && <p className="text-dark-500 text-sm">{item.location}</p>}
                          <p className="mt-3 text-dark-600">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp) => {
              const detail = exp as ExperienceDetail;
              return (
                <Card key={exp.id} variant="outlined" padding="lg">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-dark-500 mt-1">{exp.period}{exp.current && ' — Present'}</p>
                      </div>
                      {exp.current && <Badge variant="success">Current</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-dark-600 leading-relaxed">{exp.overview}</p>
                    
                    {exp.responsibilities && (
                      <div>
                        <h4 className="font-semibold text-dark-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-dark-600">
                              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {detail.solutions && (
                      <div>
                        <h4 className="font-semibold text-dark-900 mb-3">Solutions Worked Around</h4>
                        <div className="flex flex-wrap gap-2">
                          {detail.solutions.map((sol) => (
                            <Badge key={sol} variant="secondary" className="text-xs">{sol}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {detail.modules && (
                      <div>
                        <h4 className="font-semibold text-dark-900 mb-3">Modules</h4>
                        <div className="flex flex-wrap gap-2">
                          {detail.modules.map((mod) => (
                            <Badge key={mod} variant="secondary" className="text-xs">{mod}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {detail.technologies && (
                      <div>
                        <h4 className="font-semibold text-dark-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {detail.technologies.map((tech) => (
                            <Badge key={tech} variant="primary" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {detail.learnings && (
                      <div className="bg-primary-50 rounded-xl p-4 border-l-4 border-primary-500">
                        <h4 className="font-semibold text-dark-900 mb-2">Key Learnings</h4>
                        <p className="text-dark-600">{detail.learnings}</p>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-dark-900 mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="dark" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="max-w-4xl mx-auto">
            <p className="text-dark-600 mb-8 max-w-3xl mx-auto text-center">
              Rather than defining myself through a single designation, I enjoy contributing wherever business strategy, technology, and execution intersect.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {rolesICanContribute.map((role) => (
                <Badge key={role} variant="primary" className="text-sm px-3 py-1">{role}</Badge>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'expertise' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(coreExpertise).map(([category, skills]) => (
              <Card key={category} variant="outlined" padding="lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-dark-900 text-lg">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'highlights' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(projectStats).map(([key, value]) => (
                <Card key={key} variant="outlined" padding="lg" className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">{value}</div>
                  <div className="text-sm text-dark-600">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </Card>
              ))}
            </div>
            
            <Card variant="outlined" padding="lg">
              <h3 className="text-xl font-bold text-dark-900 mb-6">Career Highlights</h3>
              <ul className="space-y-3">
                {careerHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-dark-600">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
            
            <div className="bg-primary-600 rounded-2xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                "I don&apos;t believe software begins with code. Every successful product starts with understanding people, identifying the real problem, and designing systems that make work simpler — not more complicated."
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};