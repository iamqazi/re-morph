"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GraphFooter: React.FC = () => {
  return (
    <div className="bg-[#030128] mt-[100px] text-white flex flex-col xl:px-0 px-[16px]">
      {/* Main content area */}

      {/* GraphFooter Card */}
      <div className="mx-auto w-full max-w-[1226px] mb-4">
        <div
          style={{
            boxShadow: "0px 0px 55px 0px #C5B9F626 inset",
          }}
          className="bg-[#0E0D2D] border border-[#C5B9F633] rounded-2xl p-[10px] md:p-[10px] shadow-lg"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px]">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <div className="flex items-center">
                <Image
                  height={72}
                  width={245}
                  src="/logo.png"
                  alt="ReMorph Ai Logo"
                  className="mr-3"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div>
                <button
                  onClick={() => (window.location.href = "/application")}
                  style={{
                    background:
                      "linear-gradient(0deg, #7E62FF 34.55%, #C1B3FF 144.55%)",
                  }}
                  type="submit"
                  className="px-6 py-4 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 whitespace-nowrap md:text-[20px] text-[14px] h-[57px] md:w-[207px] w-full border flex justify-center items-center gap-2 border-[#B6A6FF] text-white font-medium rounded-[12px]"
                >
                  Apply Now
                  <Image
                    src={"/arrow.png"}
                    height={20}
                    width={25}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Email Subscription Section */}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className=" text-[14px] text-[#777599] py-4">
        <div className="max-w-[1226px] font-sans mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className=" font-sans">
            ©️ 2025 ReMorph AI. All rights reserved.
          </div>
          <div>
            <Link href={"/privacy-policy"} className=" font-sans">
              Privacy - Policy
            </Link>
            <span className=" font-sans mx-2">|</span>
            <span className=" font-sans">Powered by Digitaltodesign</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphFooter;
