import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Layers, Droplets, Wind, Sun, Wrench } from 'lucide-react';

const services = [
  { icon: Hammer, title: 'New Roof Installations', desc: 'Complete roof builds from bare timbers to finished ridge — pitched, flat, or hybrid systems.' },
  { icon: Wrench, title: 'Roof Repairs', desc: 'Fast, lasting repairs for slipped tiles, cracked flashings, broken ridges and more.' },
  { icon: Layers, title: 'Flat Roofing Systems', desc: 'EPDM, GRP fibreglass, and felt flat roofing with long-term waterproofing guarantees.' },
  { icon: Droplets, title: 'Guttering & Drainage', desc: 'UPVC and cast-iron guttering replacement and repair to keep water away from your structure.' },
  { icon: Sun, title: 'Skylight & Velux Fitting', desc: 'Professional skylight installation bringing natural light without compromising your roof envelope.' },
  { icon: Wind, title: 'Emergency Call-Outs', desc: 'Storm damage? We respond fast. Same-day emergency service across Westminster and London.' },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 bg-secondary"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-secondary/95" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Services</span>
            <h2
              className="font-display font-black text-white mt-3 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              WHAT
              <br />
              WE DO.
            </h2>
          </div>
          <p className="text-white/70 text-lg max-w-sm leading-relaxed">
            Full-spectrum roofing across Greater London. No job too big, no repair too small.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-secondary p-10 hover:bg-primary transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 border-2 border-primary group-hover:border-white flex items-center justify-center mb-8 transition-colors duration-300">
                <svc.icon className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-display font-black text-white text-xl mb-4">{svc.title}</h3>
              <p className="text-white/60 group-hover:text-white/90 text-base leading-relaxed transition-colors duration-300">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
