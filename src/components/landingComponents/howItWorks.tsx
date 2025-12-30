'use client'

import React from 'react'

const steps = [
  {
    step: '01',
    title: 'Join Astryora',
    description:
      'Create a single account and set up a global profile. No roles, no labels — just one identity on the platform.',
  },
  {
    step: '02',
    title: 'Build Reputation',
    description:
      'Earn ASI by completing real work or proving skills through platform mechanisms. Reputation grows through action.',
  },
  {
    step: '03',
    title: 'Missions Happen',
    description:
      'Missions are posted, applications happen, and work is executed — all within the same unified flow.',
  },
  {
    step: '04',
    title: 'Trust Grows',
    description:
      'Outcomes and feedback strengthen ASI for individuals and APM for businesses. Trust is built by performance.',
  },
]

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How Astryora Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A role-neutral journey where trust is built through action, not titles.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition w-full md:w-1/4"
            >
              {/* Step Number */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white text-lg font-semibold mb-6">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-14">
          <p className="text-sm text-gray-500">
            No role labels are shown at any stage of the journey.
          </p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
