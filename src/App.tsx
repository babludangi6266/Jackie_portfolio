'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Community } from '@/sections/Community';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Community />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}