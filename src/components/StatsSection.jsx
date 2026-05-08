import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    {
      value: 18,
      suffix: '',
      label: 'Years of Excellence',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 15L15 18L20 13" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M12 15L9 18L4 13" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M12 11V15" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M8 21H16" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
        </svg>
      )
    },
    {
      value: 45000,
      suffix: '+',
      label: 'Students Trained',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M22 10V15C22 16.1 21.1 17 20 17H4C2.9 17 2 16.1 2 15V10" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M2 10L12 5L22 10L12 15L2 10Z" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M6 12V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V12" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
        </svg>
      )
    },
    {
      value: 100,
      suffix: '+',
      label: 'Recruiters',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M16 16L19 19M19 19L22 22M19 19L16 22M19 19L22 16" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <circle cx="9" cy="9" r="5" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M2 19C2 15.134 5.134 12 9 12C12.866 12 16 15.134 16 19V22H2V19Z" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
        </svg>
      )
    },
    {
      value: 95,
      suffix: '%',
      label: 'Successful Placements',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M12 18V18.01" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
          <path d="M12 6V6.01" strokeLinecap="round" strokeLinejoin="round" className="path-anim"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((el, index) => {
        if (!el) return;
        
        const valueObj = { val: 0 };
        const targetValue = stats[index].value;
        const valueDisplay = el.querySelector('.stat-value');
        const paths = el.querySelectorAll('.path-anim');

        // Number animation
        gsap.to(valueObj, {
          val: targetValue,
          duration: 2.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          onUpdate: () => {
            if (valueDisplay) {
              valueDisplay.textContent = Math.floor(valueObj.val).toLocaleString();
            }
          }
        });

        // Path drawing animation
        paths.forEach(path => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            }
          });
        });

        // Icon floating animation
        gsap.to(el.querySelector('.stat-icon'), {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });

        // Card entrance
        gsap.fromTo(el, 
          { y: 30, opacity: 0, scale: 0.9 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1, 
            delay: index * 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            ref={(el) => (statsRef.current[idx] = el)}
            className="group relative w-full flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-2xl hover:border-primary/50 transition-all duration-700 cursor-default"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-[2.5rem]"></div>
            
            {/* Icon Container */}
            <div className="stat-icon w-12 h-12 mb-6 text-primary/80 group-hover:text-primary transition-colors duration-500">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {stat.icon}
              </div>
            </div>

            {/* Number Display */}
            <div className="relative flex items-baseline justify-center min-h-[3rem]">
              <span className="stat-value text-4xl md:text-5xl font-sans font-black text-white leading-none">0</span>
              <span className="text-primary text-xl md:text-2xl font-sans font-black ml-1">{stat.suffix}</span>
            </div>

            {/* Label */}
            <p className="mt-6 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-center leading-tight group-hover:text-gray-300 transition-colors duration-500">
              {stat.label}
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-8 w-8 h-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]"></div>
            </div>
            
            {/* Bottom Progress-like line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
