import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  LayoutList, 
  Map, 
  MessageSquarePlus, 
  Users, 
  ArrowRight,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Tech-themed Animated Background
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 120, -80, 0],
        y: [0, -120, 80, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[10%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -150, 100, 0],
        y: [0, 150, -100, 0],
        scale: [0.8, 1.3, 1, 0.8],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[0%] right-[5%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] opacity-60"></div>
  </div>
);

const PropertySystems = () => {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // Content Array with Images Added
  const systemFeatures = [
    {
      icon: LayoutList,
      title: "Property information profiles",
      desc1: "At the centre of the platform will be individual property profiles. These profiles are being designed to organise information in a consistent structure so that users can review essential details before initiating enquiries.",
      desc2: "The intention is to create an environment where property opportunities can be explored with greater clarity.",
      color: "text-blue-600",
      bg: "bg-blue-100/80",
      border: "border-blue-200/50",
      image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4856.jpg"
    },
    {
      icon: Map,
      title: "Location-aware exploration",
      desc1: "Real estate opportunities are strongly influenced by location characteristics such as development potential, accessibility, and surrounding infrastructure.",
      desc2: "The platform aims to support location-based exploration tools that help users navigate property opportunities with a clearer understanding of regional context.",
      color: "text-indigo-600",
      bg: "bg-indigo-100/80",
      border: "border-indigo-200/50",
      image: "https://img.freepik.com/free-vector/location-search-concept-illustration_114360-4662.jpg"
    },
    {
      icon: MessageSquarePlus,
      title: "Structured enquiry channels",
      desc1: "Instead of relying on multiple informal communication methods, the system will support structured enquiry channels where users can submit requests referencing specific property opportunities.",
      desc2: "This approach may allow discussions to begin with a clearer understanding of the opportunity under consideration.",
      color: "text-cyan-600",
      bg: "bg-cyan-100/80",
      border: "border-cyan-200/50",
      image: "https://img.freepik.com/free-vector/online-messaging-concept-illustration_114360-1920.jpg"
    },
    {
      icon: Users,
      title: "Property participation",
      desc1: "Property owners who wish to present opportunities through the platform will be able to submit property information in a structured format once the system becomes available.",
      desc2: "The goal is to support a consistent presentation of property information so that users can compare opportunities more effectively.",
      color: "text-teal-600",
      bg: "bg-teal-100/80",
      border: "border-teal-200/50",
      image: "https://img.freepik.com/free-vector/real-estate-agency-concept-illustration_114360-1563.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans pt-24 pb-12">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO / INTRO SECTION (Image on Right) ================= */}
        <section className="mb-24 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-slate-900 text-white shadow-xl">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold tracking-widest uppercase text-cyan-50">Property Systems</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 leading-tight">
                Software tools designed for <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  property ecosystems
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left">
                <div className="flex items-center gap-3 text-blue-600 font-semibold mb-4">
                  <Laptop className="w-6 h-6" />
                  <span className="text-sm tracking-wider uppercase">The Environment</span>
                </div>
                <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                  Modern property markets involve a variety of participants including buyers, investors, property owners, and advisors. Each participant often approaches property decisions from a different perspective.
                </p>
                <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                  <p className="text-lg text-blue-900 font-medium leading-relaxed">
                    The software tools currently being designed by <strong className="font-bold">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> aim to provide an environment where these different perspectives can interact through structured property information.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Intro Image */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-cyan-200 rounded-full blur-3xl opacity-30 transform scale-90"></div>
              <img 
                src="https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg" 
                alt="Property Ecosystem Tech" 
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl mix-blend-darken filter hue-rotate-15"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= ECOSYSTEM FEATURES (Zig-Zag Layout with Images) ================= */}
        <div className="space-y-24 mb-24">
          {systemFeatures.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Text Section */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={idx % 2 === 0 ? slideInLeft : slideInRight}
                className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-md ${feature.bg} ${feature.color} border ${feature.border} mb-6 shadow-sm`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">{feature.title}</h3>
                <div className="space-y-6">
                  <p className="text-slate-700 text-lg font-medium leading-relaxed">
                    {feature.desc1}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {feature.desc2}
                  </p>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={idx % 2 === 0 ? slideInRight : slideInLeft}
                className={`order-1 relative ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 transform scale-90 ${idx % 2 === 0 ? 'bg-blue-300' : 'bg-cyan-300'}`}></div>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-xl mix-blend-darken filter hue-rotate-15 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

            </div>
          ))}
        </div>

        {/* ================= CTA BANNER ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
              <ShieldCheck className="w-16 h-16 text-cyan-400 mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Ready to explore the ecosystem?
              </h2>
              <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Join our startup in building a structured, location-aware, and transparent environment for property exploration.
              </p>

              <Link to="/reach-us">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xl font-bold rounded-full shadow-xl transition-all duration-300"
                >
                  Request Platform Access
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default PropertySystems;