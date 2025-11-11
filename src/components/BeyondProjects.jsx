import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BeyondProjects() {
  const projects = [
    {
      name: "Oblong Residences",
      subtitle: "Beach Living on the Palm",
      price: "Starting price: ₹4.1 Cr",
      image: "/images/pool-villa.jpg",
      status: "Available"
    },
    {
      name: "Skyline Towers",
      subtitle: "Where Nature Transforms into a State of Mind",
      price: "Starting price: ₹2.22 Cr",
      image: "/images/apartment-building.jpg",
      status: "Available"
    },
    {
      name: "The Grand",
      subtitle: "A Masterpiece in the Making",
      price: "Starting price: Sold Out",
      image: "/images/modern-house.jpg",
      status: "Sold Out"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-24 md:mb-32 last:mb-0"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {project.status === "Sold Out" && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white text-xs font-semibold tracking-wider">
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 font-light leading-tight">
                    {project.name}
                  </h2>
                  <p className="text-luxury-gold text-base md:text-lg lg:text-xl mb-6 font-light">
                    {project.subtitle}
                  </p>
                  <p className="text-white/60 text-sm md:text-base mb-10">
                    {project.price}
                  </p>

                  {project.status !== "Sold Out" ? (
                    <Link
                      to="/projects"
                      className="inline-block px-8 py-3 border border-luxury-gold text-luxury-gold font-semibold text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold hover:text-black transition-all duration-300"
                    >
                      View Details
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-block px-8 py-3 border border-gray-700 text-gray-700 font-semibold text-xs tracking-[0.2em] uppercase cursor-not-allowed"
                    >
                      Sold Out
                    </button>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
