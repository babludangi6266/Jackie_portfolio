'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, CardContent, Button, Input, Textarea } from '@/components/ui';
import { contactInfo, contactForm, faqs, favoritePhilosophy } from '@/data/personal';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact" className="bg-dark-50">
      <Container>
        <SectionHeader 
          title="Let's Work Together" 
          subtitle="I'm always open to meaningful conversations around products, technology, business strategy, and digital transformation."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card variant="outlined" padding="xl">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Get in Touch</h3>
            <p className="text-dark-600 mb-8">
              Whether you have a project in mind, need consulting on technology strategy, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Email (Business)', value: contactInfo.emailBusiness, icon: '📧', href: `mailto:${contactInfo.emailBusiness}` },
                { label: 'Email (Personal)', value: contactInfo.emailPersonal, icon: '📧', href: `mailto:${contactInfo.emailPersonal}` },
                { label: 'Phone', value: contactInfo.phone, icon: '📞', href: `tel:${contactInfo.phone}` },
                { label: 'Location', value: contactInfo.location, icon: '📍', href: '#' },
                { label: 'Website', value: contactInfo.website, icon: '🌐', href: contactInfo.website },
                { label: 'LinkedIn', value: 'Connect with me', icon: '💼', href: contactInfo.linkedin },
                { label: 'Book a Call', value: 'Schedule consultation', icon: '📅', href: contactInfo.calendly },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-dark-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-dark-500">{item.label}</p>
                    <p className="font-medium text-dark-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <Card variant="outlined" padding="xl">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="label">Company (Optional)</label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="subject" className="label">Subject *</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="label">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hi..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto" loading={isSubmitting}>
                {isSubmitting ? 'Sending...' : contactForm.cta}
              </Button>
            </form>
          </Card>
        </div>

        <div className="border-t border-dark-200 pt-12 mt-16">
          <h3 className="text-2xl font-bold text-dark-900 text-center mb-10">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} variant="outlined" padding="md">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium text-dark-900">{faq.question}</span>
                    <svg className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-dark-600">{faq.answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card variant="outlined" padding="xl" className="max-w-3xl mx-auto bg-primary-50 border-primary-200">
            <p className="text-xl text-dark-700 italic leading-relaxed">"{favoritePhilosophy}"</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};