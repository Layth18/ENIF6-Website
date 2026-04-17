import React from 'react';
import { SPONSORS } from '../data/siteData';

function SponsorLogo({ imageSrc, index }) {
  return (
    <div className="w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] group flex items-center justify-center p-6 rounded-[16px] border border-[#228B22]/10 bg-[#FAFDFA] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#36CE5A]/40 hover:shadow-[0_8px_24px_rgba(17,75,17,0.06)] hover:bg-white grayscale opacity-60 hover:grayscale-0 hover:opacity-100 h-[100px] md:h-[120px]">
      <img 
        src={imageSrc} 
        alt={`Sponsor ${index + 1}`} 
        className="w-auto h-auto max-w-[100px] md:max-w-[130px] max-h-[45px] md:max-h-[60px] object-contain mix-blend-multiply" 
        loading="lazy"
      />
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-[120px] px-4 md:px-8 relative bg-white overflow-hidden">
      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        FORMER SPONSORS
      </div>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="reveal text-center mb-[72px]">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11] mb-4">
            Backed by the best.
          </h2>
          <p className="font-['Outfit',sans-serif] text-[#114B11]/60 text-lg">
            Hover to reveal — they're more colorful than they look.
          </p>
        </div>

        {/* Flex layout centers orphaned items on the bottom row (perfect for 11 items) */}
        <div className="reveal flex flex-wrap justify-center gap-4 md:gap-6 mb-12 relative z-10">
          {SPONSORS.map((sponsorImage, i) => (
            <SponsorLogo key={i} imageSrc={sponsorImage} index={i} />
          ))}
        </div>

        {/* CTA to sponsor */}
        <div className="reveal mt-16 text-center relative z-10">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-8 py-6 rounded-[20px] border border-dashed border-[#228B22]/30 bg-[#FAFDFA]">
            <span className="font-['Outfit',sans-serif] text-[#114B11]/70 font-medium">
              Want to sponsor ENIF 6.0?
            </span>
            <a 
              href="mailto:sbc.enis.ias@ieee.org" 
              className="font-['Fira_Code',monospace] text-[#228B22] font-bold text-sm md:text-base hover:text-[#36CE5A] transition-colors duration-300 flex items-center gap-2"
            >
              sbc.enis.ias@ieee.org 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}