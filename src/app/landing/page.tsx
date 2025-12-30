'use client'

import React from 'react'
import HeroSection from '@/components/landingComponents/heroSection'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HowItWorks from '@/components/landingComponents/howItWorks'

const page = () => {
    return (
        <div>
            
            <HeroSection />
            <AboutAstryora />
            <HowItWorks />
        </div>
    )
}

export default page
