import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <div className="text-9xl font-heading text-navy mb-4">404</div>
        <h1 className="text-3xl font-heading text-navy mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/" 
            className="px-6 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy/90 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            to="/projects" 
            className="px-6 py-3 rounded-lg border border-navy text-navy hover:bg-navy/5 transition-colors"
          >
            Browse Projects
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
