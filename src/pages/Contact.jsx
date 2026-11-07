import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

export default function Contact() {
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
      <SEO title="Contact Us" description="Reach out to Arfi Needle Art for custom Aari blouse designs." />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#09201d]">
        <div className="absolute inset-0"><img src="/contact-banner.png" alt="Green Aari embroidery in a warm studio" className="h-full w-full object-cover object-[65%_center]"/><div className="absolute inset-0 bg-gradient-to-r from-[#061915]/95 via-[#09201d]/75 to-[#09201d]/20"/><div className="absolute inset-0 bg-gradient-to-t from-[#09201d]/60 to-transparent"/></div>
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center relative z-10 min-h-[620px] md:min-h-[650px] py-16 pt-28">
          
          <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full md:w-3/5 py-8">
             <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-4">
               Get In Touch
             </motion.h4>
             <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
               Contact Us
             </motion.h1>
             <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-serif text-[#f0d5a5] mb-5">
               We'd Love to Hear From You
             </motion.h2>
             <motion.p variants={fadeUp} className="text-white/85 font-light max-w-lg leading-relaxed mb-7 text-sm sm:text-base">
               Have a question, custom design request, or need assistance? Reach out to us — we're here to help and make your aari work dreams come true.
             </motion.p>
             <motion.div variants={fadeUp} className="mb-6 flex w-full max-w-lg flex-col items-center text-center sm:items-start sm:text-left">
               <p className="font-['Great_Vibes',cursive] text-[25px] leading-tight tracking-wider text-[#d6b482] drop-shadow-md sm:text-3xl">
                 Let's Create Something<br className="sm:hidden" /> Beautiful Together <span className="font-sans text-xl text-[#d6b482]/90">♡</span>
               </p>
               <div className="mt-3 flex w-48 items-center justify-center text-[#d6b482]/80 sm:justify-start">
                 <svg className="h-3 w-full" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 11C18 13 40 13 70 9C95 6 110 7 118 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/><circle cx="4" cy="11" r="1.5" fill="currentColor"/></svg>
                 <span className="mx-2 shrink-0 text-xs text-[#d6b482]">❀</span>
                 <svg className="h-3 w-full -scale-x-100" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 11C18 13 40 13 70 9C95 6 110 7 118 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/><circle cx="4" cy="11" r="1.5" fill="currentColor"/></svg>
               </div>
             </motion.div>
             <motion.div variants={fadeUp} className="flex items-center space-x-4 text-brand-gold">
                <div className="h-px bg-brand-gold/30 w-16"></div>
                <span>❦</span>
                <div className="h-px bg-brand-gold/30 w-16"></div>
             </motion.div>
          </motion.div>

          <div className="md:w-2/5" aria-hidden="true" />

        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-20">
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Info Column */}
            <motion.div className="lg:w-1/3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>
               <motion.h4 variants={fadeUp} className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-2">Contact Information</motion.h4>
               <motion.h2 variants={fadeUp} className="text-4xl font-serif text-[#09201d] mb-4">Reach Us</motion.h2>
               <motion.p variants={fadeUp} className="text-gray-600 font-light text-sm mb-10 leading-relaxed">
                 Feel free to contact us through any of the following methods. We are always happy to assist you.
               </motion.p>

               <div className="space-y-6">
                 {[
                   { icon: <FaPhoneAlt />, label: 'Phone', value: '9361951970', href: 'tel:+919361951970' },
                   { icon: <FaWhatsapp />, label: 'WhatsApp', value: '9361951970', href: 'https://wa.me/919361951970' },
                   { icon: <FaEnvelope />, label: 'Email', value: 'arfineedleart@gmail.com', href: 'mailto:arfineedleart@gmail.com' }
                 ].map((item, i) => (
                   <motion.div key={i} variants={fadeUp} className="flex items-center space-x-5">
                      <div className="w-12 h-12 rounded-full bg-[#09201d] text-brand-gold flex items-center justify-center text-xl shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold mb-1">{item.label}</p>
                        <a href={item.href} className="text-[#09201d] font-serif font-bold text-lg hover:text-[#a27a44]">{item.value}</a>
                      </div>
                   </motion.div>
                 ))}
               </div>

               <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center space-x-2 text-brand-gold opacity-50">
                 <div className="w-8 h-px bg-brand-gold"></div>
                 <span>✾</span>
                 <div className="w-8 h-px bg-brand-gold"></div>
               </motion.div>

               <motion.div variants={fadeUp} className="mt-10 bg-[#fbf9f1] p-6 rounded-xl border border-brand-gold/20 flex items-start space-x-4">
                  <div className="text-brand-gold text-2xl mt-1"><FaRegClock /></div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold mb-1">Business Hours</h4>
                    <p className="text-[#09201d] text-sm mb-1">Monday - Saturday</p>
                    <p className="text-[#09201d] text-sm font-bold mb-2">9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400 text-xs italic">(Closed on Sundays)</p>
                  </div>
               </motion.div>
               
            </motion.div>

            {/* Right Form Column */}
            <motion.div className="lg:w-2/3 bg-[#09201d] p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-[#c39b62]/50 text-white" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
               <h4 className="text-brand-gold text-xs tracking-widest font-bold uppercase mb-2">Send Us a Message</h4>
               <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">We're Here to Help</h2>
               <p className="text-gray-300 font-light text-sm mb-8">
                 Fill out the form below and we'll get back to you as soon as possible.
               </p>

               <form className="space-y-5">
                 <div>
                   <label className="block text-sm font-bold text-[#f0d5a5] mb-2">Full Name *</label>
                   <input required type="text" placeholder="Enter your name" className="w-full border border-[#c39b62]/50 rounded-lg p-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#e0bd83] bg-white/5" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-[#f0d5a5] mb-2">Email Address *</label>
                   <input required type="email" placeholder="Enter your email" className="w-full border border-[#c39b62]/50 rounded-lg p-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#e0bd83] bg-white/5" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-[#f0d5a5] mb-2">Phone Number</label>
                   <input type="tel" placeholder="Enter your phone number" className="w-full border border-[#c39b62]/50 rounded-lg p-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#e0bd83] bg-white/5" />
                 </div>
                 <div><label className="block text-sm font-bold text-[#f0d5a5] mb-2">Service Required</label><select className="w-full border border-[#c39b62]/50 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#e0bd83] bg-[#12332d]"><option value="">Choose a service</option>{['Aari Blouse Work','Saree Work','Lehenga Work','Dupatta Work','Salwar Suit Work','Custom Designs','Bridal Work','Patch & Motif Work'].map(x=><option key={x}>{x}</option>)}</select></div>
                 <div>
                   <label className="block text-sm font-bold text-[#f0d5a5] mb-2">Message *</label>
                   <textarea required rows="4" placeholder="How can we help you?" className="w-full border border-[#c39b62]/50 rounded-lg p-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#e0bd83] bg-white/5"></textarea>
                 </div>
                 <button type="submit" className="w-full bg-[#c39b62] text-[#09201d] rounded-lg py-4 font-bold tracking-wide flex justify-center items-center hover:bg-[#e0bd83] transition-colors">
                   <span className="mr-2 text-lg">✈</span> Send Message
                 </button>
               </form>
            </motion.div>

         </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 lg:px-12 mb-16">
         <div className="w-full min-h-[24rem] lg:h-[26rem] rounded-xl overflow-hidden relative shadow-lg border border-brand-gold/20 flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/3 bg-[#09201d] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10 text-white">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
              <div className="relative z-10">
                 <FaMapMarkerAlt className="text-3xl text-brand-gold mb-4" />
                 <p className="text-brand-gold text-[0.65rem] uppercase tracking-[0.22em] font-semibold mb-2">Visit Our Studio</p>
                 <h3 className="font-serif text-2xl lg:text-3xl mb-3">Find Us in Madurai</h3>
                 <p className="text-sm text-gray-300 font-light leading-relaxed mb-5">Near Periyar Bus Stand, Madurai. We’re ready to help with your Aari work and custom designs.</p>
                 <a href="https://www.google.com/maps/search/?api=1&query=Periyar+Bus+Stand%2C+Madurai" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/50 px-4 py-2 text-xs font-semibold text-brand-gold hover:bg-brand-gold hover:text-[#09201d] transition-colors">Get directions <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="w-full md:w-2/3 min-h-[18rem] md:min-h-0 bg-gray-100 relative">
               <iframe title="Map showing Periyar Bus Stand, Madurai" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7860.449182444614!2d78.1115843!3d9.915244!3m2!1i1024!2i768!4f13.1!2m1!1speriyar%20busstand%20madurai!5e0!3m2!1sen!2sin!4v1793835979955!5m2!1sen!2sin" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
         </div>
      </section>

      {/* Features Bottom Row */}
      <section className="container mx-auto px-6 lg:px-12 pb-24">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {[
              { icon: '🤍', title: 'Quality Craftsmanship', desc: 'Every stitch is made with care and precision.' },
              { icon: '💎', title: 'Custom Designs', desc: 'Your ideas, our creativity — made just for you.' },
              { icon: '🛡️', title: 'Trusted Service', desc: 'Your satisfaction is our priority.' },
              { icon: '🌿', title: 'Timely Support', desc: 'We\'re always here to assist you.' }
            ].map((feature, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="flex flex-col items-center">
                 <div className="w-14 h-14 rounded-full bg-[#f4efe6] border border-brand-gold/30 flex items-center justify-center text-xl text-[#09201d] mb-4">
                   {feature.icon}
                 </div>
                 <h3 className="font-serif text-[#09201d] text-sm font-bold mb-2">{feature.title}</h3>
                 <p className="text-gray-500 text-xs font-light">{feature.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
