import React, { useState, useRef, useEffect } from "react";
import { RADIO } from "../data/siteData";
import { Play, Clock, Lock, Volume2 } from "lucide-react";

export default function RadioAppearances() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Intersection Observer State
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // 1. Audio Reference
  const audioRef = useRef(null);

  // Intersection Observer Effect for Watermark
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

  // 2. Audio Playback Controller
  useEffect(() => {
    if (activeIndex !== null && audioRef.current) {
      audioRef.current.src = RADIO[activeIndex].audioUrl;
      audioRef.current.play().catch((err) => console.log("Audio blocked by browser:", err));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [activeIndex]);

  return (
    <section
      id="radio"
      ref={sectionRef}
      className="py-[80px] md:py-[120px] px-4 md:px-8 relative overflow-hidden bg-[#FAFDFA]"
    >
      {/* Hidden audio element engine */}
      <audio ref={audioRef} onEnded={() => setActiveIndex(null)} />

      {/* Background Watermark */}
      <div 
        className={`absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        RADIO APPEARANCES
      </div>

      {/* Soft decorative BG accent */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#36CE5A]/5 blur-[100px] rounded-full pointer-events-none z-[0]" />

      {/* Internal CSS for Animations */}
      <style>{`
        @keyframes fadePhotoIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-photo {
          animation: fadePhotoIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        /* Custom scrollbar for mobile photos */
        .photo-scroll::-webkit-scrollbar { height: 6px; }
        .photo-scroll::-webkit-scrollbar-track { background: transparent; }
        .photo-scroll::-webkit-scrollbar-thumb { background: rgba(54, 206, 90, 0.3); border-radius: 10px; }
      `}</style>

      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-[60px]">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11]">
            On the airwaves.
          </h2>
        </div>

        {/* 60/40 Split Container */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full">
          {/* LEFT SECTION (60%) - Radio List */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4 shrink-0">
            {RADIO.map((item, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`group flex items-center justify-between gap-4 p-4 md:p-6 rounded-[20px] transition-all duration-400 ease-in-out border
                    ${
                      isActive
                        ? "bg-[#36CE5A] border-[#36CE5A] shadow-[0_10px_30px_rgba(54,206,90,0.25)] scale-[1.02]"
                        : "bg-white border-[#228B22]/10 shadow-[0_4px_20px_rgba(17,75,17,0.03)] hover:border-[#36CE5A]/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,75,17,0.08)]"
                    }`}
                >
                  {/* Left content: Logo + Info */}
                  <div className="flex items-center gap-4 md:gap-5 w-full">
                    {/* Logo Square */}
                    <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] shrink-0 rounded-xl overflow-hidden border-2 border-white/40 shadow-sm bg-white">
                      <img
                        src={item.logo}
                        alt={`${item.radioName} logo`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col justify-center">
                      <div
                        className={`font-['Outfit',sans-serif] font-bold text-[1.1rem] md:text-[1.3rem] mb-1 leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#114B11]"}`}
                      >
                        {item.radioName}
                      </div>

                      <div
                        className={`flex items-center gap-2 md:gap-3 text-[0.8rem] md:text-[0.9rem] font-medium transition-colors duration-300 ${isActive ? "text-white/90" : "text-[#114B11]/60"}`}
                      >
                        <span>{item.date}</span>
                        <span
                          className={`w-1 h-1 rounded-full ${isActive ? "bg-white/50" : "bg-[#228B22]/30"}`}
                        ></span>
                        <span className="flex items-center gap-1.5">
                          <Clock
                            size={14}
                            className={isActive ? "opacity-90" : "opacity-70"}
                          />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className={`shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-auto md:px-6 md:py-2.5 rounded-full font-['Outfit',sans-serif] font-bold text-sm transition-all duration-300 shadow-sm
                      ${
                        isActive
                          ? "bg-white text-[#228B22] border-transparent shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                          : "bg-white text-[#114B11] border border-[#228B22]/20 hover:bg-[#36CE5A]/10 hover:border-[#36CE5A]/30 hover:text-[#228B22] hover:scale-105"
                      }`}
                  >
                    {isActive ? (
                      <Volume2
                        size={20}
                        className="fill-current animate-pulse md:mr-2"
                      />
                    ) : (
                      <Play size={18} className="fill-current md:mr-2" />
                    )}
                    <span className="hidden md:inline">
                      {isActive ? "Playing" : "Play"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* RIGHT SECTION (40%) - Photos */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center min-h-[300px] relative mt-4 lg:mt-0">
            {/* Photos Scroll */}
            {activeIndex !== null && (
              <div
                key={activeIndex}
                className="w-full flex flex-row items-center gap-3 md:gap-4 overflow-x-auto photo-scroll pb-4 lg:pb-0 px-1"
              >
                {RADIO[activeIndex].photos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    className="relative shrink-0 rounded-2xl overflow-hidden shadow-sm animate-photo group"
                    style={{ animationDelay: `${pIdx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-[#228B22]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300" />
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="block w-auto h-auto max-h-[250px] lg:max-h-[350px] transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}