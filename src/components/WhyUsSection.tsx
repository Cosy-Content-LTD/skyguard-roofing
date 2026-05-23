import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    heading: 'Certified & Insured',
    body: 'Every roofer on our team is certified and backed by full public liability insurance. Your property is always protected.',
  },
  {
    icon: Clock,
    heading: '10+ Years Experience',
    body: 'Over a decade roofing London properties — from Edwardian terraces to modern commercial blocks.',
  },
  {
    icon: MapPin,
    heading: 'Local Westminster Experts',
    body: 'We know Greater London rooftops inside-out. Based in Westminster, serving all surrounding boroughs.',
  },
  {
    icon: ShieldCheck,
    heading: 'Workmanship Guarantee',
    body: 'All our work carries a written workmanship guarantee. We stand behind every nail, tile and felt layer.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-warm-bg py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Why SkyGuard</span>
            <h2
              className="font-display font-black text-heading mt-3 leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              THE STANDARD
              <br />
              <span className="text-primary">OTHERS</span>
              <br />
              AIM FOR.
            </h2>
            <p className="text-foreground text-xl leading-relaxed mb-10">
              SkyGuard isn&apos;t just another roofing contractor. We&apos;re the team London property owners
              call when they need it done right the first time — on budget, on schedule, with zero drama.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-secondary text-white font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book a Survey
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border-2 border-border p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <p.icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-display font-black text-heading text-lg mb-3">{p.heading}</h3>
                <p className="text-foreground text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
