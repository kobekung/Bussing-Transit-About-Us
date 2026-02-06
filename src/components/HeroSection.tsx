import React, { Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const title = 'BUSSING TRANSIT';
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transit-dark">

      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y: bgY
        }}
        className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-transit-dark/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transit-dark/50 via-transparent to-transit-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&q=80"
          alt="Modern City Bus"
          className="w-full h-full object-cover opacity-40" />

      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-transit-card to-transparent opacity-30" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-transit-card to-transparent opacity-30" />
      </div>

      <motion.div
        style={{
          y: y1,
          opacity
        }}
        className="relative z-20 text-center px-4 max-w-7xl mx-auto">

        {/* Main Title Staggered Animation */}
        <motion.h1
          className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white mb-6"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.05,
            delayChildren: 0.2
          }}>

          {title.split('').map((char, index) =>
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 60
            }}
            className="inline-block hover:text-accent-pumpkin transition-colors duration-500 cursor-default">

              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          )}
        </motion.h1>

        {/* Subtitles */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="space-y-4">

          <p className="text-xl sm:text-2xl md:text-3xl text-accent-pumpkin font-light tracking-widest uppercase">
            Mobility as a Service
          </p>
          <p className="text-lg sm:text-xl text-transit-muted font-light">
            ต่อลมหายใจขนส่งสาธารณะ
          </p>
        </motion.div>

        {/* Decorative Brackets */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0
          }}
          animate={{
            opacity: 1,
            scaleX: 1
          }}
          transition={{
            delay: 1.5,
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute -inset-x-4 -inset-y-12 md:-inset-x-12 md:-inset-y-20 border-x border-transit-card/50 pointer-events-none hidden sm:block">

          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent-pumpkin" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-pumpkin" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-pumpkin" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent-pumpkin" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-transit-muted flex flex-col items-center gap-2 z-20">

        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut'
          }}>

          <ChevronDown className="w-6 h-6 text-accent-pumpkin" />
        </motion.div>
      </motion.div>
    </section>);

}