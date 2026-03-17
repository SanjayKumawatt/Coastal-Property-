import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  MonitorSmartphone, 
  LayoutList, 
  MessageSquareText, 
  Building2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated Background 
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[5%] left-[10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[100px]"
    />
    <motion.div
      animate={{
        x: [0, -80, 80, 0],
        y: [0, 80, -80, 0],
        scale: [0.8, 1.1, 1, 0.8],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[20%] right-[5%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-[100px]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
);

const About = () => {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans pt-24 pb-12">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: OBSERVATION & FORMATION ================= */}
        <section className="mb-28 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
                <Eye className="w-4 h-4 text-blue-700" />
                <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Our Origin</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 leading-tight">
                Observing how property information flows
              </h1>
              
              <div className="space-y-6 text-lg text-slate-700 font-medium leading-relaxed">
                <p>
                  Property opportunities often emerge in local networks long before they become visible to a broader audience. As a result, people exploring property investments or residential opportunities frequently rely on fragmented information sources.
                </p>
                <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm">
                  <p className="text-blue-950 mb-4">
                    This observation played a role in the formation of <strong className="font-extrabold text-blue-700">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong>, which is exploring how digital systems might organise property information more effectively.
                  </p>
                  <p className="text-slate-600">
                    The startup is currently developing an initiative that combines real estate activity with software designed to support property information systems.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="order-1 lg:order-2 relative hidden md:block"
            >
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-90"></div>
              <img 
                src="https://img.freepik.com/free-vector/data-network-concept-illustration_114360-5028.jpg" 
                alt="Information Flow Observation" 
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl mix-blend-darken filter hue-rotate-15 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
          </div>
        </section>

        {/* ================= SECTION 2: WHAT WE ARE WORKING ON ================= */}
        <section className="mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
              What the startup is working on
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We are currently focusing on developing an initiative that includes several key components working together:
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <MonitorSmartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Property information software systems</h3>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <LayoutList className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Structured property listing environments</h3>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                <MessageSquareText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Enquiry-based property communication tools</h3>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Consultancy activities related to owned or leased real estate assets</h3>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SECTION 3: DEVELOPMENT NOTICE & CTA ================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            
            <div className="relative z-10">
              <ShieldAlert className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Currently in Development
              </h2>
              <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                These initiatives are currently under development and will evolve as the platform architecture progresses. Be the first to know when we launch.
              </p>
              
              <Link to="/reach-us">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-xl mx-auto transition-all duration-300"
                >
                  Request Platform Access
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;