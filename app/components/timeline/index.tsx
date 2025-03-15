"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { timelineData } from "@/app/libs/data";

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const [lineTop, setLineTop] = useState<number>(0);

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-icon-box");
      if (items.length >= 2) {
        const firstItem = items[0].getBoundingClientRect();
        const lastItem = items[items.length - 1].getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();

        // Calculate the height between the first and last icons
        const height = lastItem.top - firstItem.top + lastItem.height / 2;

        // Calculate the top position relative to the first icon's center
        const top = firstItem.top - timelineRect.top + firstItem.height / 2;

        setLineHeight(height);
        setLineTop(top);
      }
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/bg-timeline.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "60px 0",
        }}
      >
        <div className="lg:px-0 px-[16px] container mx-auto w-full mt-[60px] h-full">
          <h2 className="md:text-[48px] text-white text-[32px] mb-[70px] text-center lg:text-[60px] font-jakarta font-[500] mt-2">
            Road<span className="text-[#C5B8FF]">map</span>
          </h2>
          <div
            ref={timelineRef}
            className="relative wrap max-w-[1000px] mx-auto overflow-hidden h-full"
          >
            {/* Vertical Timeline Line - Positioned with dynamic height */}
            <div
              className="border-2 absolute border-opacity-20 border-[#8258F2] top-0
                md:left-1/2 left-[35px]"
              style={{
                height: lineHeight > 0 ? `${lineHeight}px` : "100%",
                top: lineTop > 0 ? `${lineTop}px` : "35px",
                display: lineHeight > 0 ? "block" : "none",
              }}
            ></div>

            {/* Fallback line until JS measurement kicks in */}
            <div
              className="border-2 absolute border-opacity-20 border-[#8258F2] md:h-[700px] h-full top-30 bottom-2
                md:left-1/2 left-[35px]"
              style={{ display: lineHeight > 0 ? "none" : "block" }}
            ></div>

            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`mb-8 flex items-center w-full
                  lg:${
                    item.position === "left"
                      ? "right-timeline justify-between"
                      : "left-timeline justify-between md:flex-row-reverse"
                  }
                 
                  flex-row gap-[16px]`}
              >
                {/* Empty div for large screen spacing */}
                <div className="order-1 w-[380px] hidden md:block"></div>

                {/* Timeline Icon Box */}
                <div
                  className="timeline-icon-box flex z-20 flex-col justify-center items-center order-1 bg-transparent shadow-xl w-[90px] lg:w-[70px] h-[70px] rounded-[10px] relative"
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
                      className="opacity-10"
                    />
                  </div>
                  <Image
                    src={item.image}
                    height={22}
                    width={22}
                    alt="roadmap"
                  />
                </div>

                {/* Timeline Content */}
                <div
                  style={{
                    boxShadow: "0px 0px 62.76px 0px #C5B9F626 inset",
                  }}
                  className="order-1 border-[#C5B9F64D] text-white border-[1px] drop-shadow-xl rounded-[20px] shadow-xl w-full md:w-[380px] px-[16px] py-[30px] bg-transparent"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-[700] font-jakarta text-[#C5B9F6] text-[27px]">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 max-w-[318px] text-white/70 text-[16px]">
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
      </div>
    </>
  );
};

export default Timeline;
