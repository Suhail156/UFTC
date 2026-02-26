const Services = () => {
  const serviceList = [
    "Civil Work", "Electrical & Plumbing", "Painting",
    "Tile & Marble Work", "Glass Partition", "Plastering",
    "Carpentry Work", "Fitout Work", "Gypsum & GRC",
    "ELV Work", "Stone Laying", "Annual Maintenance"
  ];

  return (
    // The main container with a fixed background image
    <div 
      className="relative min-h-screen pt-20 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')` 
      }}
    >
      {/* Global Maroon Overlay - Gives the whole page the maroon touch */}
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(128, 0, 0, 0.92)' }}
      ></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="py-20 text-center border-b border-white/10">
          <h1 className="text-5xl font-extrabold text-white uppercase tracking-widest">
            WHAT WE DO?
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className="group border border-white/20 bg-white/5 p-10 transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-[#800000] uppercase transition-colors">
                  {service}
                </h3>
                <p className="mt-2 text-xs text-gray-300 group-hover:text-gray-600 tracking-widest">
                  URBAN FITOUT QUALITY
                </p>
                
                {/* Accent line that grows on hover */}
                <div className="w-8 h-1 bg-yellow-500 mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;