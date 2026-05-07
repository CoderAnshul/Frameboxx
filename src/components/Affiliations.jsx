import { useState } from 'react'

const Affiliations = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const sections = [
    {
      category: "Government Bodies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
      ),
      desc: "Empowered by national skill development initiatives.",
      partners: ["SKILL INDIA", "MESC", "NSDC", "MECAT"]
    },
    {
      category: "Universities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      desc: "Academic excellence through strategic university alliances.",
      partners: ["KARNAVATI UNIVERSITY", "MEDHAVI SKILLS", "JNAFAU", "MANGALAYATAN", "YCMOU", "SUBHARTI", "SILVER OAK"]
    },
    {
      category: "Gaming Studios",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="15.5" cy="15.5" r=".5"/><circle cx="18.5" cy="15.5" r=".5"/><circle cx="15.5" cy="12.5" r=".5"/><circle cx="18.5" cy="12.5" r=".5"/></svg>
      ),
      desc: "Direct pathways into AAA production pipelines.",
      partners: ["GODSPEED GAMES", "ILLUSION REALITY", "BACKSTAGE PASS", "ZEBU ANIMATION", "GREEN GOLD"]
    },
    {
      category: "Global & Finance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ),
      desc: "International dual degrees and seamless loan support.",
      partners: ["YORKVILLE UNIVERSITY", "TORONTO FILM SCHOOL", "AXIS BANK", "PROPELLD", "AKSHAR"]
    }
  ]

  return (
    <section id="affiliations" className="relative py-32 px-8 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 drop-shadow-[0_0_10px_rgba(255,149,0,0.5)]">Strategic Ecosystem</h3>
        <h2 className="text-5xl md:text-7xl font-accent text-white uppercase tracking-tighter leading-none mb-6">
          Global <span className="text-gray-700">Alliances.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Navigation Console */}
        <div className="lg:col-span-4 space-y-4">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`w-full group relative p-6 rounded-2xl border transition-all duration-500 text-left overflow-hidden cursor-target ${activeCategory === idx ? 'bg-primary border-primary shadow-[0_0_30px_rgba(255,149,0,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
              {/* Scanline Effect */}
              {activeCategory === idx && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2 animate-scanline pointer-events-none"></div>
              )}
              
              <div className="flex items-center gap-5 relative z-10">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeCategory === idx ? 'bg-dark text-primary shadow-lg' : 'bg-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/10'}`}>
                  {section.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-widest transition-colors duration-500 ${activeCategory === idx ? 'text-dark' : 'text-white'}`}>
                    {section.category}
                  </h4>
                  <p className={`text-[10px] mt-1 leading-relaxed transition-colors duration-500 ${activeCategory === idx ? 'text-dark/70' : 'text-gray-500'}`}>
                    {section.desc}
                  </p>
                </div>
              </div>

              {/* Active Indicator Arrow */}
              {activeCategory === idx && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-dark rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right: Dynamic Partner Display */}
        <div className="lg:col-span-8 min-h-[400px]">
          <div className="glass-card h-full p-12 rounded-3xl bg-black/60 border border-white/10 relative overflow-hidden flex flex-col justify-center">
            {/* Background Decorative Tech Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {sections[activeCategory].partners.map((partner, pIdx) => (
                  <div 
                    key={`${activeCategory}-${pIdx}`}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${pIdx * 100}ms` }}
                  >
                    <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group cursor-target shadow-xl flex items-center justify-center min-w-[180px]">
                      <span className="text-sm font-sans font-black text-white/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300 tracking-[0.2em] uppercase text-center">
                        {partner}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out shadow-[0_0_10px_#FF9500]"
                style={{ width: `${((activeCategory + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Network Nodes (Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-20">
         <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-primary rounded-full animate-pulse shadow-[0_0_15px_#FF9500]"></div>
         <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700 shadow-[0_0_20px_#FF9500]"></div>
         <div className="absolute top-[60%] right-[5%] w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}

export default Affiliations
