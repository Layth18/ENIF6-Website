import React, { useState, useEffect } from 'react';
import { Lock, Book } from 'lucide-react';

export default function WhoCanJoin() {
  // 1. SET YOUR TARGET DATE HERE FOR EVENT REGISTRATION (Format: YYYY-MM-DDTHH:mm:ss)
  const TARGET_DATE = new Date('2026-06-01T12:00:00'); 
  
  const [isEventUnlocked, setIsEventUnlocked] = useState(false);

  useEffect(() => {
    // Function to check if the target date has passed for the event
    const checkDate = () => {
      const now = new Date();
      setIsEventUnlocked(now >= TARGET_DATE);
    };

    // Check immediately on mount
    checkDate();

    // Optional: Check every minute just in case the user leaves the tab open when the time arrives
    const interval = setInterval(checkDate, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="join" className="py-[120px] px-8 relative overflow-hidden bg-[#FAFDFA]">
      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        PARTICIPATION
      </div>
      {/* Decorative Background Glow */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(54,206,90,0.07)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header & CTA Buttons (Split Layout) */}
        <div className="reveal flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-[72px]">
          
          {/* Left Side: Title & Paragraph */}
          <div className="max-w-[700px]">
            <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11] mb-5">
              Who Can Join Us?
            </h2>
            <p className="font-['Outfit',sans-serif] text-[#114B11]/80 text-[1.05rem] font-medium leading-[1.8]">
              ENIF is an inclusive forum open to all students, professionals, and industry experts, 
              whether from the National Engineering School of Sfax or other institutions. We welcome participants from 
              diverse fields such as engineering, computer science, and beyond.
            </p>
          </div>

          {/* Right Side: Buttons Container */}
          <div className="flex flex-col gap-3 shrink-0 w-full lg:w-[480px]">
            
            {/* 1-Column Layout Container */}
            <div className="flex flex-col gap-4 w-full">
              
              {/* Row 1: Event Registration (Locked based on target date) */}
              <a 
                href={isEventUnlocked ? "https://docs.google.com/forms/d/e/1FAIpQLSd5ofGkgbuBcCU_yQxuUF7okT0dRLj50OQ0Y9YUXIpcUWfVwA/viewform" : undefined}
                target={isEventUnlocked ? "_blank" : undefined}
                rel={isEventUnlocked ? "noopener noreferrer" : undefined}
                className={`inline-flex w-full items-center justify-center transition-all duration-300 font-['Outfit',sans-serif] font-bold text-[1.05rem] py-4 px-8 rounded-[60px] whitespace-nowrap
                  ${isEventUnlocked 
                    ? 'hover:scale-[1.02] bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-[#114B11] shadow-[0_8px_24px_rgba(54,206,90,0.3)] hover:shadow-[0_12px_32px_rgba(54,206,90,0.4)]' 
                    : 'bg-[#114B11]/10 text-[#114B11]/40 cursor-not-allowed pointer-events-none border border-[#114B11]/5'
                  }`}
              >
                {!isEventUnlocked && <Lock size={16} className="mr-2" />}
                Event Registration
              </a>

              {/* Row 2: All Challenge Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                
                {/* Challenge Registration */}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd7HV4ZnaU5VHAjkR1ExyWBi9AGjiO9Qu8xVGqnY6sSCO1uug/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] bg-[#114B11] text-white shadow-[0_4px_12px_rgba(17,75,17,0.2)] hover:shadow-[0_8px_20px_rgba(17,75,17,0.3)] font-['Outfit',sans-serif] font-bold text-[1rem] py-4 px-2 rounded-[60px] whitespace-nowrap"
                >
                  Registration
                </a>

                {/* Challenge Submission */}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbj-37GKoIIukv_6Sg2JONhdBc0naAjedg5aoUet44SZyPkQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-[#228B22] to-[#114B11] text-white shadow-[0_4px_12px_rgba(17,75,17,0.2)] hover:shadow-[0_8px_20px_rgba(17,75,17,0.4)] font-['Outfit',sans-serif] font-bold text-[1rem] py-4 px-2 rounded-[60px] whitespace-nowrap"
                >
                  Submission
                </a>

                {/* Specification Book (Icon Only) */}
                <a 
                  href="/ENIF6.0 Specification Book.pdf"
                  download
                  title="Download Specification Book"
                  className="shrink-0 mx-auto sm:mx-0 flex items-center justify-center w-[58px] h-[58px] transition-all duration-300 hover:scale-[1.05] bg-white border-[2px] border-[#228B22] text-[#228B22] shadow-[0_4px_12px_rgba(34,139,34,0.05)] hover:bg-[#228B22]/5 hover:shadow-[0_8px_20px_rgba(34,139,34,0.1)] rounded-[60px]"
                >
                  <Book size={22} />
                </a>

                
                
              </div>
              
            </div>

            {/* Social Media Message (Only shows when event registration is locked) */}
            {!isEventUnlocked && (
              <p className="font-['Outfit',sans-serif] text-[0.9rem] text-[#228B22] font-semibold text-center mt-2 animate-pulse">
                (Event registration opening soon, stay tuned!)
              </p>
            )}

          </div>
        </div>

        {/* Bottom Highlight Note */}
        <div className="reveal mt-[60px] flex flex-col items-center gap-8 text-center">
          <div className="inline-block p-[1.25rem_2rem] rounded-[16px] bg-white border border-[#228B22]/10 shadow-[0_4px_20px_rgba(17,75,17,0.04)]">
            <span className="font-['Outfit',sans-serif] font-bold text-[#228B22]">
              Advanced technologies & sustainable innovation
            </span>
            <span className="font-['Outfit',sans-serif] text-[#114B11]/70 ml-2 font-medium">
              — everyone interested is invited to join us!
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}