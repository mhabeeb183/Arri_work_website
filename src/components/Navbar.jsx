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
          <svg className="home-banner-mark" viewBox="0 0 150 90" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 77 35 17l28 60M18 56h34M54 77 75 17l22 60M75 17v60M92 77l27-60 27 60M103 56h34" />
              <path d="M75 3v82" stroke="#e6c786" strokeWidth="1.7" />
              <path d="M75 7c0-8 12-8 12 0 0 4-3 7-7 7" strokeWidth="1.5" />
              <path d="M24 61c13-4 23-7 36-9 20-3 37-7 48-17" strokeWidth="1.1" />
            </g>
            <circle cx="75" cy="3" r="2.1" fill="currentColor" />
          </svg>
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
