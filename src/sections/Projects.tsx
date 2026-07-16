'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Button, Image } from '@/components/ui';
import { projects } from '@/data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects" className="bg-white">
      <Container>
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Projects should be the strongest section of the website. Instead of looking like a gallery, each project tells a business story with Situation, Challenge, Approach, Technology, and Outcome."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              variant="outlined" 
              padding="none" 
              className="overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.gallery?.[0] || project.screenshots?.[0] || '/jackie_img.png'}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="primary" className="text-sm">{project.number}</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{project.industry}</Badge>
                  {project.timeline && <span className="text-xs text-dark-500">{project.timeline}</span>}
                </div>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="line-clamp-3">{project.overview}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologyStack?.frontend?.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="dark" className="text-xs">{tech}</Badge>
                  ))}
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="dark" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-dark-50 px-6">
                <Button variant="ghost" size="sm" className="w-full" onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-dark-200 p-4 flex items-center justify-between z-10">
                <h2 id="project-modal-title" className="text-xl font-bold text-dark-900">{selectedProject.name}</h2>
                <button onClick={() => setSelectedProject(null)} className="p-2 rounded-lg text-dark-500 hover:text-dark-700 hover:bg-dark-100 transition-colors" aria-label="Close modal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 space-y-8">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">{selectedProject.number}</Badge>
                  <Badge variant="secondary">{selectedProject.industry}</Badge>
                  {selectedProject.timeline && <Badge variant="dark">{selectedProject.timeline}</Badge>}
                </div>

                <div className="prose prose-dark max-w-none space-y-6">
                  <section>
                    <h3 className="text-lg font-bold text-dark-900 mb-2">Overview</h3>
                    <p className="text-dark-600">{selectedProject.overview}</p>
                  </section>

                  {selectedProject.businessChallenge && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Business Challenge</h3>
                      <p className="text-dark-600">{selectedProject.businessChallenge}</p>
                    </section>
                  )}

                  {selectedProject.myContribution && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">My Contribution</h3>
                      <p className="text-dark-600">{selectedProject.myContribution}</p>
                    </section>
                  )}

                  {selectedProject.modules && selectedProject.modules.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Modules</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.modules.map((mod) => (
                          <Badge key={mod} variant="secondary">{mod}</Badge>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.myContribution && Array.isArray(selectedProject.myContribution) && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">My Contribution</h3>
                      <ul className="space-y-1">
                        {selectedProject.myContribution.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-dark-600">
                            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {selectedProject.technologyStack && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Technology Stack</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {Object.entries(selectedProject.technologyStack).map(([category, techs]) => (
                          <div key={category}>
                            <h4 className="font-medium text-dark-900 capitalize mb-2">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech) => (
                                <Badge key={tech} variant="primary" className="text-xs">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {selectedProject.keyFeatures.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.outcome && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Outcome</h3>
                      <p className="text-dark-600">{selectedProject.outcome}</p>
                    </section>
                  )}

                  {selectedProject.impact && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Impact</h3>
                      <p className="text-dark-600">{selectedProject.impact}</p>
                    </section>
                  )}

                  {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-4">Gallery</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {selectedProject.gallery.map((img, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-dark-200">
                            <Image src={img} alt={`${selectedProject.name} - ${i + 1}`} className="w-full h-64 object-cover" />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-dark-900 mb-4">Screenshots</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {selectedProject.screenshots.map((img, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-dark-200">
                            <Image src={img} alt={`${selectedProject.name} screenshot ${i + 1}`} className="w-full h-64 object-cover" />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {selectedProject.testimonial && (
                    <section className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                      <blockquote className="text-dark-700 italic">"{selectedProject.testimonial.quote}"</blockquote>
                      <footer className="mt-4">
                        <p className="font-semibold text-dark-900">{selectedProject.testimonial.author}</p>
                        <p className="text-sm text-dark-500">{selectedProject.testimonial.role}</p>
                      </footer>
                    </section>
                  )}

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-dark-200">
                    {selectedProject.liveWebsite && selectedProject.liveWebsite !== '#' && (
                      <a href={selectedProject.liveWebsite} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Live Website
                      </a>
                    )}
                    {selectedProject.googlePlay && selectedProject.googlePlay !== '#' && (
                      <a href={selectedProject.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Google Play
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};