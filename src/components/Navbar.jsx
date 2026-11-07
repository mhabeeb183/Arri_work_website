import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = navScrollRef.current?.querySelector('[data-active="true"]');
    activeLink?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [location.pathname]);

  return (
    <>
    <header className={`home-header fixed top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      <div className="home-banner">
        <Link to="/" className="home-banner-brand" aria-label="Arfi Needle Art home">
          <img className="home-banner-medallion" src="/arfi-logo-medallion.png" alt="ARFI Needle Art gold medallion logo" />
          <span className="home-banner-wordmark"><span className="home-banner-heart">♡</span> ARFI NEEDLE ART</span>
        </Link>
      </div>

      <nav className="home-mobile-nav bg-brand-dark">
        <div ref={navScrollRef} className="flex overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.name} to={link.path} data-active={isActive}
                className={`relative min-w-0 flex-1 shrink-0 px-3 py-2.5 text-center text-xs uppercase tracking-widest transition-colors ${isActive ? 'text-brand-gold' : 'text-gray-300 hover:text-white'}`}>
                {link.name}
                {isActive && <motion.span layoutId="nav-underline" className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-brand-gold" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
    </>
  );
}
