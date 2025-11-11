import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PropertyTypes() {
  const types = [
    {
      title: 'Residential',
      icon: '🏠',
      description: 'Premium apartments and villas',
      count: '25+ Projects',
      link: '/projects?type=Apartment,Villa'
    },
    {
      title: 'Commercial',
      icon: '🏢',
      description: 'Office spaces and business hubs',
      count: '8+ Projects',
      link: '/projects?type=Commercial'
    },
    {
      title: 'Plots & Land',
      icon: '🗺️',
      description: 'Gated communities and plotted developments',
      count: '12+ Projects',
      link: '/projects?type=Plots'
    },
    {
      title: 'Luxury Villas',
      icon: '🏰',
      description: 'Exclusive premium villas',
      count: '15+ Projects',
      link: '/projects?type=Villa'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
            Explore Our Verticals
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover diverse property types tailored to your lifestyle and investment goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={type.link}
                className="block bg-slate-50 rounded-xl p-6 hover:bg-navy hover:text-white transition-all duration-300 group h-full"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="font-heading text-xl mb-2 group-hover:text-gold">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-200 mb-3">
                  {type.description}
                </p>
                <div className="text-xs font-semibold text-gold">
                  {type.count}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
