import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Partnership from '../components/Partnership'
import Programs from '../components/Programs'
import SpecializedPrograms from '../components/SpecializedPrograms'
import Curriculum from '../components/Curriculum'
import Alumni from '../components/Alumni'
import Testimonials from '../components/Testimonials'
import HallOfFame from '../components/HallOfFame'
import Affiliations from '../components/Affiliations'
import Admissions from '../components/Admissions'
import Footer from '../components/Footer'
import MobileContactBar from '../components/MobileContactBar'
import GridScan from '../components/GridScan'

const Home = () => {
  return (
    <div className="relative w-full bg-dark">
      <MobileContactBar />
      {/* Fixed Interactive Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridScan
           sensitivity={0.55}
          lineThickness={1}
          linesColor="#5d5c5fff"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.6}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanDuration={2.5}
          scanDelay={0.5}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        />
      </div>
      
      {/* Background Overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black/90 z-[1] pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />
      
      {/* Content Sections */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <WhyChooseUs />
        <Partnership />
        <Programs />
        <SpecializedPrograms />
        <Curriculum />
        <Alumni />
        <Testimonials />
        <HallOfFame />
        <Affiliations />
        <Admissions />
        <Footer />
      </div>

      {/* Footer / Copyright */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-accent text-white uppercase">Frameboxx<span className="text-primary">.XP</span></span>
          </div>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2026 Frameboxx 2.0 x Backstage Pass x Godspeed Games. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </footer>
    </div>
  )
}

export default Home
