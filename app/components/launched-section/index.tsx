"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const LaunchpadSection: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        duration: 5, // Full rotation time
        repeat: -1, // Infinite loop
        ease: "linear",
        rotate: 360, // Rotate smoothly
        transformOrigin: "center", // Ensures proper rotation
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pb-16 bg-[#030128] text-white overflow-hidden">
      {/* Left Image Section with Rotation */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div
          ref={imageContainerRef}
          className="relative w-[70%] max-w-[533px] md:w-[533px] md:h-[533px] flex items-center justify-center"
        >
          <Image
            src="/launched-circle.png"
            alt="Launchpad"
            className="w-full h-auto"
            width={533}
            height={533}
            priority
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 md:ml-[40px] items-center md:items-start justify-center flex flex-col text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-[24px] md:text-[40px] lg:text-[60px] font-[500] font-jakarta leading-tight">
          AI Co-Pilot for Web3 <br /> Growth
        </h2>
        <p className="text-[#9B9BBD] font-[300] font-inter mt-[24px] text-[24px]">
          Unlock your project&apos;s full potential with AI-powered Business
          Development and personalized guidance every step of the way.
        </p>
        <button
          style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
          type="submit"
          className={` backdrop-blur-sm hover:-translate-y-1 mt-[16px] cursor-pointer bg-[#7E61FF0D] flex items-center !pb-0 justify-center gap-2 font-inter w-[180px] text-[16px] h-[50px] bg-opacity-50 text-white rounded-[6px] hover:bg-opacity-70 transition duration-300`}
        >
          Coming Soon
        </button>
      </div>
    </section>
  );
};

export default LaunchpadSection;
