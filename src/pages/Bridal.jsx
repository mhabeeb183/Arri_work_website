import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Bridal() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80" 
            alt="Bridal Embroidery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-brand-gold mb-4">Bridal Collection</h1>
          <p className="text-brand-cream/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Luxury wedding designs tailored for the modern bride.
          </p>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-6">Heavy Bridal Work</h2>
            <p className="text-brand-cream/70 font-light text-lg leading-relaxed mb-6">
              Our bridal collection features the most intricate and heavy Aari work, ensuring you shine on your most important day. We use premium gold and silver zari, Kundan stones, and cut-dana beads to create masterpieces that are as unique as you are.
            </p>
            <ul className="space-y-4 mb-8">
              {['Traditional Peacock & Floral Motifs', 'Custom Couple Portraits in Embroidery', 'Heavy Sleeves and Back Neck Designs', 'Matching Lehenga and Dupatta Work'].map((item, i) => (
                <li key={i} className="flex items-start text-brand-cream/80 font-light">
                  <span className="text-brand-gold mr-3 mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block px-8 py-3 bg-brand-gold text-brand-dark tracking-wider hover:bg-brand-gold-light transition-colors text-sm font-medium">
              BOOK CONSULTATION
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img src="https://images.unsplash.com/photo-1583391733958-692b1dc85193?auto=format&fit=crop&q=80" alt="Bridal Detail 1" className="w-full aspect-[3/4] object-cover" />
            <img src="https://images.unsplash.com/photo-1610189013658-49e081922579?auto=format&fit=crop&q=80" alt="Bridal Detail 2" className="w-full aspect-[3/4] object-cover mt-8" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
