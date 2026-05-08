import { useState } from 'react'

const SpecializedPrograms = () => {
  const [activeTab, setActiveTab] = useState(0)

  const programs = [
    {
      title: "Advanced Program in Game Development",
      duration: "240 Hrs",
      fee: "₹ 2,25,000",
      type: "Advanced",
      intro: "An intensive one-year program designed for students and professionals aiming to specialize in game development. Guided by experienced mentors, learners gain practical exposure through real-world development scenarios.",
      learn: ["C++ | Adv C++ & STL | C#", "Unity 3D - Basic & Advanced", "Unreal Engine 5 - Blueprints & C++", "Graphics Programming with OpenGL", "AI Programming", "Game Networking", "Portfolio Development"],
      careers: ["Game Programmer", "Unity Developer", "Unreal Developer", "Gameplay Programmer", "Graphics Programmer", "AI Programmer"],
      image: "/unreal_engine_developer_session_1778158444794.png"
    },
    {
      title: "Expert Program in Game Development with Unity",
      duration: "120 Hrs",
      fee: "₹ 1,48,000",
      type: "Expert",
      intro: "An immersive program crafted to build a solid foundation in programming and game creation. Empowering learners to design, develop, and deploy interactive games using industry-standard tools.",
      learn: ["C# Programming", "Unity 3D Engine Architecture", "Advanced Physics & AI", "Mobile Game Optimization", "Asset Pipeline Integration", "Multiplayer Fundamentals"],
      careers: ["Unity Game Programmer", "Mobile Game Developer", "AR/VR Developer", "Technical Artist"],
      image: "/gaming_students_lab_session_1778158183643.png"
    },
    {
      title: "Expert Program in Game Development with Unreal",
      duration: "120 Hrs",
      fee: "₹ 1,48,000",
      type: "Expert",
      intro: "A power-packed program designed to help aspiring developers master one of the world's most powerful game engines. Combines technical depth with creative freedom.",
      learn: ["C++ | Adv C++ & STL", "Introduction to Unreal Engine", "Unreal Blueprints", "Gameplay Programming", "AI and Behaviour Programming", "UI Programming and Game Systems", "Portfolio Development"],
      careers: ["Unreal Engine Game Developer", "Gameplay Programmer", "AI Programmer", "Level Designer", "Technical Artist"],
      image: "/unreal_engine_developer_session_1778158444794.png"
    },
    {
      title: "Expert Program in Game Design & Production",
      duration: "120 Hrs",
      fee: "₹ 1,48,000",
      type: "Expert",
      intro: "An intensive program crafted to equip aspiring designers with the creative and technical skills to design compelling game experiences. Covers everything from ideation to production.",
      learn: ["Game History & Genres", "Conceptualization & Design Thinking", "Pitch Deck & Presentation", "Spec Creation & GDD", "Scope & Production Planning", "Unreal Blueprints", "Portfolio Development"],
      careers: ["Game Designer", "Level Designer", "Narrative Designer", "Combat Designer", "Technical Designer"],
      image: "/game_design_production_session_1778158664604.png"
    },
    {
      title: "Expert Program in VR Application Development",
      duration: "120 Hrs",
      fee: "₹ 1,48,000",
      type: "Expert",
      intro: "An intensive, hands-on program crafted to prepare students for the fast-growing field of Virtual Reality. Integrates strong foundations in programming and 3D engines.",
      learn: ["VR Development Principles", "Unity/Unreal VR Integration", "3D UI/UX Design", "Haptic Feedback Systems", "Metaverse Architecture", "Spatial Audio Design"],
      careers: ["VR App Developer", "AR/VR Game Developer", "Metaverse Developer", "Spatial Designer"],
      image: "/vr_development_session_1778158499074.png"
    }
  ]

  return (
    <section id="specialized" className="relative py-20 lg:py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Elite Mastery</h3>
        <h2 className="text-5xl md:text-7xl font-accent text-white uppercase tracking-normal leading-none">
          Specialized <span className="text-primary">Tracks.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Navigation Tabs (Console Style) */}
        <div className="lg:col-span-4 space-y-3">
          {programs.map((prog, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full group relative p-5 rounded-2xl border transition-all duration-500 text-left overflow-hidden cursor-target ${activeTab === idx ? 'bg-primary border-primary shadow-[0_0_40px_rgba(255,149,0,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === idx ? 'text-dark/60' : 'text-primary'}`}>
                  {prog.type}
                </span>
                <span className={`text-[10px] font-bold ${activeTab === idx ? 'text-dark/60' : 'text-gray-500'}`}>
                  {prog.duration}
                </span>
              </div>
              <h4 className={`text-sm font-black uppercase tracking-wider leading-snug transition-colors duration-500 ${activeTab === idx ? 'text-dark' : 'text-white'}`}>
                {prog.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-3xl bg-black/60 border border-white/10 overflow-hidden relative min-h-[600px] flex flex-col">
            {/* Visual Header */}
            <div className="h-64 relative overflow-hidden">
               <img 
                 src={programs[activeTab].image} 
                 className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 animate-in fade-in zoom-in-95 duration-700" 
                 key={programs[activeTab].image}
                 alt="Program Visual"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest">Global Standard</p>
                    <h3 className="text-2xl md:text-3xl font-accent text-white uppercase tracking-tight">{programs[activeTab].title}</h3>
                  </div>
                  <div className="bg-primary px-6 py-2 rounded-xl text-dark font-black text-lg shadow-[0_0_30px_#FF9500]">
                    {programs[activeTab].fee}
                  </div>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12 space-y-10 flex-1 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
              <div className="space-y-4">
                <h5 className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em]">Module Overview</h5>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl italic">"{programs[activeTab].intro}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h5 className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">What you will learn</h5>
                  <ul className="space-y-3">
                    {programs[activeTab].learn.map((item, i) => (
                      <li key={i} className="text-white/80 text-xs font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h5 className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Career Opportunities</h5>
                  <ul className="space-y-3">
                    {programs[activeTab].careers.map((item, i) => (
                      <li key={i} className="text-white/80 text-xs font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Background Tech Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 100 100" className="stroke-white fill-none">
                <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecializedPrograms
