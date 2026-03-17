import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import logo from "../assets/logo.png"


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Platform Vision', path: '/platform-vision' },
  { name: 'Property System', path: '/property-system' },
  { name: 'Reach Us', path: '/reach-us' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for the floating header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background Animation Variants
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Background Animated Blobs (Gives the whole website a dynamic feel) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50">
        <motion.div
          variants={blobVariants} animate="animate"
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          variants={blobVariants} animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-[20%] right-[-5%] w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
            ? 'py-3 bg-white/70 backdrop-blur-md shadow-lg'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2">
            <img src={logo} className='h-12' alt="" />
              <div className='flex flex-col relative group z-50'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-extrabold tracking-tight text-blue-900 flex items-center gap-2"
                >
                  COASTAL PROPERTY
                </motion.div>
                <span className="text-[0.65rem] font-semibold tracking-widest text-blue-500 uppercase">
                  Consultancy Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative group px-1 py-2"
                  >
                    <span className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-indigo-600' : 'text-slate-700 group-hover:text-indigo-600'
                      }`}>
                      {item.name}
                    </span>
                    {/* Animated Underline */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link to={"/reach-us"}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Get A Quote
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium ${location.pathname === item.path
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to={"/reach-us"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 w-full flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md"
                >
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;