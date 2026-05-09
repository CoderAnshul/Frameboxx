import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1400)

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Why Us', id: 'whychooseus' },
    { name: 'Partnership', id: 'partnership' },
    { name: 'Degrees', id: 'programs' },
    { name: 'Expert Tracks', id: 'specialized' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Alumni', id: 'alumni' },
    { name: 'Success Stories', id: 'testimonials' },
    { name: 'Hall of Fame', id: 'halloffame' },
    { name: 'Admissions', id: 'admissions' }
  ]

  // Split links for desktop overflow management
  const visibleLinks = navLinks.slice(0, 4)
  const moreLinks = navLinks.slice(4)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
      setIsMoreOpen(false)
    }
  }

  const isLargeDesktop = windowWidth >= 1300

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 px-6 py-4 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-4 py-3 transition-all duration-500 rounded-full border border-white/10 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]' : 'bg-white/5 backdrop-blur-md'}`}>
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group cursor-target relative z-[110]"
          onClick={() => scrollToSection('home')}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Desktop Links (Visible only on Large Screens) */}
        {isLargeDesktop ? (
          <div className="flex items-center gap-1">
            {visibleLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-target`}
              >
                <span className={`relative z-10 ${activeSection === link.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <div className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"></div>
                )}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-4 ${activeSection === link.id ? 'opacity-0' : 'opacity-100'}`}></div>
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative group/more" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>
              <button className={`px-5 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 cursor-target ${isMoreOpen ? 'text-primary' : 'text-gray-400 hover:text-white'}`}>
                <span>More</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              {/* Dropdown Content - Added a wrapper to bridge the gap */}
              <div className={`absolute top-full right-0 pt-3 transition-all duration-300 origin-top-right ${isMoreOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="w-56 p-2 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                   {moreLinks.map(link => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all flex justify-between items-center group"
                      >
                        {link.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                      </button>
                   ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Small Screens (>1300px triggers mobile-style menu) Indicator */
          <div className="hidden lg:block text-[10px] text-white/20 uppercase tracking-[0.2em] font-black animate-pulse">
            Optimal View (1300px+)
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('admissions')}
            className="bg-primary hover:bg-white text-dark font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 hidden sm:block shadow-[0_0_20px_rgba(255,149,0,0.3)] cursor-target"
          >
            Enquire
          </button>

          {/* Hamburger Menu Toggle (Visible for < 1300px) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-all relative z-[110] cursor-target ${windowWidth < 1300 ? 'flex' : 'hidden md:hidden'} ${isMobileMenuOpen ? 'bg-primary text-dark' : 'bg-white/5 text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Super Animated Mobile Menu Overlay (< 1300px) */}
      <div className={`fixed inset-0 z-[105] bg-black/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        </div>

        <div className="h-full flex flex-col justify-center px-8 md:px-24 relative z-10 pt-20">
          {/* Explicit Close Button for Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 flex items-center gap-2 group cursor-target"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">Close</span>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-dark transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
          </button>

          <div className="space-y-3 max-w-2xl py-8 overflow-y-auto max-h-[70vh] no-scrollbar">
            <h4 className="text-primary font-bold uppercase tracking-wide text-[10px] mb-6 animate-in fade-in slide-in-from-left-4 duration-500">Navigation Hub</h4>
            {navLinks.map((link, idx) => (
              <div 
                key={link.id}
                className="overflow-hidden"
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`group flex items-baseline gap-4 text-3xl md:text-5xl font-heading uppercase tracking-tighter transition-all duration-500 text-left cursor-target animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span className="text-white/10 text-sm font-sans font-black tracking-widest group-hover:text-primary transition-colors">0{idx + 1}</span>
                  <span className={`transition-all duration-500 ${activeSection === link.id ? 'text-primary scale-105' : 'text-white/40 group-hover:text-white group-hover:translate-x-3'}`}>
                    {link.name}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Social Connect Bottom */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/5 pt-8 bg-black/50 backdrop-blur-sm rounded-t-2xl">
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-gray-500 hover:text-primary text-[9px] uppercase font-bold tracking-[0.2em] transition-all cursor-target">{social}</a>
              ))}
            </div>
            <div className="text-left md:text-right">
              <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">Contact Us</p>
              <p className="text-white font-medium text-sm">info@frameboxx.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
