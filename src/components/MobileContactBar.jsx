const MobileContactBar = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="glass-card bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Call Us Button */}
        <a 
          href="tel:+919297769776" 
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-dark font-black uppercase text-[10px] tracking-widest rounded-2xl hover:scale-95 active:scale-90 transition-all cursor-target"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Us
        </a>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10 mx-3"></div>

        {/* Query Button */}
        <a 
          href="mailto:info@frameboxx.in" 
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:scale-95 active:scale-90 transition-all cursor-target"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Query
        </a>
      </div>
    </div>
  )
}

export default MobileContactBar
