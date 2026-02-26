import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO - Natural Image (No Maroon Shade on Image) */}
      <section className="relative h-[100vh] flex items-center bg-white overflow-hidden">
        {/* The Image - Placed on the right with natural colors */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right md:bg-center transition-transform duration-[3000ms] hover:scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')` 
          }}
        >
          {/* Subtle gradient only on the left to make text readable against the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-[#8A1538] font-bold tracking-[0.4em] uppercase text-xs mb-2">
              Urban Fitout Trading & Contracting
            </h2>
            <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] leading-none uppercase tracking-tighter mb-8">
              Engineering <br /> 
              Your Dreams <br /> 
              <span className="text-[#8A1538]">Into Reality</span>
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-[#8A1538] text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl">
                Our Services
              </Link>
              <Link to="/projects" className="border-2 border-[#8A1538] text-[#8A1538] px-10 py-4 font-black uppercase tracking-widest hover:bg-[#8A1538] hover:text-white transition-all">
                Key Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (PDF White Page Style) */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#8A1538] font-bold tracking-widest uppercase text-xs">Since Inception</span>
          <h2 className="text-4xl font-black text-[#1e293b] mt-4 mb-8 uppercase leading-tight">
            Leading Fit-out <br /> Specialists in Qatar
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are primarily engaged in the enhancement of Interior Design delivered on an assignment-wise and turnkey basis. 
            Our success lies in our dedicated team of qualified and experienced Engineers.
          </p>
          <div className="h-1 w-20 bg-[#8A1538]"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#f8f9fa] p-8 border-t-4 border-[#8A1538]">
            <h4 className="font-black text-[#8A1538] text-3xl">10+</h4>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years Industry</p>
          </div>
          <div className="bg-[#f8f9fa] p-8 border-t-4 border-[#D4AF37]">
            <h4 className="font-black text-[#8A1538] text-3xl">200+</h4>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Projects Done</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION STATEMENT (PDF Footer Style) */}
      <section className="bg-[#8A1538] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed opacity-90">
            "We offer you high quality services to comply with your specification and requirements at competitive prices. Our commitment is to execute jobs with quality material and workmanship."
          </p>
          <p className="mt-8 font-bold uppercase tracking-[0.3em] text-[#D4AF37] text-sm">- UFTC Qatar -</p>
        </div>
      </section>
    </div>
  );
};

export default Home;