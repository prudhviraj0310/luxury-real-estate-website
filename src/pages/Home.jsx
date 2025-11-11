import React from 'react'
import BeyondHero from '../components/BeyondHero'
import BeyondProjects from '../components/BeyondProjects'
import BeyondPricing from '../components/BeyondPricing'
import BeyondConsultant from '../components/BeyondConsultant'

export default function Home(){
  return (
    <div id="home" className="overflow-hidden bg-black">
      {/* Beyond Hero */}
      <BeyondHero />

      {/* Beyond Projects */}
      <BeyondProjects />

      {/* Pricing Section */}
      <BeyondPricing />

      {/* Consultant Section */}
      <BeyondConsultant />

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-white/50 text-sm">
            <p>© 2025 Oblong Realties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
