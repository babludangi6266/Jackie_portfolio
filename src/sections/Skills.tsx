'use client';

import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui';
import { projectManagement, salesConsulting, tools, workingMethodology, techStack } from '@/data/skills';

export const Skills = () => {
  return (
    <Section id="skills" className="bg-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-100/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader 
          title="Expertise & Methodologies" 
          subtitle="A strategic overview of my capabilities spanning business consulting, product delivery, emerging technologies, and technical coordination."
          align="center"
        />

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* 1. Core Strategic Capabilities */}
          <div>
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Core Strategic Capabilities
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Product & Business Consulting */}
              <Card variant="outlined" padding="md" className="bg-white shadow-sm border-dark-200/60 hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">💼</span>
                  <h4 className="font-bold text-dark-900 text-sm">Business Consulting & Sales</h4>
                </div>
                <p className="text-dark-500 text-xs mb-4">
                  Translating operational problems into digital solutions, conducting client discovery, and aligning technical offerings with ROI goals.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {salesConsulting.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Project Management & Delivery */}
              <Card variant="outlined" padding="md" className="bg-white shadow-sm border-dark-200/60 hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">📋</span>
                  <h4 className="font-bold text-dark-900 text-sm">Project Management & Delivery</h4>
                </div>
                <p className="text-dark-500 text-xs mb-4">
                  Structuring sprints, scoping MVP features, managing multidisciplinary teams, and maintaining clear stakeholder communications.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {projectManagement.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* AI & Emerging Technologies */}
              <Card variant="outlined" padding="md" className="bg-primary-50/40 border-primary-200 shadow-sm hover:border-primary-300 transition-colors">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">🤖</span>
                  <h4 className="font-bold text-primary-800 text-sm">AI & Emerging Technologies</h4>
                </div>
                <p className="text-dark-500 text-xs mb-4">
                  Advising on the application of Generative AI models, Agentic systems, and Intelligent automation to streamline enterprise workflows.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.ai.map((skill) => (
                    <Badge key={skill} variant="primary" className="text-[10px] bg-primary-100 text-primary-800 border-none">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* 2. Technical Architecture & Execution Context */}
          <div>
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Technical & Architecture Context
            </h3>
            
            <Card variant="outlined" padding="lg" className="bg-dark-50/50 border-dark-200/60 shadow-sm">
              <p className="text-dark-600 text-xs md:text-sm mb-6 leading-relaxed">
                While my focus is on strategy and delivery, I possess hands-on understanding of modern technology stacks. This enables me to architect workflows, communicate effectively with developers, and oversee high-quality technical implementation:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Frontend & Mobile */}
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wider mb-2 border-b border-dark-200/60 pb-1">Interfaces</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.frontend.core.concat(techStack.frontend.frameworks).concat(techStack.mobile).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[9px] py-0.5 border-dark-200 bg-white">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Backend & Databases */}
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wider mb-2 border-b border-dark-200/60 pb-1">Backends & Data</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.backend.languages.concat(techStack.backend.api).concat(techStack.database).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[9px] py-0.5 border-dark-200 bg-white">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Cloud & DevOps */}
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wider mb-2 border-b border-dark-200/60 pb-1">Cloud & Infrastructure</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.cloud.concat(techStack.devops).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[9px] py-0.5 border-dark-200 bg-white">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Enterprise Ecosystems */}
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wider mb-2 border-b border-dark-200/60 pb-1">Enterprise Systems</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.enterprise.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[9px] py-0.5 border-dark-200 bg-white">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. Tools We Use */}
          <div>
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Operations Tools
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(tools).map(([category, skills]) => (
                <Card key={category} variant="outlined" padding="md" className="bg-white border-dark-200/60 shadow-inner">
                  <h4 className="font-bold text-dark-900 text-xs uppercase tracking-wider mb-3 border-b border-dark-100 pb-1.5">
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

          {/* 4. Methodology */}
          <div>
            <h3 className="text-xl font-bold text-dark-900 border-l-4 border-primary-500 pl-3 mb-6">
              Working Methodology
            </h3>
            
            <Card variant="outlined" padding="lg" className="bg-gradient-to-br from-primary-50/20 via-white to-primary-50/10 border-primary-200 shadow-sm relative overflow-hidden">
              <p className="text-dark-600 text-xs md:text-sm mb-6 leading-relaxed max-w-3xl">
                Every software delivery follows a structured lifecycle to turn business needs into production-ready software efficiently:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {workingMethodology.map((step, index) => (
                  <div 
                    key={step} 
                    className="flex flex-col items-center text-center p-3 rounded-xl border border-dark-200/80 bg-white/80 hover:border-primary-400 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-[11px] font-bold text-dark-800 leading-tight">
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