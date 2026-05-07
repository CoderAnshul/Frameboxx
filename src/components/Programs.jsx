const Programs = () => {
  const courses = [
    {
      title: "Game Development",
      duration: "18 Months",
      tools: ["Unreal Engine 5", "C++", "Unity"],
      desc: "Comprehensive program covering gameplay logic, physics, and AI systems."
    },
    {
      title: "Game Art & Design",
      duration: "12 Months",
      tools: ["Maya", "ZBrush", "Substance"],
      desc: "Master character sculpting, environment design, and PBR texturing."
    },
    {
      title: "VR & Metaverse",
      duration: "9 Months",
      tools: ["Oculus SDK", "C#", "XR Tech"],
      desc: "Specialize in immersive technologies and spatial computing for the future."
    }
  ]

  return (
    <section id="programs" className="relative py-20 lg:py-24 px-4 w-full bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Curriculum</h3>
            <h2 className="text-5xl font-accent text-white uppercase tracking-tighter leading-none">
              Specialized <br/><span className="text-gray-500">Pathways.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Every program is strictly aligned with the Godspeed Games production pipeline, ensuring job-readiness from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col p-8 rounded-3xl bg-black/70 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl cursor-target"
            >
              {/* Card Background Glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {course.duration}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-dark"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>

              <h4 className="text-2xl font-accent text-white mb-4 uppercase tracking-tight">{course.title}</h4>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">
                {course.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {course.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="text-[10px] text-primary/80 font-medium uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
