import { useState, useEffect } from "react";
import enifLogo from "../assets/Logos/logo_ENIF_6.png";
import tree from "../assets/Vectors/Tree.svg";
import { useScrollLock } from "../hooks/useScrollLock";

export default function Hero({ onUnlock }) {
  const [locked, setLocked] = useState(true);
  
  // Real-time states
  const [eventStatus, setEventStatus] = useState("countdown"); // "countdown" | "started" | "finished"
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Activate the scroll lock hook
  useScrollLock(locked);

  useEffect(() => {
    const EVENT_START = new Date("2026-05-03T09:00:00").getTime();
    const EVENT_END = new Date("2026-05-03T17:00:00").getTime(); 

    const updateTimer = () => {
      const now = new Date().getTime();

      if (now > EVENT_END) {
        setEventStatus("finished");
      } else if (now >= EVENT_START && now <= EVENT_END) {
        setEventStatus("started");
      } else {
        setEventStatus("countdown");
        const difference = EVENT_START - now;
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const handleUnlock = () => {
    setLocked(false);
    onUnlock?.();

    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const pad = (n) => String(n).padStart(2, "0");

  const bubbles = [
    { size: "35vw", color: "rgba(54,211,54,0.05)", bottom: "-5%", left: "-10%", anim: "float2 25s infinite" },
    { size: "25vw", color: "rgba(217,235,76,0.06)", top: "5%", right: "-5%", anim: "float2 22s infinite 1s" },
    { size: "40vw", color: "rgba(255,255,255,0.03)", top: "30%", left: "40%", anim: "float1 28s infinite 3s" },
    { size: "12vw", color: "rgba(54,211,54,0.1)", bottom: "15%", left: "40%", anim: "float1 20s infinite 0.5s" },
    { size: "8vw", color: "rgba(217,235,76,0.15)", bottom: "25%", right: "10%", anim: "float1 16s infinite 3s" },
    { size: "6vw", color: "rgba(255,255,255,0.1)", top: "10%", left: "15%", anim: "float1 14s infinite" },
    { size: "10vw", color: "rgba(54,211,54,0.12)", top: "60%", left: "5%", anim: "float2 18s infinite 2s" },
    { size: "7vw", color: "rgba(217,235,76,0.1)", top: "20%", right: "25%", anim: "float2 15s infinite 4s" },
    { size: "3vw", color: "rgba(217,235,76,0.4)", top: "45%", left: "20%", anim: "float1 10s infinite 2s" },
    { size: "4vw", color: "rgba(255,255,255,0.3)", top: "20%", left: "60%", anim: "float2 18s infinite 1.5s" },
    { size: "2vw", color: "rgba(217,235,76,0.5)", bottom: "40%", right: "30%", anim: "float2 12s infinite 2.5s" },
    { size: "1.5vw", color: "rgba(255,255,255,0.6)", top: "35%", right: "15%", anim: "float1 8s infinite 0.5s" },
    { size: "2.5vw", color: "rgba(54,211,54,0.4)", bottom: "10%", left: "25%", anim: "float2 11s infinite 1s" },
    { size: "1vw", color: "rgba(217,235,76,0.7)", top: "70%", right: "45%", anim: "float1 9s infinite 3s" },
    { size: "2vw", color: "rgba(255,255,255,0.4)", top: "80%", left: "70%", anim: "float2 14s infinite 0s" },
    { size: "3vw", color: "rgba(54,211,54,0.3)", top: "15%", left: "35%", anim: "float1 13s infinite 2s" },
  ];

  return (
    <section
      id="hero"
      className="min-h-[100svh] lg:h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#36D336] via-[#228B22] to-[#125112]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(217,235,76,0.15)_0%,transparent_60%)] blur-3xl pointer-events-none z-[0]" />

      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              backgroundColor: b.color,
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              filter: "blur(15px)",
              animation: b.anim,
            }}
          />
        ))}
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="absolute inset-0 z-[20] grid grid-cols-1 grid-rows-[45svh_35svh_20svh] lg:grid-cols-2 lg:grid-rows-[70vh_30vh] pointer-events-none">
        
        {/* 1. FULL-SPANNING TREE BACKGROUND */}
        <div className="col-start-1 row-start-1 row-span-3 lg:row-span-2 relative w-full h-full pointer-events-none z-[0] flex justify-center items-end">
          <img
            src={tree}
            alt="Oak tree background"
            // Uses height (h-[105%]) on mobile to stretch the entire screen length. 
            // Swaps to width (lg:w-[180%]) on desktop for the side layout.
            className="absolute -bottom-[2%] lg:-bottom-[35%] w-auto h-[105%] lg:h-auto sm:w-[90%] lg:w-[100%] max-w-none opacity-40 lg:opacity-60"
            style={{
              left: "50%",
              transformOrigin: "bottom center",
              animation: "treeSway 8s ease-in-out infinite",
            }}
          />
        </div>

        {/* 2. LOGO SECTION */}
        <div className="col-start-1 row-start-1 relative h-full flex flex-col justify-center items-center pt-8 lg:pt-0 z-[10]">
          <div className="relative inline-block p-4 sm:p-8 pointer-events-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FAFDFA]/30 blur-3xl rounded-full z-0 pointer-events-none" />
            <img
              src={enifLogo}
              alt="ENIF 6.0 Logo"
              className="relative z-10 w-[400px] sm:w-[400px] lg:w-[400px] drop-shadow-[0_10px_20px_rgba(17,75,17,0.3)] transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>

        {/* 3. TIMER SECTION */}
        <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 h-full flex flex-col justify-center items-center px-4 sm:px-[5%] pointer-events-auto z-[10]">
          {eventStatus === "countdown" && (
            <div className="flex flex-row gap-2 sm:gap-4 w-full max-w-[520px]">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINS", value: timeLeft.minutes },
                { label: "SECS", value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center relative overflow-hidden pt-4 sm:pt-6 px-1 sm:px-2 pb-3 sm:pb-5 bg-white/90 sm:bg-white rounded-xl sm:rounded-[20px] shadow-[0_8px_32px_rgba(17,75,17,0.3)] backdrop-blur-md"
                >
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent" />
                  <span className="font-['Space_Mono',monospace] text-[clamp(1.2rem,4vw,3.2rem)] font-bold text-[#114B11] leading-none mb-1 sm:mb-2">
                    {pad(item.value)}
                  </span>
                  <span className="font-['Space_Mono',monospace] text-[9px] sm:text-[11px] font-bold text-[#228B22] tracking-[0.1em] sm:tracking-[0.2em] opacity-90">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {eventStatus === "started" && (
            <div className="w-full max-w-[520px] flex flex-col items-center justify-center p-6 sm:p-8 bg-white/90 sm:bg-white rounded-[20px] shadow-[0_8px_32px_rgba(17,75,17,0.3)] backdrop-blur-md relative overflow-hidden text-center mx-4">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent" />
              <span className="font-['Space_Mono',monospace] text-[clamp(1.2rem,3vw,2.5rem)] font-bold text-[#114B11] leading-tight uppercase tracking-tight">
                The Event Has Started!
              </span>
              <span className="font-['Space_Mono',monospace] text-[12px] sm:text-[14px] font-bold text-[#228B22] opacity-90 mt-2 sm:mt-3 uppercase tracking-widest">
                Join us now
              </span>
            </div>
          )}

          {eventStatus === "finished" && (
            <div className="w-full max-w-[520px] flex flex-col items-center justify-center p-6 sm:p-8 bg-white/90 sm:bg-white rounded-[20px] shadow-[0_8px_32px_rgba(17,75,17,0.3)] backdrop-blur-md relative overflow-hidden text-center mx-4">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent" />
              <span className="font-['Space_Mono',monospace] text-[clamp(1.2rem,3vw,2.5rem)] font-bold text-[#114B11] leading-tight uppercase tracking-tight">
                Event Finished
              </span>
              <span className="font-['Space_Mono',monospace] text-[12px] sm:text-[14px] font-bold text-[#228B22] opacity-90 mt-2 sm:mt-3 uppercase tracking-widest">
                Thank you for your participation!
              </span>
            </div>
          )}
        </div>

        {/* 4. BUTTON SECTION */}
        <div className="col-start-1 row-start-3 lg:col-span-2 lg:row-start-2 relative flex justify-center items-start lg:items-center h-full pointer-events-auto pb-8 lg:pb-0 z-[20]">
          <button
            onClick={handleUnlock}
            className="transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-[#114B11] font-['Syne',sans-serif] font-extrabold text-[16px] sm:text-[18px] py-3 sm:py-4 px-8 sm:px-11 rounded-[60px] border-[3px] border-white cursor-pointer tracking-[0.02em] shadow-[0_0_40px_rgba(217,235,76,0.35)] w-fit"
          >
            {locked ? "Get Started" : "Unlocked ↓"}
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50%      { transform: translate(30px, -30px) scale(1.1); opacity: 1; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 1; }
          50%      { transform: translate(-30px, 30px) scale(0.9); opacity: 0.7; }
        }

        @keyframes treeSway {
          0%, 100% { transform: translateX(-50%) rotate(-0.5deg); }
          50%      { transform: translateX(-50%) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
}