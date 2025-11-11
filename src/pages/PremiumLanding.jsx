import React from 'react'
import PremiumHero from '../components/PremiumHero'
import SpecificationSection from '../components/SpecificationSection'
import PremiumAmenities from '../components/PremiumAmenities'
import LocationAdvantages from '../components/LocationAdvantages'
import GallerySection from '../components/GallerySection'

export default function PremiumLanding() {
  return (
    <div className="premium-landing overflow-hidden">
      <PremiumHero />
      <SpecificationSection />
      <PremiumAmenities />
      <LocationAdvantages />
      <GallerySection />
      
      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-luxury-midnight via-luxury-midnight/95 to-slate-900 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/real-estate-overview.jpg"
            alt="Luxury Living"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-midnight via-luxury-midnight/90 to-luxury-midnight" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Panoramic views,
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-luxury-gold mb-8">
            architectural finesse,
          </h3>
          <h4 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white/90 mb-12">
            and inspired spaces
          </h4>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-12" />
          
          <p className="font-luxury text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Your journey to infinite luxury begins here. Schedule your private tour today.
          </p>
          
          <button className="px-16 py-6 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105 transition-all uppercase tracking-wider">
            Book Your Private Tour
          </button>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-16 bg-luxury-midnight border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h5 className="font-heading text-2xl text-luxury-gold mb-4">Project</h5>
              <p className="text-white/70">
                Prime Location, Major City<br />
                Exclusive Address
              </p>
            </div>
            <div>
              <h5 className="font-heading text-2xl text-luxury-gold mb-4">Contact Us</h5>
              <a href="tel:+918399939999" className="text-white/70 hover:text-luxury-gold transition-colors block mb-2">
                +91 83 999 3 9999
              </a>
              <a href="mailto:info@oblongrealties.com" className="text-white/70 hover:text-luxury-gold transition-colors block">
                info@oblongrealties.com
              </a>
            </div>
            <div>
              <h5 className="font-heading text-2xl text-luxury-gold mb-4">Follow Us</h5>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-luxury-gold/20 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-luxury-gold/20 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-luxury-gold/20 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © 2025 Oblong Realties. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
