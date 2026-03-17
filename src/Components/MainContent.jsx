import React from 'react';
import { motion } from 'framer-motion';
import { 
  SearchX, 
  Map, 
  FileWarning, 
  Target, 
  Database, 
  MapPin, 
  MessageSquare, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Naya component: Continuous Background Animation ke liye
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Moving Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px]"
      />
      {/* Moving Blob 2 */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [0.8, 1.5, 1, 0.8],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[10%] w-[25rem] h-[25rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px]"
      />
      {/* Moving Blob 3 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -150, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[30%] w-[35rem] h-[35rem] bg-teal-300/20 rounded-full mix-blend-multiply filter blur-[100px]"
      />
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
    </div>
  );
};

const MainContent = () => {
  // Scroll Animations
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative bg-slate-50 overflow-hidden font-sans">
      
      {/* Background Component ko yaha call kiya */}
      <AnimatedBackground />

      {/* Main Content Wrapper (z-10 to stay above background) */}
      <div className="relative z-10">
        
        {/* SECTION 1: Introduction (Glassmorphism Card) */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8 drop-shadow-sm">
              As a result, people exploring property opportunities frequently spend significant time searching across different sources before they gain a clear understanding of what is actually available.
            </p>
            {/* Added backdrop-blur for glass effect */}
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] border border-white/50">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                Our Initiative at COASTAL PROPERTY
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong className="text-blue-700">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> is developing an initiative intended to address this challenge by combining real estate consultancy activity with digital software systems designed to organise property information.
              </p>
              <p className="text-lg text-blue-900 leading-relaxed font-medium bg-blue-100/50 backdrop-blur-md p-4 rounded-xl border border-blue-200/50">
                The aim of the project is to explore how a structured digital platform can present property opportunities in a clearer format while also supporting enquiry-based communication between interested parties.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="order-2 lg:order-1"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-red-100/80 backdrop-blur-sm border border-red-200">
                <span className="text-sm font-bold text-red-600 tracking-wider uppercase">The Challenge</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
                Why property information often feels fragmented
              </h3>
              <p className="text-lg text-slate-700 mb-8 font-medium">
                Across many developing property markets, the information surrounding land parcels, residential spaces, and investment properties is rarely presented in a consistent format. Buyers or investors may encounter:
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: FileWarning, text: "Incomplete property descriptions" },
                  { icon: SearchX, text: "Inconsistent listing formats" },
                  { icon: Map, text: "Limited contextual information about locations" },
                  { icon: Target, text: "Difficulty identifying relevant opportunities" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-lg rounded-2xl shadow-sm border border-white/50 hover:bg-white/90 transition-all duration-300">
                    <div className="bg-red-50/80 p-2 rounded-xl text-red-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-slate-800 font-semibold text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-600 italic font-medium">
                Because of these conditions, property exploration often becomes time-consuming and uncertain.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="order-1 lg:order-2 relative"
            >
              <img 
                src="https://img.freepik.com/free-vector/real-estate-searching-concept-illustration_114360-7925.jpg" 
                alt="Frustrated user searching properties" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl mix-blend-darken"
              />
            </motion.div>

          </div>
        </section>

        {/* SECTION 3: What We Support (Glassmorphism Container) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
          <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] border border-white/60 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                className="order-1 relative"
              >
                <img 
                  src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4122.jpg" 
                  alt="Structured Digital Platform" 
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-xl mix-blend-darken"
                />
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="order-2"
              >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-100/80 backdrop-blur-sm border border-indigo-200">
                  <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase">The Solution</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
                  What the initiative is being built to support
                </h3>
                <p className="text-lg text-slate-700 mb-8 font-medium">
                  The project currently under development is intended to support several key aspects of property exploration.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-100/80 backdrop-blur-sm text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Database className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950 mb-2">Structured property information</h4>
                      <p className="text-slate-700 font-medium">The platform is being designed to present property opportunities through consistent information profiles so that users can review details before initiating discussions.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-indigo-100/80 backdrop-blur-sm text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950 mb-2">Location awareness</h4>
                      <p className="text-slate-700 font-medium">Property value and suitability often depend heavily on surrounding factors such as infrastructure development, tourism activity, environmental considerations, and long-term regional planning.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-purple-100/80 backdrop-blur-sm text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950 mb-2">Enquiry-based communication</h4>
                      <p className="text-slate-700 font-medium">The platform is being designed to enable structured enquiries about specific property opportunities. This approach aims to provide a clearer starting point for conversations.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Combined Approach & CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 text-blue-600 font-semibold mb-4">
                <Building2 className="w-6 h-6" />
                <span className="text-sm tracking-wider uppercase">Synergy</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
                Real estate activity and digital systems working together
              </h3>
              <p className="text-lg text-slate-700 mb-6 font-medium">
                Alongside the digital platform being developed, the business activity of <strong className="text-blue-900">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> includes consultancy related to owned or leased real estate assets.
              </p>
              <p className="text-lg text-slate-700 mb-8 font-medium">
                This combined approach allows the startup to explore how software tools and real estate expertise can work together to present property opportunities more clearly.
              </p>

             

              {/* CTA Button */}
              <Link to="/reach-us" className="inline-block relative group">
                {/* Glow effect around button */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-xl transition-all"
                >
                  Request Platform Access
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="order-1 lg:order-2 relative"
            >
              <img 
                src="https://img.freepik.com/free-vector/business-deal-concept-illustration_114360-1363.jpg" 
                alt="Real Estate Consultancy and Tech" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl mix-blend-darken"
              />
            </motion.div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default MainContent;