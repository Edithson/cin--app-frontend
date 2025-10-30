import React from 'react'
import FilmsSection from './sections/FilmsSection.jsx'
import ShortlySection from './sections/ShortlySection.jsx'
import FeatureSection from './sections/FeatureSection.jsx'
import HeroSection from './sections/HeroSection.jsx'

export default function Home() {
  return (
    <div className='-mt-4'>
      <HeroSection />
      <FilmsSection />
      <ShortlySection />
      <FeatureSection />
    </div>
  )
}
