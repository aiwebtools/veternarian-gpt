
import React from 'react';
import CTABackground from './CTABackground';
import CTACard from './CTACard';
import CTAStats from './CTAStats';

const CTA = () => {
  return (
    <section id="start" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <CTABackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <CTACard />
        <CTAStats />
      </div>
    </section>
  );
};

export default CTA;
