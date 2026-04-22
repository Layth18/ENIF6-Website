import React, { useState, useEffect, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Triggers when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="sponsors" 
      ref={sectionRef}
      className="py-[120px] px-4 md:px-8 relative bg-white overflow-hidden"
    >
      {/* Animated Background Watermark */}
      <div 
        className={`absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        SPONSORS
      </div>
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="reveal text-center mb-[72px] relative z-10">
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
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-8 py-6 rounded-[24px] border border-dashed border-[#228B22]/30 bg-[#FAFDFA]">
            <span className="font-['Outfit',sans-serif] text-[#114B11]/80 font-medium text-[1.1rem]">
              Want to sponsor ENIF 6.0?
            </span>
            
            {/* Upgraded Button CTA */}
            <a 
              href="/Dossier Sponso ENIF 6.0.pdf"
              download
              title="Download Sponsorship Dossier"
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] bg-[#114B11] text-white shadow-[0_4px_12px_rgba(17,75,17,0.2)] hover:shadow-[0_8px_20px_rgba(17,75,17,0.3)] font-['Outfit',sans-serif] font-bold text-[1rem] py-3 px-6 rounded-[60px] whitespace-nowrap"
            >
              Dossier Sponsoring
              {/* Proper SVG Wrapper for the icon */}
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}