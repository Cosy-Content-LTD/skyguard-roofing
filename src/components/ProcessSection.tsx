import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Free Survey', desc: 'We visit your property, assess the roof condition, and give you a detailed no-obligation quote.' },
  { num: '02', title: 'Agree Scope', desc: 'Clear written spec of all works. No hidden extras. You sign off before a single nail is moved.' },
  { num: '03', title: 'Professional Installation', desc: 'Our certified team arrives on time, works safely, and keeps your property clean throughout.' },
  { num: '04', title: 'Final Inspection', desc: 'Full inspection walkthrough with you. We only sign off when you are completely satisfied.' },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-secondary/92" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">How It Works</span>
          <h2
            className="font-display font-black text-white mt-3 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            FROM SURVEY
            <br />
            TO SIGN-OFF.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-white/20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-10 border-r-2 border-white/20 last:border-r-0 group hover:bg-primary/20 transition-all duration-500"
            >
              <div className="font-display font-black text-primary/30 text-7xl leading-none mb-6 group-hover:text-primary transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="font-display font-black text-white text-2xl mb-4">{step.title}</h3>
              <p className="text-white/60 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
