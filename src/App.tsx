'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Timeline } from '@/sections/Timeline';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Community } from '@/sections/Community';
import { Testimonials } from '@/sections/Testimonials';
import { Writing } from '@/sections/Writing';
import { Contact } from '@/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="pt-0">
        <About />
        <Timeline />
        <Experience />
        <Skills />
        <Projects />
        <Community />
        <Testimonials />
        <Writing />
        <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}