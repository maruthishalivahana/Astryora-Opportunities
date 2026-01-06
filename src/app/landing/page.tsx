'use client'

import HeroSection from '@/components/landingComponents/heroSection'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HowItWorks from '@/components/landingComponents/howItWorks'
import FeaturePreview from '@/components/landingComponents/FeaturePreview'
import WhyAstryoraIsDifferent from '@/components/landingComponents/WhyAstryoraIsDifferent'
import TrustSafety from '@/components/landingComponents/TrustSafety'
import WhoThisPlatformIsFor from '@/components/landingComponents/WhoThisPlatformIsFor'
import Conversion from '@/components/landingComponents/Conversion'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutAstryora />
      <HowItWorks />
      <FeaturePreview />
      <WhyAstryoraIsDifferent />
      <TrustSafety />
      <WhoThisPlatformIsFor />
      <Conversion />
    </main>
  )
}
