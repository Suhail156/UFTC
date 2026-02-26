const Projects = () => {
  const projects = [
    { name: "THE PRIVATE OFFICE OF HH THE FATHER AMIR", location: "AL RAYYAN" },
    { name: "SHK MOHAMED FAIZAL AL THANI PALACE", location: "AL GHARAFFA" },
    { name: "QAFAC (QATAR FUEL ADDITIVES COMPANY)", location: "WEST BAY" },
    { name: "GENERAL AUTHORITY OF CUSTOMS DOHA", location: "WEST BAY" },
    { name: "HASSAN AL MOHANNADI PALACE", location: "AL KHOR" },
    { name: "SHK GHANIM AL THANI PALACE", location: "AL WAKRA" },
    { name: "MADO TURKEY RESTAURANT CHAINS", location: "DFC, PEARL QATAR, GEWAN ISLAND" },
    { name: "HNS SPA", location: "GEWAN ISLAND" },
    { name: "SHEIKH FAISAL BIN QASSIM AL THANI MUSEUM", location: "AL SHAHANIYA" }
  ];

  return (
    <div 
      className="relative min-h-screen pt-24 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069')` 
      }}
    >
      {/* Global Maroon Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(128, 0, 0, 0.95)' }}
      ></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="py-20 px-6 text-center border-b border-white/10">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">
            Key <span className="text-yellow-500">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto uppercase tracking-[0.2em] text-xs">
            Showcasing our ability to handle high-profile and complex fit-outs
          </p>
        </div>

        {/* Projects List Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row justify-between items-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:scale-[1.02] transition-all duration-500"
              >
                <div className="text-center md:text-left flex-1">
                  <span className="text-yellow-500 text-xs font-bold tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                    PROJECT {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#800000] uppercase tracking-tight transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center">
                  <span className="hidden md:block w-12 h-[1px] bg-white/30 mr-4 group-hover:bg-[#800000]/30"></span>
                  <div className="text-right">
                    <span className="text-gray-300 group-hover:text-[#800000] font-black tracking-widest text-xs uppercase transition-colors">
                      {project.location}
                    </span>
                    <p className="text-[10px] text-yellow-500/60 uppercase group-hover:text-[#800000]/60">Doha, Qatar</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-20 text-center border-t border-white/10 pt-12">
            <p className="text-gray-300 italic text-xl max-w-4xl mx-auto leading-relaxed">
              "These prestigious projects showcase our ability to handle high-profile, complex fitouts and construction projects with <span className="text-yellow-500">finesse and attention to details</span>."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;