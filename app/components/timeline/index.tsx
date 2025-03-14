"use client";
import Image from "next/image";
import React from "react";
import { timelineData } from "@/app/libs/data";

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <h2 className="md:text-[48px] text-white text-[32px] mb-[70px] text-center lg:text-[60px] font-jakarta font-[500] mt-2">
        Road<span className="text-[#C5B8FF]">map</span>
      </h2>
      <div className="relative wrap max-w-[1000px] mx-auto overflow-hidden h-full">
        {/* Vertical Timeline Line (Hidden on small screens) */}
        <div
          className="hidden md:block border-2 absolute border-opacity-20 border-[#8258F2] h-full"
          style={{ left: "50%" }}
        ></div>

        {timelineData.map((item) => (
          <div
            key={item.id}
            className={`mb-8 flex justify-between gap-[16px] items-center w-full ${
              item.position === "right"
                ? "right-timeline"
                : "left-timeline flex-row-reverse"
            }`}
          >
            <div className="order-1 w-[380px] hidden md:block"></div>

            {/* Timeline Icon Box (Hidden on small screens) */}
            <div
              className="hidden md:flex z-20 flex-col justify-center items-center order-1 bg-transparent shadow-xl w-[70px] h-[70px] rounded-[8px] relative"
              style={{
                border: "1.14px solid transparent",
                backgroundImage:
                  "linear-gradient(#191938, #191938), linear-gradient(270deg, rgba(197, 185, 247, 0.5) 0%, rgba(197, 185, 246, 0.1) 52.5%, rgba(197, 185, 246, 0.5) 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="absolute top-0 left-0 w-full">
                <Image
                  src={"/glow.png"}
                  height={22}
                  width={65}
                  alt="glow effect"
                  className="w-full opacity-10"
                />
              </div>
              <Image src={item.image} height={22} width={22} alt="roadmap" />
            </div>

            {/* Timeline Content (Always Visible) */}
            <div
              style={{
                boxShadow: "0px 0px 62.76px 0px #C5B9F626 inset",
              }}
              className="order-1 border-[#C5B9F64D] text-white border-[1px] drop-shadow-xl rounded-lg shadow-xl w-full md:w-[380px] px-6 py-4 bg-transparent"
            >
              {/* Title with Icon */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-[700] font-jakarta text-[#C5B9F6] text-[27px]">
                  {item.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc pl-6 text-white/70 text-[16px]">
                {item.points.map((point, index) => (
                  <li key={index} className="marker:ml-[-6px]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
