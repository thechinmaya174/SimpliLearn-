import React from 'react';

const agendaItems = [
  {
    title: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
  },
  {
    title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald's",
    description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
  },
  {
    title: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    description: "What large enterprise talent ecosystems are  across industries learning about capability-building at scale ",
  }
];

const EventAgenda = () => {
  return (
    <div className="bg-[#00F7FF] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#1D4ED8] text-4xl font-black tracking-tight mb-10">
          Event Agenda
        </h2>

        {/* Agenda Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agendaItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-md shadow-lg flex flex-col h-ful"
            >
              {/* Card Title */}
             <div className=' flex-1'>
              <h4 className="text-[#1D4ED8] font-bold text-lg mb-6 leading-tight ">
  {item.title.startsWith("Keynote:")
    ? (
      <>
        <span className="block">Keynote:</span>
        <span className="block">
          {item.title.replace("Keynote:", "").trim()}
        </span>
      </>
    )
    : item.title
  }
</h4>

             </div>
              
              {/* Speaker Label */}
              <div className="mb-4">
                <p className="text-black font-bold text-sm ">
                {item.speaker}
              </p>
              </div>
              
              {/* Description Text */}
              <div className="">
                <p className="text-black text-700 font-medium text-[14px] leading-relaxed">
                {item.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAgenda;