const Partnership = () => {
  const data = [
    {
      title: "About Frameboxx",
      subtitle: "REDEFINING CREATIVE TRAINING",
      content: "Frameboxx was established with a vision to redefine traditional training methods and create industry-ready creative professionals. With a modern approach to skill-based education, we offer specialized programs in Animation, VFX, Gaming, and more. Empowering 45,000+ students to turn their imagination into successful careers.",
      stats: ["45k+ Students", "Industry Experts", "Global Reach"]
    },
    {
      title: "About Godspeed Games",
      subtitle: "LEADING DEVELOPMENT STUDIO",
      content: "Founded in 2015, Godspeed Games is a premier game development and services studio based in Pune, India. With a team of 200+ professionals, the studio specializes in game art, design, and development, having contributed to 1000+ games for leading international studios.",
      stats: ["200+ Pros", "1000+ Games", "50+ Clients"]
    }
  ]

  return (
    <section id="partnership" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Frame */}
      <div className="absolute inset-0 border-[1px] border-white/5 m-4 pointer-events-none rounded-[3rem]">
        <div className="absolute top-0 right-12 w-24 h-[1px] bg-primary"></div>
        <div className="absolute bottom-12 left-0 w-[1px] h-24 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Frameboxx Profile */}
        <div className="glass-card p-10 rounded-3xl bg-black/60 border border-white/10 relative overflow-hidden group cursor-target">
          <div className="absolute top-0 right-0 w-32 h-1 bg-primary/30"></div>
          <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Institution Profile</h4>
          <h3 className="text-3xl font-heading text-white uppercase mb-6 leading-none">Frameboxx <br/><span className="text-primary"> Animation.</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            A premier institution dedicated to redefining creative training with a vision to become the global leader in design education. With over 45,000+ students, we've expanded across Animation, VFX, Game Asset Design, and more.
          </p>
          <div className="flex items-center gap-4 text-white/40 font-black text-xs tracking-widest uppercase">
            <span className="text-primary">45k+ Students</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>Global Presence</span>
          </div>
        </div>

        {/* Godspeed Profile */}
        <div className="glass-card p-10 rounded-3xl bg-black/60 border border-white/10 relative overflow-hidden group cursor-target">
          <div className="absolute top-0 right-0 w-32 h-1 bg-primary/30"></div>
          <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Studio Profile</h4>
          <h3 className="text-3xl font-heading text-white uppercase mb-6 leading-none">Godspeed <br/><span className="text-primary">Games Studio.</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Pune's leading development and QA studio with a powerhouse team of 200+ professionals. Having delivered over 1,000+ games across platforms, we bring real studio production pipelines directly to the classroom.
          </p>
          <div className="flex items-center gap-4 text-white/40 font-black text-xs tracking-widest uppercase">
            <span className="text-primary">200+ Pros</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>1000+ Games</span>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div className="glass-card p-12 rounded-3xl bg-black/70 border border-primary/20 relative overflow-hidden cursor-target shadow-[0_0_50px_rgba(255,149,0,0.1)]">
        <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10">
          <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Collaborative Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tighter leading-none">
            A Visionary Academic <br/><span className="text-primary">Partnership.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-8">
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Frameboxx has collaborated with <span className="text-white font-medium">Godspeed Games</span> to deliver an industry-aligned B.Sc in Game Art program that bridges academic learning with real-world practices. 
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
                  Curriculum designed by active professionals
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
                  150-hour specialized production module
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed font-light">
                The program includes hands-on mentorship where students develop their own games, supported by internship opportunities and direct guidance into the professional gaming ecosystem.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="block text-white font-bold text-lg leading-none mb-1">150h</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Specialized Module</span>
                </div>
                <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="block text-white font-bold text-lg leading-none mb-1">100%</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Studio Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Partnership
