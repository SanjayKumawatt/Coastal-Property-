import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Mail, MapPin } from 'lucide-react';

// Subtle background for readability
const SubtleBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-slate-100 to-transparent"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
);

const Legal = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans pt-32 pb-24">
      <SubtleBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16 border-b border-slate-200 pb-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-200/50 text-slate-600 mb-6">
            <Scale className="w-8 h-8" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">
            LEGAL INFORMATION
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
          </motion.p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 space-y-12"
        >
          
          {/* Section 1 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">About this website</h2>
            <div className="text-slate-700 leading-relaxed font-medium space-y-4">
              <p>This website is operated by <strong className="text-blue-900">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong>.</p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Registered Address
                  </h3>
                  <p>Hno. 294/2, Bhatem Sadolxem<br/>Poinguinim, South Goa<br/>Cancona, Goa<br/>India - 403702</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Website Domain</h3>
                  <a href="https://coastalproco.in" className="text-blue-600 hover:text-blue-800 transition-colors">coastalproco.in</a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Information provided through this website</h2>
            <div className="text-slate-700 leading-relaxed font-medium space-y-4">
              <p>Visitors may choose to provide information when submitting enquiries through the contact form or by contacting the startup through email.</p>
              <p>The information shared may include contact details and messages related to property enquiries or platform questions.</p>
              <p>This information may be used solely for responding to enquiries and communicating about the initiative described on this website.</p>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Communication records</h2>
            <div className="text-slate-700 leading-relaxed font-medium">
              <p>Messages received through the website or email may be retained for the purpose of responding to enquiries and maintaining communication records where appropriate.</p>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Data access and deletion requests</h2>
            <div className="text-slate-700 leading-relaxed font-medium space-y-4">
              <p>Individuals who have submitted personal information through this website may request to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-blue-500">
                <li>review the information provided</li>
                <li>request corrections if information is inaccurate</li>
                <li>request deletion of stored information</li>
              </ul>
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 mt-4">
                <p className="mb-2">Requests can be sent to:</p>
                <a href="mailto:contact@coastalproco.in" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                  <Mail className="w-5 h-5" /> contact@coastalproco.in
                </a>
              </div>
              <p className="text-slate-500 italic mt-4">The startup will respond to reasonable requests within 30 days.</p>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Website content</h2>
            <div className="text-slate-700 leading-relaxed font-medium">
              <p>The information presented on this website describes an initiative currently under development. Features or platform components mentioned may evolve as the project progresses.</p>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Governing law</h2>
            <div className="text-slate-700 leading-relaxed font-medium">
              <p>Matters relating to this website are governed by the laws of India.</p>
              <p className="mt-2">Jurisdiction lies with the courts located in Cancona, Goa.</p>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
};

export default Legal;