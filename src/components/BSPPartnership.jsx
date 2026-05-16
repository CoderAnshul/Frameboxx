import React from 'react'

const BSPPartnership = () => {
  return (
    <section id="bsp-partnership" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Frame */}
      <div className="absolute inset-0 border-[1px] border-white/5 m-4 pointer-events-none rounded-[3rem]">
        <div className="absolute top-0 right-12 w-24 h-[1px] bg-primary"></div>
        <div className="absolute bottom-12 left-0 w-[1px] h-24 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 lg:mb-0">
          {/* Frameboxx Profile */}
          <div className="glass-card p-10 rounded-3xl bg-black/60 border border-white/10 relative overflow-hidden group cursor-target flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-1 bg-primary/30"></div>
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Institution Profile</h4>
              <h3 className="text-3xl font-heading text-white uppercase mb-6 leading-none">Frameboxx <br/><span className="text-primary">2.0 Animation.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A premier institution dedicated to redefining creative training with a vision to become the global leader in design education. With over 45,000+ students, we've expanded across Animation, VFX, Game Asset Design, and more.
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/40 font-black text-xs tracking-widest uppercase">
              <span className="text-primary">45k+ Students</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>Global Presence</span>
            </div>
          </div>

          {/* Backstage Pass Profile */}
          <div className="glass-card p-10 rounded-3xl bg-black/60 border border-white/10 relative overflow-hidden group cursor-target flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-1 bg-primary/30"></div>
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Institute Profile</h4>
              <h3 className="text-3xl font-heading text-white uppercase mb-6 leading-none">Backstage <br/><span className="text-primary">Pass.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A pioneer in gaming education in India, recognized for producing top-tier talent in Game Development, Design, and VR. Backstage Pass bridges the gap between raw passion and professional industry requirements.
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/40 font-black text-xs tracking-widest uppercase">
              <span className="text-primary">Gaming Pioneer</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>Industry Aligned</span>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="glass-card p-12 rounded-3xl bg-black/70 border border-primary/20 relative overflow-hidden cursor-target shadow-[0_0_50px_rgba(255,149,0,0.1)] flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10">
            <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Alignment</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tighter leading-none">
              Specialized Academic <br/><span className="text-primary">Alliance.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-8">
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  Frameboxx has collaborated with <span className="text-white font-medium">Backstage Pass</span> to deliver intensive, industry-focused Specialized Programs in Game Development, Unreal Engine, Unity, and VR Application Development.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
                    Advanced technical curriculums
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary rotate-45"></div>
                    Expert guidance and mentorship
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  These specialized tracks are designed to transform enthusiasts into highly skilled professionals, ready to integrate into global development pipelines and take on specialized technical roles.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="block text-white font-bold text-lg leading-none mb-1">Intensive</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Training Modules</span>
                  </div>
                  <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="block text-white font-bold text-lg leading-none mb-1">Elite</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Mastery Level</span>
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

export default BSPPartnership
