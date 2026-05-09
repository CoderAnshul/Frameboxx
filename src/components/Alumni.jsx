import logo1 from '../assets/logos/1.jpeg'
import logo2 from '../assets/logos/2.jpeg'
import logo3 from '../assets/logos/3.jpeg'
import logo4 from '../assets/logos/4.jpeg'
import logo5 from '../assets/logos/5.jpeg'
import logo6 from '../assets/logos/6.jpeg'
import logo7 from '../assets/logos/7.jpeg'
import logo8 from '../assets/logos/8.jpeg'
import logo9 from '../assets/logos/9.jpeg'
import logo10 from '../assets/logos/10.jpeg'
import logo11 from '../assets/logos/11.jpeg'

const Alumni = () => {
  const partners = [
    { name: "EA SPORTS", img: logo1 },
    { name: "SUMO DIGITAL", img: logo2 },
    { name: "SONY", img: logo3 },
    { name: "ROCKSTAR", img: logo4 },
    { name: "HITWICKET", img: logo5 },
    { name: "ZYNGA", img: logo6 },
    { name: "JUEGO STUDIOS", img: logo7 },
    { name: "UBISOFT", img: logo8 },
    { name: "GSN GAMES", img: logo9 },
    { name: "GAMITRONICS", img: logo10 },
    { name: "GAMEOPEDIA", img: logo11 },
    { name: "XCUBE LABS", img: logo1 } // Repeating one to fill the grid or can leave 11
  ];

  return (
    <section id="alumni" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center mb-20">
        <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Placement Network</h3>
        <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter leading-none mb-6">
          Our Alumni <span className="text-primary">Employed At.</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-base font-light leading-relaxed">
          The world's most innovative gaming studios actively recruit from our talent pool.
        </p>
      </div>

      {/* High-Visibility Logo Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center p-4 rounded-2xl bg-white shadow-2xl hover:border-primary transition-all duration-500 hover:-translate-y-2 group cursor-target h-28 overflow-hidden"
            >
              <img 
                src={partner.img} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Alumni
