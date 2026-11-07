import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import servicesBlouseImage from '../assets/images/gallery/services-aari-blouse.jpg';
import servicesSareeImage from '../assets/images/gallery/services-saree-work.jpg';
import servicesDupattaImage from '../assets/images/gallery/services-dupatta-work.jpg';
import servicesSalwarImage from '../assets/images/gallery/services-salwar-suit-work.jpg';

const serviceCards = [
  { title: "Aari Blouse Work", desc: "Elegant and intricate aari work for bridal, party and festive blouses." },
  { title: "Saree Work", desc: "Graceful aari work on sarees for a timeless and royal look." },
  { title: "Lehenga Work", desc: "Beautiful aari embroidery for lehengas, designed for your special moments." },
  { title: "Dupatta Work", desc: "Lightweight and elegant aari work for dupattas of all kinds." },
  { title: "Salwar Suit Work", desc: "Stylish and graceful aari work for salwar suits and ethnic wear." },
  { title: "Custom Designs", desc: "Get unique, personalized designs for your special occasions." },
  { title: "Bridal Work", desc: "Exquisite aari work for a perfect bridal look." },
  { title: "Patch & Motif Work", desc: "Detailed motifs and patches for creative and stylish outfits." }
];

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-24 bg-brand-cream min-h-screen">
      <SEO title="Services" description="Premium Aari Work Services by Arfi Needle Art" />
      
      {/* Hero Section */}
      <section className="relative isolate min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] overflow-hidden bg-[#09201d]">
        <div className="absolute inset-0 z-0">
          <img src="/services-hero.png" alt="Green Aari embroidered blouse" className="h-full w-full object-cover object-[62%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061915]/95 via-[#09201d]/80 to-[#09201d]/15 sm:via-[#09201d]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09201d]/75 via-transparent to-[#09201d]/15" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-[620px] items-center px-6 pb-16 pt-28 sm:min-h-[680px] sm:px-10 lg:min-h-[720px] lg:px-12">
           <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full max-w-2xl py-8 sm:py-12">
             <motion.h4 variants={fadeUp} className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#dfbd83] sm:text-sm">
               Our Services
             </motion.h4>
             <motion.h1 variants={fadeUp} className="mb-5 max-w-xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl">
               Premium Aari Work Services
             </motion.h1>
             <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3 text-[#d6b482]">
                <span className="text-xl">❀</span><span className="h-px w-20 bg-[#c39b62]/70" />
             </motion.div>
             <motion.p variants={fadeUp} className="mb-3 text-base font-semibold tracking-wide text-[#f0d5a5] sm:text-lg">
               Custom-made. Traditional. Timeless.
             </motion.p>
             <motion.p variants={fadeUp} className="mb-7 max-w-xl text-sm font-light leading-7 text-white/85 sm:text-base sm:leading-8">
               At Arfi Needle Art, we offer a complete range of aari work services to bring your vision to life. From elegant blouses to intricate embroidery designs, we craft every piece with precision, passion and care.
             </motion.p>
             <motion.div variants={fadeUp}>
               <Link to="/contact" className="inline-flex items-center rounded-full border border-[#f0d5a5] bg-[#c39b62] px-7 py-3.5 text-sm font-bold text-[#09201d] shadow-lg transition hover:bg-[#e0bd83] sm:px-9">
                 Book Your Service →
               </Link>
             </motion.div>
           </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-5 right-6 hidden text-right font-serif text-xl italic leading-tight text-[#f0d5a5] drop-shadow sm:block lg:bottom-10 lg:right-12 lg:text-2xl">Crafting Your Dreams<br/>in Thread ♡</div>
      </section>

      {/* Services Header & Icons */}
      <section className="py-14 md:py-24 container mx-auto px-5 sm:px-6 lg:px-12 relative z-20">
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-8 lg:gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} className="w-full lg:w-1/2">
               <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-3">Our Services</motion.h4>
               <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-serif text-[#09201d] mb-4 leading-tight">Our Aari Work Services</motion.h2>
               <motion.p variants={fadeUp} className="text-gray-600 font-light mb-4 leading-relaxed max-w-xl">
                 We offer a wide range of aari work services to suit every occasion, outfit and personal style.
               </motion.p>
               <motion.div variants={fadeUp} className="flex items-center text-brand-gold space-x-2">
                 <span>❀</span>
                 <div className="w-12 h-px bg-brand-gold/30"></div>
                 <span className="text-xs">→</span>
               </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger} className="w-full lg:w-1/2 grid grid-cols-4 gap-2 sm:gap-4 lg:gap-3 items-start">
               {[
                 { icon: '💎', title: 'Premium\nQuality Work' },
                 { icon: '✂️', title: 'Skilled\nArtisans' },
                 { icon: '🛡️', title: 'On-Time\nDelivery' },
                 { icon: '🤍', title: 'Custom\nDesigns' }
               ].map((item, i) => (
                 <motion.div key={i} variants={fadeUp} className="text-center min-w-0">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 text-2xl text-[#09201d] border border-gray-300 rounded-xl flex items-center justify-center bg-white shadow-sm">
                     {item.icon}
                   </div>
                   <p className="text-[0.68rem] sm:text-xs text-gray-700 font-serif whitespace-pre-line leading-snug">{item.title}</p>
                 </motion.div>
               ))}
            </motion.div>
         </div>

         {/* 8 Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img src={card.title === 'Custom Designs' ? '/services-custom-designs.png' : card.title === 'Bridal Work' ? '/services-bridal-work.png' : card.title === 'Patch & Motif Work' ? '/services-patch-motif.png' : card.title === 'Lehenga Work' ? '/services-lehenga-work.png' : card.title === 'Saree Work' ? servicesSareeImage : card.title === 'Dupatta Work' ? servicesDupattaImage : card.title === 'Salwar Suit Work' ? servicesSalwarImage : servicesBlouseImage} alt={card.title === 'Custom Designs' ? 'Blue blouse with intricate custom gold Aari embroidery' : card.title === 'Bridal Work' ? 'Blue bridal blouse with ornate gold Aari embroidery' : card.title === 'Patch & Motif Work' ? 'Ruby fabric with gold embroidered floral motifs' : card.title === 'Lehenga Work' ? 'Purple lehenga fabric with gold Aari floral embroidery' : card.title === 'Saree Work' ? 'Gold and green Aari embroidery on ivory saree fabric' : card.title === 'Dupatta Work' ? 'Floral pastel Aari embroidery on ivory dupatta fabric' : card.title === 'Salwar Suit Work' ? 'Red floral and gold Aari embroidery on black fabric' : `${card.title} embroidery in magenta silk with gold Aari work`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[#09201d] font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs font-light mb-4 line-clamp-2">{card.desc}</p>
                  <Link to="/contact" className="text-[#a27a44] text-xs font-bold hover:text-[#09201d] transition-colors flex items-center">
                     <span className="mr-1">◈</span> Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* How We Work (Horizontal Timeline) */}
      <section className="py-24 bg-[#ebe7de]">
         <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-center">
            <motion.div className="lg:w-1/3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>
               <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-3">Our Process</motion.h4>
               <motion.h2 variants={fadeUp} className="text-4xl font-serif text-[#09201d] mb-4">How We Work</motion.h2>
               <motion.p variants={fadeUp} className="text-gray-600 font-light text-sm mb-6">
                 From your idea to the final masterpiece, we follow a simple and careful process to ensure the best quality and complete satisfaction.
               </motion.p>
               <motion.div variants={fadeUp}>
                  <Link to="/contact" className="inline-flex items-center px-6 py-2 bg-[#a27a44] text-white rounded-full text-sm hover:bg-[#8c6939] transition-colors">
                    Get Started →
                  </Link>
               </motion.div>
            </motion.div>

            <motion.div className="lg:w-2/3 flex flex-wrap lg:flex-nowrap justify-between gap-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>
               {[
                 { num: '01', icon: '💬', title: 'Consultation', desc: 'Share your ideas, preferences and style.' },
                 { num: '02', icon: '📐', title: 'Design & Planning', desc: 'We create a design that matches your vision.' },
                 { num: '03', icon: '🪡', title: 'Crafting', desc: 'Our skilled artisans bring the design to life with precision.' },
                 { num: '04', icon: '📦', title: 'Final Delivery', desc: 'Your beautiful piece is ready to make you shine.' }
               ].map((step, i) => (
                 <motion.div key={i} variants={fadeUp} className="flex-1 text-center relative px-2">
                   {i !== 3 && <div className="hidden lg:block absolute right-[-15px] top-8 text-gray-300">›</div>}
                   <div className="relative inline-block mb-4">
                     <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-2xl">
                       {step.icon}
                     </div>
                     <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#a27a44] text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#ebe7de]">
                       {step.num}
                     </div>
                   </div>
                   <h3 className="font-serif text-[#09201d] font-bold text-sm mb-2">{step.title}</h3>
                   <p className="text-gray-500 text-xs font-light">{step.desc}</p>
                   <div className="text-[#a27a44] text-xs mt-2 opacity-50">✦</div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="bg-[#09201d] py-16 text-center relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
         <div className="relative z-10 container mx-auto px-6">
           <h2 className="text-3xl font-serif text-white mb-4">Ready to Create Something Beautiful?</h2>
           <p className="text-gray-400 font-light text-sm mb-8">Book your aari work service today and turn your style into a masterpiece.</p>
           <Link to="/contact" className="inline-block px-8 py-3 bg-[#c39b62] text-[#09201d] font-bold rounded-full hover:bg-white transition-colors">
             Contact Us →
           </Link>
         </div>
      </section>

    </div>
  );
}
