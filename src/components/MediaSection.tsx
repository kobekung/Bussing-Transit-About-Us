import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';
const mediaItems = [
{
  name: 'Readthecloud',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  label: 'Article'
},
{
  name: 'Capitalread',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  label: 'Interview'
},
{
  name: 'ThaiPBS',
  image:
  'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&q=80',
  label: 'News'
}];

export function MediaSection() {
  return (
    <section className="py-24 bg-transit-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-12">
            US IN THE MEDIA
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) =>
          <ScrollReveal key={item.name} delay={index * 0.1} width="100%">
              <div className="group relative bg-transit-surface border border-transit-card rounded-xl overflow-hidden hover:border-accent-pumpkin/50 transition-all duration-500 h-full">
                {/* Thumbnail Image */}
                <div className="h-48 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-pumpkin/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium border border-white/10">
                    {item.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-heading font-bold text-2xl text-white group-hover:text-accent-pumpkin transition-colors duration-500">
                      {item.name}
                    </h3>
                    <ArrowUpRight className="text-transit-muted group-hover:text-accent-pumpkin transition-colors duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-transit-muted text-sm">
                    แปะบทความ ข่าว และสื่อที่นำเสนอแนวคิด การทำงาน และบทบาทของ
                    Bussing Transit ในประเด็นขนส่งสาธารณะ
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-accent-pumpkin/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}