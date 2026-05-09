import React from 'react';

const HallOfFame = () => {
  const achievements = [
    {
      game: "XDEFIANT",
      student: "AMIT GHOSH",
      studio: "LITTLE RED ZOMBIES",
      designation: "3D CHARACTER ARTIST",
      color: "#F97316",
      poster: "/hof/amit.png"
    },
    {
      game: "FORZA MOTORSPORT",
      student: "SAUVIK JENA",
      studio: "LAKSHYA DIGITAL",
      designation: "3D ARTIST",
      color: "#3B82F6",
      poster: "/hof/sauvik.png"
    },
    {
      game: "GRAND THEFT AUTO V",
      student: "DIPANJAN BISWAS",
      studio: "ROCKSTAR GAMES",
      designation: "PROP ARTIST",
      color: "#EF4444",
      poster: "/hof/dipanjan.png"
    },
    {
      game: "JEDI SURVIVOR",
      student: "NIKITA GUPTA",
      studio: "LITTLE RED ZOMBIES",
      designation: "3D CHARACTER ARTIST",
      color: "#10B981",
      poster: "/hof/nikita.png"
    }
  ]

  return (
    <section id="halloffame" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Elite Achievements</h3>
          <h2 className="text-5xl font-heading text-white uppercase tracking-tighter leading-none">
            Hall Of <br/><span className="text-primary">Fame.</span>
          </h2>
        </div>
        <p className="text-primary max-w-sm text-sm leading-relaxed">
          Our students contribute to the biggest AAA titles in the industry. Real people. Real credits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col bg-black/80 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl cursor-target"
          >
            {/* Game Poster Background */}
            <div className="relative overflow-hidden">
              <img 
                src={item.poster} 
                alt={item.game} 
                className="w-full h-auto group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Accent Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-primary transition-colors z-20"></div>
          </div>
        ))}
      </div>
      
      {/* Featured Wide Cards */}
      <div className="grid grid-cols-1 gap-6 mt-6">
         <div className="group relative bg-black/80 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-target">
            <img 
              src="/hof/dipomay.png" 
              className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.02]"
              alt="Destroy All Humans 2"
            />
         </div>
      </div>
    </section>
  )
}

export default HallOfFame
