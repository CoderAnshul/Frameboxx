const Footer = () => {
  return (
    <footer className="relative bg-black pt-24 pb-12 px-4 overflow-hidden border-t border-white/5">
      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-3xl font-heading text-white uppercase tracking-tighter">
              Frameboxx<span className="text-primary">.XP</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Empowering the next generation of game artists and developers with industry-direct training and elite studio partnerships.
            </p>
            <div className="flex gap-4">
              {['TW', 'IG', 'FB', 'LI'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white/40 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-target"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information (From Image) */}
          <div className="md:col-span-5 space-y-8">
            <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Headquarters</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  107, 1st Floor, Sri Krishna, New link road,<br />
                  Opp. Fun Republic, Andheri (West),<br />
                  Mumbai - 400053.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 group cursor-target">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <a href="tel:+919297769776" className="text-white/80 group-hover:text-white transition-colors text-sm font-medium tracking-wide">
                    +91 9297769776
                  </a>
                </div>

                <div className="flex items-center gap-3 group cursor-target">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <a href="mailto:info@frameboxx.in" className="text-white/80 group-hover:text-white transition-colors text-sm font-medium tracking-wide">
                    info@frameboxx.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
             <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
             <ul className="grid grid-cols-1 gap-4">
                {['Home', 'Programs', 'Curriculum', 'Alumni', 'Admissions'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm font-medium tracking-wide cursor-target">
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>
        </div>
        </div>

    </footer>
  )
}

export default Footer
