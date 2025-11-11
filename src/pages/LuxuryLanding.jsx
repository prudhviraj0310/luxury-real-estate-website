import React from 'react'
import VideoHero from '../components/VideoHero'
import FeatureShowcase from '../components/FeatureShowcase'
import AmenitiesShowcase from '../components/AmenitiesShowcase'
import GallerySection from '../components/GallerySection'
import ContactFormSection from '../components/ContactFormSection'

export default function LuxuryLanding() {
  return (
    <div className="luxury-landing">
      <VideoHero />
      <FeatureShowcase />
      <AmenitiesShowcase />
      <GallerySection />
      <ContactFormSection />
    </div>
  )
}
