import React from 'react'
import { motion } from 'framer-motion'

export default function LocationAdvantages() {
  const locations = {
    education: [
      { name: "Rockwell International School", distance: "3 km", icon: "🎓" },
      { name: "Phoenix International School", distance: "4 km", icon: "📚" },
      { name: "Oakridge International", distance: "5 km", icon: "🏫" }
    ],
    healthcare: [
      { name: "Continental Hospital", distance: "6 km", icon: "🏥" },
      { name: "Care Hospital", distance: "7 km", icon: "⚕️" },
      { name: "Apollo Hospital", distance: "8 km", icon: "🩺" }
    ],
    corporate: [
      { name: "Wipro", distance: "10 km", icon: "💼" },
      { name: "Financial District", distance: "8 km", icon: "🏢" },
      { name: "Gachibowli Tech Hub", distance: "12 km", icon: "💻" }
    ],
    connectivity: [
      { name: "Outer Ring Road", distance: "2 km", icon: "🛣️" },
      { name: "Rajiv Gandhi International Airport", distance: "25 km", icon: "✈️" },
      { name: "Metro Station", distance: "5 km", icon: "🚇" }
    ]
  }

  return (
    <section className="py-32 bg-luxury-midnight relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Location Advantages
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-8" />
          <p className="font-luxury text-xl text-white/70 max-w-3xl mx-auto">
            Strategically positioned to connect you to everything that matters
          </p>
        </motion.div>

        {/* Location Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Educational Institutions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-luxury-gold/50 transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-purple to-luxury-gold flex items-center justify-center text-3xl">
                🎓
              </div>
              <h3 className="font-heading text-3xl text-white">Educational Institutions</h3>
            </div>
            <div className="space-y-4">
              {locations.education.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{place.icon}</span>
                    <span className="text-white/90 font-medium">{place.name}</span>
                  </div>
                  <span className="text-luxury-gold font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hospitals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-luxury-gold/50 transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-rose to-luxury-purple flex items-center justify-center text-3xl">
                🏥
              </div>
              <h3 className="font-heading text-3xl text-white">Healthcare</h3>
            </div>
            <div className="space-y-4">
              {locations.healthcare.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{place.icon}</span>
                    <span className="text-white/90 font-medium">{place.name}</span>
                  </div>
                  <span className="text-luxury-gold font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IT Hubs & Corporates */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-luxury-gold/50 transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-gold to-luxury-rose flex items-center justify-center text-3xl">
                💼
              </div>
              <h3 className="font-heading text-3xl text-white">IT Hubs & Corporates</h3>
            </div>
            <div className="space-y-4">
              {locations.corporate.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{place.icon}</span>
                    <span className="text-white/90 font-medium">{place.name}</span>
                  </div>
                  <span className="text-luxury-gold font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Access & Connectivity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-luxury-gold/50 transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-purple to-luxury-rose flex items-center justify-center text-3xl">
                🚗
              </div>
              <h3 className="font-heading text-3xl text-white">Access & Connectivity</h3>
            </div>
            <div className="space-y-4">
              {locations.connectivity.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{place.icon}</span>
                    <span className="text-white/90 font-medium">{place.name}</span>
                  </div>
                  <span className="text-luxury-gold font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-12 py-5 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105 transition-all uppercase tracking-wider">
            Learn More About Location
          </button>
        </motion.div>
      </div>
    </section>
  )
}
