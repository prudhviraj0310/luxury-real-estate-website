import React from 'react'
import { motion } from 'framer-motion'

export default function PremiumAmenities() {
  const amenityCategories = [
    {
      title: "Wellness & Leisure",
      items: [
        "50,000 Sq. Ft Clubhouse",
        "Infinity Pool with Cabanas",
        "Luxury Spa & Salon",
        "Stargazing Lounge",
        "Poolside Party Area"
      ]
    },
    {
      title: "Entertainment",
      items: [
        "Mini Theatre",
        "Banquet Hall with Party Lawn",
        "Gaming Zone",
        "Dance Studio",
        "Music Room"
      ]
    },
    {
      title: "Lifestyle",
      items: [
        "Cigar Lounge",
        "Art Gallery",
        "Reading Lounge",
        "Conversations & Coffee Lounge",
        "Card Room"
      ]
    },
    {
      title: "Services",
      items: [
        "Concierge Desk",
        "Housekeeping Service",
        "Smart Laundry",
        "Car Wash Facility",
        "Convenience Store"
      ]
    }
  ]

  return (
    <section className="py-32 bg-luxury-midnight relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-purple rounded-full blur-3xl" />
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
            A Lifestyle of <span className="text-luxury-gold">Infinite</span>
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white/90">
            Possibilities
          </h3>
          <p className="font-luxury text-xl text-white/70 mt-8 max-w-3xl mx-auto">
            From wellness to work, from celebration to solitude — everything is designed to match the rhythm of your life.
          </p>
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-luxury-gold/20 via-luxury-rose/20 to-luxury-purple/20 backdrop-blur-xl border-2 border-luxury-gold/30 rounded-3xl p-12">
            <div className="text-7xl font-bold text-luxury-gold mb-4">50,000</div>
            <div className="text-2xl text-white/90">Sq. Ft Clubhouse</div>
            <div className="text-lg text-white/60 mt-2">with lounges, spa & infinity pool</div>
          </div>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {amenityCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-luxury-gold/50 transition-all group"
            >
              <h4 className="font-heading text-2xl text-luxury-gold mb-6 pb-4 border-b border-white/10">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Amenities - Badge Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="font-heading text-3xl text-white/90 mb-8">And Much More...</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Themed Landscaping",
              "Waterbodies & Sculptures",
              "Guest Rooms",
              "Smart Bank / ATM",
              "Juice Bar",
              "Air Hockey",
              "Barbeque Area",
              "Senior Citizen Corner"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 hover:border-luxury-gold hover:text-white transition-all text-sm font-semibold"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-12 py-5 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105 transition-all uppercase tracking-wider">
            Get Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}
