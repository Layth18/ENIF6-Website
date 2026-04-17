import { Laptop, Users, Mic, Trophy } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] px-8 relative overflow-hidden bg-[#FAFDFA]"
    >
      {/* Giant Background Watermark Text - Smaller & Darker */}
      <div className="absolute top-[0%] right-[1%] font-['Outfit',sans-serif] font-extrabold text-[clamp(3rem,6vw,6rem)] leading-none text-[#114B11]/[0.07] pointer-events-none select-none z-[0] tracking-tighter whitespace-nowrap">
        ABOUT US
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(54,211,54,0.06)_0%,transparent_60%)] blur-3xl pointer-events-none z-[0]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[radial-gradient(circle,rgba(217,235,76,0.04)_0%,transparent_60%)] blur-3xl pointer-events-none z-[0]" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-20 gap-y-16 items-center relative z-[10]">
        {/* Left: Text */}
        <div className="reveal relative">
          {/* Decorative accent behind text */}
          <div className="absolute -left-6 top-2 w-1 h-24 bg-gradient-to-b from-[#36D336] to-transparent opacity-30 rounded-full" />

          <h2 className="font-['Outfit',sans-serif] font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-[#114B11] mb-7">
            <span className="bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text">
              EN
            </span>
            IS{" "}
            <span className="bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text">
              I
            </span>
            ndustrial{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-[#D9EB4C] to-[#36CE5A] text-transparent bg-clip-text">
                F
              </span>
              orum
              {/* Minimalist underline flourish */}
              <svg
                className="absolute w-full h-[12px] -bottom-1 left-0 opacity-40"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,0 100,10"
                  stroke="#36D336"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>

          <p className="font-['Outfit',sans-serif] text-[#114B11]/80 leading-[1.8] text-[1.05rem] mb-5 text-justify font-medium">
            The ENIS Industrial Forum (ENIF) is a flagship event organized by
            the IEEE IAS ENIS Student Branch Chapter, dedicated to exploring
            cutting-edge technologies and their transformative impact across
            various industries.
          </p>

          <p className="font-['Outfit',sans-serif] text-[#114B11]/80 leading-[1.8] text-[1.05rem] mb-9 text-justify font-medium">
            Since its inception, ENIF has grown into a highly anticipated
            gathering, attracting students, professionals, and experts. It
            serves as a vibrant platform for networking, collaboration, and the
            exchange of ideas to drive the future of technology.
          </p>

          <div className="flex gap-3 flex-wrap">
            {["Innovation", "Networking", "Collaboration", "Technology"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-['Fira_Code',monospace] text-xs font-bold text-[#114B11] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-[#228B22]/10 hover:border-[#36D336]/50 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right: Feature cards (Former Activities) */}
        <div className="reveal relative pb-8 md:pb-0 pt-8 md:pt-0">
          <h3 className="font-['Outfit',sans-serif] font-bold text-[#114B11] text-[1.75rem] mb-8 text-center md:text-left">
            Our Former Activities
          </h3>

          {/* Asymmetrical Grid: the gap-y-4 and offset logic creates a staggered, modern look */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Laptop, title: "Bootcamp" },
              { icon: Users, title: "Soft Skills" },
              { icon: Mic, title: "Conference" },
              { icon: Trophy, title: "Competition" },
            ].map((item, i) => {
              const Icon = item.icon;
              // Push every second item down to create a staggered masonry effect
              const isOffset = i % 2 !== 0;

              return (
                <div
                  key={i}
                  className={`group flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-md hover:bg-gradient-to-br hover:from-[#228B22] hover:to-[#114B11] rounded-[24px] p-6 min-h-[170px] shadow-[0_8px_32px_rgba(17,75,17,0.04)] border border-[#228B22]/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(17,75,17,0.15)] relative overflow-hidden ${isOffset ? "mt-8" : "mb-8"}`}
                >
                  {/* Subtle dynamic glow ring inside the card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#36D336]/0 group-hover:bg-[#36D336]/20 blur-2xl rounded-full transition-all duration-700" />

                  {/* Accent top line - smooth fade */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#36D336]/40 group-hover:via-white/40 to-transparent transition-colors duration-500" />

                  {/* Icon container with bounce/scale effect */}
                  <div className="mb-5 p-3 rounded-full bg-[#FAFDFA] group-hover:bg-white/10 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-[#228B22] group-hover:text-white transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>

                  {/* Text color swaps from dark green to white on hover */}
                  <div className="font-['Outfit',sans-serif] font-bold text-[1.25rem] text-[#114B11] group-hover:text-white tracking-tight transition-colors duration-500 relative z-10">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Edge accent line */}
      <div className="absolute left-0 top-1/2 w-[4px] h-[120px] bg-gradient-to-b from-transparent via-[#36D336] to-transparent -translate-y-1/2 opacity-50" />
    </section>
  );
}
