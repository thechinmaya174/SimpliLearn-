import React from 'react'
import Image from 'next/image'

const WhatWeExplore = () => {
  const items = [
    {
      icon: '/icons/skills-decay.svg',
      title: 'Skills Decay',
      desc: 'every 2–3 years\nfaster for technical skills',
    },
    {
      icon: '/icons/manager-role.svg',
      title: 'Manager Role Shift',
      desc: 'orchestrating\npeople + AI agents',
    },
    {
      icon: '/icons/leaders-ai.svg',
      title: 'Leaders + AI Co-Pilots',
      desc: 'requires sensemaking\nand systems thinking',
    },
    {
      icon: '/icons/frontline.svg',
      title: 'Frontline Capability',
      desc: 'now depends\non digital fluency',
    },
    {
      icon: '/icons/human-capabilities.svg',
      title: 'Core Human Capabilities',
      desc: 'analytical reasoning\nand scenario planning',
    },
    {
      icon: '/icons/winning-org.svg',
      title: 'Winning Organizations',
      desc: 'predict skills\nahead of demand',
    },
  ]

  return (
    <section className="relative w-full py-10 md:py-16 bg-gradient-to-b from-[#D2E1FF80] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Heading */}
        <h2 className="text-[22px] md:text-4xl font-semibold text-[#f5a623] mb-4 md:mb-6 whitespace-nowrap">
  What We’ll Explore
</h2>


        <p className="text-black-700 mb-6 md:mb-8 text-[15px] md:text-lg font-semibold">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="md:w-8 md:h-8"
                />
                <h3 className="font-semibold text-[15px] md:text-base text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-black-700 font-semibold text-[13px] md:text-sm whitespace-pre-line leading-[20px] md:leading-[22px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatWeExplore
