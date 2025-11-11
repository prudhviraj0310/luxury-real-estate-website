import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  const [imageLoaded, setImageLoaded] = useState(false)

  const statusColors = {
    'Ongoing': 'bg-luxury-purple',
    'Completed': 'bg-luxury-gold',
    'Upcoming': 'bg-luxury-rose'
  }

  return (
    <Link to={`/projects/${project.id}`} className="group">
      <motion.article 
        whileHover={{y: -8}} 
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-white via-luxury-cream/20 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-luxury-purple/20 transition-all duration-300 h-full border border-luxury-purple/10"
      >
        <div className="relative h-64 overflow-hidden bg-luxury-champagne">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-luxury-cream" />
          )}
          <img 
            src={project.image_url || '/images/placeholder.jpg'}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-4 py-1.5 text-xs rounded-full text-white font-semibold shadow-lg backdrop-blur-sm ${statusColors[project.status] || 'bg-luxury-purple'}`}>
              {project.status}
            </span>
          </div>

          {/* Quick View on Hover */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between border border-luxury-purple/20">
              <span className="text-sm font-semibold text-luxury-midnight">View Details</span>
              <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="font-heading text-xl text-luxury-midnight mb-2 group-hover:text-luxury-purple transition-colors">{project.title}</h3>
          
          <div className="flex items-center gap-2 text-sm text-luxury-midnight/60 mb-4">
            <svg className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{project.location}</span>
            <span className="text-luxury-purple/40">•</span>
            <span>{project.property_type}</span>
          </div>

          {/* Amenities Preview */}
          {project.bedrooms && (
            <div className="flex items-center gap-4 mb-4 text-sm text-luxury-midnight/60">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-luxury-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{project.bedrooms} BHK</span>
              </div>
              {project.area_sqft && (
                <>
                  <span className="text-luxury-purple/40">•</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-luxury-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{project.area_sqft.toLocaleString()} sq.ft</span>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-luxury-purple/10">
            <div>
              <div className="text-xs text-luxury-purple/60 mb-1 font-luxury">Starting from</div>
              <div className="text-xl font-bold text-luxury-midnight font-heading">{project.price}</div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-luxury-purple to-luxury-gold bg-clip-text text-transparent font-medium group-hover:gap-3 transition-all">
              <span className="text-sm font-semibold">Explore</span>
              <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
