import React from 'react';

const speakers = [
  {
    name: "Rob Lauber",
    image: "/images/speaker1.png",
    bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
  },
  {
    name: "Krishna Kumar",
    image: "/images/speaker2.png",
    bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era."
  },
  {
    name: "Sudipto Mitra",
    image: "/images/speaker3.png",
    bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent."
  }
];

const Speakers = () => {
  return (
    <section className="bg-[#1D4ED8] text-white px-4 py-10 md:px-16 md:py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-[#FACC15] text-[26px] md:text-[40px] font-extrabold mb-8 md:mb-12">
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="space-y-14 md:space-y-16 mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
            >
              {/* Image */}
              <div className="w-[140px] md:w-[300px] flex-shrink-0">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-[#00F5FF] text-[20px] md:text-[30px] font-bold mb-3">
                  {speaker.name}
                </h3>

                <p className="text-[14px] md:text-[21px] leading-[22px] md:leading-[32px] text-blue-50 opacity-95">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="relative rounded-lg overflow-hidden border border-blue-400/30">
          <div className="absolute inset-0">
            <img
              src="/images/lead.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-700/40" />
          </div>

          <div className="relative z-10 p-4 sm:p-6 md:p-10 w-full">
  <h4 className="text-[#00F5FF] text-[16px] sm:text-[18px] md:text-2xl font-extrabold mb-2 sm:mb-3 break-words">
    Additional Expert Perspectives
  </h4>

  <p className="text-[12px] sm:text-[13px] md:text-base leading-[18px] sm:leading-[20px] md:leading-relaxed font-medium">
    Invited experts from leading consulting and enterprise learning organizations
    will contribute short perspectives, offering insight into how large organizations
    are evolving skills and leadership models in the AI era.
  </p>
</div>

        </div>

      </div>
    </section>
  );
};

export default Speakers;
