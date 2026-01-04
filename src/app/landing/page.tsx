'use client'

import Header from '@/components/landingComponents/header'
import HeroSection from '@/components/landingComponents/heroSection'
import AboutAstryora from '@/components/landingComponents/aboutAstryora'
import HowItWorks from '@/components/landingComponents/howItWorks'
import TrustAndAudience from '@/components/landingComponents/TrustAndAudience'

const page = () => {
    return (
        <div>
            <Header/>
            <HeroSection />
            <AboutAstryora />
            <HowItWorks />
            <TrustAndAudience/>
       </div>
    )
}

export default page
