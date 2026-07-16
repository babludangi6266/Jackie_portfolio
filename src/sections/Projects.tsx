'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, CardContent, CardFooter, CardTitle, CardDescription, Badge, Button, Image } from '@/components/ui';
import { projects } from '@/data/projects';
import { projectStats } from '@/data/experience';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects" className="bg-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Projects should be the strongest section of the website. Instead of looking like a gallery, each project tells a business story."
          align="center"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              variant="outlined" 
              padding="none" 
              className="overflow-hidden hover:border-primary-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full bg-white border-dark-200/80 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="relative aspect-video overflow-hidden border-b border-dark-100">
                  <Image
                    src={project.gallery?.[0] || project.screenshots?.[0] || '/jackie_img.png'}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-md">
                    {project.number}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-dark-500">
                    <Badge variant="secondary" className="font-semibold">{project.industry}</Badge>
                    {project.timeline && <span>{project.timeline}</span>}
                  </div>
                  <CardTitle className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-dark-600 text-sm line-clamp-3 leading-relaxed">
                    {project.overview}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="bg-dark-50/50 p-4 border-t border-dark-100/60">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-primary-600 hover:text-primary-700 hover:bg-primary-50 font-semibold" 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setSelectedProject(project); 
                  }}
                >
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Project Statistics section */}
        <div className="max-w-6xl mx-auto mb-16 pt-12 border-t border-dark-200/60">
          <h3 className="text-center text-xl font-bold text-dark-900 mb-8 uppercase tracking-widest text-primary-600">
            Project Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(projectStats).map(([key, value]) => {
              const label = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())
                .trim();
              return (
                <div key={key} className="text-center p-4 rounded-xl bg-dark-50 border border-dark-200/60 shadow-sm hover:border-primary-300 transition-all duration-300">
                  <div className="text-2xl font-black text-primary-600 mb-1">{value}</div>
                  <div className="text-[10px] font-bold text-dark-600 uppercase tracking-wider leading-tight">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* My Approach to Every Project Banner */}
        <div className="max-w-4xl mx-auto">
          <Card variant="outlined" padding="lg" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white border-none shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-[180px] leading-none opacity-5 select-none pointer-events-none font-bold">💡</div>
            <div className="relative z-10 p-4 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold border-b border-white/20 pb-4">My Approach to Every Project</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-white/40 pl-4">
                "I don't believe software begins with code. Every successful product starts with understanding people, identifying the real problem, and designing systems that make work simpler — not more complicated."
              </p>
              <p className="text-sm text-primary-100 leading-relaxed max-w-2xl pt-2">
                Whether it's an ERP for manufacturing, a healthcare platform, or an EdTech ecosystem, my role remains the same:
                <strong className="text-white block mt-2 text-base font-semibold">
                  Understand deeply. Think strategically. Execute carefully. Improve continuously.
                </strong>
              </p>
            </div>
          </Card>
        </div>
      </Container>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Modal backdrop */}
            <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            
            {/* Modal content */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-dark-200">
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-dark-200 p-5 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{selectedProject.industry} Case Study</span>
                  <h2 id="modal-title" className="text-2xl font-bold text-dark-900 mt-1">{selectedProject.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="p-2 rounded-xl text-dark-500 hover:text-dark-700 hover:bg-dark-100 transition-all duration-200" 
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Meta details banner */}
                <div className="flex flex-wrap gap-2.5">
                  <Badge variant="primary" className="text-xs py-1 px-3">Project #{selectedProject.number}</Badge>
                  <Badge variant="secondary" className="text-xs py-1 px-3">{selectedProject.industry}</Badge>
                  {selectedProject.timeline && (
                    <Badge variant="dark" className="text-xs py-1 px-3">{selectedProject.timeline}</Badge>
                  )}
                </div>

                {/* Situation, Challenge, Approach, Technology, Outcome formatted story */}
                <div className="space-y-8">
                  {/* Situation */}
                  <section className="space-y-2">
                    <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Situation</h3>
                    <p className="text-dark-600 text-sm md:text-base leading-relaxed pl-4">
                      {selectedProject.overview}
                    </p>
                  </section>

                  {/* Challenge */}
                  {selectedProject.businessChallenge && (
                    <section className="space-y-2">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Challenge</h3>
                      <p className="text-dark-600 text-sm md:text-base leading-relaxed pl-4">
                        {selectedProject.businessChallenge}
                      </p>
                    </section>
                  )}

                  {/* Approach */}
                  {selectedProject.myContribution && (
                    <section className="space-y-2">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Approach & Contribution</h3>
                      {Array.isArray(selectedProject.myContribution) ? (
                        <ul className="space-y-2 pl-4 pt-1">
                          {selectedProject.myContribution.map((contribution, index) => (
                            <li key={index} className="flex items-start gap-2 text-dark-600 text-sm">
                              <span className="text-primary-500 font-bold mt-0.5">✓</span>
                              <span className="leading-relaxed">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-dark-600 text-sm md:text-base leading-relaxed pl-4">
                          {selectedProject.myContribution}
                        </p>
                      )}
                    </section>
                  )}

                  {/* Modules detail if applicable */}
                  {'modules' in selectedProject && selectedProject.modules && (selectedProject.modules as string[]).length > 0 && (
                    <section className="space-y-2">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">System Modules</h3>
                      <div className="flex flex-wrap gap-1.5 pl-4">
                        {(selectedProject.modules as string[]).map((mod) => (
                          <Badge key={mod} variant="secondary" className="text-xs">{mod}</Badge>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Technology */}
                  <section className="space-y-3">
                    <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Technology Stack</h3>
                    <div className="pl-4">
                      {selectedProject.technologyStack ? (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {Object.entries(selectedProject.technologyStack).map(([category, techs]) => (
                            <div key={category}>
                              <h4 className="font-bold text-dark-900 text-xs uppercase tracking-wider mb-2">{category}</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {(techs as string[]).map((tech) => (
                                  <Badge key={tech} variant="primary" className="text-[10px]">{tech}</Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <div className="flex flex-wrap gap-1.5">
                            {('technologies' in selectedProject && selectedProject.technologies ? (selectedProject.technologies as string[]) : []).map((tech) => (
                              <Badge key={tech} variant="primary" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Outcome */}
                  {(selectedProject.outcome || selectedProject.impact) && (
                    <section className="space-y-2">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Outcome & Impact</h3>
                      <p className="text-dark-600 text-sm md:text-base leading-relaxed pl-4">
                        {selectedProject.outcome || selectedProject.impact}
                      </p>
                    </section>
                  )}

                  {/* Testimonial specific to the project */}
                  {'testimonial' in selectedProject && selectedProject.testimonial && (
                    <section className="bg-primary-50/50 rounded-xl p-5 border border-primary-100 mx-4">
                      <p className="text-dark-700 text-sm italic leading-relaxed">
                        &ldquo;{(selectedProject.testimonial as any).quote}&rdquo;
                      </p>
                      <div className="mt-3 flex items-center gap-2.5">
                        <span className="text-lg">👤</span>
                        <div>
                          <p className="font-bold text-dark-900 text-xs">{(selectedProject.testimonial as any).author}</p>
                          <p className="text-[10px] text-dark-500">{(selectedProject.testimonial as any).role}</p>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Project Gallery/Screenshots */}
                  {((selectedProject.gallery && selectedProject.gallery.length > 0) || ('screenshots' in selectedProject && selectedProject.screenshots && (selectedProject.screenshots as string[]).length > 0)) && (
                    <section className="space-y-4">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">Gallery & Screenshots</h3>
                      <div className="grid sm:grid-cols-2 gap-4 pl-4">
                        {(selectedProject.gallery || (selectedProject as any).screenshots).map((img: string, i: number) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-dark-200 shadow-sm aspect-video">
                            <Image 
                              src={img} 
                              alt={`${selectedProject.name} layout ${i + 1}`} 
                              className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" 
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Architecture Diagram if available */}
                  {'architecture' in selectedProject && selectedProject.architecture && (
                    <section className="space-y-4">
                      <h3 className="text-lg font-bold text-dark-900 border-l-4 border-primary-500 pl-3">System Architecture</h3>
                      <div className="rounded-xl overflow-hidden border border-dark-200 shadow-sm max-w-2xl mx-auto">
                        <Image 
                          src={(selectedProject as any).architecture} 
                          alt={`${selectedProject.name} system architecture`} 
                          className="w-full h-auto" 
                        />
                      </div>
                    </section>
                  )}
                </div>

                {/* Footer and Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-dark-200/80">
                  {selectedProject.liveWebsite && selectedProject.liveWebsite !== '#' && (
                    <a href={selectedProject.liveWebsite} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Visit Live Website
                    </a>
                  )}
                  {selectedProject.googlePlay && selectedProject.googlePlay !== '#' && (
                    <a href={selectedProject.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      View on Google Play
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};