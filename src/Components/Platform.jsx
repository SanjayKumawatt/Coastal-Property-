import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Compass, 
  Globe2, 
  MessageSquareText, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Background Animation (Consistent with your theme)
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, -100, 100, 0],
        y: [0, 100, -100, 0],
        scale: [1, 1.3, 0.9, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px]"
    />
    <motion.div
      animate={{
        x: [0, 150, -100, 0],
        y: [0, -150, 100, 0],
        scale: [0.8, 1.2, 1, 0.8],
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[10%] left-[10%] w-[25rem] h-[25rem] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
  </div>
);

const PlatformCapabilities = () => {
  // Stagger & Fade Animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const features = [
    {
      icon: Layers,
      title: "Organised property profiles",
      desc: "Each property opportunity will be represented through a structured information profile. These profiles will aim to include relevant characteristics that help users understand the property’s nature and potential.",
      color: "text-blue-600",
      bg: "bg-blue-100/80"
    },
    {
      icon: Compass,
      title: "Exploration tools",
      desc: "Users will be able to navigate property opportunities through filters and location-based exploration tools designed to simplify the discovery process.",
      color: "text-indigo-600",
      bg: "bg-indigo-100/80"
    },
    {
      icon: Globe2,
      title: "Opportunity context",
      desc: "In addition to the core property information, the platform will explore ways to present contextual information that may influence property decisions.",
      color: "text-teal-600",
      bg: "bg-teal-100/80"
    },
    {
      icon: MessageSquareText,
      title: "Enquiry management",
      desc: "Users who wish to explore a property further will be able to submit enquiries referencing specific listings so that communication can begin with a shared understanding of the opportunity being discussed.",
      color: "text-purple-600",
      bg: "bg-purple-100/80"
    }
  ];

  return (
    <div className="relative bg-slate-50 py-24 overflow-hidden font-sans">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
            <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">
            What the platform aims to provide
          </h2>
          <p className="text-xl text-slate-700 font-medium">
            The system currently being designed focuses on several core capabilities intended to support both property exploration and information clarity.
          </p>
        </motion.div>

        {/* FEATURES GRID (2x2 Glassmorphism Cards) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group bg-white/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{feature.title}</h3>
              <p className="text-slate-700 text-lg font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* LONG-TERM INITIATIVE & CTA BANNER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Deep blue gradient background for the CTA banner */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950"></div>
          
          {/* Subtle grid pattern over the dark background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 p-10 md:p-16 lg:px-24 flex flex-col items-center text-center">
            <ShieldCheck className="w-16 h-16 text-blue-300 mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              A long-term information initiative
            </h2>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-4xl mx-auto mb-6 leading-relaxed">
              The development of digital property systems requires careful attention to how property information is organised, verified, and presented.
            </p>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              The initiative being developed by <strong className="text-white">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> is intended to explore these possibilities through a platform that gradually evolves as the underlying systems are developed and refined.
            </p>

            {/* Main CTA Button */}
            <Link to="/reach-us" className="group">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 bg-white text-blue-900 text-xl font-extrabold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                Request Platform Access
                <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PlatformCapabilities;