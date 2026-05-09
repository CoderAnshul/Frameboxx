import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Dynamically import all affiliation images
const govImages = import.meta.glob('../assets/affiliations/government/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const univImages = import.meta.glob('../assets/affiliations/universitites/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const gameImages = import.meta.glob('../assets/affiliations/games/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const industryImages = import.meta.glob('../assets/affiliations/industry/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const loanImages = import.meta.glob('../assets/affiliations/loan partners/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const Affiliations = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef(null);

  const sections = [
    {
      category: "Government Bodies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
      ),
      desc: "Empowered by national skill development initiatives.",
      partners: Object.values(govImages).map(mod => mod.default)
    },
    {
      category: "Universities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      desc: "Academic excellence through strategic university alliances.",
      partners: Object.values(univImages).map(mod => mod.default)
    },
    {
      category: "Gaming & Industry",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="15.5" cy="15.5" r=".5"/><circle cx="18.5" cy="15.5" r=".5"/><circle cx="15.5" cy="12.5" r=".5"/><circle cx="18.5" cy="12.5" r=".5"/></svg>
      ),
      desc: "Direct pathways into AAA production pipelines.",
      partners: [
        ...Object.values(gameImages).map(mod => mod.default),
        ...Object.values(industryImages).map(mod => mod.default)
      ]
    },
    {
      category: "Global & Finance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ),
      desc: "International dual degrees and seamless loan support.",
      partners: Object.values(loanImages).map(mod => mod.default)
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".partner-logo", 
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.05, duration: 0.5, ease: "power3.out", overwrite: "auto" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section className="relative py-24 px-4 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Ecosystem</h3>
          <h2 className="text-5xl md:text-8xl font-heading text-white uppercase leading-none">
            Global <span className="text-primary">Alliances.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base mt-4 font-light">
            We bridge the gap between education and industry through a network of government bodies, universities, and world-class studios.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl border transition-all duration-500 ${
                activeCategory === idx 
                  ? 'bg-primary text-dark border-primary shadow-[0_0_40px_rgba(255,149,0,0.2)] scale-105' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:border-primary/50 hover:text-white'
              }`}
            >
              <span className={activeCategory === idx ? 'text-dark' : 'text-primary'}>
                {section.icon}
              </span>
              <span className="text-xs font-black uppercase tracking-widest">{section.category}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={containerRef} className="relative min-h-[400px]">
          <div className="text-center mb-12">
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Current Category</p>
            <h4 className="text-3xl font-heading text-white uppercase">{sections[activeCategory].category}</h4>
            <p className="text-gray-500 text-sm mt-2">{sections[activeCategory].desc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sections[activeCategory].partners.map((logo, idx) => (
              <div 
                key={idx}
                className="partner-logo group relative aspect-video bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:-translate-y-2 shadow-xl overflow-hidden"
              >
                <img 
                  src={logo} 
                  alt="Partner" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] pointer-events-none rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Affiliations;
