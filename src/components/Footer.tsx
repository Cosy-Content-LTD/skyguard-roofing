import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-display font-black text-xl tracking-tight">
                SKY<span className="text-primary">GUARD</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional roofing services across Westminster and Greater London. Fully insured,
              certified professionals delivering lasting results since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {['New Installations', 'Roof Repairs', 'Flat Roofing', 'Guttering', 'Skylights', 'Emergency Call-Outs'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 text-sm hover:text-primary transition-colors duration-200 font-medium">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:0234567891" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-200">
                <Phone size={16} />
                <span className="text-sm font-medium">0234567891</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="text-sm font-medium leading-snug">
                  Birdcage Walk, Westminster<br />London SW1H 9AP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">
            &copy; {new Date().getFullYear()} SkyGuard Roofing. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-medium">
            Fully Insured &middot; Certified Professionals &middot; Westminster, London
          </p>
        </div>
      </div>
    </footer>
  );
}
