'use client'

import React from 'react'
import Header from '@/components/landingComponents/header'
import HeroSection from '@/components/landingComponents/heroSection'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HowItWorks from '@/components/landingComponents/howItWorks'

const page = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutAstryora />
            <HowItWorks />
        </div>
    )
}

export default page
