import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Mail, Phone } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-transit-dark relative overflow-hidden">

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-heading font-black text-white whitespace-nowrap leading-none">
          BUSSING TRANSIT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-8">
                CONTACT US
              </h2>
              <p className="text-xl text-transit-muted mb-12">
                ข้อมูลที่ตั้งและช่องทางติดต่อบริษัท
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <a
                  href="mailto:bussingtransit@gmail.com"
                  className="flex items-center gap-4 text-white hover:text-accent-pumpkin transition-colors duration-500 group p-4 border border-transit-card rounded-lg bg-transit-surface/50 hover:border-accent-pumpkin/50">

                  <div className="p-3 bg-transit-card rounded-full group-hover:bg-accent-pumpkin group-hover:text-transit-dark transition-colors duration-500">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg font-medium">
                    bussingtransit@gmail.com
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a
                  href="tel:+66896983596"
                  className="flex items-center gap-4 text-white hover:text-accent-charcoal transition-colors duration-500 group p-4 border border-transit-card rounded-lg bg-transit-surface/50 hover:border-accent-charcoal/50">

                  <div className="p-3 bg-transit-card rounded-full group-hover:bg-accent-charcoal group-hover:text-transit-dark transition-colors duration-500">
                    <Phone size={24} />
                  </div>
                  <span className="text-lg font-medium">+6689 6983596</span>
                </a>
              </ScrollReveal>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            {/* Abstract Map/Location Graphic */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="w-full max-w-md aspect-square bg-transit-surface rounded-2xl border border-transit-card relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-pumpkin/10 to-transparent opacity-50 z-10" />

                {/* Real Map Image Background */}
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                  alt="Map Location"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />


                {/* Grid Lines */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    backgroundImage:
                    'linear-gradient(to right, #1a1a24 1px, transparent 1px), linear-gradient(to bottom, #1a1a24 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />


                {/* Location Pin Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-4 h-4 bg-accent-pumpkin rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-accent-pumpkin rounded-full relative z-10 shadow-[0_0_20px_rgba(253,128,46,0.5)]" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-transit-dark/90 backdrop-blur border border-transit-card p-4 rounded-lg">
                    <p className="text-sm text-transit-muted">Headquarters</p>
                    <p className="font-bold text-white">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-transit-card text-center text-transit-muted text-sm">
          <p>© 2023 Bussing Transit. All rights reserved.</p>
        </div>
      </div>
    </section>);

}