'use client';

import { Container, Section, SectionHeader, Card, CardContent, Badge } from '@/components/ui';
import { techStack, projectManagement, salesConsulting, tools, workingMethodology } from '@/data/skills';

const skillCategories = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern, responsive, and performance-oriented web interfaces',
    icon: '🎨',
    skills: [
      ...techStack.frontend.core.map(s => ({ name: s, category: 'core' })),
      ...techStack.frontend.frameworks.map(s => ({ name: s, category: 'framework' })),
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable backend systems and APIs',
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
    subtitle: 'Cross-platform application architecture',
    icon: '📱',
    skills: techStack.mobile.map(s => ({ name: s, category: 'mobile' })),
  },
  {
    title: 'Cloud & Infrastructure',
    subtitle: 'Building scalable cloud-enabled products',
    icon: '☁️',
    skills: techStack.cloud.map(s => ({ name: s, category: 'cloud' })),
  },
  {
    title: 'DevOps & Deployment',
    subtitle: 'Continuous integration and deployment pipelines',
    icon: '🚀',
    skills: techStack.devops.map(s => ({ name: s, category: 'devops' })),
  },
  {
    title: 'AI & Emerging Technologies',
    subtitle: 'A major focus area for my long-term growth',
    icon: '🤖',
    skills: techStack.ai.map(s => ({ name: s, category: 'ai' })),
  },
  {
    title: 'Enterprise Solutions',
    subtitle: 'Experience working around enterprise software',
    icon: '🏢',
    skills: techStack.enterprise.map(s => ({ name: s, category: 'enterprise' })),
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="bg-white">
      <Container>
        <SectionHeader 
          title="Technical Expertise" 
          subtitle="This section demonstrates my capabilities beyond titles and experience by presenting a structured overview of the technologies, tools, methodologies, and business competencies I work with."
          align="center"
        />

        <div className="space-y-12">
          {skillCategories.map((category, _index) => (
            <Card key={category.title} variant="outlined" padding="lg" className="animate-fade-in-up stagger-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
                  <p className="text-dark-500 text-sm">{category.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant={skill.category === 'core' ? 'primary' : skill.category === 'framework' ? 'secondary' : 'outline'} 
                    size="md"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Project Management', skills: projectManagement, icon: '📋' },
              { title: 'Sales & Consulting', skills: salesConsulting, icon: '💼' },
            ].map((category) => (
              <Card key={category.title} variant="outlined" padding="lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" size="md">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            {Object.entries(tools).map(([category, skills]) => (
              <Card key={category} variant="outlined" padding="lg">
                <h3 className="text-lg font-semibold text-dark-900 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" size="sm">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card variant="outlined" padding="lg" className="bg-primary-50 border-primary-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔄</span>
              <h3 className="text-xl font-bold text-dark-900">Working Methodology</h3>
            </div>
            <p className="text-dark-600 mb-6">Every project generally follows a structured lifecycle:</p>
            <div className="flex flex-wrap gap-2">
              {workingMethodology.map((step, index) => (
                <span key={step} className="flex items-center gap-1 px-3 py-1.5 bg-white border border-dark-200 rounded-lg text-sm font-medium text-dark-700">
                  <span className="w-5 h-5 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-xs font-bold">
                    {index + 1}
                  </span>
                  {step}
                  {index < workingMethodology.length - 1 && (
                    <svg className="w-4 h-4 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};