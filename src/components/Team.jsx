import React, { useState, useEffect } from "react";
import { TEAM } from "../data/siteData";

export default function Team() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaginating, setIsPaginating] = useState(false);

  // Pagination Logic
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(TEAM.length / ITEMS_PER_PAGE);
  const selectedMember = TEAM[selectedIndex];

  // Auto-scroll every 10 seconds
  useEffect(() => {
    // Pause the timer while a pagination transition is actively happening
    if (isPaginating) return;

    const timerId = setTimeout(() => {
      const nextIndex = (selectedIndex + 1) % TEAM.length;
      const targetPage = Math.floor(nextIndex / ITEMS_PER_PAGE);

      // If the next person is on a different page, trigger the page transition
      if (targetPage !== currentPage) {
        setIsPaginating(true);
        setIsAnimating(false);

        setTimeout(() => {
          setCurrentPage(targetPage);
          setSelectedIndex(nextIndex);
          setIsPaginating(false);
          setIsAnimating(true);
        }, 300);
      } else {
        // Otherwise, just animate to the next person on the same page
        setIsAnimating(true);
        setSelectedIndex(nextIndex);
      }
    }, 6000); // 10 seconds

    // Cleanup ensures the timer resets if the user manually clicks a person or page
    return () => clearTimeout(timerId);
  }, [selectedIndex, currentPage, isPaginating, ITEMS_PER_PAGE]);

  // Cycle through pages manually via the arrow button
  const handleNextPage = () => {
    if (isPaginating) return;
    setIsPaginating(true);
    setIsAnimating(false);

    setTimeout(() => {
      const nextPageIndex = (currentPage + 1) % totalPages;
      setCurrentPage(nextPageIndex);

      const newFirstIndex = nextPageIndex * ITEMS_PER_PAGE;
      setSelectedIndex(newFirstIndex);

      setIsPaginating(false);
      setIsAnimating(true);
    }, 300);
  };

  const handleSelect = (index) => {
    if (index === selectedIndex) return;
    setIsAnimating(true);
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const visibleFighters = TEAM.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  // Helper variables to check if social links exist and are not "#"
  const hasFb = selectedMember?.facebook && selectedMember.facebook !== "#";
  const hasIg = selectedMember?.instagram && selectedMember.instagram !== "#";
  const hasIn = selectedMember?.linkedin && selectedMember.linkedin !== "#";

  return (
    <section
      id="team"
      className="py-[60px] md:py-[120px] px-4 md:px-8 relative overflow-hidden bg-[#FAFDFA] flex flex-col justify-center min-h-screen"
    >
      {/* Background Watermark */}
      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        TEAM
      </div>

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(20px) scale(0.98); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-character {
          animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        /* Auto-scroll timer animation */
        @keyframes shrinkCenter {
          0% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0.3; }
        }
        .animate-timer {
          /* 6 seconds, linear so it shrinks at a constant speed, origin center pulls from both ends */
          animation: shrinkCenter 6s linear forwards;
          transform-origin: center;
        }

        /* Custom scrollbar for left panel */
        .fighter-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
        .fighter-scroll::-webkit-scrollbar-track { background: transparent; }
        .fighter-scroll::-webkit-scrollbar-thumb { background: rgba(34, 139, 34, 0.2); border-radius: 10px; }
        .fighter-scroll::-webkit-scrollbar-thumb:hover { background: rgba(34, 139, 34, 0.5); }
      `}</style>

      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col">
        {/* TOP SECTION - Pagination Header */}
        <div className="flex flex-col mb-6 shrink-0">
          <div className="flex justify-between items-end pb-4 border-b-2 border-[#114B11]/10 mb-2">
            <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight text-[#114B11] uppercase italic">
              Meet the Team
            </h2>

            {totalPages > 1 && (
              <button
                onClick={handleNextPage}
                aria-label="Next Page of Fighters"
                className="group flex items-center justify-center w-[50px] h-[50px] bg-white border-2 border-[#228B22]/20 rounded-xl hover:bg-[#36CE5A] hover:border-[#36CE5A] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(54,206,90,0.4)]"
              >
                <svg
                  className={`w-6 h-6 text-[#114B11] group-hover:text-white transition-all duration-300 ${isPaginating ? "translate-x-1 opacity-0" : "translate-x-0 opacity-100"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row gap-8 overflow-hidden md:items-center">
          {/* LEFT PANEL (12% Width) - Character Selector */}
          <div
            className={`md:w-[12%] w-full shrink-0 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto overflow-y-hidden fighter-scroll pb-2 md:pb-0 md:pr-2 transition-opacity duration-300 ease-in-out ${isPaginating ? "opacity-0" : "opacity-100"}`}
          >
            {visibleFighters.map((member, i) => {
              const absoluteIndex = currentPage * ITEMS_PER_PAGE + i;
              const isSelected = absoluteIndex === selectedIndex;

              return (
                <button
                  key={`${member.name}-${absoluteIndex}`}
                  onClick={() => handleSelect(absoluteIndex)}
                  className={`relative shrink-0 mx-auto w-[60px] h-[60px] md:w-[80px] md:h-[80px] overflow-hidden rounded-xl border-[3px] transition-all duration-300 
                    ${
                      isSelected
                        ? "border-[#36CE5A] shadow-[0_0_15px_rgba(54,206,90,0.4)] scale-[1.05] grayscale-0"
                        : "border-[#114B11]/10 grayscale-[50%] hover:grayscale-0 hover:border-[#228B22]/50 hover:-translate-y-1"
                    }`}
                >
                  <img
                    src={member.thumbnail}
                    alt={`Select ${member.name}`}
                    className="absolute inset-0 w-full h-full object-cover bg-white"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 border-4 border-[#36CE5A]/20 pointer-events-none rounded-lg" />
                  )}
                </button>
              );
            })}
          </div>

          {/* MIDDLE PANEL (44% Width) - Selected Character Display */}
          <div className="md:w-[44%] w-full flex flex-col justify-center items-center overflow-hidden relative py-4 gap-6">
            {/* Background Glow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(54,206,90,0.15)_0%,transparent_70%)] pointer-events-none z-0 transition-opacity duration-300 ease-in-out ${isPaginating ? "opacity-0" : "opacity-100"}`}
            />

            {/* Portrait */}
            <div
              key={selectedMember.name}
              className={`relative z-10 w-full max-w-[360px] aspect-[3/4] bg-white border-4 border-[#114B11]/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(17,75,17,0.1)] transition-all duration-300 ease-in-out ${isPaginating ? "opacity-0 scale-95" : "opacity-100 scale-100"} ${isAnimating ? "animate-character" : ""}`}
            >
              <img
                src={selectedMember.portrait}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TIMER PROGRESS LINE */}
            <div
              className={`relative z-10 w-full max-w-[360px] h-1 bg-[#114B11]/10 rounded-full overflow-hidden transition-opacity duration-300 ease-in-out ${isPaginating ? "opacity-0" : "opacity-100"}`}
            >
              <div
                key={`timer-${selectedIndex}`} // Changing the key resets the CSS animation automatically
                className="h-full bg-gradient-to-r from-[#D9EB4C] via-[#36CE5A] to-[#228B22] animate-timer"
              />
            </div>
          </div>
          
          {/* RIGHT PANEL (44% Width) - Info Panel */}
          <div className="md:w-[44%] w-full flex flex-col justify-center py-6 md:px-6">
            <div
              key={`info-${selectedMember.name}`}
              className={`transition-all duration-300 ease-in-out ${isPaginating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"} ${isAnimating ? "animate-character" : ""}`}
            >
              <div className="inline-block px-3 py-1 bg-[#228B22]/10 text-[#228B22] font-['Fira_Code',monospace] font-bold text-sm rounded-md mb-4 uppercase tracking-wider">
                {selectedMember.role}
              </div>

              <h3 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1] text-[#114B11] uppercase tracking-tighter mb-4 italic">
                {selectedMember.name}
              </h3>

              <p className="font-['Outfit',sans-serif] text-[#114B11]/70 text-[1rem] leading-[1.6] mb-8 max-w-[400px] border-l-4 border-[#36CE5A] pl-4">
                {selectedMember.bio}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href={hasFb ? selectedMember.facebook : undefined}
                  target={hasFb ? "_blank" : undefined}
                  rel={hasFb ? "noopener noreferrer" : undefined}
                  onClick={(e) => !hasFb && e.preventDefault()}
                  className={`group flex items-center justify-center w-12 h-12 rounded-full border border-[#114B11]/10 shadow-sm transition-all duration-300 
                    ${hasFb 
                      ? "bg-white hover:border-[#36CE5A] hover:shadow-[0_4px_15px_rgba(54,206,90,0.3)] hover:-translate-y-1 cursor-pointer" 
                      : "bg-[#FAFDFA] opacity-50 cursor-not-allowed"}`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${hasFb ? "text-[#114B11]/60 group-hover:text-[#36CE5A]" : "text-[#114B11]/40"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={hasIg ? selectedMember.instagram : undefined}
                  target={hasIg ? "_blank" : undefined}
                  rel={hasIg ? "noopener noreferrer" : undefined}
                  onClick={(e) => !hasIg && e.preventDefault()}
                  className={`group flex items-center justify-center w-12 h-12 rounded-full border border-[#114B11]/10 shadow-sm transition-all duration-300 
                    ${hasIg 
                      ? "bg-white hover:border-[#36CE5A] hover:shadow-[0_4px_15px_rgba(54,206,90,0.3)] hover:-translate-y-1 cursor-pointer" 
                      : "bg-[#FAFDFA] opacity-50 cursor-not-allowed"}`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${hasIg ? "text-[#114B11]/60 group-hover:text-[#36CE5A]" : "text-[#114B11]/40"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={hasIn ? selectedMember.linkedin : undefined}
                  target={hasIn ? "_blank" : undefined}
                  rel={hasIn ? "noopener noreferrer" : undefined}
                  onClick={(e) => !hasIn && e.preventDefault()}
                  className={`group flex items-center justify-center w-12 h-12 rounded-full border border-[#114B11]/10 shadow-sm transition-all duration-300 
                    ${hasIn 
                      ? "bg-white hover:border-[#36CE5A] hover:shadow-[0_4px_15px_rgba(54,206,90,0.3)] hover:-translate-y-1 cursor-pointer" 
                      : "bg-[#FAFDFA] opacity-50 cursor-not-allowed"}`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${hasIn ? "text-[#114B11]/60 group-hover:text-[#36CE5A]" : "text-[#114B11]/40"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}