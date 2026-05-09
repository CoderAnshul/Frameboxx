import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import review images
import img1 from '../assets/reviews/1.jpg';
import img2 from '../assets/reviews/2.jpg';
import img3 from '../assets/reviews/3.jpg';
import img4 from '../assets/reviews/4.jpg';
import img5 from '../assets/reviews/5.jpg';
import img6 from '../assets/reviews/6.jpg';
import img7 from '../assets/reviews/7.jpg';
import img8 from '../assets/reviews/8.jpg';
import img9 from '../assets/reviews/9.jpg';

gsap.registerPlugin(ScrollTrigger);

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  const reviews = [
    { id: "uGQXNv6qNPU", img: img1, name: "Sonia" },
    { id: "57Fz-GVEpko", img: img2, name: "Priti" },
    { id: "sH84hi1U4AE", img: img3, name: "Pushkar" },
    { id: "ZszFz6GUqqQ", img: img4, name: "Rahul" },
    { id: "3i55tl1uH0U", img: img5, name: "Nirpendra" },
    { id: "KR1BhD5jws4", img: img6, name: "Zaynab" },
    { id: "Qh_4U55AVLw", img: img7, name: "Lakshyaraj" },
    { id: "I33rKVG-BGw", img: img8, name: "Dhruv" },
    { id: "hmApgXjYGEE", img: img9, name: "Krish" },
  ];

  // Duplicate reviews for seamless loop
  const allReviews = [...reviews, ...reviews];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // DESKTOP: Smooth Infinite Marquee
      const totalWidth = marquee.scrollWidth / 2;
      animationRef.current = gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    });

    mm.add("(max-width: 767px)", () => {
      // MOBILE: Stepped Slider (one at a time with pause)
      const cards = marquee.children;
      if (!cards.length) return;
      
      const cardWidth = cards[0].offsetWidth + 24; // width + gap
      const totalCards = reviews.length;
      
      let tl = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < totalCards; i++) {
        tl.to(marquee, {
          x: -((i + 1) * cardWidth),
          duration: 1,
          ease: "power2.inOut",
        }).to({}, { duration: 2 }); // Pause
      }
      
      tl.set(marquee, { x: 0 });
      animationRef.current = tl;
    });

    return () => mm.revert();
  }, [reviews.length]);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) animationRef.current?.pause();
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) animationRef.current?.play();
  };

  return (
    <section ref={sectionRef} id="video-reviews" className="relative py-20 w-full overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center text-center gap-4">
        <div className="space-y-2">
          <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Student Spotlight</h3>
          <h2 className="text-4xl md:text-6xl font-heading text-white uppercase leading-none">
            Video <span className="text-primary">Reviews.</span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div 
        className="flex cursor-pointer select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={marqueeRef}
          className="flex gap-6 pr-6"
        >
          {allReviews.map((review, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[450px] group relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-dark cursor-pointer shadow-2xl hover:border-primary/50 transition-all duration-500"
              onClick={() => setSelectedVideo(review.id)}
            >
              <img 
                src={review.img} 
                alt={review.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/40 group-hover:scale-125 group-hover:bg-primary group-hover:text-dark transition-all duration-500 shadow-[0_0_30px_rgba(255,149,0,0.3)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5V19L19 12L8 5Z" />
                      </svg>
                  </div>
              </div>

              {/* Name Label */}
              <div className="absolute bottom-6 left-6">
                  <p className="text-white font-heading text-xl uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {review.name}'s <span className="text-primary text-sm font-sans font-bold italic">Journey</span>
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedVideo(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,149,0,0.2)]">
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all"
              onClick={() => setSelectedVideo(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
    </section>
  );
};

export default VideoTestimonials;
