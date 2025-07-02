import React from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProgramSection from '@/components/ProgramSection'
import LocationSection from '@/components/LocationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-beast-dark">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 