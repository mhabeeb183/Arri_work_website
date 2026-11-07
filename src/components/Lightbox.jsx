import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect } from 'react';

export default function Lightbox({ isOpen, image, onClose, onNext, onPrev }) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-md p-4 md:p-8"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-brand-cream/70 hover:text-brand-gold text-4xl z-50 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <HiX />
          </button>

          {/* Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-brand-cream/50 hover:text-brand-gold text-5xl z-50 transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <HiChevronLeft />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-brand-cream/50 hover:text-brand-gold text-5xl z-50 transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <HiChevronRight />
          </button>

          {/* Image Container */}
          <motion.div 
            className="relative max-w-5xl max-h-full flex flex-col items-center justify-center w-full h-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing
          >
            <img 
              src={image.src} 
              alt={image.title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-serif text-brand-gold mb-1">{image.title}</h3>
              <p className="text-brand-cream/60 text-sm tracking-widest uppercase">{image.category}</p>
            </div>
          </motion.div>

          {/* Background overlay click to close */}
          <div className="absolute inset-0 z-0" onClick={onClose}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
