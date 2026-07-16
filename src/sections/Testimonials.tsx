'use client';

import { useState, useEffect, useCallback } from 'react';
import { Container, Section, SectionHeader, Card, CardContent, Image } from '@/components/ui';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <Section id="testimonials" className="bg-white">
      <Container>
        <SectionHeader 
          title="What People Say About Me" 
          subtitle="Testimonials from colleagues, clients, and mentors"
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card variant="outlined" padding="xl" className="h-full text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-100 flex-shrink-0">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <blockquote className="text-xl text-dark-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <footer>
                      <p className="font-semibold text-dark-900 text-lg">{testimonial.name}</p>
                      <p className="text-primary-600 text-sm">{testimonial.role}</p>
                    </footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white border border-dark-200 hover:bg-primary-50 hover:border-primary-200 text-dark-600 hover:text-primary-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-dark-300 hover:bg-dark-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white border border-dark-200 hover:bg-primary-50 hover:border-primary-200 text-dark-600 hover:text-primary-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-dark-200">
          <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">LinkedIn Recommendations</h3>
          <p className="text-center text-dark-600 max-w-2xl mx-auto">
            Dynamic section connected to LinkedIn recommendations. 
            <a href="https://linkedin.com/in/jackiemohanty" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
              View all recommendations on LinkedIn
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};