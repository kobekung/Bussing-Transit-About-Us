import React from 'react';
import { ScrollReveal } from './ScrollReveal';
export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-transit-dark relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <ScrollReveal direction="right">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-8 relative inline-block">
                WHO WE ARE
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-pumpkin" />
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-lg text-transit-muted leading-relaxed">
                <p>
                  ก่อตั้งในปี 2023 เราคือผู้ให้บริการ{' '}
                  <span className="text-white font-medium">
                    Mobility as a Service
                  </span>{' '}
                  โดยได้พัฒนา Platform ต่างๆ ทั้งด้าน Operation ด้านข้อมูล
                  และด้านระบบ Payment
                </p>
                <p>
                  เพื่อต่อลมหายใจขนส่งสาธารณะ ให้เพิ่มประสิทธิภาพ ลดต้นทุน
                  พร้อมๆ
                  กับให้ผู้โดยสารสามารถเชื่อมั่นในการใช้ขนส่งสาธารณะได้อีกครั้ง
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative flex justify-center items-center">
            <ScrollReveal direction="left" delay={0.3} width="100%">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-transit-card group">
                <div className="absolute inset-0 bg-accent-pumpkin/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                  alt="Bus Transit"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="font-heading font-black text-8xl sm:text-9xl text-white stroke-text select-none opacity-90 drop-shadow-lg">
                    2023
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* OUR BELIEFS */}
        <div className="relative bg-transit-surface/50 border border-transit-card p-8 md:p-16 rounded-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent-charcoal">

              <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 14 9.00001 13C9.00001 11.8954 9.89544 11 11.00001 11H15.017V7H11.00001C7.6863 7 5.00001 9.68629 5.00001 13V18C5.00001 19.6569 6.34316 21 8.00001 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16 15 16 14 16 13C16 11.8954 16.8954 11 18 11H19.017V7H18C14.6863 7 12 9.68629 12 13V18C12 19.6569 13.3431 21 15 21H21.017Z" />
            </svg>
          </div>

          <ScrollReveal direction="up">
            <h3 className="font-heading font-bold text-2xl text-accent-charcoal mb-6 uppercase tracking-widest">
              Our Beliefs
            </h3>
            <p className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight max-w-4xl">
              "พวกเราก่อตั้งบัสซิ่ง ทรานสิท ขึ้น เพราะเชื่อว่า{' '}
              <span className="text-accent-pumpkin">เทคโนโลยี</span>{' '}
              จะสามารถยกระดับขนส่งสาธารณะในบ้านเราให้ดีขึ้นได้
              และขนส่งสาธารณะที่ดี ก็จะเปลี่ยนแปลงสังคมได้"
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}