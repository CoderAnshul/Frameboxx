const HallOfFame = () => {
  const achievements = [
    {
      game: "XDEFIANT",
      student: "AMIT GHOSH",
      studio: "LITTLE RED ZOMBIES",
      designation: "3D CHARACTER ARTIST",
      color: "#F97316",
      poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co38z6.png"
    },
    {
      game: "FORZA MOTORSPORT",
      student: "SAYAN DAS",
      studio: "LAKSHYA DIGITAL",
      designation: "3D ARTIST",
      color: "#3B82F6",
      poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m9s.png"
    },
    {
      game: "GRAND THEFT AUTO V",
      student: "VINAYAK PATIL",
      studio: "ROCKSTAR GAMES",
      designation: "PROPS ARTIST",
      color: "#EF4444",
      poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5um6.png"
    },
    {
      game: "JEDI SURVIVOR",
      student: "NIKUNJ GUPTA",
      studio: "LITTLE RED ZOMBIES",
      designation: "3D CHARACTER ARTIST",
      color: "#10B981",
      poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5z89.png"
    }
  ]

  return (
    <section id="halloffame" className="relative py-24 px-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Elite Achievements</h3>
          <h2 className="text-5xl font-accent text-white uppercase tracking-tighter leading-none">
            Hall Of <br/><span className="text-gray-500">Fame.</span>
          </h2>
        </div>
        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
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
            <div className="h-[450px] relative overflow-hidden">
              <img 
                src={item.poster} 
                alt={item.game} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[10px] text-white font-black tracking-widest uppercase shadow-black drop-shadow-md">{item.game}</span>
                </div>
              </div>
            </div>

            {/* Content Body (Floating Overlay) */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest block mb-1">Student</span>
                  <p className="text-white font-sans text-xl font-black uppercase tracking-[0.15em] leading-tight">
                    {item.student}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest block">Designation</span>
                    <p className="text-white/80 text-xs font-medium uppercase">{item.designation}</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest block">Studio</span>
                    <p className="text-white/80 text-xs font-medium uppercase">{item.studio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-primary transition-colors z-20"></div>
          </div>
        ))}
      </div>
      
      {/* Featured Wide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
         <div className="group relative bg-black/80 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-primary/50 transition-all duration-500 cursor-target overflow-hidden">
            {/* Background Image for Wide Card */}
            <img 
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co3v9r.png" 
              className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
              alt="DAH 2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex-1 space-y-4">
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest">Destroy All Humans! 2</h4>
              <div className="space-y-1">
                <p className="text-3xl font-sans font-black text-white uppercase leading-none tracking-[0.15em]">Digvijay Dutta</p>
                <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Senior 3D Artist @ Lakshya Digital</p>
              </div>
            </div>
            <div className="relative z-10 w-full md:w-32 h-32 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center font-black text-white/40 uppercase text-center p-4 text-xs tracking-widest">
              CREDITS:<br/>DAH! 2
            </div>
         </div>

         <div className="group relative bg-black/80 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-primary/50 transition-all duration-500 cursor-target overflow-hidden">
            {/* Background Image for Wide Card */}
            <img 
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co38z6.png" 
              className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
              alt="XDefiant"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex-1 space-y-4">
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest">XDEFIANT (Pre-load)</h4>
              <div className="space-y-1">
                <p className="text-3xl font-sans font-black text-white uppercase leading-none tracking-[0.15em]">Amit Ghosh</p>
                <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">3D Character Artist @ Little Red Zombies</p>
              </div>
            </div>
            <div className="relative z-10 w-full md:w-32 h-32 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center font-black text-white/40 uppercase text-center p-4 text-xs tracking-widest">
              CREDITS:<br/>XDEFIANT
            </div>
         </div>
      </div>
    </section>
  )
}

export default HallOfFame
