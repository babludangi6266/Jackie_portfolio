import { Container, Section, SectionHeader, Card } from '@/components/ui';
import { aboutContent } from '@/data/personal';

export const About = () => {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <SectionHeader 
          title="About Me" 
          subtitle="Getting to know me beyond my work."
          align="center"
        />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-dark max-w-none space-y-6">
            {aboutContent.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-dark-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="outlined" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Vision</div>
              <p className="text-dark-600 text-sm">{aboutContent.vision}</p>
            </Card>
            <Card variant="outlined" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Mission</div>
              <p className="text-dark-600 text-sm">{aboutContent.mission}</p>
            </Card>
            <Card variant="outlined" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Philosophy</div>
              <p className="text-dark-600 text-sm italic">"{aboutContent.philosophy}"</p>
            </Card>
          </div>

          <div className="border-t border-dark-200 pt-12">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Professional Summary</h3>
            <div className="prose prose-dark max-w-none">
              <p className="text-lg text-dark-600 leading-relaxed">{aboutContent.professionalSummary}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};