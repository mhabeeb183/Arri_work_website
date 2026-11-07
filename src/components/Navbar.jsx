import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll active link into view on mobile
  useEffect(() => {
    if (navScrollRef.current) {
      const activeLink = navScrollRef.current.querySelector('[data-active="true"]');
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl' : ''
      }`}
    >
      {/* Main Header Bar */}
      <div className="bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group shrink-0">
            {/* Faux Logo Icon */}
            <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-brand-gold font-serif text-2xl md:text-3xl italic font-bold">
              A
              <div className="absolute top-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 border border-brand-gold rounded-full opacity-50"></div>
              <div className="absolute -bottom-1 -left-1 w-full h-px bg-brand-gold/50 rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif text-brand-gold tracking-[0.2em] uppercase leading-none">ARFI</span>
              <span className="text-[0.5rem] md:text-[0.6rem] text-brand-gold tracking-[0.3em] uppercase mt-0.5 md:mt-1">Needle Art</span>
            </div>
          </Link>

          {/* Desktop Nav Links (centered) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors duration-300 relative pb-1 ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Icons (Search & Bag on Desktop) */}
          <div className="hidden md:flex items-center space-x-5 shrink-0 text-white">
            <button className="text-gray-300 hover:text-brand-gold transition-colors duration-300" aria-label="Search">
              <HiOutlineSearch className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-brand-gold transition-colors duration-300" aria-label="Shopping Bag">
              <HiOutlineShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Nav Bar - visible only on small screens */}
      <nav className="md:hidden bg-brand-dark border-t border-brand-gold/15">
        <div
          ref={navScrollRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                data-active={isActive}
                className={`relative shrink-0 flex-1 min-w-0 text-center px-4 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-brand-gold'
                    : 'text-gray-400 active:text-brand-gold'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
