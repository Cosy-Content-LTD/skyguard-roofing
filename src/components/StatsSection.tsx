import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years on London Rooftops' },
  { value: '500+', label: 'Completed Projects' },
  { value: '100%', label: 'Insured & Certified' },
  { value: '24/7', label: 'Emergency Cover' },
];

export default function StatsSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-primary px-10 py-14 text-center"
            >
              <div className="font-display font-black text-white leading-none mb-3"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                {s.value}
              </div>
              <div className="text-white/70 text-sm font-bold uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
