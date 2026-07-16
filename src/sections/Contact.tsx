'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Card, Button, Input, Textarea } from '@/components/ui';
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

  const contactList = [
    { label: 'Business Email', value: contactInfo.emailBusiness, icon: '📧', href: `mailto:${contactInfo.emailBusiness}` },
    { label: 'Personal Email', value: contactInfo.emailPersonal, icon: '✉️', href: `mailto:${contactInfo.emailPersonal}` },
    { label: 'Phone', value: contactInfo.phone, icon: '📞', href: `tel:${contactInfo.phone}` },
    { label: 'Location', value: contactInfo.location, icon: '📍', href: '#' },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', icon: '💼', href: contactInfo.linkedin },
  ];

  return (
    <Section id="contact" className="bg-dark-50/50">
      <Container>
        <SectionHeader 
          title="Let's Work Together" 
          subtitle="I'm always open to conversations around products, business strategy, and digital transformation."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Column: Direct Contact & Info */}
          <div className="flex flex-col justify-between space-y-6">
            <Card variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/80 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-dark-900 mb-3 border-l-4 border-primary-500 pl-3">Get in Touch</h3>
                <p className="text-dark-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Have an automation project in mind, need software strategy consulting, or want to explore MVP delivery? Drop a line or book a session directly:
                </p>

                <div className="space-y-3.5">
                  {contactList.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      target={item.href.startsWith('http') ? '_blank' : undefined} 
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                      className="flex items-center gap-3.5 p-3 rounded-xl border border-dark-100 bg-dark-50/30 hover:border-primary-300 hover:bg-primary-50/40 transition-all duration-200"
                    >
                      <span className="text-xl leading-none">{item.icon}</span>
                      <div>
                        <p className="text-[10px] text-dark-400 font-semibold uppercase">{item.label}</p>
                        <p className="text-xs sm:text-sm font-semibold text-dark-800 hover:text-primary-600 transition-colors leading-tight">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendly Booking Action */}
              <div className="pt-6 mt-6 border-t border-dark-100 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-[10px] text-dark-400 font-bold uppercase">Direct Calendar</p>
                  <p className="text-xs text-dark-600">Instantly schedule a 1:1 meeting</p>
                </div>
                <Button variant="secondary" size="sm" asChild>
                  <a href={contactInfo.calendly} target="_blank" rel="noopener noreferrer">
                    Book Call 📅
                  </a>
                </Button>
              </div>
            </Card>

            {/* Favorite Philosophy card integrated inside column */}
            <Card variant="outlined" padding="md" className="bg-primary-50/30 border-primary-200 shadow-sm text-center">
              <p className="text-xs sm:text-sm text-dark-700 italic font-medium leading-relaxed">
                &ldquo;{favoritePhilosophy}&rdquo;
              </p>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <Card variant="outlined" padding="lg" className="bg-white shadow-sm border-dark-200/80 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-dark-900 mb-4 border-l-4 border-primary-500 pl-3">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-xs sm:text-sm">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-xs mt-0.5">I will get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-bold text-dark-500 uppercase tracking-wider block mb-1">Name *</label>
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
                    <label htmlFor="email" className="text-[10px] font-bold text-dark-500 uppercase tracking-wider block mb-1">Email *</label>
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-[10px] font-bold text-dark-500 uppercase tracking-wider block mb-1">Company (Optional)</label>
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
                    <label htmlFor="subject" className="text-[10px] font-bold text-dark-500 uppercase tracking-wider block mb-1">Subject *</label>
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
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-bold text-dark-500 uppercase tracking-wider block mb-1">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, target strategy, or consultation goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>

                <Button type="submit" size="sm" className="w-full sm:w-auto" loading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : contactForm.cta}
                </Button>
              </form>
            </div>
          </Card>
        </div>

        {/* Compact FAQs Section */}
        <div className="border-t border-dark-200/80 pt-8 mt-12 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-dark-900 text-center mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Card key={index} variant="outlined" padding="sm" className="bg-white border-dark-200/80 hover:border-primary-300 transition-colors">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-semibold text-dark-900 text-xs sm:text-sm leading-tight pr-4">{faq.question}</span>
                    <svg className="w-4 h-4 text-dark-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-dark-600 text-xs leading-relaxed border-t border-dark-100 pt-2.5">{faq.answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};