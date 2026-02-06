import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PartnersSection } from './components/PartnersSection';
import { MediaSection } from './components/MediaSection';
import { TechnologySection } from './components/TechnologySection';
import { InitiativesSection } from './components/InitiativesSection';
import { KhonKaenSection } from './components/KhonKaenSection';
import { ContactSection } from './components/ContactSection';
export function App() {
  return (
    <div className="bg-transit-dark min-h-screen text-transit-text selection:bg-accent-pumpkin selection:text-transit-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <MediaSection />
        <TechnologySection />
        <InitiativesSection />
        <KhonKaenSection />
        <ContactSection />
      </main>
    </div>);

}