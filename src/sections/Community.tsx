'use client';

import { Container, Section, SectionHeader, Card, Badge, Image } from '@/components/ui';
import { events, communityInvolvement } from '@/data/community';

const ecosystemImages = [
  { src: "/1780298350078.jpg.jpeg", alt: "Startup Pitch & Discussion" },
  { src: "/1780627914625.jpg.jpeg", alt: "Ecosystem Partner Event" },
  { src: "/1780627915192.jpg.jpeg", alt: "Odisha Founder Community meetup" },
  { src: "/1783325367277.jpg.jpeg", alt: "LEXA Launch & Sprint Planning" },
  { src: "/1783325367352.jpg.jpeg", alt: "Google Build with AI Bhubaneswar" },
  { src: "/1783325367649.jpg.jpeg", alt: "Odisha Technology Centre Bootcamp" },
  { src: "/1783501507592.jpg.jpeg", alt: "Consulting & Growth Advisory Meetup" },
  { src: "/Screenshot_2026-07-10-18-34-49-42_1c337646f29875672b5a61192b9010f9.jpg.jpeg", alt: "Summer70 Delivery and Deployment" }
];

export const Community = () => {
  const pastEvents = events.filter(e => !e.upcoming);
  const upcomingEvents = events.filter(e => e.upcoming);

  return (
    <Section id="community" className="bg-dark-50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-dark-50 via-white to-dark-50 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Community & Startup Ecosystem" 
          subtitle="Learning beyond the office by actively engaging with founders, builders, and modern technology events."
          align="center"
        />

        {/* Community Involvement Purpose */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/80">
            <div className="prose prose-dark max-w-none space-y-4">
              <p className="text-dark-600 text-sm md:text-base leading-relaxed">
                {communityInvolvement.purpose}
              </p>
              <p className="text-dark-600 text-sm md:text-base leading-relaxed font-medium italic border-l-4 border-primary-500 pl-4">
                &ldquo;{communityInvolvement.belief}&rdquo;
              </p>
              
              <div className="pt-4 border-t border-dark-100">
                <h4 className="font-bold text-dark-900 text-xs uppercase tracking-wider mb-2">Why I Participate</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {communityInvolvement.participationGoals.map((goal, i) => (
                    <div key={i} className="flex items-start gap-2 text-dark-600 text-xs md:text-sm">
                      <span className="text-primary-500 font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Startup Ecosystem Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
            Startup Ecosystem Visuals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ecosystemImages.map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden border border-dark-200/80 bg-white aspect-square shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300"
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Visual hover caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
                  {/* <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    {image.alt}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events List */}
        {pastEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6 max-w-4xl mx-auto">
              Learning Beyond the Office
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {pastEvents.map((event) => (
                <Card key={event.id} variant="outlined" padding="md" className="bg-white hover:border-primary-300 hover:shadow-md transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Event image & meta */}
                    <div className="md:col-span-1 flex flex-col justify-between">
                      <div>
                        {event.gallery && event.gallery.length > 0 && (
                          <div className="rounded-xl overflow-hidden border border-dark-200 aspect-video mb-3 shadow-sm">
                            <Image 
                              src={event.gallery[0]} 
                              alt={event.name} 
                              className="w-full h-full object-cover hover:scale-103 transition-transform duration-300" 
                            />
                          </div>
                        )}
                        <h4 className="text-base font-bold text-dark-900 leading-snug">{event.name}</h4>
                        <p className="text-[10px] text-dark-500 mt-1">{event.organizer}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        <Badge variant="secondary" className="text-[9px]">{event.date}</Badge>
                        <Badge variant="dark" className="text-[9px]">{event.location}</Badge>
                      </div>
                    </div>
                    
                    {/* Event details */}
                    <div className="md:col-span-2 space-y-3 md:border-l md:border-dark-100 md:pl-6">
                      <p className="text-dark-600 text-xs md:text-sm leading-relaxed">
                        {event.about}
                      </p>
                      
                      {/* Key Learnings */}
                      {event.keyLearnings && event.keyLearnings.length > 0 && (
                        <div>
                          <h5 className="font-bold text-dark-800 text-[10px] uppercase tracking-wider mb-1.5">Key Learnings</h5>
                          <ul className="space-y-1">
                            {event.keyLearnings.map((learning, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-dark-600 text-xs">
                                <span className="text-primary-500 font-bold">•</span>
                                <span className="leading-relaxed">{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* People Connected With */}
                      {event.peopleConnected && event.peopleConnected.length > 0 && (
                        <div>
                          <h5 className="font-bold text-dark-800 text-[10px] uppercase tracking-wider mb-1.5">People Connected With</h5>
                          <div className="flex flex-wrap gap-1">
                            {event.peopleConnected.map((person) => (
                              <Badge key={person} variant="dark" className="text-[9px] font-semibold py-0.5 px-1.5">
                                {person}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* LinkedIn Post Redirect */}
                      {event.linkedinPost && event.linkedinPost !== '#' && (
                        <div className="pt-2 border-t border-dark-100 mt-3">
                          <a 
                            href={event.linkedinPost} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary-600 hover:text-primary-700 font-bold text-[10px] flex items-center gap-1"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            View LinkedIn Post
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-lg font-bold text-dark-900 mb-6 uppercase tracking-widest text-primary-600">
              Conferences & Events
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} variant="outlined" padding="sm" className="bg-white border-dark-200/80 hover:border-primary-300 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-[9px] text-dark-500 font-semibold">{event.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-dark-900 leading-snug mb-1">{event.name}</h4>
                    <p className="text-[9px] text-primary-600 font-medium mb-2">{event.organizer}</p>
                    <p className="text-dark-600 text-[11px] leading-relaxed mb-3">{event.about}</p>
                  </div>
                  <Badge variant="dark" className="text-[8px] font-semibold tracking-wider self-start uppercase">
                    📍 {event.location}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};