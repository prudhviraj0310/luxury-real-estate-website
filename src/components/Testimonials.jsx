import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Chennai',
      project: 'The Bay Residences',
      rating: 5,
      text: 'Oblong Realties delivered beyond our expectations. The quality of construction, attention to detail, and timely handover made our home-buying experience seamless. Highly recommend!',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore',
      project: 'Ashwood Villas',
      rating: 5,
      text: 'From site selection to final possession, the team was professional and transparent. The villa exceeded all our dreams. Thank you for creating our perfect home!',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Amit Patel',
      location: 'Chennai',
      project: 'Azure Heights',
      rating: 5,
      text: 'Excellent investment opportunity! The location, amenities, and build quality are top-notch. The property value has already appreciated significantly. Best decision ever!',
      image: 'https://i.pravatar.cc/150?img=33'
    }
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from happy homeowners who trusted us with their dream properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.project} • {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
