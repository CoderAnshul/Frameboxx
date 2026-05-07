const Admissions = () => {
  return (
    <section id="admissions" className="relative py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Start Your Journey</h3>
            <h2 className="text-5xl font-accent text-white uppercase tracking-tighter leading-none">
              Admission <br/><span className="text-gray-600">Portal.</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-base leading-relaxed">
              We offer limited seats per batch to maintain a 1:10 mentor-student ratio. Apply now for the next intake.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group cursor-target">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-dark"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">Call for consultation</h4>
                <p className="text-white font-medium text-lg">+91 9297769776</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group cursor-target">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-dark"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">Email inquiries</h4>
                <p className="text-white font-medium text-lg">info@frameboxx.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="relative z-10 glass-card p-10 md:p-16 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-primary outline-none transition-all cursor-target" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-primary outline-none transition-all cursor-target" placeholder="+91 ..." />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">Select Program</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer cursor-target">
                <option className="bg-dark">Game Development</option>
                <option className="bg-dark">Game Art & Design</option>
                <option className="bg-dark">VR & Metaverse</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">Message</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:border-primary outline-none transition-all resize-none cursor-target" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-white text-dark font-black py-4 rounded-full uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_40px_rgba(255,149,0,0.2)] cursor-target">
              Send Application
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Admissions
