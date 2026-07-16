'use client';

import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui';
import { techStack, projectManagement, salesConsulting, tools, workingMethodology } from '@/data/skills';

const skillCategories = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern, responsive, and performance-oriented interfaces',
    icon: '🎨',
    skills: [
      ...techStack.frontend.core.map(s => ({ name: s, category: 'core' })),
      ...techStack.frontend.frameworks.map(s => ({ name: s, category: 'framework' })),
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable backend systems and robust APIs',
    icon: '⚙️',
    skills: [
      ...techStack.backend.languages.map(s => ({ name: s, category: 'core' })),
      ...techStack.backend.api.map(s => ({ name: s, category: 'api' })),
    ],
  },
  {
    title: 'Database Technologies',
    subtitle: 'Structured and NoSQL data management',
    icon: '🗄️',
    skills: techStack.database.map(s => ({ name: s, category: 'db' })),
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-platform native application architecture',
    icon: '📱',
    skills: techStack.mobile.map(s => ({ name: s, category: 'mobile' })),
  },
  {
    title: 'Cloud & Infrastructure',
    subtitle: 'Building and managing scalable cloud products',
    icon: '☁️',
    skills: techStack.cloud.map(s => ({ name: s, category: 'cloud' })),
  },
  {
    title: 'DevOps & Deployment',
    subtitle: 'CI/CD pipelines and Linux server configuration',
    icon: '🚀',
    skills: techStack.devops.map(s => ({ name: s, category: 'devops' })),
  },
  {
    title: 'AI & Emerging Technologies',
    subtitle: 'My long-term focus: AI Agents, LLMs, and RAG systems',
    icon: '🤖',
    skills: techStack.ai.map(s => ({ name: s, category: 'ai' })),
  },
  {
    title: 'Enterprise Solutions',
    subtitle: 'Experience designing ERP, CRM, and SaaS products',
    icon: '🏢',
    skills: techStack.enterprise.map(s => ({ name: s, category: 'enterprise' })),
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="bg-white relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-100/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Technical Expertise" 
          subtitle="A structured overview of the technologies, tools, methodologies, and business competencies I use to build solutions."
          align="center"
        />

        <div className="space-y-16 max-w-7xl mx-auto">
          {/* 1. Tech Stack Cards */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-8">
              Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category) => (
                <Card 
                  key={category.title} 
                  variant="outlined" 
                  padding="md" 
                  className="bg-white hover:border-primary-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl flex-shrink-0">{category.icon}</span>
                      <h4 className="font-bold text-dark-900 text-sm leading-tight">{category.title}</h4>
                    </div>
                    <p className="text-dark-500 text-xs mb-5 leading-relaxed">{category.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant={skill.category === 'core' ? 'primary' : skill.category === 'framework' ? 'secondary' : 'outline'} 
                        className="text-[10px] py-0.5 px-2"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 2. Management & Sales Column */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
                Project Management
              </h3>
              <Card variant="outlined" padding="lg" className="bg-white shadow-sm h-full">
                <p className="text-dark-600 text-sm mb-6">
                  My delivery approach focuses on clear milestones, robust documentation, and agile execution:
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectManagement.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs py-1 px-2.5 border-slate-200 text-dark-800 bg-slate-50/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
                Sales & Consulting
              </h3>
              <Card variant="outlined" padding="lg" className="bg-white shadow-sm h-full">
                <p className="text-dark-600 text-sm mb-6">
                  Drawing on my business development roots to lead discovery, proposals, and customer relationships:
                </p>
                <div className="flex flex-wrap gap-2">
                  {salesConsulting.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs py-1 px-2.5 border-primary-100 text-primary-800 bg-primary-50/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* 3. Tools I Frequently Use */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Tools I Frequently Use
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(tools).map(([category, skills]) => (
                <Card key={category} variant="outlined" padding="md" className="bg-white hover:shadow-sm transition-all duration-300">
                  <h4 className="font-bold text-dark-900 text-xs uppercase tracking-wider mb-4 border-b border-dark-100 pb-2">
                    {category === 'salesResearch' ? 'Sales & Research' : category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="dark" className="text-[10px]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 4. Working Methodology Visual Pipeline */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Working Methodology
            </h3>
            <Card variant="outlined" padding="lg" className="bg-gradient-to-br from-primary-50/30 via-white to-primary-50/10 border-primary-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[120px] leading-none opacity-5 select-none pointer-events-none">🔄</div>
              <p className="text-dark-600 text-sm mb-8 leading-relaxed max-w-3xl">
                Every software build I lead is structured to move faster than traditional firms and fairer than marketplaces, guided by a complete, step-by-step outcome lifecycle:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {workingMethodology.map((step, index) => (
                  <div 
                    key={step} 
                    className="flex flex-col items-center text-center p-4 rounded-xl border border-dark-200/80 bg-white/80 hover:border-primary-400 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs mb-3 shadow-inner">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-xs font-bold text-dark-800 leading-tight">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};