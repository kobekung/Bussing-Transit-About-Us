import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import {
  Monitor,
  CreditCard,
  Ticket,
  MonitorSmartphone,
  Bus } from
'lucide-react';
const solutions = [
{
  icon: Monitor,
  title: 'Transit Management Solutions',
  desc: 'ระบบบริหารจัดการการเดินรถ แบบ Data-Driven ที่ช่วยให้ผู้ประกอบการขนส่งสาธารณะสามารถนำข้อมูลจากอุปกรณ์ IoT มาวิเคราะห์และบริหารจัดการระบบขนส่งให้มีประสิทธิภาพสูงสุด ลดจำนวนรถวิ่งเปล่ากว่า 25% ลดการทุจริตและรายได้รั่วไหล รวมถึงลดต้นทุนที่ไม่จำเป็น เพิ่มความพึงพอใจของผู้โดยสาร ที่จะช่วยเพิ่มจำนวนผู้โดยสารในระยะยาวมากกว่า 40%',
  colSpan: 'md:col-span-2',
  image:
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80'
},
{
  icon: CreditCard,
  title: 'Farebox & Payment Solutions',
  desc: 'ระบบรับชำระค่าโดยสารที่ออกแบบเพื่อการใช้งานเชิงพาณิชย์ ที่รวดเร็ว แม่นยำ และการเชื่อมต่อกับระบบการเงินทุกระบบ',
  colSpan: 'md:col-span-1',
  image:
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
},
{
  icon: Ticket,
  title: 'Ticket Selling Machine',
  desc: 'เครื่องจำหน่ายบัตรโดยสารสำหรับพื้นที่หรือกลุ่มผู้โดยสารที่ยังต้องการทางเลือกนอกเหนือจากระบบไร้เงินสด',
  colSpan: 'md:col-span-1',
  image:
  'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80'
},
{
  icon: MonitorSmartphone,
  title: 'Digital Signage & Smart Bus Stop',
  desc: 'ป้ายรถเมล์และสื่อดิจิทัลที่ช่วยให้ผู้โดยสารเข้าถึงข้อมูลการเดินรถได้ง่ายและชัดเจน พร้อมระบุเวลาที่รถจะมาถึง (ETA)',
  colSpan: 'md:col-span-1',
  image:
  'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80'
},
{
  icon: Bus,
  title: 'Smart School Bus',
  desc: 'ระบบบริหารจัดการรถรับส่งนักเรียน เพิ่มความปลอดภัย ความโปร่งใส และความมั่นใจให้ผู้ปกครองและสถานศึกษา',
  colSpan: 'md:col-span-1',
  image:
  'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&q=80'
}];

export function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-24 bg-transit-dark relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse">

              <path
                d="M10 10h80v80h-80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5" />

              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <path
                d="M10 10l20 20h40l20-20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5" />

            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
              OUR TECHNOLOGY
            </h2>
            <p className="text-xl text-transit-muted">
              เราออกแบบโซลูชั่นครบวงจร พร้อมอุปกรณ์ IoT
              สำหรับกิจการขนส่งสาธารณะทุกรูปแบบ ด้วยโมเดลค่าบริการที่ยืดหยุ่น
              สามารถติดต่อเราเพื่อรับคำปรึกษาได้เลย
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) =>
          <div key={index} className={`${item.colSpan} h-full`}>
              <ScrollReveal delay={index * 0.1} width="100%" className="h-full">
                <div className="bg-transit-surface border border-transit-card rounded-xl h-full hover:border-accent-pumpkin/50 hover:shadow-[0_0_30px_rgba(253,128,46,0.1)] transition-all duration-500 group flex flex-col overflow-hidden">
                  {/* Card Image */}
                  <div className="h-40 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-transit-dark/50 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6 inline-flex p-3 rounded-lg bg-transit-card text-accent-pumpkin group-hover:text-white group-hover:bg-accent-pumpkin transition-colors duration-500 w-fit">
                      <item.icon size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-accent-pumpkin transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-transit-muted leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    </section>);

}