'use client';

import { Container, Section, SectionHeader, Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui';
import { experiences } from '@/data/experience';
import { rolesICanContribute, coreExpertise, areasOfInterest } from '@/data/personal';

export const Experience = () => {
  return (
    <Section id="experience" className="bg-dark-50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Experience & Expertise" 
          subtitle="Detailed history of my professional roles and the core areas where I deliver strategic value."
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Experience Timeline Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Work History
            </h3>
            
            {experiences.map((exp) => (
              <Card key={exp.id} variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/60 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{exp.period}</span>
                        {exp.current && (
                          <Badge variant="success" size="sm">Current</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold text-dark-900">{exp.role}</CardTitle>
                      <p className="text-primary-600 font-semibold">{exp.company}</p>
                      {exp.location && (
                        <p className="text-xs text-dark-400 mt-1 flex items-center gap-1">
                          <span>📍</span> {exp.location}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-dark-600 text-sm md:text-base leading-relaxed">
                    {exp.overview}
                  </p>
                  
                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div>
                      <h4 className="font-bold text-dark-800 text-sm mb-3 uppercase tracking-wider">Key Responsibilities</h4>
                      <ul className="grid sm:grid-cols-1 gap-2.5">
                        {exp.responsibilities.map((resp, i) => {
                          const parts = resp.split(': ');
                          const hasHeading = parts.length > 1;
                          return (
                            <li key={i} className="flex items-start gap-2 text-dark-600 text-sm">
                              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span className="leading-relaxed">
                                {hasHeading ? (
                                  <>
                                    <strong className="text-dark-800 font-semibold">{parts[0]}</strong>: {parts.slice(1).join(': ')}
                                  </>
                                ) : resp}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* Highlights (LEXA Special) */}
                  {'highlights' in exp && exp.highlights && (exp.highlights as string[]).length > 0 && (
                    <div className="bg-primary-50/40 rounded-xl p-5 border border-primary-100">
                      <h4 className="font-bold text-primary-800 text-xs mb-3 uppercase tracking-wider">Key Highlights</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {(exp.highlights as string[]).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-dark-700 text-xs">
                            <span className="text-primary-500">✨</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions Worked Around (ESSPL Special) */}
                  {'solutions' in exp && exp.solutions && (exp.solutions as string[]).length > 0 && (
                    <div>
                      <h4 className="font-bold text-dark-800 text-xs mb-3 uppercase tracking-wider">Solutions Worked Around</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(exp.solutions as string[]).map((sol) => (
                          <Badge key={sol} variant="secondary" className="text-[10px] uppercase font-semibold tracking-wider">
                            {sol}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Learnings (ESSPL Special) */}
                  {'learnings' in exp && exp.learnings && (
                    <div className="bg-slate-100/60 rounded-xl p-4 border-l-4 border-slate-400">
                      <h4 className="font-bold text-dark-800 text-xs mb-1.5 uppercase tracking-wider">Key Learnings</h4>
                      <p className="text-dark-600 text-xs leading-relaxed italic">
                        "{exp.learnings}"
                      </p>
                    </div>
                  )}

                  {/* Skills Developed */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-4 border-t border-dark-200/60">
                      <h4 className="font-bold text-dark-800 text-xs mb-2.5 uppercase tracking-wider">Skills Developed</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="dark" className="text-[10px]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Expertise & Contribute Sidebar */}
          <div className="space-y-8">
            {/* Roles I Can Contribute In */}
            <div>
              <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
                Roles
              </h3>
              <Card variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/60">
                <p className="text-dark-600 text-sm mb-6 leading-relaxed">
                  Rather than defining myself through a single designation, I enjoy contributing wherever business strategy, technology, and execution intersect.
                </p>
                <div className="flex flex-wrap gap-2">
                  {rolesICanContribute.map((role) => (
                    <Badge key={role} variant="primary" className="text-xs py-1 px-2.5 font-medium">
                      {role}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Core Expertise */}
            <div>
              <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
                Expertise
              </h3>
              <div className="space-y-4">
                {Object.entries(coreExpertise).map(([category, skills]) => (
                  <Card key={category} variant="outlined" padding="md" className="bg-white shadow-sm border-dark-200/60">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">
                        {category === 'product' ? '🎯' :
                         category === 'business' ? '📈' :
                         category === 'delivery' ? '📦' :
                         category === 'technology' ? '💻' : '⚡'}
                      </span>
                      <h4 className="font-bold text-dark-900 capitalize text-sm">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Areas of Professional Interest */}
            <div>
              <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
                Interests
              </h3>
              <Card variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/60">
                <p className="text-dark-600 text-xs mb-4">
                  Domains and emerging tech fields I follow and actively build expertise in:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {areasOfInterest.map((interest) => (
                    <Badge key={interest} variant="outline" className="text-[10px] py-0.5 border-primary-200 text-primary-700 bg-primary-50/30">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};