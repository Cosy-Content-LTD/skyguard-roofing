import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Get In Touch</span>
            <h2
              className="font-display font-black text-heading mt-3 leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              YOUR ROOF.
              <br />
              <span className="text-primary">OUR</span>
              <br />
              PRIORITY.
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-10">
              Ready for a free survey? Got a roofing emergency? Call us now or fill in the form and
              we&apos;ll get back to you within 2 hours during business hours.
            </p>

            <div className="space-y-6">
              <a href="tel:0234567891" className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <Phone className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">Phone</div>
                  <div className="font-black text-heading text-xl">0234567891</div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">Location</div>
                  <div className="font-bold text-heading text-base leading-snug">
                    Birdcage Walk, Westminster<br />London SW1H 9AP
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-accent flex items-center justify-center shrink-0">
                  <Clock className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">Hours</div>
                  <div className="font-bold text-heading text-base">Mon–Sat 7am–7pm &middot; Emergency 24/7</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center bg-section-alt border-2 border-primary p-16 text-center">
                <div className="w-20 h-20 bg-primary flex items-center justify-center mb-6">
                  <Send className="text-white" size={36} />
                </div>
                <h3 className="font-display font-black text-heading text-3xl mb-4">Message Sent!</h3>
                <p className="text-foreground text-lg">We&apos;ll be in touch within 2 hours. If it&apos;s urgent, call us directly on 0234567891.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-section-alt border-2 border-border p-10 space-y-6"
              >
                <h3 className="font-display font-black text-heading text-2xl">Request a Free Quote</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border-2 border-border focus:border-primary outline-none px-4 py-3 text-foreground font-medium transition-colors duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border-2 border-border focus:border-primary outline-none px-4 py-3 text-foreground font-medium transition-colors duration-200"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-background border-2 border-border focus:border-primary outline-none px-4 py-3 text-foreground font-medium transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">Service Needed</label>
                  <select
                    required
                    className="w-full bg-background border-2 border-border focus:border-primary outline-none px-4 py-3 text-foreground font-medium transition-colors duration-200"
                  >
                    <option value="">Select a service...</option>
                    <option>New Roof Installation</option>
                    <option>Roof Repair</option>
                    <option>Flat Roofing</option>
                    <option>Guttering</option>
                    <option>Skylight Fitting</option>
                    <option>Emergency Call-Out</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border-2 border-border focus:border-primary outline-none px-4 py-3 text-foreground font-medium transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-black text-sm uppercase tracking-widest py-5 flex items-center justify-center gap-3 hover:bg-secondary transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Send My Request
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
