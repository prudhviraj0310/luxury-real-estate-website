import React from 'react'
import { motion } from 'framer-motion'

export default function BeyondConsultant() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-black mb-12 font-light tracking-tight">
              Speak to an Investment Consultant
            </h2>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-12 mb-14">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-heading font-light text-black">Expert Advice</h3>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-base font-heading font-light text-black">High Returns</h3>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-base font-heading font-light text-black">Proven Success</h3>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-200 p-8 md:p-10"
          >
            <h3 className="text-lg md:text-xl font-heading font-light text-center mb-8 text-black">
              Submit your details and we'll contact you
            </h3>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none transition-colors text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-5 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none transition-colors text-sm"
                />
                <select className="w-full px-5 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none transition-colors text-sm text-gray-600">
                  <option>Select Budget Range</option>
                  <option>Under 50 Lakhs</option>
                  <option>50 Lakhs - 1 Crore</option>
                  <option>1 Crore - 2 Crores</option>
                  <option>2 Crores - 5 Crores</option>
                  <option>Above 5 Crores</option>
                </select>
              </div>

              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" className="mt-0.5" required />
                <span>I agree to share my contact information</span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-luxury-gold text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
