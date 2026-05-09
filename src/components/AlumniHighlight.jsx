import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import img1 from '../assets/alumini/01.webp';
import img2 from '../assets/alumini/02.webp';
import img3 from '../assets/alumini/03.webp';
import img4 from '../assets/alumini/04.webp';
import img5 from '../assets/alumini/05.webp';
import img6 from '../assets/alumini/06.webp';
import img7 from '../assets/alumini/07.webp';
import img8 from '../assets/alumini/08.webp';
import img9 from '../assets/alumini/09.webp';

gsap.registerPlugin(ScrollTrigger);

const AlumniHighlight = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const alumni = [
    { img: img1, title: "Industry Leader", tag: "Creative Director" },
    { img: img2, title: "Game Architect", tag: "Lead Dev" },
    { img: img3, title: "Character Maven", tag: "3D Artist" },
    { img: img4, title: "Environment Pro", tag: "Level Designer" },
    { img: img5, title: "Animation Guru", tag: "Animator" },
    { img: img6, title: "UI Specialist", tag: "UX Designer" },
    { img: img7, title: "Tech Artist", tag: "VFX Lead" },
    { img: img8, title: "Studio Founder", tag: "Entrepreneur" },
    { img: img9, title: "Art Visionary", tag: "Concept Artist" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current.children;
      
      gsap.fromTo(items, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="alumni-highlights" className="relative py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Alumni Impact</h3>
          <h2 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-normal leading-none">
            Success <span className="text-primary">Spotlight.</span>
          </h2>
        </div>
        <p className="text-primary text-sm max-w-xs uppercase tracking-widest leading-relaxed">
          Celebrating the journeys of our graduates who are now shaping the future of global gaming.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((item, idx) => (
          <div 
            key={idx}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 hover:rounded-none transition-all bg-dark cursor-target"
          >
            {/* Image with Parallax-like effect */}
            <img 
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-fit transition-all duration-1000 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
    </section>
  );
};

export default AlumniHighlight;
