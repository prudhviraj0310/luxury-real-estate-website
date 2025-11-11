import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SearchWidget() {
  const [searchType, setSearchType] = useState('BUY')
  const [filters, setFilters] = useState({
    projectType: '',
    location: '',
    status: '',
    bedrooms: '',
    minPrice: '',
    maxPrice: ''
  })

  const handleSearch = () => {
    // Navigate to projects page with filters
    const params = new URLSearchParams(filters).toString()
    window.location.href = `/projects?${params}`
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto -mt-20 relative z-20"
    >
      {/* Search Type Tabs */}
      <div className="flex gap-2 mb-6">
        {['BUY', 'RENT', 'COMMERCIAL'].map(type => (
          <button
            key={type}
            onClick={() => setSearchType(type)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              searchType === type
                ? 'bg-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Filters */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Project Type */}
        <select
          value={filters.projectType}
          onChange={(e) => setFilters({ ...filters, projectType: e.target.value })}
          className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy bg-white"
        >
          <option value="">Project Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plots">Plots</option>
          <option value="Commercial">Commercial</option>
        </select>

        {/* Location */}
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy bg-white"
        >
          <option value="">Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>

        {/* Status */}
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy bg-white"
        >
          <option value="">Construction Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
        </select>

        {/* Bedrooms */}
        <select
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
          className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy bg-white"
        >
          <option value="">Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
        >
          <span>🔍</span>
          <span>SEARCH</span>
        </button>
      </div>

      {/* Price Range */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-slate-700">Price Range:</label>
          <input
            type="text"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy w-32"
          />
          <span className="text-slate-500">to</span>
          <input
            type="text"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy w-32"
          />
          <Link to="/projects" className="text-navy text-sm hover:underline ml-auto">
            Advanced Search →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
