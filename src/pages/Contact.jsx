import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, send to backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl">Get In Touch</h1>
            <p className="mt-4 text-lg text-slate-200">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="font-heading text-2xl text-navy mb-6">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">I'm interested in</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="buying">Buying Property</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="site-visit">Schedule Site Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-heading text-xl text-navy mb-4">📞 Phone</h3>
              <p className="text-slate-700">+91 98765 43210</p>
              <p className="text-slate-700">+91 98765 43211</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-heading text-xl text-navy mb-4">✉️ Email</h3>
              <p className="text-slate-700">hello@oblongrealties.com</p>
              <p className="text-slate-700">sales@oblongrealties.com</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-heading text-xl text-navy mb-4">📍 Address</h3>
              <p className="text-slate-700">
                123 Luxury Avenue<br />
                Anna Nagar, Chennai<br />
                Tamil Nadu 600040, India
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-navy text-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-heading text-xl mb-4">💬 WhatsApp</h3>
              <p className="text-slate-200 text-sm mb-4">Get instant responses on WhatsApp</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors font-semibold"
              >
                Chat Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-6 pb-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-200 flex items-center justify-center text-slate-500">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p>Google Maps Embed</p>
              <p className="text-sm">123 Luxury Avenue, Chennai</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
