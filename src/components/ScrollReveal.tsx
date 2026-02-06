import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}
export function ScrollReveal({
  children,
  width = 'fit-content',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  threshold = 0.2
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    amount: threshold
  });
  const getVariants = () => {
    const distance = 30;
    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: 0,
            y: distance
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'down':
        return {
          hidden: {
            opacity: 0,
            y: -distance
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'left':
        return {
          hidden: {
            opacity: 0,
            x: distance
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'right':
        return {
          hidden: {
            opacity: 0,
            x: -distance
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'none':
      default:
        return {
          hidden: {
            opacity: 0,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        };
    }
  };
  return (
    <div
      ref={ref}
      style={{
        width
      }}
      className={className}>

      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}>

        {children}
      </motion.div>
    </div>);

}