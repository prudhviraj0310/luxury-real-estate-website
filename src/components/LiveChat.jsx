import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! 👋 Welcome to Oblong Realties. How can I help you today?',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputText, setInputText] = useState('')

  const quickReplies = [
    '💰 View Pricing',
    '📍 Location Details',
    '📞 Schedule a Call',
    '📥 Download Brochure'
  ]

  const handleSend = () => {
    if (!inputText.trim()) return

    const newMessage = {
      type: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newMessage])
    setInputText('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: 'Thank you for your message! Our team will get back to you shortly. In the meantime, you can explore our projects or call us at 1800 313 0080.',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickReply = (reply) => {
    const newMessage = {
      type: 'user',
      text: reply,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([...messages, newMessage])

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: `Great! Let me help you with "${reply}". Our expert will connect with you right away.`,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
    }, 800)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300 text-purple-900 shadow-2xl hover:shadow-purple-400/60 flex items-center justify-center group transition-all border-2 border-white/50"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-white/30"
            />
            <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            
            {/* Online Indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse shadow-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-300 text-purple-900 p-4 flex items-center justify-between border-b-2 border-white/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center font-bold text-purple-700 shadow-lg">
                    OR
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-lg" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900">Oblong Realties</div>
                  <div className="text-xs text-purple-800 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm"></span>
                    Online - Typically replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((message, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : ''}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-br-sm shadow-lg'
                          : 'bg-white text-slate-800 rounded-bl-sm shadow-md border border-purple-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div className={`text-xs text-slate-400 mt-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                      {message.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-200">
              <div className="flex gap-2 flex-wrap">
                {quickReplies.map((reply, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 text-xs font-medium text-purple-700 transition-all shadow-sm border border-purple-200"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 transition-colors text-sm bg-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 text-white flex items-center justify-center hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
