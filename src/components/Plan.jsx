import React, { useState, useMemo, useEffect, useRef } from "react";
import { TIMELINE_EVENTS } from "../data/siteData";

export default function Plan() {
  const days = useMemo(() => {
    return [...new Set(TIMELINE_EVENTS.map((event) => event.date))];
  }, []);

  const [activeDay, setActiveDay] = useState(days[0]);
  
  // Pagination & Responsive State
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ITEMS_PER_PAGE = 4;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Handle Resize for Hybrid Layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const currentEvents = useMemo(() => {
    return TIMELINE_EVENTS.filter((event) => event.date === activeDay);
  }, [activeDay]);

  useEffect(() => {
    setCurrentPage(0);
  }, [activeDay]);

  const totalPages = Math.ceil(currentEvents.length / ITEMS_PER_PAGE);
  const displayedEvents = useMemo(() => {
    if (isMobile) return currentEvents; 
    
    const start = currentPage * ITEMS_PER_PAGE;
    return currentEvents.slice(start, start + ITEMS_PER_PAGE);
  }, [currentEvents, currentPage, isMobile]);

  const alignmentClass = isMobile 
    ? "justify-start" 
    : displayedEvents.length < ITEMS_PER_PAGE 
      ? "md:justify-center justify-start" 
      : "justify-start";

  const renderChatBubble = (event, position) => (
    <div className={`w-full max-w-[260px] mx-auto bg-white rounded-2xl p-5 shadow-[0_4px_16px_rgba(34,139,34,0.04)] border border-[#228B22]/30 relative transition-all duration-300 hover:shadow-[0_8px_24px_rgba(34,139,34,0.12)] hover:border-[#36D336] group ${position === 'top' ? 'hover:-translate-y-2' : 'hover:translate-y-2'}`}>
      
      {position === 'top' && (
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-[#228B22]/30 rotate-45 transition-colors duration-300 group-hover:border-[#36D336]" />
      )}
      
      {position === 'bottom' && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-t border-l border-[#228B22]/30 rotate-45 transition-colors duration-300 group-hover:border-[#36D336]" />
      )}
      
      <div className="relative z-10 text-center">
        <h3 className="font-['Outfit',sans-serif] font-bold text-[1.1rem] text-[#114B11] leading-[1.4]">
          {event.title}
        </h3>
        {event.speaker && (
          <p className="font-['Outfit',sans-serif] text-[0.85rem] text-[#228B22] font-semibold mt-2">
            {event.speaker}
          </p>
        )}
      </div>
    </div>
  );

  const renderTimeLabel = (time) => (
    <div className="flex justify-center items-center w-full group">
      <div className="bg-[#FAFDFA] px-5 py-2 rounded-full border border-[#228B22]/30 shadow-sm text-center transition-all duration-300 hover:scale-110 hover:border-[#36D336] hover:bg-[#228B22] cursor-default">
        <span className="font-['Fira_Code',monospace] text-[0.85rem] font-bold text-[#228B22] transition-colors group-hover:text-white">
          {time}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-[80px] md:py-[100px] relative overflow-hidden bg-[#FFFFFF]"
    >
      <div 
        className={`absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        PLAN
      </div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="reveal mb-10 md:mb-12 text-center px-4">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] tracking-tight text-[#114B11]">
            A day of innovation awaits.
          </h2>
          <p className="font-['Outfit',sans-serif] text-[0.95rem] text-[#228B22] font-semibold text-center mt-3 animate-pulse">
            (Subject to change)
          </p>
        </div>

        {days.length > 1 && (
          <div className="reveal flex justify-center gap-3 mb-12 flex-wrap px-4">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`font-['Fira_Code',monospace] text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 ${
                  activeDay === day
                    ? "bg-[#228B22] text-white shadow-[0_4px_16px_rgba(34,139,34,0.3)] scale-105"
                    : "bg-white text-[#114B11] border border-[#228B22]/15 hover:bg-[#36D336]/10"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        )}

        <div className="relative w-full max-w-[1200px] mx-auto md:px-16 group/track">
          
          {!isMobile && totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center border border-[#228B22]/20 text-[#228B22] disabled:opacity-0 disabled:pointer-events-none hover:bg-[#228B22] hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(34,139,34,0.08)] hover:scale-110"
              aria-label="Previous Events"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}

          {!isMobile && totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center border border-[#228B22]/20 text-[#228B22] disabled:opacity-0 disabled:pointer-events-none hover:bg-[#228B22] hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(34,139,34,0.08)] hover:scale-110"
              aria-label="Next Events"
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          )}

          <div key={`${activeDay}-${currentPage}`} className="animate-fade-in-up w-full relative">
            <div className={`flex flex-nowrap overflow-x-auto hide-scrollbar snap-x snap-mandatory py-6 ${alignmentClass}`}>
              
              {displayedEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                const isFirst = index === 0;
                const isLast = index === displayedEvents.length - 1;
                const isSingle = displayedEvents.length === 1;

                return (
                  // Removed the horizontal padding (px-2 md:px-3) from this wrapper
                  <div 
                    key={index} 
                    className="w-[85vw] sm:w-[45vw] md:w-[25%] shrink-0 snap-center flex flex-col items-center group relative"
                  >
                    
                    <div className="w-full h-[180px] flex flex-col justify-end pb-6 relative z-10 px-3">
                      {isEven ? renderChatBubble(event, 'top') : renderTimeLabel(event.time)}
                    </div>

                    <div className="relative flex items-center justify-center h-[30px] w-full shrink-0">
                      
                      {/* Sub-pixel safe line segment */}
                      <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#36D336]/50 z-[0]
                        ${isSingle ? 'hidden' : isFirst ? 'left-1/2 right-[-1px]' : isLast ? 'left-[-1px] right-1/2' : 'left-[-1px] right-[-1px]'}`} 
                      />

                      <div className={`w-4 h-4 rounded-full border-[3px] z-10 relative transition-all duration-300 ${
                        isFirst 
                          ? 'bg-[#D9EB4C] border-[#36D336] shadow-[0_0_12px_rgba(54,211,54,0.6)] scale-125' 
                          : 'bg-white border-[#36D336] group-hover:bg-[#36D336] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(54,211,54,0.4)]'
                      }`} />
                    </div>

                    <div className="w-full h-[180px] flex flex-col justify-start pt-6 relative z-10 px-3">
                      {!isEven ? renderChatBubble(event, 'bottom') : renderTimeLabel(event.time)}
                    </div>

                  </div>
                );
              })}
              
              {isMobile && <div className="w-[4vw] shrink-0 md:hidden" aria-hidden="true" />}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}