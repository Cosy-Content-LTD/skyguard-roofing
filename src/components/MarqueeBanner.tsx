import React from 'react';

const items = [
  'Roof Repairs',
  'New Installations',
  'Flat Roofs',
  'Pitched Roofs',
  'Guttering',
  'Skylight Fitting',
  'Emergency Call-Outs',
  'Fully Insured',
  'Certified Professionals',
  '10+ Years Experience',
  'Westminster & London',
  'Free Quotes',
];

export default function MarqueeBanner() {
  return (
    <div className="bg-primary overflow-hidden py-4 border-y-4 border-secondary">
      <div className="marquee-track flex gap-0">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-6 text-white font-black text-sm uppercase tracking-widest"
          >
            {item}
            <span className="inline-block w-2 h-2 bg-white rotate-45 shrink-0" />
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
