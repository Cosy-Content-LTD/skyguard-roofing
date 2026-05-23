import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['Services', 'Why Us', 'Process', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-2xl' : 'bg-secondary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="white"/>
            </svg>
          </div>
          <span className="text-white font-display font-black text-xl tracking-tight">
            SKY<span className="text-primary">GUARD</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0234567891"
            className="flex items-center gap-2 bg-primary text-white font-bold text-sm uppercase tracking-wider px-5 py-3 hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            <Phone size={16} />
            0234567891
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-white/10 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary border-b border-white/10"
            >
              {link}
            </a>
          ))}
          <a
            href="tel:0234567891"
            className="mt-4 flex items-center gap-2 bg-primary text-white font-bold text-sm uppercase tracking-wider px-5 py-3 justify-center"
          >
            <Phone size={16} />
            0234567891
          </a>
        </div>
      )}
    </header>
  );
}
