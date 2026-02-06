import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Technology',
  href: '#technology'
},
{
  name: 'Initiatives',
  href: '#initiatives'
},
{
  name: 'KhonKaen',
  href: '#khonkaen'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-transit-dark/90 backdrop-blur-md border-b border-transit-card py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="font-heading font-bold text-xl sm:text-2xl tracking-tighter text-white flex items-center gap-2 group">

            <span className="text-accent-pumpkin group-hover:text-accent-charcoal transition-colors duration-500">
              {' '}
              ///
            </span>
            BUSSING TRANSIT
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-transit-muted hover:text-accent-pumpkin transition-colors duration-500 uppercase tracking-widest relative group">

                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-pumpkin transition-all duration-500 group-hover:w-full" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent-pumpkin transition-colors duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="md:hidden bg-transit-surface border-b border-transit-card overflow-hidden">

            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-heading font-bold text-white hover:text-accent-pumpkin transition-colors duration-300">

                  {link.name}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}