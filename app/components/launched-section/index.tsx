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
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-[#030128] text-white overflow-hidden">
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
          Built-In Launchpad <br /> To Launch Memes
        </h2>
        <p className="text-[#9B9BBD] mt-[24px] text-[24px]">
          Use our built-in launchpad dashboard to track your meme and contribute
          to liquidity pool as your token grows over time.
        </p>
        <button className="border-white/20 mt-[24px] !bg-[#A428E70D] text-[20px] w-[252px] h-[56px] text-[#DEDDFF] border-[2px] generate-button mx-auto md:mx-0">
          COMING SOON
        </button>
      </div>
    </section>
  );
};

export default LaunchpadSection;
