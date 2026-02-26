const About = () => {
  return (
    <div 
      className="relative min-h-screen pt-24 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')` 
      }}
    >
      {/* Deep Maroon Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(128, 0, 0, 0.94)' }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-white">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">
            About <span className="text-yellow-500">UFTC</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl text-gray-100">
            Urban Fitout Trading & Contracting is a growing contractor in the field of 
            Interior Designing and Fit Out in Qatar. We are primarily engaged in the 
            enhancement of Interior Design delivered on an assignment-wise and turnkey basis.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Vision Section */}
          <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
            <div className="text-yellow-500 mb-4">
               {/* Simple SVG Icon for Vision */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="Step 15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Our Vision</h2>
            <p className="text-gray-300 italic leading-relaxed">
              "To be a leading and trusted interior fit-out contractor in Qatar and the region, 
              recognized for excellence in quality, innovation, and timely delivery."
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-yellow-500/50 transition-all duration-500">
            <div className="text-yellow-500 mb-4">
               {/* Simple SVG Icon for Mission */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To deliver end-to-end interior fit-out and MEP solutions with uncompromising quality, 
              precision, and professionalism.
            </p>
          </div>
        </div>

        {/* Motto Section */}
        <div className="mt-20 py-12 border-y border-white/10 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-yellow-500 mb-4">Our Motto</h2>
          <p className="text-4xl md:text-5xl font-serif italic text-white">
            "Engineering Your Dreams Into Reality"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;