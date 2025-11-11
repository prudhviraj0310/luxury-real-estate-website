import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateDot = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.onclick ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button')
      
      setIsHovering(isInteractive)
    }

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousemove', updateDot)
    window.addEventListener('mousemove', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousemove', updateDot)
      window.removeEventListener('mousemove', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main Cursor Ring */}
      <div
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Cursor Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}
