import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import heroImage from '../assets/images/hero/hero-blouse.jpg';
import heroImageMobile from '../assets/images/hero/hero-blouse-mobile.jpg';
import greenBlouseImg from '../assets/images/about/green-blouse.jpg';
import { PiNeedleLight, PiDiamondLight, PiHeartLight, PiFlowerLight, PiMedalLight, PiScissorsLight, PiHandHeartLight } from 'react-icons/pi';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="overflow-hidden bg-brand-cream min-h-screen">
      <SEO title="About Us" description="Learn about Arfi Needle Art's tradition, craftsmanship, and passion for Aari blouse work." />
      
      {/* Hero Section - Identical Full-Width Background Composition as Home */}
      <section className="relative bg-[#0b1b17] min-h-[78svh] lg:min-h-[90vh] flex flex-col lg:flex-row lg:items-center pt-24 lg:pt-20 pb-0 overflow-hidden">
        
        {/* Universal Responsive Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
           {/* Desktop Image */}
           <img 
             src={heroImage} 
             alt="About Arfi Needle Art Blouse Desktop" 
             className="hidden lg:block w-full h-full object-cover object-center"
           />
           {/* Mobile Image */}
           <img 
             src={heroImageMobile} 
             alt="About Arfi Needle Art Blouse Mobile" 
             className="block lg:hidden w-full h-full object-cover object-center"
           />
           {/* Gradients */}
           {/* Desktop Gradient: protects left text */}
           <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent z-10"></div>
           {/* Mobile Gradients: top text protection & bottom transition */}
           <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-[#0b1b17]/85 via-transparent to-transparent h-1/2 z-10"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0b1b17] via-[#0b1b17]/80 to-transparent z-10"></div>
        </div>

        {/* Left Content Directly Over Full-Width Image */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex flex-col justify-start lg:justify-center pt-8 lg:pt-20 lg:pb-20 flex-grow">
           <motion.div 
             className="w-full lg:w-[55%] text-left"
             initial="hidden" animate="visible" variants={stagger}
           >
              <motion.h4 variants={fadeUp} className="text-[#d6b482] text-xs sm:text-sm tracking-[0.2em] font-bold uppercase mb-3 lg:mb-4 drop-shadow-md">
                About Arfi Needle Art
              </motion.h4>

              <motion.h1 variants={fadeUp} className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-7xl font-serif text-white mb-4 lg:mb-6 drop-shadow-lg">
                Our Story
              </motion.h1>

              {/* Decorative separator with lotus motif */}
              <motion.div variants={fadeUp} className="flex items-center space-x-3 mb-4 lg:mb-6 text-[#d6b482] drop-shadow-md">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M12 2C12 2 10 7 10 10C10 12.21 11.79 14 14 14C16.21 14 18 12.21 18 10C18 7 12 2 12 2ZM12 2C12 2 14 7 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 7 12 2 12 2ZM12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14ZM4 13C4 13 6 15 8 15C8 16.5 7 18 5 18C3 18 2 16.5 2 15C2 13.5 4 13 4 13ZM20 13C20 13 18 15 16 15C16 16.5 17 18 19 18C21 18 22 16.5 22 15C22 13.5 20 13 20 13Z" />
                 </svg>
                 <div className="h-[1px] bg-[#d6b482]/70 w-24"></div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[#d6b482] font-serif italic text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 drop-shadow-md leading-snug">
                Threads of tradition, crafted with love.
              </motion.p>

              <motion.p variants={fadeUp} className="text-gray-200 text-sm sm:text-base lg:text-lg mb-6 lg:mb-10 max-w-[300px] sm:max-w-md font-light drop-shadow-md leading-relaxed">
                At Arfi Needle Art, we believe every blouse tells a story. Our journey began with a passion for traditional Aari work and a dream to bring timeless elegance to modern women.
              </motion.p>

              {/* Four Icons Row (Desktop Only - identical to Home page) */}
              <motion.div variants={fadeUp} className="hidden lg:flex justify-start space-x-12 text-center text-xs text-gray-200 drop-shadow-md pt-2">
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

        {/* Decorative Luxury Brand Quote: "Traditional Art / Modern Elegance ♡" with subtle gold flourish */}
        <div className="w-full relative z-20 flex flex-col items-center justify-center pt-2 pb-2 px-4 pointer-events-none select-none text-center">
          <div className="flex flex-col items-center">
            <span className="font-['Great_Vibes',cursive] text-[23px] sm:text-2xl md:text-3xl text-[#d6b482] tracking-wider drop-shadow-md leading-tight">
              Traditional Art
            </span>
            <span className="font-['Great_Vibes',cursive] text-[23px] sm:text-2xl md:text-3xl text-[#d6b482] tracking-wider drop-shadow-md leading-tight mt-0.5 flex items-center justify-center gap-1.5">
              Modern Elegance <span className="text-[17px] sm:text-lg md:text-xl font-sans text-[#d6b482]/90">♡</span>
            </span>
          </div>
          
          {/* Subtle curved gold ornament flourish underneath */}
          <div className="flex items-center justify-center w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] mt-1 text-[#d6b482]/80">
            {/* Left flourish */}
            <svg className="w-full h-3 sm:h-3.5" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11C18 13 40 13 70 9C95 6 110 7 118 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="4" cy="11" r="1.5" fill="currentColor" />
            </svg>

            {/* Central small floral blossom ornament */}
            <div className="shrink-0 mx-2">
              <span className="text-xs sm:text-sm text-[#d6b482]">❀</span>
            </div>

            {/* Right flourish */}
            <svg className="w-full h-3 sm:h-3.5" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C10 7 25 6 50 9C80 13 102 13 116 11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              <circle cx="116" cy="11" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Four Feature Icons Strip (Mobile - identical to Home page) */}
        <div className="lg:hidden w-full relative z-20 pb-12 pt-6 px-4 flex justify-between items-center text-center text-[0.65rem] text-gray-200">
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

        {/* Wavy bottom divider matching Home page */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[99%]">
          <svg className="relative block w-full h-[40px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0c5.44,1.43,10.95,2.6,16.53,3.58,106.52,18.89,213.9,56.24,304.86,52.86Z" fill="#f4efe6"></path>
          </svg>
        </div>
      </section>

      {/* Crafted with Passion */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <motion.div 
             className="lg:w-1/3"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
           >
              <img 
                src="/about-aari-crafting.png" 
                alt="Artisan hand embroidering a green Aari blouse" 
                className="w-full aspect-square object-cover border-8 border-white shadow-xl"
              />
           </motion.div>

           <motion.div 
             className="lg:w-1/3 text-center lg:text-left"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
           >
              <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-3">Our Brand</motion.h4>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif text-[#09201d] mb-6 leading-tight">
                Crafted with Passion,<br/>Made for You
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 font-light mb-6 text-sm leading-relaxed">
                Arfi Needle Art is a dedicated Aari blouse work studio where tradition meets creativity. We specialize in handcrafted, intricate embroidery that celebrates heritage and elegance. Each blouse is designed and crafted with attention to detail, ensuring you receive a unique piece that complements your style and personality.
              </motion.p>
              <motion.div variants={fadeUp} className="flex justify-center lg:justify-start mb-6 text-brand-gold">
                <span>❀</span>
              </motion.div>
              <motion.p variants={fadeUp} className="text-gray-600 font-light text-sm leading-relaxed mb-8">
                From classic designs to contemporary patterns, we work closely with our customers to bring their vision to life. Your happiness and confidence in our work are what inspire us every day.
              </motion.p>
              <motion.div variants={fadeUp} className="font-serif text-[#09201d] text-2xl italic">
                Arfi Needle Art
              </motion.div>
           </motion.div>

           <motion.div 
             className="lg:w-1/3 relative mb-16 lg:mb-0"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
           >
              <img 
                src="/about-green-blouse.png" 
                alt="Green Aari blouse with embroidered back design" 
                className="w-full aspect-[3/4] object-cover shadow-lg rounded-sm"
              />
              <div className="absolute -bottom-14 inset-x-0 text-center font-serif text-xl sm:text-2xl leading-snug text-[#a27a44] italic">
                Traditional Art<br/>Modern Elegance ♡
              </div>
           </motion.div>
        </div>
      </section>

      {/* 4 Feature Columns */}
      <section className="pt-6 pb-14 md:py-16 container mx-auto px-6 lg:px-12 border-t border-[#c39b62]/20">
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 text-center">
            {[
              { icon: <PiNeedleLight className="h-8 w-8 text-[#a27a44]" aria-hidden="true" />, title: 'Authentic Aari Work', desc: 'Traditional techniques passed down through generations.' },
              { icon: <PiMedalLight className="h-8 w-8 text-[#a27a44]" aria-hidden="true" />, title: 'Premium Quality', desc: 'We use the finest materials to ensure lasting beauty and comfort.' },
              { icon: <PiScissorsLight className="h-8 w-8 text-[#a27a44]" aria-hidden="true" />, title: 'Custom Designs', desc: 'Tailored to your style, size and preferences.' },
              { icon: <PiHandHeartLight className="h-8 w-8 text-[#a27a44]" aria-hidden="true" />, title: 'Customer First', desc: 'Your satisfaction and trust mean everything to us.' }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="group relative flex h-full flex-col items-center rounded-2xl border border-[#c39b62]/35 bg-[#fbf8f1] px-5 py-7 shadow-[0_5px_18px_rgba(9,32,29,0.05)] transition-all duration-300 hover:border-[#c39b62]/65 hover:shadow-[0_12px_26px_rgba(9,32,29,0.10)] sm:px-6 sm:py-8"
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }} whileHover={{ y: -5 }}
              >
                 <div className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#c39b62]/45 bg-[#f3eee3] text-[27px] shadow-[inset_0_0_0_4px_rgba(195,155,98,0.08)] transition-transform duration-300 group-hover:scale-105">
                   {feature.icon}
                 </div>
                 <h3 className="mb-2 font-serif text-[#09201d] text-lg sm:text-xl leading-snug">{feature.title}</h3>
                 <p className="max-w-[16rem] text-[#686e68] text-sm font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#ebe7de]">
         <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/3"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
               <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-3">Our Process</motion.h4>
               <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif text-[#09201d] mb-6 leading-tight">
                 From Design to<br/>Your Dream Blouse
               </motion.h2>
               <motion.p variants={fadeUp} className="text-gray-600 font-light text-sm mb-8">
                 We combine creativity, skill and tradition to create blouses that are truly special. Here's how we turn your vision into a masterpiece.
               </motion.p>
               <motion.div variants={fadeUp}>
                 <Link to="/services" className="inline-block px-8 py-3 bg-[#a27a44] text-white rounded-full text-sm font-medium hover:bg-brand-gold transition-colors shadow-md">
                   Explore Our Services →
                 </Link>
               </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
               {[
                 { step: '01', title: 'Consultation', desc: 'Share your ideas, preferences and style.', img: '/consultation-design.png' },
                 { step: '02', title: 'Design & Planning', desc: 'We create a design that matches your vision.', img: '/design-planning-embroidery.png' },
                 { step: '03', title: 'Handcrafted Work', desc: 'Our skilled artisans bring the design to life.', img: '/handcrafted-work.png' },
                 { step: '04', title: 'Final Delivery', desc: 'Your beautiful blouse is ready to make you shine.', img: '/final-delivery.png' }
               ].map((process, i) => (
                 <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-xl shadow-sm relative">
                    <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-[#a27a44] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      {process.step}
                    </div>
                    <img src={process.img} alt={process.title} className="w-full aspect-square object-cover rounded-lg mb-4" />
                    <h3 className="font-serif text-[#09201d] font-bold text-sm mb-1">{process.title}</h3>
                    <p className="text-gray-500 text-xs font-light">{process.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
    </div>
  );
}
