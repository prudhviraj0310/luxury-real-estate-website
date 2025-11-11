import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = "Hi, I'd like to know more about your properties"
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200 hover:from-purple-400 hover:via-purple-300 hover:to-pink-300 text-purple-900 rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-300/50 flex items-center justify-center text-2xl transition-all border-2 border-white/50"
      aria-label="Contact on WhatsApp"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      💬
    </motion.button>
  )
}
