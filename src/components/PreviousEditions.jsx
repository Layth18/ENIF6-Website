import React, { useState, useEffect, useRef } from 'react';
import { EDITIONS } from '../data/siteData';

export default function PreviousEditions() {
  // Initialize with the most recent edition so the console isn't empty on load
  const [activeEditionId, setActiveEditionId] = useState(
    EDITIONS.length > 0 ? EDITIONS[EDITIONS.length - 1].id : null
  );

  // Safely find the active edition using id OR year
  const activeEdition = EDITIONS.find(
    (ed) => ed.id === activeEditionId || ed.year === activeEditionId
  );

  // Intersection Observer State
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
      id="editions" 
      ref={sectionRef}
      className="py-[120px] px-4 md:px-8 relative overflow-hidden bg-[#FAFDFA]"
    >
      {/* Background Watermark */}
      <div 
        className={`absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        EDITIONS
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#36CE5A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col gap-12">
        
        <div className="reveal text-center">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11]">
            A legacy of innovation.
          </h2>
          <p className="mt-4 font-['Fira_Code',monospace] text-sm text-[#228B22] uppercase tracking-widest font-bold">
            Select a cartridge to load data
          </p>
        </div>

        {/* TOP: "Cartridges" / Logos Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {EDITIONS.map((ed, index) => {
            const uniqueIdentifier = ed.id || ed.year || `edition-${index}`;
            const isActive = activeEditionId === uniqueIdentifier;

            return (
              <button
                key={uniqueIdentifier}
                onClick={() => setActiveEditionId(uniqueIdentifier)}
                className={`relative group flex items-center gap-3 px-6 py-4 rounded-t-xl rounded-b-md border-b-4 transition-all duration-300
                  ${isActive 
                    ? 'bg-[#114B11] border-[#36CE5A] text-white translate-y-2 shadow-inner' 
                    : 'bg-white border-[#228B22]/20 text-[#114B11] hover:-translate-y-1 shadow-[0_8px_24px_rgba(17,75,17,0.06)] hover:shadow-[0_16px_32px_rgba(17,75,17,0.12)]'
                  }
                `}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {ed.logo ? (
                    <img 
                      src={ed.logo} 
                      alt={`Edition ${uniqueIdentifier} logo`} 
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <span className="text-2xl">💾</span>
                  )}
                </div>
                
                <div className={`font-['Outfit',sans-serif] font-bold text-xl md:text-2xl tracking-tight ${isActive ? 'text-[#36CE5A]' : ''}`}>
                  {uniqueIdentifier}
                </div>
              </button>
            );
          })}
        </div>

        {/* BOTTOM: The "Console" Screen */}
        <div className="relative w-full min-h-[400px] bg-[#174217] border-[8px] border-[#114B11] rounded-2xl shadow-[0_24px_64px_rgba(17,75,17,0.2)] overflow-hidden flex flex-col">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(54,206,90,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-20" />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none z-20" />

          <div className="relative z-10 p-8 md:p-12 flex-1 flex flex-col">
            
            {!activeEdition ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-pulse">
                <div className="font-['Fira_Code',monospace] text-[#36CE5A] text-xl md:text-2xl font-medium tracking-widest flex items-center gap-3">
                  WAITING FOR INPUT <span className="w-4 h-6 bg-[#36CE5A] inline-block animate-bounce" />
                </div>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                
                <div className="flex flex-wrap justify-between items-end border-b border-[#36CE5A]/20 pb-4 mb-6 gap-4">
                  <div>
                    <h3 className="font-['Outfit',sans-serif] font-extrabold text-[2rem] md:text-[2.5rem] text-white leading-none">
                      {activeEdition.theme || "Unknown Theme"}
                    </h3>
                    <div className="font-['Fira_Code',monospace] text-[#36CE5A] text-sm mt-2 font-bold tracking-wider">
                      {activeEdition.date || activeEdition.year}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 md:gap-10 mt-6">
                  <div>
                    <p className="font-['Outfit',sans-serif] text-[#E8F8EE]/80 text-base md:text-lg leading-relaxed font-light">
                      {activeEdition.description || "No archive data found for this edition."}
                    </p>
                  </div>

                  {/* CHANGED: Locked to max 3 columns so 6 images perfectly form a 2x3 block */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[800px] mx-auto w-full">
                    {activeEdition.images?.map((imgSrc, idx) => (
                      <div 
                        key={`img-${idx}`} 
                        className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-[#36CE5A]/30 group"
                      >
                        <div className="absolute inset-0 bg-[#36CE5A]/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-300" />
                        <img 
                          src={imgSrc} 
                          alt={`${activeEdition.theme} memory ${idx + 1}`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}