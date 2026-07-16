'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, CardContent, CardFooter, CardTitle, Badge, Button } from '@/components/ui';

const articles = [
  {
    id: "deal-closed-1-75",
    title: "How I almost lost everything… but later closed a ₹1,75,000 deal",
    subtitle: "A personal story of resilience, restructuring, and closing a custom ERP project at LEXA.",
    date: "April 2026",
    readTime: "3 min read",
    tags: ["#FounderLife", "#BuildInPublic", "#Sales", "#ERP", "#LEXA"],
    linkedinUrl: "https://www.linkedin.com/in/jackie-mohanty-9214391b2/",
    content: `March was hard. Really hard. We made only ₹25,000 that entire month from a website development project. And honestly? I don’t want to fake success online. Because right now, we’re not doing anything “huge.” We’re just… building.

Till the end of April, closing sales felt almost impossible. At one point, I was handling: Sales, Content, Social media, Client calls, Project management, Company growth, Team coordination. Everything. Alone. And trust me, being a founder sounds exciting until you become the marketer, designer, sales guy, project manager, and customer support… all in the same day.

But somewhere deep down, I knew we were getting closer. So instead of stopping… We started restructuring. We brought in a CGO and a CMO to handle LEXA's sales growth, content creation, and social media management. And things slowly started changing. We posted 15+ reels on Instagram. A brand new page. No audience. No big following. Yet somehow… we crossed 80,000+ views. That gave us confidence. Because visibility creates opportunities.

Then came mid-April. A warm lead reached out to us. They wanted to develop a: Custom Manufacturing ERP & Workflow Automation System. A complete system to digitize and streamline: client enquiries, production, quality control, workflow, post-sales services… basically their entire operations.

We got on multiple calls. Followed up continuously for almost 2 weeks. Some days felt positive. Some days felt dead silent. But we kept showing up.

Then came 21st April. My birthday. I went to Maa Tara Tarini Temple. And maybe this sounds emotional… but I truly believe something shifted there. Because the moment I stepped out of the temple… I called the client one more time to finalise the papers. And without asking much… he simply said: “Yes.”

Agreement shared. Deal closed. ₹1,75,000 project confirmed. ₹70,000 received as a 40% advance to kick things off. That moment felt unreal. Not because of the money. But because of what it represented. Relief. Validation. Momentum. Hope.

This startup journey is weird. One month, you question everything. Next month, you’re signing your biggest deal. But I’m slowly learning: Consistency compounds. Even when results don’t show immediately.`
  },
  {
    id: "edtech-deal-1l",
    title: "I started posting on LinkedIn and closed a ₹1L project in 2 weeks",
    subtitle: "How building in public and networking led to our first custom EdTech platform contract.",
    date: "March 2026",
    readTime: "2 min read",
    tags: ["#ITConsulting", "#Edtech", "#BuildingInPublic", "#LEXA"],
    linkedinUrl: "https://www.linkedin.com/in/jackie-mohanty-9214391b2/",
    content: `As cliche as that sounds for LinkedIn, it’s actually true and sometimes even I can't believe it!

I had started posting on LinkedIn in an attempt to grow my own IT firm which I left my job for. And at first, it sucked. I got into an accident, drained my savings to pay for vehicle repairs. Couldn’t afford my own apartment so had to move in with my brother. Coded a website for a cafe under a tree with my co-founder, didn’t even get paid for it.

And just as I was dragging myself to hope, Siba Pratim Dash, an old college friend reached out. He had just gotten into NIT Rourkela and had also started teaching 9-10 class students who was looking to build an edtech platform.

We had a few meetings, discussed things, I sent the quotation and figma designs, and we closed the deal! And we’ve been working for over a week on the same. So far the scope of work includes a mobile application and a web platform along with 1 year of infrastructure & services.

Last week we:
- deployed the foundational server infrastructure with industry-standard security
- designed a scalable, non-relational database schema optimized for performance
- began the frontend implementation for the mobile application
- validated database models to ensure consistent data storage
- and successfully tested the connection between the Mobile App authentication screens and the Backend API

Working on this edtech platform with my co-founder Bablu Dangi has been a great experience and I’m excited to see where this goes!`
  },
  {
    id: "google-ai-lesson",
    title: "One conversation at Google Cloud's 'Build with AI' event...",
    subtitle: "A valuable product lesson learned during a lunch break with Abhijit Tripathy.",
    date: "June 2026",
    readTime: "3 min read",
    tags: ["#BuildWithAI", "#GDG", "#GoogleCloud", "#AI", "#LEXA"],
    linkedinUrl: "https://www.linkedin.com/in/jackie-mohanty-9214391b2/",
    content: `One unexpected conversation at Google Cloud's "Build with AI" event taught me a lesson no YouTube video or startup book ever could... One of my favourite moments from Google's Build with AI Bhubaneswar 2026 didn't happen on stage. It happened during the lunch break.

Earlier that day, I had attended an insightful session by Abhijit Tripathy, Chairman & Managing Director of Presear Softwares Pvt Ltd. His session on "Agentic RAG - Build Your Own Enterprise Knowledge Assistant" was packed with practical insights on how enterprises can leverage AI to build smarter, more reliable knowledge systems. As someone building an AI-first technology company, I was taking notes almost the entire time.

After the session, I noticed him sitting quietly, taking a short break. For a few seconds, I hesitated. Should I go? Will I disturb him? Then I reminded myself... The worst answer you can get is "No." So I walked over, introduced myself, and started a conversation.

To my surprise, he instantly recognised me from my former employer, ESSPL. That immediately made the conversation feel much more comfortable. What I thought would be a quick introduction turned into a 15–20 minute discussion about startups, AI, products, and entrepreneurship.

I shared what we're building at LEXA, the products we're planning, and why I decided to leave my job to start my own company.

Then he asked me a question I'll never forget: "Why did you decide to build a startup?" I told him, because I've always wanted to build something of my own. He smiled and asked another question: "Why technology?" I replied that after spending over a year in the IT industry, I knew this was the space where I wanted to create impact - especially with AI. He listened patiently.

Then he shared a piece of advice that has stayed with me ever since:
"Whenever you build something, first understand whether the market actually needs it. Research the problem deeply before building the solution. Even the best product won't succeed if nobody needs it."

Simple. Yet powerful. As founders, we often fall in love with our ideas. But customers don't buy ideas. They pay to solve problems. That one conversation completely changed the way I think about product development. Since that day, every time my team brainstorms a new feature or product, I find myself asking the same question: "Are we solving a real problem, or are we just building something because we can?"`
  }
];

export const Writing = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <Section id="writing" className="bg-white relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Writing & LinkedIn Stories" 
          subtitle="Thoughts on startup building, business strategy, and lessons learned along the journey of building LEXA Technologies."
          align="center"
        />

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              variant="outlined" 
              padding="lg" 
              className="bg-white hover:border-primary-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border-dark-200/80 cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-dark-400">
                  <span>{article.date}</span>
                  <span className="bg-dark-100 text-dark-700 py-0.5 px-2 rounded-md font-medium">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-dark-900 group-hover:text-primary-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                
                <p className="text-dark-600 text-xs md:text-sm leading-relaxed line-clamp-4">
                  {article.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark-100/60">
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-primary-600 mr-1.5">{tag}</span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-xs text-primary-600 hover:text-primary-700 font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(article);
                  }}
                >
                  Read Story
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)} />
            
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-dark-200">
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-dark-200 p-5 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{selectedArticle.date} • {selectedArticle.readTime}</span>
                  <h2 id="article-modal-title" className="text-xl font-bold text-dark-900 mt-1">{selectedArticle.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)} 
                  className="p-2 rounded-xl text-dark-500 hover:text-dark-700 hover:bg-dark-100 transition-all duration-200" 
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="prose prose-dark max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-dark-700 text-sm md:text-base leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {selectedArticle.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                  ))}
                </div>

                <div className="pt-6 border-t border-dark-200 flex justify-between items-center">
                  <a 
                    href={selectedArticle.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:text-primary-700 font-bold text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Follow Jackie on LinkedIn
                  </a>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
