import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar(){
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Overview' },
    { path: '/luxury', label: 'Amenities' },
    { path: '/projects', label: 'Location Advantages' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className={`transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
            <div className="text-2xl md:text-3xl font-heading font-normal tracking-tight">
              OBLONG
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold">
              REALTIES
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isActive(link.path) 
                  ? 'text-luxury-gold' 
                  : scrolled 
                    ? 'text-gray-700 hover:text-luxury-gold' 
                    : 'text-white hover:text-luxury-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link 
          to="/contact" 
          className={`hidden lg:block px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all ${
            scrolled 
              ? 'bg-luxury-gold text-black hover:bg-black hover:text-white' 
              : 'bg-gray-700/80 backdrop-blur-sm text-white hover:bg-gray-600'
          }`}
        >
          SCHEDULE A WALKTHROUGH
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
        >
          <svg className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 transition-colors ${
                    isActive(link.path) 
                      ? 'bg-luxury-gold text-black font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-3 px-4 bg-luxury-gold text-black font-semibold text-center"
              >
                Schedule a Walkthrough
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
