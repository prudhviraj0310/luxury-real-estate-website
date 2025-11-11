import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VirtualTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)

  const tours = [
    {
      id: 1,
      title: 'The Bay Residences',
      type: '360° Virtual Tour',
      thumbnail: '/images/apartment-building.jpg',
      description: 'Explore every corner of this luxury coastal residence',
      duration: '5 min',
      rooms: '8 spaces'
    },
    {
      id: 2,
      title: 'Ashwood Villas',
      type: 'Video Walkthrough',
      thumbnail: '/images/modern-house.jpg',
      description: 'Premium villa with private garden and modern interiors',
      duration: '7 min',
      rooms: '12 spaces'
    },
    {
      id: 3,
      title: 'Azure Heights',
      type: '360° Virtual Tour',
      thumbnail: '/images/real-estate-overview.jpg',
      description: 'High-rise luxury apartment with sky deck',
      duration: '6 min',
      rooms: '9 spaces'
    }
  ]

  const openTour = (tour) => {
    setSelectedTour(tour)
    setIsOpen(true)
  }

  return (
    <>
      <section id="virtual-tours" className="py-20 bg-gradient-to-br from-slate-900 via-navy to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-semibold text-sm mb-4">
              IMMERSIVE EXPERIENCE
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Take a <span className="text-gold">Virtual Tour</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Experience our properties from anywhere in the world with 360° virtual tours and HD video walkthroughs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <motion.div
                key={tour.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
                onClick={() => openTour(tour)}
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative h-64">
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-gold transition-colors">
                        <svg className="w-8 h-8 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold">
                        {tour.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 backdrop-blur-md">
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {tour.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>{tour.rooms}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Schedule Personal Tour CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-white/80 mb-6">
              Want a personalized tour? Our team is ready to show you around.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gold text-navy font-semibold hover:bg-gold/90 transition-colors shadow-xl inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Personal Tour
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {isOpen && selectedTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Video/Tour Content */}
                <div className="aspect-video bg-slate-900 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl mb-2">{selectedTour.title}</h3>
                    <p className="text-slate-400 mb-6">Virtual tour integration would go here</p>
                    <p className="text-sm text-slate-500">
                      In production, this would load an embedded 360° tour viewer or video player
                    </p>
                  </div>
                </div>

                {/* Tour Info */}
                <div className="p-6 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{selectedTour.title}</h4>
                      <p className="text-slate-600 text-sm">{selectedTour.description}</p>
                    </div>
                    <button className="px-6 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy/90 transition-colors">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
