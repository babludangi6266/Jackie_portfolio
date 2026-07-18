'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { personalInfo } from '@/data/personal';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.85;
      const handleLoaded = () => setVideoLoaded(true);
      video.addEventListener('canplaythrough', handleLoaded);
      return () => video.removeEventListener('canplaythrough', handleLoaded);
    }
  }, []);

  const animate = !reduce;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative bg-[#050709] overflow-hidden">
      {/* ── Full-viewport Video Background ── */}
      <section className="relative w-full h-[100dvh] min-h-[600px] max-h-[1200px]">
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050709]/70 via-[#050709]/40 to-[#050709]/80 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/60 via-transparent to-transparent z-[1]" />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />

        {/* ── Hero Content ── */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24"
          variants={animate ? container : undefined}
          initial={animate ? 'hidden' : false}
          animate={animate ? 'visible' : undefined}
        >
          <div className="max-w-4xl">
            {/* Availability badge */}
            <motion.div variants={animate ? fadeUp : undefined}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase text-white/70 hero-font">
                  Available for Advisory & Consulting
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={animate ? fadeUp : undefined}
              className="hero-font font-extrabold text-white tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role line — gradient text */}
            <motion.p
              variants={animate ? fadeUp : undefined}
              className="mt-4 sm:mt-5 hero-font font-semibold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400"
              style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.75rem)' }}
            >
              Business Consultant · Project Manager · Product Strategist · Founder
            </motion.p>

            {/* Industry keywords */}
            <motion.p
              variants={animate ? fadeUp : undefined}
              className="mt-4 sm:mt-5 hero-font font-medium tracking-wide leading-relaxed text-white/40"
              style={{ fontSize: 'clamp(0.7rem, 1.3vw, 0.95rem)' }}
            >
              B2B SaaS • AI • EdTech • HealthTech • Manufacturing • Enterprise Software • ERP • CRM • HRTech • Automation • Supply Chain • Logistics
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={animate ? fadeUp : undefined}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                variant="primary"
                size="lg"
                className="hero-font rounded-xl px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-shadow duration-300"
              >
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}>
                  View Projects
                </a>
              </Button>
              <Button
                asChild
                variant="glassOutline"
                size="lg"
                className="hero-font rounded-xl px-8 py-3.5 text-base font-semibold"
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}>
                  Let's Connect
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Scroll indicator — bottom center */}
          <motion.div
            variants={animate ? scaleIn : undefined}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 hero-font font-medium">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Social Links Bar ── */}
      <div className="relative z-20 bg-[#050709]/60 backdrop-blur-xl border-t border-white/[0.06] py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-xs sm:text-sm text-white/50 hero-font font-medium">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors duration-300 py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary-400 transition-colors duration-300 py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-primary-400 transition-colors duration-300 py-1.5"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{personalInfo.phone}</span>
            </a>

            <span className="flex items-center gap-2 py-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personalInfo.location}</span>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};