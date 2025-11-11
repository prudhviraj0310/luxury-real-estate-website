import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filters = ['All', 'Ongoing', 'Completed', 'Upcoming']

  const filtered = projectsData.filter(p => {
    const matchesFilter = filter === 'All' || p.status === filter
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl">Our Projects</h1>
            <p className="mt-4 text-lg text-slate-200">Explore our portfolio of luxury properties across India</p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === f
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Results Count */}
        <div className="mt-6 text-slate-600">
          Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  )
}
