import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Naya component: Floating Glass Blocks banane ke liye
const FloatingBlock = ({ size, top, left, delay, duration }) => (
  <motion.div
    animate={{ 
      y: [0, -30, 0], 
      rotate: [0, 5, -5, 0],
      opacity: [0.3, 0.6, 0.3] 
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay, 
      ease: "easeInOut" 
    }}
    className="absolute rounded-2xl border border-blue-200/50 bg-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
    style={{ width: size, height: size, top, left }}
  />
);

const Hero = () => {
  // Text animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">

      {/* NEW BACKGROUND: Clean Tech Grid + Floating Property Blocks */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Glowing gradient at the very bottom so it doesn't distract the top text */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-100/40 to-transparent"></div>

        {/* Floating Glass Blocks (Representing Properties/Data) */}
        <FloatingBlock size="80px" top="15%" left="10%" delay={0} duration={8} />
        <FloatingBlock size="120px" top="60%" left="5%" delay={2} duration={12} />
        <FloatingBlock size="60px" top="20%" left="85%" delay={1} duration={9} />
        <FloatingBlock size="150px" top="70%" left="80%" delay={3} duration={15} />
        <FloatingBlock size="40px" top="80%" left="40%" delay={0.5} duration={7} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 backdrop-blur-sm shadow-sm">
              <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">
                Welcome to the future
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-6">
              A new approach to <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                property discovery
              </span><br />
              and information systems
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Real estate decisions often begin long before a property transaction takes place. Individuals explore locations, compare opportunities, and try to understand how different properties fit their goals. In many markets, however, the process of discovering and evaluating property opportunities still depends on scattered listings, informal referrals, and incomplete information.
            </motion.p>

            {/* Clickable Buttons with Links */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/platform-vision" className="group">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
                >
                  Explore Platforms
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/about" className="group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-blue-300 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Image (Blue background animation REMOVED completely) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <motion.img
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_107791-17049.jpg" 
              alt="Developer building property system"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-xl object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;