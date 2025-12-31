'use client'

import React from 'react'
import HowItWorks from '@/components/landingComponents/howItWorks'
import Header from '@/components/landingComponents/header'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HeroSection from '@/components/landingComponents/heroSection'

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
