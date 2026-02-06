import React from 'react';
import { ScrollReveal } from './ScrollReveal';
const projects = [
{
  name: 'Togeta Move',
  desc: 'แนวคิดรถสองแถวรูปแบบใหม่ ที่พัฒนาต้นแบบร่วมกับโตโยต้า มอเตอร์ (ประเทศไทย) เพื่อให้บริการจริงเต็มรูปแบบ ในพื้นที่จังหวัดสมุทรปราการ',
  tag: 'Pilot Project',
  image:
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80'
},
{
  name: 'Go Go Bus',
  desc: 'โครงการนำร่องการจัดการเดินรถในพื้นที่เฉพาะ เพื่อทดสอบโมเดลการให้บริการที่ยืดหยุ่น',
  tag: 'Experimental',
  image:
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80'
},
{
  name: 'KhonKaen Night Bus',
  desc: 'บริการรถโดยสารช่วงกลางคืน เพื่อเพิ่มทางเลือกการเดินทางที่ปลอดภัย',
  tag: 'Night Service',
  image:
  'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&q=80'
},
{
  name: 'Festival Loop Line',
  desc: 'เส้นทางพิเศษรองรับงานเทศกาลและกิจกรรมเมือง',
  tag: 'Event',
  image:
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80'
}];

export function InitiativesSection() {
  return (
    <section id="initiatives" className="py-24 bg-transit-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-16 text-center">
            OUR INITIATIVES
          </h2>
        </ScrollReveal>

        {/* Revival Projects */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="border-l-4 border-accent-charcoal pl-6 mb-10">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Public Transport Revival Projects
              </h3>
              <p className="text-transit-muted text-lg">
                โครงการฟื้นฟูระบบขนส่งสาธารณะที่หยุดชะงักหรือขาดความยั่งยืน
                โดยใช้การออกแบบระบบใหม่ทั้งด้านปฏิบัติการและเทคโนโลยี
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) =>
            <ScrollReveal key={index} delay={index * 0.1} width="100%">
                <div className="bg-transit-card/50 rounded-lg border border-transparent hover:border-accent-charcoal/50 transition-all duration-500 group overflow-hidden">
                  {/* Image Strip */}
                  <div className="h-32 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-transit-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-heading font-bold text-xl text-white group-hover:text-accent-charcoal transition-colors duration-500">
                        {project.name}
                      </h4>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-accent-charcoal/20 text-accent-pumpkin uppercase tracking-wider">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-transit-muted">{project.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        {/* Policy Work */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-transit-surface to-transit-card p-8 md:p-12 rounded-2xl border border-transit-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pumpkin/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="font-heading font-bold text-2xl text-white mb-4 relative z-10">
              Policy and ecosystem work
            </h3>
            <p className="text-lg text-transit-muted max-w-3xl relative z-10">
              เรายังทำงานเชิงนโยบายและระบบนิเวศ
              เพื่อให้ท้องถิ่นสามารถจัดการขนส่งสาธารณะได้อย่างมีอำนาจและความคล่องตัว
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}