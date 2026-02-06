import React from 'react';
import { ScrollReveal } from './ScrollReveal';
const partnersRow1 = [
'ททท.',
'NIA',
'CEA',
'กทม.',
'SATARANA',
'MAYDAY!',
'Toyota'];

const partnersRow2 = [
'Green Bus',
'Hop&Go',
'Togeta Move',
'ปราจีนซิตี้บัส',
'PKCD',
'Phuket Smart Bus',
'NK997'];

export function PartnersSection() {
  return (
    <section className="py-24 bg-transit-dark border-y border-transit-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white uppercase tracking-wider">
            Strategic Partners
          </h2>
          <div className="w-24 h-1 bg-accent-pumpkin mx-auto mt-4" />
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        {/* Row 1 - Left */}
        <div className="flex overflow-hidden mb-8 group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map(
              (partner, i) =>
              <div key={`${partner}-${i}`} className="mx-4">
                  <div className="px-8 py-4 bg-transit-surface border border-transit-card rounded-lg hover:border-accent-pumpkin/50 hover:shadow-[0_0_15px_rgba(253,128,46,0.2)] transition-all duration-500 cursor-default">
                    <span className="font-heading font-bold text-xl text-transit-muted hover:text-white transition-colors">
                      {partner}
                    </span>
                  </div>
                </div>

            )}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2].map(
              (partner, i) =>
              <div key={`${partner}-${i}`} className="mx-4">
                  <div className="px-8 py-4 bg-transit-surface border border-transit-card rounded-lg hover:border-accent-charcoal/50 hover:shadow-[0_0_15px_rgba(35,61,76,0.2)] transition-all duration-500 cursor-default">
                    <span className="font-heading font-bold text-xl text-transit-muted hover:text-white transition-colors">
                      {partner}
                    </span>
                  </div>
                </div>

            )}
          </div>
        </div>

        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transit-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-transit-dark to-transparent z-10" />
      </div>
    </section>);

}