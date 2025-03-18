"use client";

import Image from "next/image";
import NavBar from "../shared-ui/navbar";
import CircularPathAnimation from "./OrbitalAnimation";
import AnimatedBackground from "./star";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Fixed Navbar with gap below */}
      <div className="absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20 xl:px-0 px-[16px] ">
        <NavBar />
      </div>

      {/* Hero Section with animations in background */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Animations as Background */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <CircularPathAnimation />
          <AnimatedBackground />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-5"
          style={{ backgroundImage: "url('/bg.png')" }}
        />

        {/* Glow Images */}
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

        {/* Main Content */}
        <div className="relative z-10 flex justify-center items-center flex-col text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-[60px] leading-[1.2] font-jakarta font-semibold text-center mb-[21px] md:text-[90px] md:leading-[1.3] lg:text-[150px] lg:leading-[189.7px] text-white">
            Re{" "}
            <span className="text-[#C5B8FF] ml-[-10px] md:ml-[-15px] lg:ml-[-25px]">
              Morph
            </span>
          </h1>

          <p className="text-[16px] leading-[140%] text-center font-inter md:text-[20px] lg:text-[24px] lg:leading-[140%] text-white mb-[21px] max-w-[940px] mx-auto">
            KYC/KYB, Team verification and more. Empower your investments with
            transparency and confidence!
          </p>

          <Link
            href="/listing"
            style={{
              background:
                "linear-gradient(0deg, #7E62FF 34.55%, #C1B3FF 144.55%)",
            }}
            type="submit"
            className={`transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 cursor-pointer px-6 py-4 whitespace-nowrap md:text-[20px] h-[57px] text-[14px] md:w-[218px] border justify-center flex items-center gap-2 border-[#B6A6FF] text-white font-[600] rounded-[12px]`}
          >
            Launch App
            <Image src={"/arrow.png"} height={20} width={20} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
