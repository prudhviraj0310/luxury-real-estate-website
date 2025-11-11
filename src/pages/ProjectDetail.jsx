import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projectsData from '../data/projects.json'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading text-navy">Project not found</h2>
          <Link to="/projects" className="mt-4 inline-block text-gold">← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project.title} in ${project.location}`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${project.image_url})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="container mx-auto">
            <Link to="/projects" className="text-sm mb-4 inline-block hover:text-gold">← Back to Projects</Link>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <h1 className="font-heading text-4xl md:text-5xl">{project.title}</h1>
              <p className="mt-2 text-xl">{project.location}</p>
              <div className="mt-4 inline-block px-4 py-2 rounded-full bg-gold/90 text-navy font-semibold">
                {project.status}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-heading text-2xl text-navy mb-4">About This Property</h2>
              <p className="text-slate-700 leading-relaxed">{project.description}</p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-heading text-navy">{project.area_sqft}</div>
                  <div className="text-sm text-slate-600">Sq.Ft</div>
                </div>
                {project.bedrooms && (
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-heading text-navy">{project.bedrooms}</div>
                    <div className="text-sm text-slate-600">Bedrooms</div>
                  </div>
                )}
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-heading text-navy">{project.property_type}</div>
                  <div className="text-sm text-slate-600">Type</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-heading text-navy">{project.price}</div>
                  <div className="text-sm text-slate-600">Price</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-8">
                <h3 className="font-heading text-xl text-navy mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              {project.video_url && (
                <div className="mt-8">
                  <h3 className="font-heading text-xl text-navy mb-4">Virtual Tour</h3>
                  <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                    <a href={project.video_url} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold">
                      📹 Watch Video Tour
                    </a>
                  </div>
                </div>
              )}

              {/* Full Width Map */}
              <div className="mt-8">
                <h3 className="font-heading text-xl text-navy mb-4">Location & Neighborhood</h3>
                {project.address && (
                  <p className="text-slate-600 mb-4">
                    📍 {project.address}
                  </p>
                )}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src={project.map_embed}
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${project.title} Map`}
                    className="w-full"
                  />
                </div>
                <div className="mt-4 flex gap-4">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.address || project.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-navy hover:bg-gold/90 transition-colors font-semibold"
                  >
                    🧭 Get Directions
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=schools+near+${encodeURIComponent(project.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-navy text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    🏫 Nearby Schools
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=hospitals+near+${encodeURIComponent(project.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-navy text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    🏥 Nearby Hospitals
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-navy text-white rounded-xl p-6 shadow-lg">
              <h3 className="font-heading text-xl mb-4">Interested?</h3>
              <button
                onClick={handleWhatsApp}
                className="w-full mb-3 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors font-semibold"
              >
                💬 WhatsApp Us
              </button>
              <button className="w-full mb-3 px-4 py-3 rounded-lg bg-gold text-navy hover:bg-gold/90 transition-colors font-semibold">
                📅 Book Site Visit
              </button>
              {project.brochure_url && (
                <a
                  href={project.brochure_url}
                  download
                  className="block w-full px-4 py-3 text-center rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
                >
                  📄 Download Brochure
                </a>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg text-navy mb-4">Location</h3>
              {project.address && (
                <p className="text-sm text-slate-600 mb-3">
                  📍 {project.address}
                </p>
              )}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src={project.map_embed}
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${project.title} Location`}
                  className="w-full"
                />
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.address || project.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-gold hover:text-navy transition-colors"
              >
                🧭 Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
