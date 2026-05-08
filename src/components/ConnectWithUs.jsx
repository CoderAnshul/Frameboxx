import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const ConnectWithUs = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    center: '',
    course: ''
  });

  const centers = ["Mumbai - Andheri", "Mumbai - Dadar", "Pune - FC Road", "Pune - DP Road", "Bangalore", "Ahmedabad", "Kolkata"];
  const courses = ["Animation & VFX", "Game Art & Design", "UI/UX Design", "Virtual Reality", "Motion Graphics", "Graphic Design"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-element", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={formRef} id="connect" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="form-element text-4xl md:text-7xl font-accent text-white uppercase leading-none">
            Connect <span className="text-primary">With Us</span>
          </h2>
          <div className="form-element w-24 h-1 bg-red-600 rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="form-element relative bg-black/40 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <form className="space-y-8">
            
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 ..." 
                  className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email & Center */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="example@mail.com" 
                  className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Select Center</label>
                <div className="relative group">
                  <select className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-5 text-white focus:outline-none focus:border-primary/30 transition-all duration-300 appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Your Center</option>
                    {centers.map(center => <option key={center} value={center} className="bg-dark text-white">{center}</option>)}
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-primary transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Select Program */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Select Program</label>
              <div className="relative group">
                <select className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-5 text-white focus:outline-none focus:border-primary/30 transition-all duration-300 appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Your Course</option>
                  {courses.map(course => <option key={course} value={course} className="bg-dark text-white">{course}</option>)}
                </select>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-primary transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">How can we help you?</label>
              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full bg-[#1a1425] border border-white/5 rounded-[2rem] px-8 py-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Authorization */}
            <div className="flex gap-4 items-start pt-2">
              <div className="relative flex items-center h-5">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20 cursor-pointer"
                  defaultChecked
                />
              </div>
              <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-tighter opacity-50">
                I authorize Frameboxx to contact me via Phone, Email, SMS, WhatsApp. This will override DND registration.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full py-6 rounded-full bg-primary hover:bg-orange-500 transition-all duration-500 text-dark font-black uppercase tracking-[0.3em] text-lg shadow-[0_15px_40px_rgba(255,149,0,0.2)] hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95">
              Send Application
            </button>

          </form>
        </div>

      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full"></div>
    </section>
  );
};

export default ConnectWithUs;
