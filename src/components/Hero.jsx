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
    <section id="home" className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-4 leading-none pointer-events-none uppercase">
          <span className="block text-white font-heading text-4xl md:text-5xl tracking-tight mb-1">AWARD-WINNING</span>
          <span className="block text-primary font-heading text-5xl md:text-8xl tracking-tight mb-1">GAME DEVELOPMENT</span>
          <span className="block text-white font-heading text-4xl md:text-6xl tracking-tight">& DESIGN EDUCATION.</span>
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-light bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/5 shadow-xl pointer-events-none">
          Frameboxx and Backstage Pass Institute of Gaming join forces to launch India's most specialized Diploma programs in Game Design, Unreal Engine, and VR development.
        </p>
      </div>
    </section>
  )
}

export default Hero
