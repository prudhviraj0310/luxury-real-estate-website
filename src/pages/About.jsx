import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '2.8M+', label: 'Sq.Ft Delivered' },
    { value: '4200+', label: 'Happy Clients' },
    { value: '50+', label: 'Projects Completed' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge design and smart living technologies',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Uncompromising standards in construction and materials',
      icon: '⭐'
    },
    {
      title: 'Trust',
      description: 'Building lasting relationships through transparency',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'Eco-conscious developments for a better tomorrow',
      icon: '🌱'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl">About Oblong Realties</h1>
            <p className="mt-4 text-lg text-slate-200 max-w-3xl">
              Since 2013, we've been redefining luxury real estate in India. Our commitment to excellence,
              innovation, and customer satisfaction has made us a trusted name in premium property development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl font-heading text-navy">{stat.value}</div>
              <div className="mt-2 text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="font-heading text-3xl text-navy mb-4">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed">
                To create exceptional living spaces that enhance quality of life through innovative design,
                superior craftsmanship, and sustainable practices. We aim to deliver properties that not only
                meet but exceed the expectations of discerning homebuyers and investors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="font-heading text-3xl text-navy mb-4">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed">
                To be recognized as India's most trusted luxury real estate brand, setting benchmarks in
                quality, innovation, and customer satisfaction. We envision communities where residents thrive,
                surrounded by world-class amenities and thoughtful architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl text-navy text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-heading text-xl text-navy mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?img=12' },
              { name: 'Priya Sharma', role: 'Chief Design Officer', image: 'https://i.pravatar.cc/150?img=5' },
              { name: 'Amit Patel', role: 'COO', image: 'https://i.pravatar.cc/150?img=33' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 mb-4" />
                <h3 className="font-heading text-xl">{member.name}</h3>
                <p className="text-slate-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
