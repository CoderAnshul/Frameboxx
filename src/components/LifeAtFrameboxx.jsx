import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// INFRA
import infra1 from '../assets/life/01.webp';
import infra2 from '../assets/life/02.webp';
import infra3 from '../assets/life/03.webp';
import infra4 from '../assets/life/04.webp';
import infra5 from '../assets/life/04_1.webp';
import infra6 from '../assets/life/05.webp';
import infra7 from '../assets/life/06.webp';
import infra8 from '../assets/life/06_1.webp';
import infra9 from '../assets/life/07.webp';
import infra10 from '../assets/life/07_1.webp';
import infra11 from '../assets/life/08.webp';
import infra12 from '../assets/life/08_1.webp';
import infra13 from '../assets/life/09.webp';
import infra14 from '../assets/life/09_1.webp';

// AWARDS
import award1 from '../assets/life/Award_asifa_3.webp';
import award2 from '../assets/life/Awards_asifa.webp';
import award3 from '../assets/life/Awards_asifa_2_1.webp';
import award4 from '../assets/life/FC_Road_Events_Convocation.webp';

// CULTURAL EVENTS
import cult1 from '../assets/life/Andheri_Artistry_12_Events_Rangroot_1_April_2025.webp';
import cult2 from '../assets/life/Andheri_Artistry_12_Events_Rangroot_2_April_2025.webp';
import cult3 from '../assets/life/Andheri_Artistry_12_Events_Rangroot_3_April_2025.webp';
import cult4 from '../assets/life/Bangalore_Artistry_12_Events_Rangroot_April_2025.webp';
import cult5 from '../assets/life/Bangalore_Artistry_12_Events_Rangroot_April_2025_1.webp';
import cult6 from '../assets/life/DP_Road_Events_Fave_Fest.webp';
import cult7 from '../assets/life/DP_Road_Events_Kite_Making.webp';

// GENERAL EVENTS
import event1 from '../assets/life/Bangalore_Events.webp';
import event2 from '../assets/life/Chowringhee_Events_1_International_Animation_Day.webp';
import event3 from '../assets/life/Chowringhee_Events_2_International_Animation_Day.webp';
import event4 from '../assets/life/FC_Road_Events_Asifa.webp';
import event5 from '../assets/life/GAFX.webp';

gsap.registerPlugin(ScrollTrigger);

const LifeAtFrameboxx = () => {
  const [activeTab, setActiveTab] = useState('Show All');
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  const categories = ['Show All', 'Events', 'Awards', 'Cultural Events', 'Infra'];

  const infraImgs = [infra1, infra2, infra3, infra4, infra5, infra6, infra7, infra8, infra9, infra10, infra11, infra12, infra13, infra14].map(img => ({ src: img, category: 'Infra' }));
  const awardImgs = [award1, award2, award3, award4].map(img => ({ src: img, category: 'Awards' }));
  const cultImgs = [cult1, cult2, cult3, cult4, cult5, cult6, cult7].map(img => ({ src: img, category: 'Cultural Events' }));
  const eventImgs = [event1, event2, event3, event4, event5].map(img => ({ src: img, category: 'Events' }));

  const allImages = [...eventImgs, ...awardImgs, ...cultImgs, ...infraImgs];

  const filteredImages = activeTab === 'Show All' 
    ? allImages 
    : allImages.filter(img => img.category === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-item", 
        { scale: 0.9, opacity: 0, y: 30 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          stagger: 0.01, 
          duration: 0.6, 
          ease: "power3.out",
          overwrite: "auto"
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="life-at-frameboxx" className="relative py-24 px-4 w-full max-w-[1500px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">The Culture</h3>
        <h2 className="text-5xl md:text-8xl font-heading text-white uppercase tracking-normal leading-none">
          Life at <span className="text-primary">Frameboxx.</span>
        </h2>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black mt-4">
          Click to expand gallery
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 backdrop-blur-md ${
              activeTab === cat 
                ? 'bg-primary text-dark shadow-[0_0_30px_rgba(255,149,0,0.4)] scale-110 z-10' 
                : 'bg-white/10 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white hover:border-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >
        {filteredImages.map((img, idx) => (
          <div 
            key={idx}
            className="gallery-item group relative aspect-3/2 rounded-3xl overflow-hidden bg-dark border border-white/5 cursor-pointer shadow-xl transition-all duration-500 hover:shadow-primary/10"
            onClick={() => setSelectedImage(img.src)}
          >
            <img 
              src={img.src} 
              alt="Gallery"
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/20  backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          ></div>
          <div className="relative max-w-7xl max-h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_150px_rgba(255,149,0,0.2)]">
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full"></div>
    </section>
  );
};

export default LifeAtFrameboxx;
