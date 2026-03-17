import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

// Consistent Animated Background
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 80, -80, 0],
        y: [0, -80, 80, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -100, 100, 0],
        y: [0, 100, -100, 0],
        scale: [0.8, 1.2, 1, 0.8],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-[120px]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px]"></div>
  </div>
);

const Contact = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Yaha tu future mein apna backend API (fetch/axios) laga sakta hai
    // Filhal main 1.5 seconds ka fake delay de raha hu loading dikhane ke liye
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans pt-24 pb-20">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 pt-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
            <MessageSquare className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">Get in touch</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
            Contact the team
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-medium leading-relaxed">
            Individuals who would like to learn more about the initiative being developed by <strong className="text-blue-900">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</strong> may contact the team using the information below.
          </motion.p>
        </motion.div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Email</h3>
              <a href="mailto:contact@coastalproco.in" className="text-lg text-blue-600 font-medium hover:text-blue-800 transition-colors">
                contact@coastalproco.in
              </a>
            </motion.div>

            {/* Address Card */}
            <motion.div variants={fadeInUp} className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">Registered Address</h3>
              <div className="text-slate-600 font-medium leading-relaxed space-y-1">
                <p className="font-bold text-blue-900">COASTAL PROPERTY CONSULTANCY PRIVATE LIMITED</p>
                <p>Hno. 294/2, Bhatem Sadolxem</p>
                <p>Poinguinim, South Goa</p>
                <p>Cancona, Goa</p>
                <p>India -403702</p>
              </div>
            </motion.div>

            {/* Response Time Card */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-blue-200 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Response time</h3>
              <p className="text-blue-100 font-medium text-lg">We respond within one working day.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                
                {/* STATE 1: FORM (jab tak submit nahi hua) */}
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-blue-950 mb-8">Enquiry Form</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Enquiry Type Dropdown */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Enquiry Type *</label>
                      <select 
                        name="enquiryType"
                        required
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Platform Access">Platform Access</option>
                        <option value="Property Submission">Property Submission</option>
                        <option value="Consultancy Services">Consultancy Services</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other General Enquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message *</label>
                      <textarea 
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl text-white text-lg font-bold transition-all duration-300 ${
                        isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          Request Platform Access
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  
                  /* STATE 2: SUCCESS MESSAGE (jab submit ho jaye) */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", damping: 15, stiffness: 100 }}
                      className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-extrabold text-blue-950 mb-4">Request Sent Successfully!</h3>
                    <p className="text-lg text-slate-600 font-medium mb-8 max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-blue-600">{formData.name}</span>. Our team will review your enquiry and get back to you within one working day.
                    </p>
                    
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', enquiryType: '', message: '' });
                      }}
                      className="flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-blue-900 font-bold rounded-full transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                      Send Another Enquiry
                    </button>
                  </motion.div>

                )}
              </AnimatePresence>
              
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;