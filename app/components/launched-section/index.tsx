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
      <div className="w-full md:w-1/2 md:ml-[40px] flex flex-col text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-[24px] md:text-[40px] lg:text-[60px] font-[500] font-jakarta leading-tight">
          AI Co-Pilot for Web3 <br /> Growth
        </h2>
        <p className="text-[#9B9BBD] font-[300] font-sans mt-[24px] text-[24px]">
          Unlock your project&apos;s full potential with AI-powered Business
          Development and personalized guidance every step of the way.
        </p>
        <button
          style={{
            background:
              "linear-gradient(0deg, #7E62FF 34.55%, #C1B3FF 144.55%)",
          }}
          type="submit"
          className={`cursor-pointer px-6 mt-[24px] py-4 whitespace-nowrap md:text-[20px] h-[57px] text-[14px] md:w-[198px] border justify-center flex items-center gap-2 border-[#B6A6FF] text-white font-[600] rounded-[12px]`}
        >
          Coming Soon
        </button>
      </div>
    </section>
  );
};

export default LaunchpadSection;
