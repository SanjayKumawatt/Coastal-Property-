import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Network, 
  Layers, 
  Compass, 
  Globe2, 
  MessageSquareText, 
  ArrowRight,
  ShieldCheck,
  LayoutTemplate
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Premium Background for the Vision Page
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-5%] left-[20%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -150, 100, 0],
        y: [0, 150, -100, 0],
        scale: [0.8, 1.5, 1, 0.8],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    {/* Digital Framework Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
);

const PlatformVision = () => {
  // Shared Animation Variants
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Features Data
  const features = [
    {
      icon: Layers,
      title: "Organised property profiles",
      desc: "Each property opportunity will be represented through a structured information profile including relevant characteristics to help users understand its nature and potential.",
      bg: "bg-blue-100/80", color: "text-blue-600"
    },
    {
      icon: Compass,
      title: "Exploration tools",
      desc: "Users will be able to navigate property opportunities through filters and location-based exploration tools designed to simplify the discovery process.",
      bg: "bg-indigo-100/80", color: "text-indigo-600"
    },
    {
      icon: Globe2,
      title: "Opportunity context",
      desc: "In addition to core property information, the platform will present contextual information that may influence property decisions.",
      bg: "bg-teal-100/80", color: "text-teal-600"
    },
    {
      icon: MessageSquareText,
      title: "Enquiry management",
      desc: "Users wishing to explore further can submit enquiries referencing specific listings, beginning communication with a shared understanding.",
      bg: "bg-purple-100/80", color: "text-purple-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans pt-24 pb-12">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: HERO / INTRO ================= */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20 pt-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
            <Eye className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-bold text-blue-700 tracking-widest uppercase">Platform Vision</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-8 leading-tight">
            Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Framework</span> <br className="hidden md:block"/> for property exploration
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Property markets have gradually begun incorporating digital tools to discover opportunities more efficiently. However, many systems still rely on simple listing boards providing limited context.
          </motion.p>
        </motion.div>

        {/* ================= SECTION 2: THE PARADIGM SHIFT ================= */}
        <section className="mb-28">
          <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8 lg:p-12 overflow-hidden relative">
            
            {/* Inner background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <div className="flex items-center gap-3 text-indigo-600 font-semibold mb-6">
                  <Network className="w-6 h-6" />
                  <span className="text-sm tracking-wider uppercase">A Broader Approach</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
                  Beyond Simple Listings
                </h2>
                <div className="space-y-6 text-lg text-slate-700 font-medium leading-relaxed">
                  <p>
                    The initiative being developed by <strong className="text-blue-900">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> is exploring a broader approach in which property information, location context, and communication pathways exist within a single digital environment.
                  </p>
                  <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <p className="text-blue-900">
                      Rather than simply presenting listings, the platform aims to organise property opportunities through structured data, allowing users to understand not only the property itself but also the surrounding environment in which it exists.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="relative"
              >
                <img 
                  src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4122.jpg" 
                  alt="Structured Data Dashboard" 
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl mix-blend-darken filter hue-rotate-15"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="mb-28">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <LayoutTemplate className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
              What the platform aims to provide
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              The system currently being designed focuses on several core capabilities intended to support both property exploration and information clarity.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/80 hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md ${feature.bg} ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= SECTION 4: CTA BANNER ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Deep dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>
            
            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 p-10 md:p-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">Long-term Initiative</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  A platform that evolves <br className="hidden lg:block"/> with the market
                </h2>
                <p className="text-lg text-blue-200/90 max-w-2xl leading-relaxed mb-4">
                  The development of digital property systems requires careful attention to how property information is organised, verified, and presented.
                </p>
                <p className="text-lg text-blue-200/90 max-w-2xl leading-relaxed">
                  We are exploring these possibilities through a platform that gradually evolves as the underlying systems are developed and refined.
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <Link to="/reach-us">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(96, 165, 250, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-xl transition-all duration-300"
                  >
                    Request Platform Access
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default PlatformVision;