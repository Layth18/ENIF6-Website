import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import logo from '../assets/Logos/logo_ENIF_6.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Countdown Logic
  useEffect(() => {
    const targetDate = new Date("2026-05-03T09:00:00").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetDate - now);
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  // Reusable mini-countdown component
  const MiniCountdown = () => (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HRS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEC", value: timeLeft.seconds },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'white',
            padding: '4px 8px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(17,75,17,0.1)',
            position: 'relative',
            overflow: 'hidden',
            minWidth: '46px'
          }}
        >
          {/* Accent top line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent, #36CE5A, transparent)' }} />
          
          <span style={{ 
            fontFamily: '"Space Mono", monospace', 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            color: '#114B11', 
            lineHeight: 1, 
            marginBottom: '2px',
            marginTop: '2px'
          }}>
            {pad(item.value)}
          </span>
          <span style={{ 
            fontFamily: '"Space Mono", monospace', 
            fontSize: '7px', 
            fontWeight: 'bold', 
            color: '#228B22', 
            letterSpacing: '0.1em' 
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <header
      style={{
        width: '100%', 
        position: 'relative', // Ensures the floating countdown anchors to the header
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,15,10,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(217,235,76,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 80 : 90, transition: 'height 0.3s' }}>
        {/* Logo */}
        <img
          src={logo}
          alt="ENIF 6.0 Logo"
          className="w-[90%] max-w-[160px]"
        />        

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover-line"
              style={{ color: 'rgba(240,240,232,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#D9EB4C'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,240,232,0.7)'}
            >
              {link.label}
            </a>
          ))}
          
          <a href="#about" style={{
            background: 'linear-gradient(135deg, #D9EB4C, #36CE5A)',
            color: '#0a0f0a', fontWeight: 700, fontSize: '0.85rem',
            padding: '10px 22px', borderRadius: 999, textDecoration: 'none',
            letterSpacing: '0.03em', transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 24px rgba(217,235,76,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}
          >
            Join Us →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D9EB4C', display: 'none' }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(10,15,10,0.98)', borderTop: '1px solid rgba(217,235,76,0.1)',
          padding: '1.5rem 2rem 2rem',
        }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: 'rgba(240,240,232,0.8)', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', fontWeight: 500, borderBottom: '1px solid rgba(217,235,76,0.07)' }}>
              {link.label}
            </a>
          ))}
          <a href="#about" style={{
            display: 'inline-block', marginTop: '1.25rem',
            background: 'linear-gradient(135deg, #D9EB4C, #36CE5A)',
            color: '#0a0f0a', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none',
          }}>Join Us →</a>
        </div>
      )}

      {/* FLOATING COUNTDOWN PILL - Right Aligned & Transparent */}
      <div className="floating-countdown">
        <span 
          className="hidden-mobile font-['Outfit',sans-serif]" 
          style={{ 
            fontWeight: 700, 
            color: '#114B11', 
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Event Starts In:
        </span>
        <MiniCountdown />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }

        /* Countdown Pill Styles */
        .floating-countdown {
          position: absolute;
          top: 100%;
          left: 2rem; /* Aligns with the 2rem header padding */
          margin-top: 16px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(34, 139, 34, 0.15);
          padding: 8px 16px;
          border-radius: 100px;
          box-shadow: 0 8px 32px rgba(17, 75, 17, 0.15);
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 40;
          opacity: 0.1; /* Almost transparent */
          transform: translateY(0);
          transition: all 0.4s ease;
        }

        .floating-countdown:hover {
          opacity: 1; /* Fully visible on hover */
          transform: translateY(-2px); /* Slight float up effect */
          box-shadow: 0 12px 40px rgba(17, 75, 17, 0.25);
        }

        /* Adjust right spacing for mobile if needed */
        @media (max-width: 768px) {
          .floating-countdown {
            right: 1rem;
            opacity: 1; /* You might want this to stay visible on mobile since hover doesn't exist */
          }
        }
      `}</style>
    </header>
  );
}