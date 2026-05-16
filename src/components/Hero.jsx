import Beams from './Beams';

const Hero = () => {
  const scrollToAdmissions = () => {
    const element = document.getElementById('admissions')
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-2 md:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black lg:hidden">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10 pointer-events-none">
        <h1 className="mb-4 leading-none uppercase">
          <span className="block text-white font-heading text-4xl md:text-5xl tracking-tight mb-1 drop-shadow-lg">AWARD-WINNING</span>
          <span className="block text-primary font-heading text-5xl md:text-8xl tracking-tight mb-1 drop-shadow-lg">GAME DEVELOPMENT</span>
          <span className="block text-white font-heading text-4xl md:text-6xl tracking-tight drop-shadow-lg">& DESIGN EDUCATION.</span>
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-light bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/5 shadow-xl">
          The strategic alliance between <span className="font-heading text-primary tracking-wide font-bold">FRAMEBOXX </span>, Backstage Pass Institute, and Godspeed Games represents the pinnacle of specialized gaming education in India. Bridging the gap between academic theory and real-world game production.
        </p>
      </div>
    </section>
  )
}

export default Hero
