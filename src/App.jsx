import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import EMICalculator from './pages/EMICalculator'
import LuxuryLanding from './pages/LuxuryLanding'
import PremiumLanding from './pages/PremiumLanding'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Preloader from './components/Preloader'
import FloatingNav from './components/FloatingNav'
import LiveChat from './components/LiveChat'
import CustomCursor from './components/CustomCursor'

export default function App(){
  return (
    <>
      <CustomCursor />
      <Preloader />
      <FloatingNav />
      <LiveChat />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/luxury" element={<LuxuryLanding/>} />
            <Route path="/premium" element={<PremiumLanding/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectDetail/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/emi-calculator" element={<EMICalculator/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
