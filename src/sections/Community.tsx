'use client';

import { Container, Section, SectionHeader, Card, CardContent, Badge, Image } from '@/components/ui';
import { events, communityInvolvement } from '@/data/community';

export const Community = () => {
  const pastEvents = events.filter(e => !e.upcoming);
  const upcomingEvents = events.filter(e => e.upcoming);

  return (
    <Section id="community" className="bg-dark-50">
      <Container>
        <SectionHeader 
          title="Startup Community & Events" 
          subtitle="Learning Beyond the Office"
          align="center"
        />

        <Card variant="outlined" padding="lg" className="mb-12 max-w-4xl mx-auto">
          <div className="prose prose-dark max-w-none space-y-4">
            <p className="text-lg text-dark-600">{communityInvolvement.purpose}</p>
            <p className="text-dark-600">{communityInvolvement.belief}</p>
            <div>
              <h4 className="font-semibold text-dark-900 mb-2">I participate to:</h4>
              <ul className="space-y-1">
                {communityInvolvement.participationGoals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-600">
                    <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {pastEvents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">Past Events</h3>
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <Card key={event.id} variant="outlined" padding="lg">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      {event.gallery.length > 0 && (
                        <div className="rounded-xl overflow-hidden border border-dark-200 aspect-video mb-4">
                          <Image src={event.gallery[0]} alt={event.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{event.date}</Badge>
                        <Badge variant="dark">{event.location}</Badge>
                      </div>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-dark-900 mb-1">{event.name}</h4>
                        <p className="text-sm text-dark-500">{event.organizer}</p>
                      </div>
                      <p className="text-dark-600">{event.about}</p>
                      
                      {event.keyLearnings.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-dark-900 mb-2">Key Learnings</h5>
                          <ul className="space-y-1">
                            {event.keyLearnings.map((learning, i) => (
                              <li key={i} className="flex items-start gap-2 text-dark-600 text-sm">
                                <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {learning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.peopleConnected.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-dark-900 mb-2">People Connected With</h5>
                          <div className="flex flex-wrap gap-2">
                            {event.peopleConnected.map((person) => (
                              <Badge key={person} variant="dark" className="text-xs">{person}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 pt-4 border-t border-dark-200">
                        {event.linkedinPost !== '#' && (
                          <a href={event.linkedinPost} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            View LinkedIn Post
                          </a>
                        )}
                        {event.gallery.length > 1 && (
                          <span className="text-sm text-dark-500">+{event.gallery.length - 1} more photos</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {upcomingEvents.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} variant="outlined" padding="lg" className="border-primary-200 bg-primary-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">Upcoming</Badge>
                    <Badge variant="secondary">{event.date}</Badge>
                  </div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2">{event.name}</h4>
                  <p className="text-sm text-dark-500 mb-2">{event.organizer}</p>
                  <p className="text-sm text-dark-500 mb-4">{event.location}</p>
                  <p className="text-dark-600 text-sm mb-4">{event.about}</p>
                  <Badge variant="dark" className="text-xs">{event.location}</Badge>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};