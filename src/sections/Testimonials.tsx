'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container, Section, SectionHeader, Card } from '@/components/ui';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const active = testimonials[currentIndex];

  return (
    <Section id="testimonials" className="bg-white relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary-50/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeader 
          title="What People Say About Me" 
          subtitle="Testimonials and feedback from clients, mentors, and business colleagues."
          align="center"
        />

        <div className="relative max-w-2xl mx-auto min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Card 
                variant="outlined" 
                padding="lg" 
                className="relative bg-gradient-to-br from-white to-primary-50/5 border-primary-100/80 shadow-md overflow-hidden text-center"
              >
                {/* Compact double quotes background ornament */}
                <div className="absolute -top-6 left-4 text-primary-200/30 text-[120px] font-serif leading-none select-none pointer-events-none">
                  &ldquo;
                </div>
                <div className="absolute -bottom-16 right-4 text-primary-200/15 text-[120px] font-serif leading-none select-none pointer-events-none">
                  &rdquo;
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Quote text */}
                  <blockquote className="text-sm sm:text-base md:text-lg text-dark-700 leading-relaxed font-medium italic max-w-xl mx-auto px-4">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  {/* Author Meta */}
                  <footer className="pt-1">
                    <p className="font-bold text-dark-900 text-sm sm:text-base">{active.name}</p>
                    <p className="text-primary-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">{active.role}</p>
                  </footer>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-6 relative z-20">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-xl bg-white border border-dark-200 hover:border-primary-300 text-dark-600 hover:text-primary-600 shadow-sm transition-all duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-600 w-5'
                      : 'bg-dark-300 hover:bg-dark-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-xl bg-white border border-dark-200 hover:border-primary-300 text-dark-600 hover:text-primary-600 shadow-sm transition-all duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* LinkedIn Recommendations redirection */}
        <div className="mt-10 pt-8 border-t border-dark-100 max-w-xl mx-auto text-center">
          <Card variant="outlined" padding="md" className="bg-dark-50/50 border-dark-200/80">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-dark-500 mb-1">LinkedIn Recommendations</h4>
            <p className="text-xs text-dark-600 leading-relaxed">
              Read all recommendations, endorsements, and verified client feedback on my{" "}
              <a 
                href="https://www.linkedin.com/in/jackie-mohanty-9214391b2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-600 hover:underline font-bold"
              >
                LinkedIn profile.
              </a>
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};