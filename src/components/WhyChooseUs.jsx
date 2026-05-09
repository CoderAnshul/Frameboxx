const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Industry Recognition & Awards",
      desc: "Proud recipients of the Times Education Excellence Award and Best Education Brands. Our students consistently dominate global stages like IGDC and Casual Connect, winning 'Student Game of the Year' and 'Best Game Design'.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      )
    },
    {
      title: "Comprehensive Curriculum",
      desc: "University-approved tracks in Game Development, Concept Art, 3D Game Art, and Production. Curated by industry experts to prepare you for high-stakes production pipelines from day one.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/><path d="M8 15h6"/></svg>
      )
    },
    {
      title: "Industry Experienced Mentors",
      desc: "Learn from veterans with 8-20 years of experience who have worked at Ubisoft, Electronic Arts, and Rockstar Games. Our mentors have contributed to over 50+ globally published titles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Portfolio Development",
      desc: "Graduate with a studio-ready portfolio featuring complete games, professional 3D art, and award-winning collaborative projects that highlight your unique technical mastery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      )
    },
    {
      title: "Focus on Practical Skills",
      desc: "Zero filler. Our training is 100% focused on industry standards, ensuring students are job-ready and highly sought after by top gaming studios globally.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.05 9 1.41 1.41"/><path d="M14.47 14.48 15.41 15.41"/><path d="m19 9-1.41 1.41"/><path d="m14.41 10.59-1.41-1.41"/><path d="m10.59 14.41-1.41-1.41"/></svg>
      )
    }
  ]

  return (
    <section id="whychooseus" className="relative py-20 lg:py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Elite Education</h3>
          <h2 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-normal leading-none">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
        </div>
        <p className="text-primary text-sm max-w-xs uppercase tracking-widest leading-relaxed">
          The ultimate launchpad for your career in the multi-billion dollar gaming industry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Content: Reasons Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-8 rounded-3xl bg-black/60 border border-white/10 hover:border-primary/30 transition-all duration-500 group cursor-target flex flex-col gap-6 ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-heading text-white uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content: Visual/Image */}
        <div className="lg:col-span-5 relative group min-h-[500px]">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="/gaming_students_lab_session_1778158183643.png" 
              alt="Gaming Students Lab" 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-gray-800"></div>
                  ))}
                </div>
                <p className="text-[10px] text-white font-black uppercase tracking-widest">
                  Join 45k+ Global Graduates
                </p>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-3xl rounded-3xl border border-primary/20 flex flex-col items-center justify-center text-center p-4 animate-bounce-slow">
            <span className="text-primary font-black text-3xl">20+</span>
            <span className="text-[8px] text-white/60 uppercase font-bold tracking-widest">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
