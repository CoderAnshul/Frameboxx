import { useState } from 'react';
import CustomSelect from './CustomSelect';

const QuickApply = () => {
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const centers = ["Swargate", "Hadapsar", "Kharadi"];
  const courses = ["Animation & VFX", "Game Art & Design", "UI/UX Design", "Virtual Reality", "Motion Graphics", "Graphic Design"];

  return (
    <section className="relative z-20 -mt-12 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] ">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-accent text-white uppercase tracking-tight">
              Apply <span className="text-primary">Now</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-3 rounded-full"></div>
          </div>

          <form className="space-y-6">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              <input 
                type="text" 
                placeholder="Your Name*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              <input 
                type="tel" 
                placeholder="Your Phone*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              
              <CustomSelect 
                options={centers} 
                placeholder="Select Center" 
                value={selectedCenter} 
                onChange={setSelectedCenter} 
              />

              <CustomSelect 
                options={courses} 
                placeholder="Select Course *" 
                value={selectedCourse} 
                onChange={setSelectedCourse} 
              />
            </div>

            {/* Bottom Bar: Auth & Button */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5">
              <div className="flex gap-4 items-start max-w-2xl">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20 cursor-pointer"
                  defaultChecked
                />
                <p className="text-white text-[10px] md:text-[11px] leading-relaxed uppercase tracking-normal opacity-70">
                  I authorize Frameboxx Institute of Emerging Media and/or its representatives to contact me via Phone, Email, SMS, WhatsApp, or any other means of communication.
                </p>
              </div>
              
              <button className="w-full lg:w-auto px-12 py-5 rounded-2xl bg-gradient-to-r from-primary to-orange-500 text-dark font-black uppercase tracking-[0.2em] text-sm shadow-[0_10px_40px_rgba(255,149,0,0.3)] hover:shadow-primary/50 transform hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
                Apply Now (Get OTP)
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
};

export default QuickApply;
