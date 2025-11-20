import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero(){
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      leftBg: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
      title: 'PRIVATE POOL',
      number: '01',
      description: 'Enjoy ultimate privacy and relaxation with a personal plunge pool just steps from your living space.',
      rightImage: '/images/pool-villa.jpg',
      previewImage: '/images/apartment-building.jpg'
    },
    {
      leftBg: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      title: 'LUXURY LIVING',
      number: '02',
      description: 'Experience world-class amenities and breathtaking views in prime locations across India.',
      rightImage: '/images/apartment-building.jpg',
      previewImage: '/images/modern-house.jpg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen flex overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex"
        >
          {/* Left Side - Colored Background with Text */}
          <div 
            className="w-1/2 flex items-center justify-center relative overflow-hidden"
            style={{ background: slides[activeSlide].leftBg }}
          >
            <div className="max-w-xl px-12 text-center">
              {/* Number */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/20 font-light mb-8"
                style={{ fontSize: '120px', lineHeight: '1', fontFamily: 'Playfair Display, serif', fontWeight: '700' }}
              >
                {slides[activeSlide].number}
              </motion.div>

              {/* Title - Vertical */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h1 
                  className="text-white font-bold tracking-wider drop-shadow-2xl"
                  style={{ 
                    fontSize: '48px',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    margin: '0 auto',
                    letterSpacing: '0.1em',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  {slides[activeSlide].title}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/90 text-lg leading-relaxed max-w-sm mx-auto drop-shadow-lg"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {slides[activeSlide].description}
              </motion.p>

              {/* Navigation Arrows */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 justify-center mt-12"
              >
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="text-white hover:text-white/70 transition-colors drop-shadow-lg"
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                  className="text-white hover:text-white/70 transition-colors drop-shadow-lg"
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

            {/* Small Preview Image - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-0 left-0 w-64 h-64"
            >
              <img 
                src={slides[activeSlide].previewImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side - Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-1/2 relative"
          >
            <img 
              src={slides[activeSlide].rightImage}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* VIEW GALLERY Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 right-12 px-8 py-4 backdrop-blur-xl bg-white/20 border border-white/40 text-white text-sm font-medium tracking-widest hover:bg-white/30 transition-all uppercase"
            >
              VIEW GALLERY
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
