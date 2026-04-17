import { useState } from "react";
import { GUESTS } from "../data/siteData";

export default function Guests() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = GUESTS.length;

  const nextGuest = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevGuest = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="guests"
      className="py-[120px] px-4 md:px-8 relative overflow-hidden bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
          GUESTS
        </div>
        {/* Header */}
        <div className="reveal text-center mb-[60px]">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11]">
            Minds that shaped the stage throughout the editions.
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="reveal flex items-center justify-center gap-4 md:gap-8 relative w-full max-w-[1100px] mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prevGuest}
            className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-[#228B22]/20 flex items-center justify-center text-[#114B11] bg-white shadow-[0_4px_14px_rgba(17,75,17,0.06)] hover:bg-[#36CE5A]/10 hover:border-[#36CE5A]/30 hover:scale-105 transition-all duration-300 z-40"
            aria-label="Previous guest"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-[360px] max-w-[800px] flex items-center justify-center perspective-[1000px]">
            {GUESTS.map((guest, i) => {
              // Determine position relative to current index for 5 items
              const isCenter = i === currentIndex;
              const isRight1 = i === (currentIndex + 1) % total;
              const isRight2 = i === (currentIndex + 2) % total;
              const isLeft1 = i === (currentIndex - 1 + total) % total;
              const isLeft2 = i === (currentIndex - 2 + total) % total;

              // Base card classes (Hidden by default)
              let positionClasses =
                "opacity-0 scale-50 z-0 pointer-events-none";

              if (isCenter) {
                // Center card
                positionClasses =
                  "translate-x-0 scale-100 opacity-100 z-30 shadow-[0_16px_40px_rgba(17,75,17,0.15)]";
              } else if (isRight1) {
                // First card to the right
                positionClasses =
                  "translate-x-[65%] md:translate-x-[95%] scale-[0.85] opacity-80 z-20 cursor-pointer hover:opacity-100 hover:scale-[0.88] shadow-[0_8px_32px_rgba(17,75,17,0.06)]";
              } else if (isLeft1) {
                // First card to the left
                positionClasses =
                  "-translate-x-[65%] md:-translate-x-[95%] scale-[0.85] opacity-80 z-20 cursor-pointer hover:opacity-100 hover:scale-[0.88] shadow-[0_8px_32px_rgba(17,75,17,0.06)]";
              } else if (isRight2) {
                // Second card to the right
                positionClasses =
                  "translate-x-[115%] md:translate-x-[180%] scale-[0.7] opacity-40 z-10 cursor-pointer hover:opacity-60 hover:scale-[0.73]";
              } else if (isLeft2) {
                // Second card to the left
                positionClasses =
                  "-translate-x-[115%] md:-translate-x-[180%] scale-[0.7] opacity-40 z-10 cursor-pointer hover:opacity-60 hover:scale-[0.73]";
              }

              return (
                <div
                  key={i}
                  onClick={() => {
                    // Clicking any visible card makes it the center card instantly
                    if (
                      !isCenter &&
                      (isRight1 || isLeft1 || isRight2 || isLeft2)
                    ) {
                      setCurrentIndex(i);
                    }
                  }}
                  // Added `h-full` and `group` for the hover animations
                  className={`absolute w-[280px] h-full group rounded-[20px] overflow-hidden border border-[#228B22]/20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${positionClasses}`}
                >
                  {/* Full Background Image */}
                  <img
                    src={guest.img}
                    alt={guest.name}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                    draggable="false"
                  />

                  {/* Gradient Overlay (Darkens the bottom so text is readable) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                  {/* Info Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-center z-20 transform transition-transform duration-300">
                    <div className="font-['Outfit',sans-serif] font-bold text-[1.2rem] mb-1.5 text-white drop-shadow-md">
                      {guest.name}
                    </div>
                    <div className="font-['Fira_Code',monospace] text-[#36CE5A] text-[0.85rem] font-medium drop-shadow-md">
                      {guest.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextGuest}
            className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-[#228B22]/20 flex items-center justify-center text-[#114B11] bg-white shadow-[0_4px_14px_rgba(17,75,17,0.06)] hover:bg-[#36CE5A]/10 hover:border-[#36CE5A]/30 hover:scale-105 transition-all duration-300 z-40"
            aria-label="Next guest"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}