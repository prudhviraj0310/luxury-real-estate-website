import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    timeline: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        timeline: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy to-slate-800" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-5 py-2 rounded-full backdrop-blur-xl bg-gold/20 border border-gold/30 text-gold text-sm font-semibold mb-6">
              💬 GET IN TOUCH
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your Dream Home. Your Terms.
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 mb-6">
              Let's Make It Happen.
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We'll send you all the details, including floor plans, pricing, and our investor ROI sheet. 
              <span className="block mt-2 font-semibold">No pressure, just facts.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/90 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/80">We've received your inquiry and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all text-white placeholder-white/50"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all text-white placeholder-white/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all text-white placeholder-white/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all text-white placeholder-white/50"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message / Questions <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all resize-none text-white placeholder-white/50"
                    placeholder="I'm interested in 3BHK apartments in Chennai..."
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
                    How soon are you planning to buy?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-xl focus:border-gold focus:outline-none transition-all text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediate">Immediately (0-3 months)</option>
                    <option value="soon">Soon (3-6 months)</option>
                    <option value="later">Later this year (6-12 months)</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-navy text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-2xl shadow-gold/50"
                >
                  Submit My Inquiry
                </motion.button>

                {/* Disclaimer */}
                <p className="text-sm text-white/60 text-center">
                  🔒 No spam. Just real information, personalized to your needs.
                </p>
              </form>
            )}
          </motion.div>

          {/* Additional Info with Glass Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-gold/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="font-semibold text-white mb-1">Call Us</div>
              <a href="tel:18003130080" className="text-gold hover:text-yellow-400 transition-colors">1800 313 0080</a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-gold/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold text-white mb-1">Email Us</div>
              <a href="mailto:info@oblongrealties.com" className="text-gold hover:text-yellow-400 transition-colors">info@oblongrealties.com</a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-gold/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-white mb-1">Visit Us</div>
              <div className="text-white/70 text-sm">Mon-Sun: 9 AM - 7 PM</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
