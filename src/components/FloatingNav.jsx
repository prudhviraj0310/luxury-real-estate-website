import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'projects', label: 'Projects', icon: '🏢' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'testimonials', label: 'Reviews', icon: '💬' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (section) {
          const offsetTop = section.offsetTop
          const offsetBottom = offsetTop + section.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 p-3">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-xl mb-2 last:mb-0 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-br from-navy to-navy/80 text-white shadow-lg'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-3 px-3 py-2 bg-navy text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-navy" />
                </motion.div>
              </motion.button>
            ))}

            {/* Scroll to Top Button */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
