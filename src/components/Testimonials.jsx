import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anshul Soni",
      role: "Engineering Manager, Electronic Arts, Seattle, USA",
      content: "Backstage Pass is the first of its kind gaming college in India with some great industry experts. I had the joy of learning from people who work in the game industry and was taught about the working of the game industry, which helped me a lot while working at EA Sports. It was a life-changing experience."
    },
    {
      name: "Simbram Das",
      role: "Game Artist, Lakshya Digital, Pune",
      content: "Backstage Pass is our preferred source for ready-to-use resources. Unlike many other institutions in our city, it stands out as the only provider of comprehensive preparation in gaming, arts, programming, and more. The individuals are already equipped with the necessary skills and require no extensive training."
    },
    {
      name: "Keshav Sharma",
      role: "Unity Programmer at Gamitronics, Hyderabad",
      content: "My experience at Backstage Pass has been great. During my Advanced Diploma course, I learned under the guidance of the finest out there in the industry. The course, my instructors, and the college as a whole have fully prepared me for the industry."
    },
    {
      name: "Jithin Peter",
      role: "Lead Game Developer, Sumo Digital, Bangalore",
      content: "Backstage Pass brings like-minded individuals together under one roof. Our courses in game development and game design were custom-tailored to meet the needs of the game industry, and I believe this is the ideal place to launch a successful career."
    },
    {
      name: "Anand Dhavle",
      role: "Gameplay Programmer, Tarsier Studios, Malmo, Sweden",
      content: "All the mentors at Backstage Pass are from the gaming industry. Learning about technology, industry culture, and standards from them is beneficial. This college offers the flexibility to learn and develop games that interest us."
    }
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft
    const width = e.target.offsetWidth
    const newIndex = Math.round(scrollPosition / width)
    setActiveSlide(newIndex)
  }

  return (
    <section id="testimonials" className="relative py-20 lg:py-20 lg:py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Student Stories</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-accent text-white uppercase tracking-tighter leading-none mb-6">
          Voices of <span className="text-gray-700">Success.</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-xl uppercase tracking-widest leading-relaxed">
          From classrooms to world-class studios. Hear from the professionals who started their journey with us.
        </p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-8 items-start">
        {/* Featured Large Testimonial */}
        <div className="col-span-2 glass-card p-12 rounded-3xl bg-black/60 border border-primary/30 relative overflow-hidden group cursor-target shadow-[0_0_50px_rgba(255,149,0,0.1)]">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] blur-3xl pointer-events-none"></div>
           <div className="flex flex-col gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z"/></svg>
              </div>
              <div className="space-y-8 flex-1">
                <p className="text-3xl font-medium text-white/90 leading-relaxed italic">
                  "{testimonials[0].content}"
                </p>
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-2xl font-accent text-primary uppercase tracking-wider">{testimonials[0].name}</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">{testimonials[0].role}</p>
                </div>
              </div>
           </div>
        </div>

        {testimonials.slice(1).map((item, idx) => (
          <div key={idx} className="glass-card p-10 rounded-3xl bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 group cursor-target flex flex-col gap-8 relative overflow-hidden">
             <div className="space-y-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z"/></svg>
                </div>
                <p className="text-gray-400 text-base leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-lg font-accent text-white uppercase tracking-wide group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider Layout */}
      <div className="lg:hidden relative">
        <div 
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none no-scrollbar gap-4 pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="min-w-full snap-center">
              <div className="glass-card p-8 rounded-3xl bg-black/60 border border-white/10 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z"/></svg>
                </div>
                <p className="text-lg font-medium text-white/90 leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xl font-accent text-primary uppercase tracking-wider">{item.name}</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
