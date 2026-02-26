import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 h-24 shadow-2xl bg-[#5a0d24] overflow-hidden">
      
      {/* TOP HORIZONTAL WHITE LINE (SUBTLE) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>

      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center h-full py-4 group">
          <img 
            src={logoImg} 
            alt="UFTC Logo" 
            className="h-full w-auto object-contain transition-transform group-hover:scale-105"
          />
          {/* VERTICAL WHITE LINE DIVIDER */}
          <div className="hidden sm:block h-8 w-[1px] bg-white/20 mx-6"></div>
          
          {/* <div className="hidden md:flex flex-col">
            <span className="text-white font-black text-2xl tracking-tighter leading-none">UFTC</span>
            <span className="text-white/60 font-bold text-[8px] uppercase tracking-[0.3em] mt-1">
              Engineering Reality
            </span>
          </div> */}
        </Link>

        {/* NAVIGATION WITH WHITE DIVIDERS */}
        <div className="hidden lg:flex items-center h-full">
          <div className="flex items-center space-x-0 h-full font-black text-white uppercase text-[11px] tracking-widest">
            <Link to="/" className="px-6 hover:text-[#D4AF37] transition-colors">Home</Link>
            <div className="w-[1px] h-4 bg-white/20"></div> {/* White Line */}
            <Link to="/about" className="px-6 hover:text-[#D4AF37] transition-colors">About</Link>
            <div className="w-[1px] h-4 bg-white/20"></div> {/* White Line */}
            <Link to="/services" className="px-6 hover:text-[#D4AF37] transition-colors">Services</Link>
            <div className="w-[1px] h-4 bg-white/20"></div> {/* White Line */}
            <Link to="/projects" className="px-6 hover:text-[#D4AF37] transition-colors">Projects</Link>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:info@uftcqa.com" 
            className="hidden sm:block border border-white text-white px-8 py-2 text-[10px] font-black tracking-widest 
            hover:bg-white hover:text-[#5a0d24] transition-all uppercase"
          >
            Contact Us
          </a>

          {/* MOBILE TOGGLE */}
          <button onClick={toggleMenu} className="lg:hidden text-white p-2">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* BOTTOM DECORATIVE SECTION: MULTIPLE HORIZONTAL LINES */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#D4AF37]"></div> {/* Main Gold Base */}
      <div className="absolute bottom-[6px] left-0 w-full h-[1px] bg-white/40"></div> {/* Sharp White Line */}
      <div className="absolute bottom-[10px] left-0 w-full h-[1px] bg-white/10"></div> {/* Subtle Top White Line */}

      {/* MOBILE MENU DROPDOWN */}
      <div className={`lg:hidden absolute top-24 left-0 w-full bg-[#5a0d24] transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col p-10 space-y-6">
          {['Home', 'About', 'Services', 'Projects'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={toggleMenu}
              className="text-white font-black uppercase text-sm tracking-[0.2em] border-b border-white/10 pb-4 last:border-0"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;