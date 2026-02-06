
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        transit: {
          dark: '#0f1a21', // Charcoal-tinted dark base
          surface: '#152029', // Slightly lighter charcoal
          card: '#1c2f3a', // Card backgrounds
          text: '#f5f0eb', // Warm white
          muted: '#8a9aa5', // Blue-gray muted
        },
        accent: {
          pumpkin: '#FD802E', // Primary accent
          pumpkinDark: '#e06a1a',
          charcoal: '#233D4C', // Secondary accent
          charcoalLight: '#2d4f63',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(253, 128, 46, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
