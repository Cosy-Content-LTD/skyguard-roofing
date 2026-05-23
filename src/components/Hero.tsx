import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pt-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary px-4 py-2 mb-8"
          >
            <ShieldCheck size={14} className="text-white" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Fully Insured &middot; Certified Professionals &middot; Westminster &amp; Greater London
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-white leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            ROOFS
            <br />
            <span className="text-primary">BUILT</span>
            <br />
            TO LAST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/80 text-xl font-medium leading-relaxed max-w-xl mb-10"
          >
            SkyGuard Roofing delivers expert roofing across Westminster, Victoria and Greater London
            with 10+ years of proven results. Every project backed by certified professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:0234567891"
              className="inline-flex items-center justify-center gap-3 bg-white/10 border-2 border-white text-white font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-secondary transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block">
        <div className="bg-primary w-2 h-48" />
      </div>
    </section>
  );
}
