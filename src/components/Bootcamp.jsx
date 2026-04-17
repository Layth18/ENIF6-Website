import { SESSIONS } from '../data/siteData';

export default function Bootcamp() {
  // Calculate how many "Soon" cards we need to fill up to 3 slots
  const emptySlotsCount = Math.max(0, 3 - SESSIONS.length);
  const emptySlots = Array(emptySlotsCount).fill(null);

  return (
    <section id="bootcamp" className="py-[120px] px-8 relative overflow-hidden bg-[#FAFDFA]">

      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        Online Sessions
      </div>
      
      {/* Background shape */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(54,211,54,0.05)_0%,transparent_60%)] blur-3xl pointer-events-none z-[0]" />

      <div className="max-w-[1200px] mx-auto relative z-[10]">
        
        {/* Header Section */}
        <div className="reveal mb-[72px]">
          
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-[#114B11] max-w-[600px]">
            4 weeks of preparation.{' '}
            <span className="bg-gradient-to-br from-[#36D336] to-[#228B22] text-transparent bg-clip-text">
              Zero hand-holding.
            </span>
          </h2>
          {/* UPDATED DESCRIPTION HERE */}
          <p className="font-['Outfit',sans-serif] text-[#114B11]/80 leading-[1.8] text-[1.05rem] mt-5 max-w-[520px] font-medium">
            Before the hackathon begins, selected participants join our online sessions — a structured sprint to get you battle-ready.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          
          {/* Render Actual Sessions */}
          {SESSIONS.map((session, i) => (
            <div 
              key={i} 
              className="reveal bg-white rounded-[20px] p-8 shadow-[0_8px_32px_rgba(17,75,17,0.06)] relative overflow-hidden border border-[#228B22]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(17,75,17,0.12)] flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent" />

              {/* Step number watermark */}
              <div className="absolute -top-4 -right-2 font-['Outfit',sans-serif] font-extrabold text-[8rem] leading-none text-[#228B22]/[0.03] select-none pointer-events-none z-[1]">
                {i + 1}
              </div>

              {/* Session Date */}
              <div className="inline-block self-start font-['Fira_Code',monospace] text-xs font-bold text-[#228B22] bg-[#36D336]/10 px-3 py-1.5 rounded-md mb-5 relative z-[2]">
                {session.date}
              </div>
              
              {/* Session Title */}
              <h3 className="font-['Outfit',sans-serif] font-bold text-[1.25rem] text-[#114B11] mb-2 tracking-tight relative z-[2]">
                {session.title}
              </h3>
              
              {/* Session Speaker */}
              <p className="font-['Outfit',sans-serif] font-medium text-[#114B11]/70 text-[0.95rem] leading-[1.6] relative z-[2]">
                Speaker: <span className="text-[#228B22] font-bold">{session.speaker}</span>
              </p>
            </div>
          ))}

          {/* Render "Coming Soon" Fillers if SESSIONS.length < 3 */}
          {emptySlots.map((_, i) => (
            <div 
              key={`soon-${i}`} 
              className="reveal bg-white/50 rounded-[20px] p-8 relative overflow-hidden border-2 border-dashed border-[#228B22]/20 flex flex-col items-center justify-center text-center min-h-[220px]"
              style={{ transitionDelay: `${(SESSIONS.length + i) * 0.1}s` }}
            >
              <div className="font-['Outfit',sans-serif] font-bold text-[1.5rem] text-[#114B11]/30 mb-3 tracking-tight">
                Coming Soon
              </div>
              <div className="inline-block font-['Fira_Code',monospace] text-xs font-bold text-[#114B11]/40 bg-[#114B11]/5 px-3 py-1.5 rounded-md">
                TBA
              </div>
            </div>
          ))}

        </div>

        {/* Apply CTA Panel */}
        <div className="reveal mt-[60px] text-center">
          <div className="inline-flex items-center gap-6 py-6 px-10 rounded-[20px] bg-white shadow-[0_8px_32px_rgba(17,75,17,0.06)] border border-[#228B22]/10 flex-wrap justify-center">
            <div className="text-left">
              <div className="font-['Outfit',sans-serif] font-bold text-[1.15rem] text-[#114B11] mb-1">
                Applications Open
              </div>
              <div className="font-['Fira_Code',monospace] text-[#114B11]/60 text-[0.85rem]">
                Bootcamp starts April 15 · 80 spots only
              </div>
            </div>
            <a 
              href="#" 
              className="font-['Outfit',sans-serif] font-bold bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-[#114B11] py-3 px-8 rounded-full no-underline text-[0.95rem] whitespace-nowrap transition-transform duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(54,211,54,0.2)]"
            >
              Apply Now →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}