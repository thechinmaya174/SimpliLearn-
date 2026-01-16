import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-screen md:min-h-[600px]">
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Dallas Round Table Background"
        fill
        priority
        className="object-cover"
      />

      {/* Hero Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-start w-full px-6 md:px-0 md:ml-20">
        
        {/* ===== Top container (Logo) ===== */}
        <div className="mb-10 md:mb-20 flex">
          <Image
            src="/images/logo.png"
            alt="Simplilearn Logo"
            width={250}
            height={60}
            className="w-[180px] md:w-[250px] h-auto"
          />
        </div>

        {/* ===== Main content container ===== */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10">
          
          {/* ===== Left content ===== */}
          <div className="flex flex-col gap-4 md:max-w-[620px]">

            {/* Badge + subtitle */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <span
                className="
                  bg-[#2DEFEF]
                  text-[#1E2266]
                  text-[16px] md:text-[22px]
                  font-extrabold
                  px-1 md:px-6
                  py-1.5 md:py-2
                  rounded-[5px]
                  shadow-[0px_6px_18px_rgba(0,0,0,0.35)]
                  inline-flex
                  w-fit
                  whitespace-nowrap
                "
                style={{ WebkitTextStroke: "1px #0B0F3F" }}
              >
                Invite-Only
              </span>

              <p className="text-[#2DE3E3] text-[16px] md:text-[24px] font-semibold tracking-wide">
                An Executive Roundtable · Lunch
              </p>
            </div>

            {/* Headings */}
            <div>
              <h1 className="text-[28px] leading-[36px] md:text-[48px] md:leading-[56px] md:whitespace-nowrap font-bold text-[#F5AB40]">
                The Skills That Matter Next:
              </h1>
              <p className="mt-2 text-[24px] leading-[34px] md:text-[40px] md:leading-[50px] font-semibold text-[#F5AB40]">
                Preparing Your Workforce <br />& Leaders for the AI Era
              </p>
            </div>

            {/* Event Info */}
            <div className="mt-6 flex flex-col gap-3 text-white text-sm md:text-lg">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="md:w-5 md:h-5" />
                <span className="font-bold">February 20, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="md:w-5 md:h-5" />
                <span className="font-bold">
                  Chamberlain’s Steak & Fish House, Dallas
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
