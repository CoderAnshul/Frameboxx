import { useState } from 'react'
import CustomSelect from './CustomSelect'

const Admissions = () => {
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const centers = ["Swargate", "Hadapsar", "Kharadi"];
  const courses = ["Animation & VFX", "Game Art & Design", "UI/UX Design", "Virtual Reality", "Motion Graphics", "Graphic Design"];

  return (
    <section id="admissions" className="relative py-20 lg:py-32 px-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Branding & Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Start Your Journey</h3>
            <h2 className="text-6xl md:text-8xl font-accent text-white uppercase tracking-tighter leading-[0.85]">
              Admission <br/><span className="text-primary">Portal.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-base leading-relaxed font-light">
              We offer limited seats per batch to maintain a 1:10 mentor-student ratio. Apply now for the next intake.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,149,0,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-dark transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className="text-gray-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Call for consultation</h4>
                <p className="text-white font-medium text-xl tracking-tight">+91 9297769776</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,149,0,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-dark transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 className="text-gray-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Email inquiries</h4>
                <p className="text-white font-medium text-xl tracking-tight">info@frameboxx.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Comprehensive Form */}
        <div className="relative z-10 glass-card p-10 md:p-14 rounded-[3rem] bg-black/40 border border-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">
          <form className="space-y-8">
            
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Full Name</label>
                <input type="text" className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white focus:border-primary/50 outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Phone Number</label>
                <input type="tel" className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white focus:border-primary/50 outline-none transition-all placeholder:text-gray-700" placeholder="+91 ..." />
              </div>
            </div>

            {/* Row 2: Email & Center */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="example@mail.com" 
                  className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Select Center</label>
                <CustomSelect 
                  options={centers} 
                  placeholder="Select Your Center" 
                  value={selectedCenter} 
                  onChange={setSelectedCenter} 
                />
              </div>
            </div>
            
            {/* Row 3: Program */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Select Program</label>
              <CustomSelect 
                options={courses} 
                placeholder="Select Your Course" 
                value={selectedCourse} 
                onChange={setSelectedCourse} 
              />
            </div>

            {/* Message Area */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">How can we help you?</label>
              <textarea rows="4" className="w-full bg-[#1a1425] border border-white/5 rounded-[2rem] px-8 py-6 text-white focus:border-primary/50 outline-none transition-all resize-none placeholder:text-gray-700" placeholder="Message"></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-primary hover:bg-orange-500 text-dark font-black py-6 rounded-full uppercase tracking-[0.3em] text-lg transition-all duration-500 shadow-[0_15px_50px_rgba(255,149,0,0.25)] hover:shadow-primary/50 transform hover:-translate-y-1 active:scale-95">
              Send Application
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Grid Light */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full"></div>
    </section>
  )
}

export default Admissions
