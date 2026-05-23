import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import OutcomesSection from '@/components/OutcomesSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <OutcomesSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
