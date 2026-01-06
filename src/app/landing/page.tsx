'use client'

import HowItWorks from '@/components/landingComponents/howItWorks'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HeroSection from '@/components/landingComponents/heroSection'
import FeaturePreview from '@/components/landingComponents/FeaturePreview'
import WhyAstryoraIsDifferent from '@/components/landingComponents/WhyAstryoraIsDifferent'
import TrustSafety from '@/components/landingComponents/TrustSafety'
import WhoThisPlatformIsFor from '@/components/landingComponents/WhoThisPlatformIsFor'
import Conversion from '@/components/landingComponents/Conversion'

const Page = () => {
  return (
    <div>
      <HeroSection />
      <AboutAstryora />
      <HowItWorks />
      <FeaturePreview />
      <WhyAstryoraIsDifferent />
      <TrustSafety />
      <WhoThisPlatformIsFor />
      <Conversion />
    </div>
  )
}

export default Page
