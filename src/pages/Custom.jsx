import { motion } from 'framer-motion';

export default function Custom() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="container mx-auto px-6 lg:px-12 py-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif text-brand-gold mb-6"
        >
          Custom Designs
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-cream/70 max-w-2xl mx-auto font-light text-lg mb-16"
        >
          Your vision, our craftsmanship. Let us create a personalized piece that tells your unique story.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="bg-[#140f0d] border border-brand-gold/20 p-8 md:p-16 text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-serif text-brand-gold mb-6">The Customization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { title: "1. Consultation", desc: "Share your ideas, fabric choices, and inspirations with our designers." },
              { title: "2. Design Sketch", desc: "We provide a rough sketch and color palette for your approval." },
              { title: "3. Embroidery", desc: "Our artisans bring the sketch to life using premium materials." }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-serif text-brand-cream">{step.title}</h3>
                <p className="text-brand-cream/60 font-light text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-brand-cream/80 font-light mb-8">
              From color customization to personalized motifs like wedding dates or names, the possibilities are endless.
            </p>
            <a 
              href="https://wa.me/919361951970" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-brand-gold text-brand-dark tracking-wider font-medium text-sm hover:bg-brand-gold-light transition-colors"
            >
              DISCUSS YOUR DESIGN (WHATSAPP)
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
