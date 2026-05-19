import { useState } from 'react'
import godspeedLogo from '../assets/affiliations/industry/Godspeed Games.webp'

const Curriculum = () => {
  const [activeYear, setActiveYear] = useState(1)

  const curriculumData = [
    {
      year: 1,
      semesters: [
        {
          title: "Semester I",
          subjects: [
            "English I \u2013 (TH)", 
            "Introduction to Game Art", 
            "Fundamentals of Drawing and Sketching", 
            "Digital Drawing and Painting Techniques", 
            "Introduction to Data Mining \u2013 (PR)", 
            "Gender Perspective \u2013 (TH) / Yoga \u2013 (PR) / Media Ethics \u2013 (TH)"
          ],
          godspeed: [
            "Digital Drawing and Painting Techniques", 
            "Digital Concept Art for Game"
          ]
        },
        {
          title: "Semester II",
          subjects: [
            "English-II \u2013 (TH)", 
            "Advanced Drawing and Anatomy", 
            "Character Concept Design", 
            "Project Management", 
            "Fundamentals of 3D", 
            "Digital Marketing \u2013 (TH) / Self Defence (judo) \u2013 (PR) / Moral Values \u2013 (TH)"
          ],
          godspeed: [
            "Texturing Game-Ready Assets with Substance Painter"
          ]
        }
      ],
      software: ["Adobe Photoshop", "Sketchup", "3ds Max Fundamentals", "Maya", "Substance Painter"]
    },
    {
      year: 2,
      semesters: [
        {
          title: "Semester III",
          subjects: [
            "Advanced 3D Modeling", 
            "Introduction to Unreal Engine", 
            "Player Controls and Interaction in Unity", 
            "Level Design Basics", 
            "Entrepreneurship and New-venture creation (PR)",
            "Communication Skills \u2013 (TH)",
            "EVS \u2013 (TH)"
          ],
          godspeed: [
            "Unreal Engine", 
            "Unreal Environment Production Sprint"
          ]
        },
        {
          title: "Semester IV",
          subjects: [
            "High-Poly Sculpting in ZBrush", 
            "Texturing Game-Ready Assets with Substance Painter.", 
            "Procedural Material Creation with Substance Designer", 
            "Lighting and Storytelling in Unreal/Unity", 
            "Rendering with Marmoset Toolbag",
            "High-Resolution Texturing with Mari"
          ],
          godspeed: [
            "High-Poly Sculpting in ZBrush", 
            "AAA Character Production Intensive"
          ]
        }
      ],
      software: ["Maya", "Unreal Engine", "Unity", "Substance Designer", "Speedtree", "Zbrush", "Houdini", "Mari", "Marmoset Toolbag"]
    },
    {
      year: 3,
      semesters: [
        {
          title: "Semester V",
          subjects: [
            "AR/VR Asset Design with Spark AR", 
            "Procedural Environment Design in Houdini", 
            "Retopology", 
            "2D Animation with Spine", 
            "Advanced Character Rigging and Animation",
            "Internship / Project \u2013 (PR)"
          ],
          godspeed: [
            "VFX Creation in Unity/Unreal", 
            "Real-Time Gameplay VFX"
          ]
        },
        {
          title: "Semester VI",
          subjects: [
            "Advanced Environment Assembly in Unreal/Unity", 
            "Capstone Project", 
            "Portfolio Development and Presentation", 
            "Internship/ Project -(Pr)"
          ],
          godspeed: [
            "Advanced Environment Assembly in Unreal/Unity", 
            "Studio Production Simulation"
          ]
        }
      ],
      software: ["Adobe Photoshop", "Sketchup", "3ds Max Fundamentals", "Maya", "Substance Painter"]
    },
    {
      year: 4,
      specialized: [
        { 
          duration: "6 MONTHS",
          title: "Game Design & Development", 
          points: [
            "Learn game design, mechanics & storytelling",
            "Work on Unity & Unreal Engine",
            "Create characters, assets & game environments",
            "Build real, playable game projects",
            "Understand complete game development pipeline"
          ]
        },
        { 
          duration: "3 MONTHS",
          title: "Game Testing Program", 
          points: [
            "Learn game QA & testing fundamentals",
            "Identify bugs & improve gameplay experience",
            "Work on real testing scenarios",
            "Understand industry-level workflows",
            "Improve game performance & quality"
          ]
        },
        { 
          duration: "2.5 Months",
          title: "Portfolio Development & Reviews", 
          points: [
            "Build a strong, professional portfolio",
            "Work on industry-level projects",
            "Get expert feedback & improvements",
            "Showcase your best skills & creativity",
            "Prepare for job & internship opportunities"
          ]
        },
        { 
          duration: "1 WEEK",
          title: "UID Visit", 
          points: [
            "Experience a real design campus",
            "Attend expert sessions & workshops",
            "Explore creative career opportunities",
            "Understand industry exposure",
            "Get inspired by design environment"
          ]
        }
      ]
    }
  ]

  const currentYearData = curriculumData.find(d => d.year === activeYear)

  return (
    <section id="curriculum" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Academic Roadmap</h3>
        <h2 className="text-4xl md:text-6xl font-heading text-white  tracking-tighter leading-none mb-4">
          B.Sc in <span className="text-primary uppercase">Game Art.</span>
        </h2>
        
        {/* Collaboration Logo */}
        <div className="flex flex-col items-center mb-16 animate-in fade-in zoom-in-95 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-slate-50 px-6 py-4 md:px-10 md:py-8 rounded-[2rem] md:rounded-[4rem] border border-primary/20 shadow-[0_0_50px_rgba(255,149,0,0.2)] relative group transition-all duration-700 hover:scale-[1.02] hover:border-primary/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center md:text-left relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 block mb-1 md:mb-3">Collaborative Project</span>
              <span className="text-xl md:text-2xl font-heading uppercase tracking-[0.1em] text-primary drop-shadow-sm">Godspeed Games Production</span>
            </div>
            <div className="hidden md:block w-[1px] h-16 bg-black/10 relative z-10"></div>
            <div className="relative z-10 p-0 md:p-4">
              <img src={godspeedLogo} alt="Godspeed Games" className="h-24 md:h-32 w-auto mix-blend-multiply transition-transform duration-500 group-hover:scale-110" style={{ filter: 'grayscale(1) invert(1) brightness(1.5) contrast(1.5)' }} />
            </div>
          </div>
        </div>
        <p className="text-primary max-w-2xl text-sm leading-relaxed">
          A comprehensive 36-month journey designed to prepare students for the fast-growing gaming industry by combining traditional art foundations with cutting-edge technical expertise.
        </p>
      </div>

      {/* Year Selection Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {[1, 2, 3, 4].map(year => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`cursor-target px-4 py-3 rounded-xl border font-heading text-lg transition-all duration-300 ${activeYear === year ? 'bg-primary border-primary text-dark shadow-[0_0_20px_rgba(255,149,0,0.4)]' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
          >
            YEAR {year}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
        {activeYear < 4 ? (
          <>
            {currentYearData.semesters.map((sem, idx) => (
              <div key={idx} className="glass-card p-10 rounded-3xl bg-black/70 border border-white/10 flex flex-col gap-8 relative overflow-hidden group cursor-target">
                <div className="absolute top-0 right-0 w-24 h-1 bg-primary/20"></div>
                <h4 className="text-2xl font-heading text-white uppercase tracking-wide border-b border-white/10 pb-4">
                  {sem.title}
                </h4>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h5 className="text-[10px] text-primary font-bold uppercase tracking-widest mb-4">Subjects / Topics</h5>
                    <ul className="grid grid-cols-1 gap-3">
                      {sem.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5"></div>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <h5 className="text-[10px] text-primary font-bold uppercase tracking-widest mb-4">Godspeed Modules</h5>
                    <ul className="grid grid-cols-1 gap-2">
                      {sem.godspeed.map((mod, mIdx) => (
                        <li key={mIdx} className="text-xs text-white/80 font-medium bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Software Footer for Years 1-3 */}
            <div className="md:col-span-2 p-8 rounded-[2rem] bg-black/70 border border-white/5 flex flex-wrap items-center justify-center gap-6 mt-4">
              <span className="text-[10px] text-primary font-bold uppercase tracking-[0.4em]">Software Covered:</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {currentYearData.software.map((sw, idx) => (
                  <span key={idx} className="text-xs text-white/80 font-bold px-6 py-2 bg-primary/5 rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,149,0,0.05)] cursor-default">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentYearData.specialized.map((spec, idx) => (
              <div key={idx} className="glass-card p-10 rounded-3xl bg-black/70 border border-primary/20 shadow-2xl group cursor-target flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="bg-primary text-dark font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4 shadow-[0_0_15px_rgba(255,149,0,0.3)]">{spec.duration}</span>
                    <h4 className="text-xl md:text-2xl font-heading text-white uppercase">{spec.title}</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                </div>
                <ul className="space-y-3 mt-2">
                  {spec.points.map((pt, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Curriculum
