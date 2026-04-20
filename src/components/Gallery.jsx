import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../data/siteData';

// The slot component is now "dumb" - it simply renders whatever index the parent tells it to.
const FadingImageSlot = ({ images, currentIndex, className }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full rounded-[20px] overflow-hidden border border-[#228B22]/10 shadow-[0_8px_32px_rgba(17,75,17,0.04)] group ${className}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <img
            src={img?.src}
            alt={img?.alt}
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
              i === currentIndex ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#114B11]/90 via-[#114B11]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
          
          {/* Image Label */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 right-4 md:right-6 overflow-hidden">
            <div className="font-['Fira_Code',monospace] text-[12px] md:text-xs lg:text-sm text-[#E8F8EE] uppercase tracking-[0.08em] font-medium translate-y-0 md:translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
              {img?.alt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Gallery() {
  // Distribute the 9 images across the 3 specific grid slots
  const slot1Images = GALLERY_IMAGES.filter((_, i) => i % 3 === 0);
  const slot2Images = GALLERY_IMAGES.filter((_, i) => i % 3 === 1);
  const slot3Images = GALLERY_IMAGES.filter((_, i) => i % 3 === 2);

  // Master Clock State
  const [tick, setTick] = useState(0);
  
  // Intersection Observer State
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Clock Effect
  useEffect(() => {
    // The master clock ticks every 1.5 seconds
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer Effect
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

  // Calculate the active index for each slot based on the master clock.
  // Each slot holds its image for 3 ticks (4.5 seconds), but they are offset by 1 tick (1.5 seconds).
  const index1 = Math.floor(tick / 3) % slot1Images.length;            // Changes at 0s, 4.5s, 9.0s...
  const index2 = Math.floor((tick + 2) / 3) % slot2Images.length;      // Changes at 1.5s, 6.0s, 10.5s...
  const index3 = Math.floor((tick + 1) / 3) % slot3Images.length;      // Changes at 3.0s, 7.5s, 12.0s...

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-16 md:py-[120px] px-4 md:px-8 relative bg-white overflow-hidden"
    >
      {/* Background Watermark */}
      <div 
        className={`absolute top-[2%] right-[2%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,10vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        GALLERY
      </div>
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="reveal text-center mb-10 md:mb-[72px] relative z-10">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11]">
            Moments that defined us.
          </h2>
        </div>

        {/* Asymmetrical Grid Layout */}
        {/* Mobile: 1 Col stacked. Tablet: 3 Cols / 2 Rows (240px height). Desktop: 3 Cols / 2 Rows (300px height). */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[240px_240px] lg:grid-rows-[300px_300px] gap-4 md:gap-6 relative z-10">
          
          {/* Slot 1 (Top Left) - Small */}
          <FadingImageSlot 
            images={slot1Images} 
            currentIndex={index1} 
            className="h-[250px] md:h-full md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
          />
          
          {/* Slot 2 (Right Side) - Large 2x2 */}
          <FadingImageSlot 
            images={slot2Images} 
            currentIndex={index2} 
            className="h-[350px] md:h-full md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2"
          />
          
          {/* Slot 3 (Bottom Left) - Small */}
          <FadingImageSlot 
            images={slot3Images} 
            currentIndex={index3} 
            className="h-[250px] md:h-full md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1"
          />

        </div>

      </div>
    </section>
  );
}