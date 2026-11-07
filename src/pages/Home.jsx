import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import heroImage from '../assets/images/hero/hero-blouse.jpg';
import heroImageMobile from '../assets/images/hero/hero-blouse-mobile.jpg';
import { PiNeedleLight, PiDiamondLight, PiHeartLight, PiFlowerLight, PiScissorsLight, PiShieldCheckLight, PiStarLight } from 'react-icons/pi';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home" 
        description="Arfi Needle Art - Beautifully crafted Aari work blouses that add grace, tradition and elegance to your style."
      />
      
      {/* Hero Section */}
      <section className="home-hero relative bg-[#0b1b17] min-h-[100svh] lg:min-h-[90vh] flex flex-col lg:flex-row lg:items-center pt-24 lg:pt-20 pb-0 overflow-hidden">
        
        {/* Universal Responsive Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
           {/* Desktop Image */}
           <img 
             src={heroImage} 
             alt="Aari Blouse Desktop" 
              className="hidden lg:block w-full h-full object-cover object-center"
           />
           {/* Mobile Image */}
           <img 
             src={heroImageMobile} 
             alt="Aari Blouse Mobile" 
             className="block lg:hidden w-full h-full object-cover object-center home-hero-mobile-image"
           />
           {/* Gradients */}
           {/* Desktop Gradient: protects left text */}
           <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent z-10"></div>
           {/* Mobile Gradients: top text protection & bottom icon bar protection */}
           <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-[#0b1b17]/80 via-transparent to-transparent h-1/2 z-10"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0b1b17] via-[#0b1b17]/80 to-transparent z-10"></div>
        </div>

        {/* Left Content (Desktop) / Top Content (Mobile) */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex flex-col justify-start lg:justify-center pt-8 lg:pt-20 lg:pb-20 flex-grow">
            <motion.div 
              className="w-full lg:w-[55%] text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUp} className="text-[#d6b482] text-[0.65rem] md:text-sm tracking-[0.2em] font-bold uppercase mb-3 lg:mb-4 drop-shadow-md">
                Tradition Meets Elegance
              </motion.h3>
              <motion.h1 variants={fadeUp} className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-7xl font-serif text-white mb-4 lg:mb-6 drop-shadow-lg">
                its aari <br className="lg:hidden"/>blouse work
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-200 text-sm lg:text-lg mb-6 lg:mb-10 max-w-[280px] lg:max-w-md font-light drop-shadow-md leading-relaxed">
                Beautifully crafted Aari work blouses that add grace, tradition and elegance to your style.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mb-12 lg:mb-16">
                <Link to="/gallery" className="inline-flex items-center px-6 lg:px-8 py-2.5 lg:py-3 bg-[#dfb97d] text-[#09201d] rounded-full text-sm font-bold hover:bg-white transition-colors">
                  Explore Collection 
                  <span className="ml-2 font-light text-lg">→</span>
                </Link>
              </motion.div>

              {/* Four Icons Row (Desktop Only - positioned here) */}
              <motion.div variants={fadeUp} className="hidden lg:flex justify-start space-x-12 text-center text-xs text-gray-200 drop-shadow-md">
                <div className="flex flex-col items-center">
                  <PiFlowerLight className="w-8 h-8 mb-2 text-[#d6b482]" />
                  <span className="font-light">Premium<br/>Quality</span>
                </div>
                <div className="flex flex-col items-center">
                  <PiNeedleLight className="w-8 h-8 mb-2 text-[#d6b482]" />
                  <span className="font-light">Intricate<br/>Aari Work</span>
                </div>
                <div className="flex flex-col items-center">
                  <PiDiamondLight className="w-8 h-8 mb-2 text-[#d6b482]" />
                  <span className="font-light">Elegant<br/>Designs</span>
                </div>
                <div className="flex flex-col items-center">
                  <PiHeartLight className="w-8 h-8 mb-2 text-[#d6b482]" />
                  <span className="font-light">Made<br/>with Care</span>
                </div>
              </motion.div>
            </motion.div>
        </div>

        {/* Decorative Design: "Every Stitch Tells a Story" with central floral ornament & curved flourish lines */}
        <div className="w-full relative z-20 flex flex-col items-center justify-center pt-4 pb-2 px-4 pointer-events-none select-none text-center">
          <span className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl md:text-4xl text-[#dfb97d] tracking-wider drop-shadow-md leading-snug">
            Every Stitch Tells a Story
          </span>
          
          {/* Symmetrical curved gold flourishes with central 8-petal Aari flower ornament */}
          <div className="flex items-center justify-center w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mt-1 text-[#dfb97d]/90">
            {/* Left curved flourish */}
            <svg className="w-full h-4 sm:h-5" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 14C15 16 28 17 45 15C75 11 110 8 138 10" 
                stroke="currentColor" 
                strokeWidth="1.25" 
                strokeLinecap="round"
              />
              <path 
                d="M5 14C3 12 3 9 7 8C10 7 12 9 10 11C8 13 6 13 5 14Z" 
                fill="currentColor"
              />
            </svg>

            {/* Central 8-petal embroidered floral ornament */}
            <div className="shrink-0 mx-2 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb97d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                {/* 8 rounded petals */}
                <ellipse cx="12" cy="7" rx="2" ry="3.5" fill="none" />
                <ellipse cx="12" cy="17" rx="2" ry="3.5" fill="none" />
                <ellipse cx="7" cy="12" rx="3.5" ry="2" fill="none" />
                <ellipse cx="17" cy="12" rx="3.5" ry="2" fill="none" />
                <ellipse cx="8.5" cy="8.5" rx="2" ry="3" transform="rotate(-45 8.5 8.5)" fill="none" />
                <ellipse cx="15.5" cy="15.5" rx="2" ry="3" transform="rotate(-45 15.5 15.5)" fill="none" />
                <ellipse cx="15.5" cy="8.5" rx="2" ry="3" transform="rotate(45 15.5 8.5)" fill="none" />
                <ellipse cx="8.5" cy="15.5" rx="2" ry="3" transform="rotate(45 8.5 15.5)" fill="none" />
                {/* Center pistil */}
                <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              </svg>
            </div>

            {/* Right curved flourish */}
            <svg className="w-full h-4 sm:h-5" viewBox="0 0 140 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M2 10C30 8 65 11 95 15C112 17 125 16 135 14" 
                stroke="currentColor" 
                strokeWidth="1.25" 
                strokeLinecap="round"
              />
              <path 
                d="M135 14C137 12 137 9 133 8C130 7 128 9 130 11C132 13 134 13 135 14Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Icon Bar (Bottom of Hero) */}
        <div className="lg:hidden w-full relative z-20 pb-12 pt-8 px-4 flex justify-between items-center text-center text-[0.65rem] text-gray-200">
           <div className="flex-1 flex flex-col items-center justify-center">
              <PiFlowerLight className="w-6 h-6 mb-2 text-[#d6b482]" />
              <span className="font-light leading-tight">Premium<br/>Quality</span>
           </div>
           <div className="w-px h-10 bg-white/20"></div>
           <div className="flex-1 flex flex-col items-center justify-center">
              <PiNeedleLight className="w-6 h-6 mb-2 text-[#d6b482]" />
              <span className="font-light leading-tight">Intricate<br/>Aari Work</span>
           </div>
           <div className="w-px h-10 bg-white/20"></div>
           <div className="flex-1 flex flex-col items-center justify-center">
              <PiDiamondLight className="w-6 h-6 mb-2 text-[#d6b482]" />
              <span className="font-light leading-tight">Elegant<br/>Designs</span>
           </div>
           <div className="w-px h-10 bg-white/20"></div>
           <div className="flex-1 flex flex-col items-center justify-center">
              <PiHeartLight className="w-6 h-6 mb-2 text-[#d6b482]" />
              <span className="font-light leading-tight">Made<br/>with Care</span>
           </div>
        </div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[99%]">
          <svg className="relative block w-full h-[40px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0c5.44,1.43,10.95,2.6,16.53,3.58,106.52,18.89,213.9,56.24,304.86,52.86Z" fill="#f4efe6"></path>
          </svg>
        </div>
      </section>

      {/* Collection Details Section */}
      <section className="pt-32 pb-24 bg-brand-cream relative z-10">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
          <motion.div 
            className="xl:w-[40%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeUp} className="text-[#b89565] text-xs tracking-widest font-bold uppercase mb-3">Our Collection</motion.h4>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif text-[#09201d] mb-4">Elegant Aari Blouse Designs</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-8 font-light text-sm md:text-base leading-relaxed">
              From traditional to contemporary, explore our exclusive Aari blouse work designs crafted with precision and passion.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/gallery" className="text-[#09201d] font-serif font-bold text-lg hover:text-[#b89565] transition-colors inline-flex items-center">
                View Gallery <span className="ml-2 font-sans font-light text-xl">→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="xl:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <PiScissorsLight className="w-8 h-8" />, title: 'Custom Designs', desc: 'Tailored to your style\nand preference.' },
              { icon: <PiShieldCheckLight className="w-8 h-8" />, title: 'Premium Fabric', desc: 'Only the finest fabrics\nfor your comfort.' },
              { icon: <PiStarLight className="w-8 h-8" />, title: 'Expert Craftsmanship', desc: 'Skilled artisans with\nyears of experience.' }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white px-6 py-10 rounded-2xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#fbf9f1] rounded-full flex items-center justify-center text-[#b89565] border border-[#e8cd9c]/40">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-[#09201d] text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-xs text-gray-500 font-light whitespace-pre-line">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-[#e8e4db]">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="lg:w-[55%] flex gap-4 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Main large image */}
            <div className="w-2/3 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
               <div className="absolute top-4 left-4 z-10 flex items-center text-xs font-bold text-[#09201d] bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="mr-1.5 border border-[#09201d] rounded-full p-0.5"><PiDiamondLight/></span> 3D View
               </div>
               <video
                 src="/aari-blouse-showcase.mp4"
                 aria-label="Aari blouse showcase video"
                 className="w-full h-full object-cover"
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="metadata"
               />
            </div>
            {/* Thumbnails */}
            <div className="w-1/3 flex flex-col gap-4">
               <img src="/blouse-back-detail.png" alt="Green Aari blouse back with gold embroidery" className="bg-white p-1 rounded-xl shadow-md w-full object-cover aspect-[4/3]" />
               <img src="/blouse-sleeve-detail.png" alt="Close-up of green blouse sleeve embroidery" className="bg-white p-1 rounded-xl shadow-md w-full object-cover aspect-[4/3]" />
               <img src="/blouse-neckline-detail.png" alt="Close-up of green blouse neckline embroidery" className="bg-white p-1 rounded-xl shadow-md w-full object-cover aspect-[4/3]" />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-[45%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeUp} className="text-[#b89565] text-xs tracking-widest font-bold uppercase mb-3">Premium Aari Blouse Work</motion.h4>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-[#09201d] mb-6 leading-tight">
              Your Dream Blouse,<br/>Our Craft
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-8 font-light text-sm leading-relaxed max-w-md">
              Experience the beauty of traditional Aari work with modern designs. Each blouse is crafted with attention to detail, ensuring you look and feel special.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/services" className="inline-flex items-center px-8 py-3 bg-[#a68252] text-white rounded-full text-sm font-bold hover:bg-[#09201d] transition-colors shadow-lg">
                Shop Now <span className="ml-2 font-sans font-light text-lg">→</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>
      
      {/* Footer Banner placeholder (matches mockup bottom) */}
      <div className="bg-brand-dark py-12 relative overflow-hidden flex flex-col items-center justify-center border-t border-[#c39b62]/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
         
         <div className="relative z-10 flex flex-col items-center space-y-2">
            <div className="font-serif text-[#d6b482] text-2xl italic">Arfi Needle Art</div>
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-[#d6b482]/50"></div>
              <span className="text-[0.6rem] text-gray-400 tracking-[0.3em] uppercase">Its Aari Blouse Work</span>
              <div className="h-px w-12 bg-[#d6b482]/50"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
