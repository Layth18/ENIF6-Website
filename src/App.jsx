import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
//import Hero from './components/Hero';
import Hero from './components/hero2';
import About from './components/About';
import KeyNumbers from './components/KeyNumbers';
import Bootcamp from './components/Bootcamp';
import Plan from './components/Plan';
import WhoCanJoin from './components/WhoCanJoin';
import Guests from './components/Guests';
import Team from './components/Team';
import Gallery from './components/Gallery';
import PreviousEditions from './components/PreviousEditions';
import Sponsors from './components/Sponsors';
import RadioAppearances from './components/RadioAppearances';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

// --- WRAPPER COMPONENT ---
// This watches the scroll position and fades in its children when they enter the screen.
function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

// --- DIVIDER COMPONENT ---
// A clean, reusable component for the 3D buffer line
function SectionDivider({ height = '10px' }) {
  return (
    <div 
      className="w-full relative z-20"
      style={{
        height, 
        background: 'linear-gradient(to bottom, #ffffff 0%, #e5e7eb 100%)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        borderTop: '1px solid #ffffff',
        borderBottom: '1px solid #d1d5db'
      }}
    />
  );
}

// --- MAIN APP ---
export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={unlocked ? "w-full" : "w-full h-screen overflow-hidden"}>
      
      {/* Header Container */}
      <div 
        style={{ 
          transform: showHeader ? 'translateY(0)' : 'translateY(-200%)', 
          transition: 'transform 0.4s ease-in-out',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}
      >
        <Header />
      </div>

      <Hero onUnlock={() => setUnlocked(true)} />
      
      {/* Content Below Hero */}
      <div 
        style={{ 
          opacity: unlocked ? 1 : 0, 
          pointerEvents: unlocked ? 'auto' : 'none',
          transition: 'opacity 0.8s ease 0.3s' 
        }}
      >
        
        {/* Sections interspersed with the clean divider */}
        <SectionDivider height="30px" />
        <FadeInSection><About /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><KeyNumbers /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Bootcamp /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Plan /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><WhoCanJoin /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Guests /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Team /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Gallery /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><PreviousEditions /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Sponsors /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><RadioAppearances /></FadeInSection>
        
        <SectionDivider />
        <FadeInSection><Footer /></FadeInSection>
        
      </div>
    </div>
  );
}