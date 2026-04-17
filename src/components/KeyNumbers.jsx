import { useState, useRef, useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';
import { STATS } from '../data/siteData';

function StatCard({ stat, started }) {
  const count = useCounter(stat.value, 2200, started);
  
  return (
    <div className="group bg-white rounded-2xl p-10 border border-[#114B11]/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#228B22]/30 hover:shadow-[0_20px_40px_-15px_rgba(17,75,17,0.08)] flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Minimalist dot accent that appears on hover */}
      <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-[#36D336] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
      
      {/* Number - Solid dark text with a vibrant suffix pop */}
      <div className="font-['Outfit',sans-serif] font-black text-[clamp(3rem,5vw,4.5rem)] leading-none text-[#114B11] tracking-tighter mb-3">
        {count.toLocaleString()}
        <span className="text-[#36D336] ml-1">{stat.suffix}</span>
      </div>
      
      {/* Label - Clean, wide tracking, lighter color for contrast */}
      <div className="font-['Space_Mono',monospace] font-medium text-[#114B11]/60 text-[0.75rem] tracking-[0.2em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function KeyNumbers() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setStarted(true); 
          observer.disconnect(); 
        } 
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="numbers" className="py-[120px] px-8 relative overflow-hidden bg-white">
      
      {/* Giant Background Watermark Text - Back to original place */}
      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        NUMBERS
      </div>

      <div className="max-w-[1200px] mx-auto relative z-[10]" ref={ref}>
        
        {/* Minimalist Header */}
        <div className="reveal text-center mb-20 mt-10">
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight text-[#114B11] mb-4">
            Five editions. One mission.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-[#228B22]/30" />
            <p className="font-['Space_Mono',monospace] text-[#228B22] text-[0.8rem] tracking-[0.15em] uppercase font-bold">
              Previous Edition By The Numbers
            </p>
            <div className="h-[1px] w-8 bg-[#228B22]/30" />
          </div>
        </div>

        {/* Cards Grid - Slightly wider gap for breathing room */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="reveal" 
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <StatCard stat={stat} started={started} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}