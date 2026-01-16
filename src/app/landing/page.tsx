'use client'

import React from 'react'

import Header from '@/components/landingComponents/header'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HowItWorks from '@/components/landingComponents/howItWorks'
import TrustAndAudience from '@/components/landingComponents/TrustAndAudience'
import HeroSection from '@/components/landingComponents/heroSection'
import FeaturePreview from '@/components/landingComponents/FeaturePreview'
import WhyAstryoraIsDifferent from '@/components/landingComponents/WhyAstryoraIsDifferent'
import WhoThisPlatformIsFor from '@/components/landingComponents/WhoThisPlatformIsFor'
import Conversion from '@/components/landingComponents/Conversion'

const page = () => {
    return (
        <div>
            <HeroSection />
            <AboutAstryora />
            <HowItWorks />
            <TrustAndAudience />

            <FeaturePreview />
            <WhyAstryoraIsDifferent />
            <WhoThisPlatformIsFor />
            <Conversion />
        </div>

    )
}

export default page
