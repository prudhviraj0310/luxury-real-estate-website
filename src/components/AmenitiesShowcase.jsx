import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AmenitiesShowcase() {
  const [activeAmenity, setActiveAmenity] = useState(0)

  const amenities = [
    {
      title: "Grand Entrance",
      subtitle: "Right from your arrival, designed to make a statement",
      image: "/images/apartment-building.jpg",
      icon: "🏛️"
    },
    {
      title: "The Regal Meadow",
      subtitle: "Step into the lush landscapes that rule leisure and recreation",
      image: "/images/modern-house.jpg",
      icon: "🌳"
    },
    {
      title: "Palatial Clubhouse",
      subtitle: "The heart of our community, where moments turn into lasting memories",
      image: "/images/pool-villa.jpg",
      icon: "🏰"
    },
    {
      title: "Swimming Pool",
      subtitle: "An olympic-sized pool for your morning laps and evening relaxation",
      image: "/images/real-estate-overview.jpg",
      icon: "🏊"
    },
    {
      title: "Fitness Center",
      subtitle: "State-of-the-art gym equipped with the latest machines",
      image: "/images/property-rates.avif",
      icon: "💪"
    },
    {
      title: "Kids' Play Area",
      subtitle: "A dedicated space for your young ones to explore and grow",
      image: "/images/apartment-building.jpg",
      icon: "🎨"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-champagne via-white to-luxury-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-6xl text-luxury-midnight mb-4">
            ENJOY EVERY MOMENT WHERE
          </h2>
          <h3 className="font-heading text-4xl lg:text-5xl text-luxury-gold">
            THE GOOD TIMES RULE
          </h3>
          <p className="font-luxury text-xl text-luxury-midnight/70 mt-6 max-w-3xl mx-auto">
            Whether it's a quiet morning by the pool, a delightful evening at the palatial clubhouse, or the joy of coming home, every corner is designed to sweep you off your feet.
          </p>
        </motion.div>

        {/* Main Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Large Image */}
          <motion.div
            key={activeAmenity}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
          >
            <img 
              src={amenities[activeAmenity].image}
              alt={amenities[activeAmenity].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-midnight/80 via-luxury-midnight/40 to-transparent" />
            
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-6xl mb-4">{amenities[activeAmenity].icon}</div>
                <h3 className="font-heading text-4xl text-white mb-3">
                  {amenities[activeAmenity].title}
                </h3>
                <p className="font-luxury text-lg text-white/90 mb-6">
                  {amenities[activeAmenity].subtitle}
                </p>
                <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white rounded-xl hover:bg-white/30 transition-all uppercase tracking-wider text-sm font-semibold">
                  Download Brochure
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Amenity Grid */}
          <div className="grid grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveAmenity(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-6 rounded-2xl transition-all text-left ${
                  activeAmenity === index
                    ? 'bg-gradient-to-br from-luxury-purple to-luxury-gold shadow-2xl'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`text-4xl mb-3 ${activeAmenity === index ? 'animate-bounce' : ''}`}>
                  {amenity.icon}
                </div>
                <h4 className={`font-heading text-xl mb-2 ${
                  activeAmenity === index ? 'text-white' : 'text-luxury-midnight'
                }`}>
                  {amenity.title}
                </h4>
                <p className={`text-sm ${
                  activeAmenity === index ? 'text-white/80' : 'text-luxury-midnight/60'
                }`}>
                  {amenity.subtitle.substring(0, 50)}...
                </p>
                
                {activeAmenity === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Additional Amenities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {[
            "Indoor Games", "Yoga Deck", "Party Lawn", "Amphitheatre",
            "Jogging Track", "Cycling Track", "Pet Park", "Meditation Zone",
            "Library", "Co-working Space", "Banquet Hall", "Mini Theatre"
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-purple to-luxury-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-luxury-midnight text-center">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
