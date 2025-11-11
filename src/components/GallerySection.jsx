import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('interiors')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleries = {
    interiors: [
      { src: "/images/apartment-building.jpg", title: "Living Room" },
      { src: "/images/modern-house.jpg", title: "Master Bedroom" },
      { src: "/images/pool-villa.jpg", title: "Kitchen" },
      { src: "/images/real-estate-overview.jpg", title: "Bathroom" },
      { src: "/images/property-rates.avif", title: "Dining Area" },
      { src: "/images/apartment-building.jpg", title: "Balcony" }
    ],
    outdoor: [
      { src: "/images/pool-villa.jpg", title: "Swimming Pool" },
      { src: "/images/modern-house.jpg", title: "Garden" },
      { src: "/images/apartment-building.jpg", title: "Entrance" },
      { src: "/images/real-estate-overview.jpg", title: "Clubhouse Exterior" },
      { src: "/images/property-rates.avif", title: "Jogging Track" },
      { src: "/images/modern-house.jpg", title: "Kids Play Area" }
    ]
  }

  return (
    <section className="py-20 bg-luxury-midnight">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
            GRANDEUR IN EVERY ELEMENT
          </h2>
          <p className="font-luxury text-xl text-white/70">
            Get a glimpse of the life that awaits you
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['interiors', 'outdoor'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white shadow-xl'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {galleries[activeTab].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage({ ...image, index })}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group h-80"
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-2xl text-white">{image.title}</h3>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full hover:bg-white/20 transition-all uppercase tracking-wider font-semibold"
          >
            View All Images
          </motion.button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-heading text-3xl text-white">{selectedImage.title}</h3>
                <p className="text-white/70 mt-2">{selectedImage.index + 1} / {galleries[activeTab].length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
