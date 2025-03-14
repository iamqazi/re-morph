"use client";

import Image from "next/image";
import NavBar from "../shared-ui/navbar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Fixed Navbar with gap below */}
      <div className="absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20">
        <NavBar />
      </div>

      {/* Hero Section with padding-top to create gap */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        <Image
          src={"/left-glow.png"}
          height={821}
          width={821}
          alt="glow"
          className="absolute top-0 z-10 left-0"
        />
        <Image
          src={"/right-glow.png"}
          height={821}
          width={821}
          alt="glow"
          className="absolute top-0 z-10 right-0"
        />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.png')" }}
        />

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-[60px] leading-[1.2] font-jakarta font-semibold text-center mb-[21px] md:text-[90px] md:leading-[1.3] lg:text-[150px] lg:leading-[189.7px] lg:tracking-[0%] text-white">
            Re <span className="text-[#C5B8FF] mr-2">Morph</span>
          </h1>

          <p className="text-[16px] leading-[140%] text-center font-inter md:text-[20px] lg:text-[24px] lg:leading-[140%] text-white/90 mb-[21px] max-w-[940px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nibh morbi felis gravida
            aliquet sed enim. Enim pharetra imperdiet velit scelerisque. Tempus
            at nisl urna.
          </p>

          <button className="border-white/20 text-[20px] w-[252px] h-[56px] text-[#DEDDFF] border-[2px] generate-button">
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
