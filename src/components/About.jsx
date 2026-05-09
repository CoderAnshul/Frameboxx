const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Branding/Visual */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10 glass-card p-12 md:p-20 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                  <span className="text-3xl font-heading text-primary">F</span>
                </div>
                <div className="h-[1px] flex-grow bg-white/10"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                  <span className="text-3xl font-heading text-white">B</span>
                </div>
                <div className="h-[1px] flex-grow bg-white/10"></div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                  <span className="text-3xl font-heading text-gray-500">G</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight uppercase tracking-tighter">
                A Triple Threat in <span className="text-primary">Gaming Education.</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                The strategic alliance between <span className="text-white font-medium">Frameboxx 2.0</span>, <span className="text-white font-medium">Backstage Pass Institute</span>, and <span className="text-white font-medium">Godspeed Games</span> represents the pinnacle of specialized gaming education in India.
              </p>
            </div>
            
            {/* Decorative Grid */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Content */}
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-xs">The Vision</h3>
            <p className="text-2xl text-white font-light leading-snug">
              Bridging the gap between academic theory and <span className="font-medium">real-world game production</span> with industry-standard studio environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-widest">Industry First</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                India's most specialized Diploma programs designed and delivered by active game developers.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-widest">Studio Integration</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Direct internship pathways with Godspeed Games and exposure to global production pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
