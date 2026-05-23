import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  {
    tag: 'Project Spotlight',
    title: 'Victorian Terrace Re-Roof, Westminster',
    result: 'Full stripped and re-laid roof on a period property — zero leaks in 3 years since completion.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    alt: 'Victorian terrace roofing project Westminster',
    stats: [{ val: '3', label: 'Leak-Free Years' }, { val: '5wk', label: 'Completion Time' }],
  },
  {
    tag: 'Case Study',
    title: 'Commercial Flat Roof, Victoria',
    result: 'EPDM flat roof system installed on a four-storey commercial building — 25-year manufacturer warranty secured.',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1200&q=80',
    alt: 'Commercial flat roof installation Victoria London',
    stats: [{ val: '25yr', label: 'Warranty' }, { val: '100%', label: 'On-Schedule' }],
  },
  {
    tag: 'Emergency Response',
    title: 'Storm Damage Repair, City of Westminster',
    result: 'Same-day emergency call-out after severe storm. Entire ridge line secured and tiles replaced within 48 hours.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    alt: 'Emergency roof repair storm damage London',
    stats: [{ val: '<48h', label: 'Response Time' }, { val: '0', label: 'Further Damage' }],
  },
];

export default function OutcomesSection() {
  return (
    <section id="why-us" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Real Results</span>
          <h2 className="font-display font-black text-heading mt-3 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            WHAT WE&apos;VE
            <br />
            ACTUALLY BUILT.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-secondary">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col border-r-2 border-secondary last:border-r-0 hover:bg-secondary transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{item.tag}</span>
                <h3 className="font-display font-black text-heading text-xl mb-4 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-foreground text-base leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors duration-300">{item.result}</p>
                <div className="flex gap-6">
                  {item.stats.map((s, si) => (
                    <div key={si}>
                      <div className="font-black text-3xl text-primary">{s.val}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-white/70 transition-colors duration-300">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4 items-center"
        >
          <CheckCircle2 className="text-primary" size={20} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">Every project fully insured and certified</span>
          <span className="w-6 h-0.5 bg-border" />
          <CheckCircle2 className="text-primary" size={20} />
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">Serving Westminster &amp; Greater London since 2014</span>
        </motion.div>
      </div>
    </section>
  );
}
