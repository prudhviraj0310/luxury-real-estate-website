import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureShowcase() {
  const features = [
    {
      title: "EMBRACE A REGAL LIFESTYLE",
      description: "Spread across premium acres with multiple towers, this gated community offers spacious 3 and 4 BHK homes with world-class amenities.",
      image: "/images/apartment-building.jpg",
      stats: [
        { label: "Towers", value: "6" },
        { label: "Floors", value: "G+25" },
        { label: "Configuration", value: "3 & 4 BHK" }
      ]
    },
    {
      title: "THE GRAND CLUBHOUSE",
      description: "Welcome to a clubhouse that doesn't just offer amenities, it offers a 50,000 sq. ft. experience fit for royalty.",
      image: "/images/modern-house.jpg",
      highlight: "50,000 SQ. FT."
    },
    {
      title: "COVETED LOCATION",
      description: "Seamlessly linked to the city via major roads, in proximity to the airport. From grand arrivals to serene escapes, every detail is crafted with elegance.",
      image: "/images/real-estate-overview.jpg",
      nearby: ["Airport - 15 mins", "IT Hub - 10 mins", "Schools - 5 mins"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-midnight via-luxury-midnight/95 to-slate-900">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`container mx-auto px-6 py-20 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
        >
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="font-heading text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {feature.title}
            </h2>
            <p className="font-luxury text-xl text-white/80 mb-8 leading-relaxed">
              {feature.description}
            </p>

            {/* Stats */}
            {feature.stats && (
              <div className="grid grid-cols-3 gap-6 mb-8">
                {feature.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-luxury-gold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlight */}
            {feature.highlight && (
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-luxury-gold/20 to-luxury-rose/20 border-2 border-luxury-gold rounded-2xl mb-8">
                <span className="text-3xl font-bold text-luxury-gold">{feature.highlight}</span>
              </div>
            )}

            {/* Nearby */}
            {feature.nearby && (
              <div className="space-y-3">
                {feature.nearby.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all uppercase tracking-wider font-semibold"
            >
              Download Brochure
            </motion.button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
