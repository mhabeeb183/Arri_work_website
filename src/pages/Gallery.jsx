import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import traditionalAariImg from '../assets/images/gallery/traditional-aari-work.jpg';
import floralAariImg from '../assets/images/gallery/floral-aari-work.jpg';
import zariWorkImg from '../assets/images/gallery/zari-work.jpg';
import beadsStonesImg from '../assets/images/gallery/beads-stones-work.jpg';
import mirrorWorkImg from '../assets/images/gallery/mirror-work.jpg';
import threadWorkImg from '../assets/images/gallery/thread-work.jpg';
import kundanWorkImg from '../assets/images/gallery/kundan-work.jpg';
import peacockDesignImg from '../assets/images/gallery/peacock-design.jpg';
import pastelAariImg from '../assets/images/gallery/pastel-aari-work.jpg';
import nakshiAariImg from '../assets/images/gallery/nakshi-aari-work.jpg';
import threeDAariImg from '../assets/images/gallery/3d-aari-work.jpg';
import mughalDesignImg from '../assets/images/gallery/mughal-design.jpg';
import designerBlouseImg from '../assets/images/gallery/designer-blouse-work.jpg';
import leafMotifImg from '../assets/images/gallery/leaf-motif-work.jpg';
import animalMotifImg from '../assets/images/gallery/animal-motif-work.jpg';
import geometricPatternImg from '../assets/images/gallery/geometric-pattern-work.jpg';
import royalAariImg from '../assets/images/gallery/royal-aari-work.jpg';
import paisleyDesignImg from '../assets/images/gallery/paisley-design.jpg';
import minimalAariImg from '../assets/images/gallery/minimal-aari-work.jpg';
import bridalAariImg from '../assets/images/gallery/bridal-aari-work.jpg';
import galleryHeroImg from '../assets/images/gallery/gallery-hero.jpg';

const galleryData = [
  { id: 1, category: 'Traditional', title: 'Traditional Aari Work', src: traditionalAariImg },
  { id: 2, category: 'Floral', title: 'Floral Aari Work', src: floralAariImg },
  { id: 3, category: 'Zari Work', title: 'Zari Work', src: zariWorkImg },
  { id: 4, category: 'Beads & Stones', title: 'Beads & Stones Work', src: beadsStonesImg },
  { id: 5, category: 'Mirror Work', title: 'Mirror Work', src: mirrorWorkImg },
  { id: 6, category: 'Thread Work', title: 'Thread Work', src: threadWorkImg },
  { id: 7, category: 'Custom Designs', title: 'Kundan Work', src: kundanWorkImg },
  { id: 8, category: 'Floral', title: 'Peacock Design', src: peacockDesignImg },
  { id: 9, category: 'Traditional', title: 'Pastel Aari Work', src: pastelAariImg },
  { id: 10, category: 'Traditional', title: 'Nakshi Aari Work', src: nakshiAariImg },
  { id: 11, category: 'Beads & Stones', title: '3D Aari Work', src: threeDAariImg },
  { id: 12, category: 'Custom Designs', title: 'Mughal Design', src: mughalDesignImg },
  { id: 13, category: 'Custom Designs', title: 'Designer Blouse Work', src: designerBlouseImg },
  { id: 14, category: 'Floral', title: 'Leaf Motif Work', src: leafMotifImg },
  { id: 15, category: 'Custom Designs', title: 'Animal Motif Work', src: animalMotifImg },
  { id: 16, category: 'Custom Designs', title: 'Geometric Pattern Work', src: geometricPatternImg },
  { id: 17, category: 'Traditional', title: 'Royal Aari Work', src: royalAariImg },
  { id: 18, category: 'Traditional', title: 'Paisley Design', src: paisleyDesignImg },
  { id: 19, category: 'Floral', title: 'Minimal Aari Work', src: minimalAariImg },
  { id: 20, category: 'Traditional', title: 'Bridal Aari Work', src: bridalAariImg },
];

const categories = ['All', 'Traditional', 'Floral', 'Zari Work', 'Beads & Stones', 'Mirror Work', 'Thread Work', 'Custom Designs'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

  return (
    <div className="pt-24 bg-brand-cream min-h-screen">
      <SEO title="Gallery" description="Explore the diverse styles and intricate designs of Arfi Needle Art." />
      
      {/* Hero Section */}
      <section className="bg-[#0b1b17] relative wavy-bottom pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Full opacity crisp background with natural colors */}
           <img 
            src={galleryHeroImg} 
            alt="Aari Work Embroidery Background" 
            className="w-full h-full object-cover object-[80%_center] md:object-right lg:object-center select-none"
            style={{
              filter: 'contrast(1.06) brightness(1.05) saturate(1.05)',
            }}
          />
          {/* Subtle gradient matching Home page: protects left text while leaving right embroidery vibrant and clear */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/45 to-transparent w-full"></div>
          
          {/* Mobile gradient: subtle soft protection for text at the top-left, leaving the rest bright & clear */}
          <div className="block md:hidden absolute inset-0 bg-gradient-to-r from-[#0b1b17]/85 via-[#0b1b17]/40 to-transparent w-3/4"></div>
          <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#0b1b17]/50 via-transparent to-transparent h-1/3"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b1b17] to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
           <motion.h4 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-[#d6b482] text-xs tracking-widest font-bold uppercase mb-4 pt-10 drop-shadow-md">
             Our Gallery
           </motion.h4>
           <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-xl drop-shadow-lg">
             Types & Varieties of Aari Work
           </motion.h1>
           <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="flex items-center space-x-3 mb-6 text-[#d6b482]">
              <span>❀</span>
              <div className="h-px bg-[#d6b482]/50 w-32"></div>
           </motion.div>
           <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="text-gray-100 font-light max-w-lg leading-relaxed drop-shadow-md">
             Explore the diverse styles and intricate designs of Aari work. Each piece is a blend of tradition, creativity and timeless beauty.
           </motion.p>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-20">
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 font-medium ${
                filter === cat 
                  ? 'bg-[#a27a44] text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#a27a44] hover:text-[#a27a44]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group flex flex-col"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                   <img 
                     src={image.src} 
                     alt={image.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                </div>
                <div className="p-4 text-center">
                   <h3 className="font-serif text-[#09201d] font-bold text-sm">{image.title}</h3>
                   <div className="flex justify-center mt-2 opacity-50">
                     <span className="text-brand-gold text-xs">✾</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      <Lightbox 
        isOpen={selectedImageIndex !== null}
        image={selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
