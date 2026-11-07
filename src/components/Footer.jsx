import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 relative overflow-hidden">
      <svg className="footer-filter-defs" aria-hidden="true" focusable="false">
        <filter id="footer-logo-background-key" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 -0.4" />
        </filter>
      </svg>
      {/* Subtle floral background placeholder */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/floral-motif.svg')]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 relative z-10">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group mb-6 md:mb-0">
            <img src="/arfi-monogram-logo.png" alt="ARFI Needle Art monogram" className="footer-logo-mark" />
            <div className="flex flex-col">
              <span className="text-lg font-serif text-brand-gold tracking-[0.2em] uppercase leading-none">ARFI</span>
              <span className="text-[0.5rem] text-brand-gold tracking-[0.3em] uppercase mt-1">Needle Art</span>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex space-x-6">
             {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-xs text-gray-300 hover:text-brand-gold transition-colors tracking-widest"
                >
                  {item}
                </Link>
             ))}
          </nav>

          {/* Social */}
          <div className="flex space-x-4 mt-6 md:mt-0">
             <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-brand-gold hover:text-brand-gold transition-all">
               <FaInstagram className="w-4 h-4" />
             </a>
             <a href="https://wa.me/919361951970" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-brand-gold hover:text-brand-gold transition-all">
               <FaWhatsapp className="w-4 h-4" />
             </a>
          </div>

        </div>

        <div className="w-full h-px bg-brand-gold/20 mb-6 relative z-10"></div>
        
        <div className="text-[0.65rem] text-gray-500 tracking-widest uppercase relative z-10">
          &copy; {new Date().getFullYear()} Arfi Needle Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
