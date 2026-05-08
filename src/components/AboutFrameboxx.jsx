import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from '../assets/aboutus.webp';

gsap.registerPlugin(ScrollTrigger);

const AboutFrameboxx = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the image container while the text is scrolling
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 120px",
        end: "bottom bottom",
        pin: imageRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
        markers: false, // Set to true for debugging
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-frameboxx" className="relative py-24 px-4 w-full max-w-7xl mx-auto overflow-visible">
      <div className="flex flex-col items-center mb-16">
        <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Institute</h3>
        <h2 className="text-5xl md:text-7xl font-accent text-white uppercase tracking-normal leading-none text-center">
          About <span className="text-primary">Frameboxx.</span>
        </h2>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative overflow-visible">
        {/* Left: Content with Blurred Background */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-3xl space-y-8 shadow-2xl">
            <div className="space-y-6">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                <span className="text-white font-bold">Frameboxx Institute of Emerging Media</span> is one of India's most trusted training brands in Animation, VFX, Game Art, Design and Development, AR/VR, Metaverse, Fashion & Interior Design, Graphics, and Web Design. We have built a strong national presence with <span className="text-primary font-bold">50+ centres</span> across India and a thriving community of <span className="text-primary font-bold">40,000+ trained students</span>.
              </p>
              
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Founded by <span className="text-white font-medium">Mr. Rajesh R. Turakhia</span>, a respected industry leader with over 30 years of experience, Frameboxx Institute of Emerging Media is driven by a vision to create skilled, job-ready creative professionals.
              </p>

              <p className="text-gray-300 text-base leading-relaxed font-light">
                Our programs are designed and delivered by industry professionals, ensuring real-world learning, studio-level exposure, and strong portfolio development. We offer Degree, Diploma, and Master's programs aligned with the latest industry trends and technology.
              </p>

              <p className="text-gray-300 text-base leading-relaxed font-light italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                With dedicated placement support, updated curriculum, live projects, expert mentoring, and a creative learning environment, Frameboxx Institute of Emerging Media empowers learners to build successful careers in Media and Creative Arts. <span className="text-primary font-bold not-italic">Choose Frameboxx, where creativity meets career-ready skills.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest text-center">
                  50+ Centers
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest text-center">
                  40k+ Students
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest text-center">
                  30+ Years Exp.
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pinned Image Container */}
        <div className="relative order-1 lg:order-2 h-full z-20">
          <div ref={imageRef} className="group w-full">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={aboutImg} 
                alt="About Frameboxx" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default hidden md:block">
              <p className="text-dark font-black text-2xl leading-none uppercase tracking-tighter">India's Most</p>
              <p className="text-dark font-accent text-3xl leading-none uppercase">Trusted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFrameboxx;
