import { useState, useMemo, useEffect, useRef } from "react";
import { TIMELINE_EVENTS } from "../data/siteData";

export default function Plan() {
  // Dynamically extract unique days from the data
  const days = useMemo(() => {
    return [...new Set(TIMELINE_EVENTS.map((event) => event.date))];
  }, []);

  const [activeDay, setActiveDay] = useState(days[0]);

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

  // Filter events for the currently selected day
  const currentEvents = useMemo(() => {
    return TIMELINE_EVENTS.filter((event) => event.date === activeDay);
  }, [activeDay]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-[100px] px-8 relative overflow-hidden bg-[#FFFFFF]"
    >
      {/* Background Watermark */}
      <div 
        className={`absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap transition-all duration-700 ease-in-out ${
          isVisible
            ? "bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text opacity-70"
            : "text-[#114B11] opacity-[0.07]"
        }`}
      >
        PLAN
      </div>
      
      <div className="max-w-[700px] mx-auto relative z-10">
        {/* Header */}
        <div className="reveal mb-12 text-center">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(1.5rem,3vw,3rem)] leading-[1.05] tracking-tight text-[#114B11]">
            A day of innovation awaits.
          </h2>
          <p className="font-['Outfit',sans-serif] text-[0.9rem] text-[#228B22] font-semibold text-center mt-2 animate-pulse">
            (Subject to change)
          </p>
        </div>

        {/* Day Selection Tabs */}
        {days.length > 1 && (
          <div className="reveal flex justify-center gap-3 mb-12 flex-wrap">
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

        {/* Compact Vertical Timeline */}
        {/* The key prop forces the div to re-animate when the day changes */}
        <div key={activeDay} className="relative animate-fade-in-up">
          {currentEvents.map((event, i) => {
            const isLast = i === currentEvents.length - 1;

            return (
              <div key={i} className="flex items-stretch gap-4 md:gap-6 group">
                {/* Left: Time */}
                <div className="w-[70px] md:w-[90px] shrink-0 text-right pt-1.5">
                  <span className="font-['Fira_Code',monospace] text-[0.8rem] md:text-sm font-bold text-[#228B22]">
                    {event.time}
                  </span>
                </div>

                {/* Middle: Timeline Line & Dot */}
                <div className="relative flex flex-col items-center shrink-0 w-4">
                  {/* The Dot */}
                  <div
                    className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-300 mt-2 ${
                      i === 0
                        ? "bg-[#D9EB4C] border-[#D9EB4C] shadow-[0_0_10px_rgba(217,235,76,0.8)]"
                        : "bg-white border-[#36D336] group-hover:bg-[#36D336]"
                    }`}
                  />

                  {/* The Line (don't show on the very last item) */}
                  {!isLast && (
                    <div className="absolute top-5 bottom-[-8px] w-[2px] bg-gradient-to-b from-[#36D336]/40 to-[#228B22]/10" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 pb-10 pt-1">
                  <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-sm border border-[#228B22]/10 transition-all duration-300 group-hover:shadow-md group-hover:border-[#36D336]/30 group-hover:-translate-y-0.5">
                    <h3 className="font-['Outfit',sans-serif] font-bold text-[1.1rem] text-[#114B11] leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Required for the tab switching animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}