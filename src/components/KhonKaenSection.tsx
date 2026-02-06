import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Clock, Map, CreditCard, Megaphone } from 'lucide-react';
const services = [
{
  icon: Clock,
  title: 'Timetable',
  desc: 'ตารางเวลาและข้อมูลการเดินรถของขอนแก่น ซิตี้บัส'
},
{
  icon: Map,
  title: 'Live Map',
  desc: 'แผนที่ติดตามตำแหน่งรถแบบเรียลไทม์'
},
{
  icon: CreditCard,
  title: 'บัตรซิ่ง',
  desc: 'บัตรโดยสารสะสมเที่ยว เทคโนโลยีของบัสซิ่ง'
},
{
  icon: Megaphone,
  title: 'Hire & Advertising',
  desc: 'บริการเช่ารถ และพื้นที่โฆษณาบนรถ'
}];

export function KhonKaenSection() {
  return (
    <section
      id="khonkaen"
      className="py-24 bg-transit-surface relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pumpkin/50 to-transparent" />

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80"
          alt="Khon Kaen Bus"
          className="w-full h-full object-cover grayscale" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent-pumpkin font-bold tracking-widest uppercase text-sm mb-2 block">
              City Service
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white mb-4">
              KHONKAEN CITY BUS
            </h2>
            <div className="w-16 h-1 bg-accent-pumpkin mx-auto rounded-full" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) =>
          <ScrollReveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-transit-dark border border-transit-card p-8 rounded-xl h-full hover:border-accent-pumpkin hover:-translate-y-2 transition-all duration-500 group text-center">
                <div className="w-16 h-16 mx-auto bg-transit-card rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-pumpkin group-hover:text-transit-dark transition-colors duration-500 text-white">
                  <service.icon size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-transit-muted text-sm">{service.desc}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}