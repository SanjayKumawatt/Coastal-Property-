import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden font-sans border-t border-slate-800">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16"
        >
          {/* LEFT SECTION: Branding & Info (Takes up more space for asymmetry) */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 pr-0 lg:pr-16">
            
            {/* Logo */}
            <Link to="/"  className='flex gap-3'>
                        <img src={logo} className='h-14' alt="" />
            
            <div className="inline-flex flex-col mb-8 group" >
              <div className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                COASTAL PROPERTY
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-blue-500 uppercase mt-1">
                Consultancy Private Limited
              </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium">
              A modern startup dedicated to transforming property discovery and information systems. We combine real estate expertise with digital solutions to present opportunities in a clearer, structured format.
            </p>

            {/* Contact Details (Grid layout for email and address) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Block */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 group-hover:bg-blue-900/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:contact@coastalproco.in" className="text-white font-medium text-lg hover:text-blue-400 transition-colors">
                    contact@coastalproco.in
                  </a>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 group-hover:bg-blue-900/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Hno. 294/2, Bhatem Sadolxem, <br />
                    Poinguinim, South Goa, <br />
                    Cancona, Goa, India, 403702
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION: Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 lg:pl-10 lg:border-l border-slate-800">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Company', path: '/about' },
                { name: 'Platform Vision', path: '/platform-vision' },
                { name: 'Property System', path: '/property-system' },
                { name: 'Reach Us', path: '/reach-us' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="group flex items-center text-slate-400 hover:text-white font-medium transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 text-blue-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium"
        >
          <p>© {currentYear} COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;