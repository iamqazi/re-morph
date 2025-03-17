"use client";
import Image from "next/image";
import CryptoTransactionsTable from "../chart";
import React, { useState } from "react";

export default function GraphSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <section
      className="bg-[#100B4E33] mb-[100px] font-inter border-r-0 border-l-0 border border-white/20 grid lg:grid-cols-[auto_1fr] 
   grid-cols-1 py-[31px] lg:px-[41px] px-[20px] gap-[22px] relative"
    >
      {/* Drawer Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="w-[30px] absolute top-4 right-4 bg-white text-[#927AFF] rounded-full p-[2px] z-10 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="16" y1="6" x2="8" y2="12"></line>
          <line x1="16" y1="18" x2="8" y2="12"></line>
        </svg>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-96 md:w-[420px] h-full bg-[#16123E] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 bg-white text-[#927AFF] rounded-full p-[2px] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Logo Section */}
          <div className="p-6 pb-8">
            <div className="flex items-center gap-3">
              <Image src={"/logo.png"} height={56} width={300} alt="logo" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="px-6 flex gap-2 mb-6">
            <button className="flex-1 py-2 bg-[#7E61FF] text-[#DEDDFF] rounded-md text-sm font-medium">
              KYC
            </button>
            <button className="flex-1 py-2 bg-[#1BA4E5] text-[#DEDDFF] rounded-md text-sm font-medium">
              DOX
            </button>
            <button className="flex-1 py-2 bg-[#94209D] text-[#DEDDFF] rounded-md text-sm font-medium">
              TEAM
            </button>
          </div>

          {/* Menu Options */}
          <div className="px-6 flex-1">
            <div className="flex flex-col gap-4">
              <button
                style={{
                  border: "1px solid #FFFFFF26",
                  boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                  backdropFilter: "blur(6.5px)",
                }}
                className="w-full flex items-center justify-between bg-[#191645] hover:bg-[#1E1A4D] text-white rounded-lg py-4 px-5 transition-all"
              >
                <span className="font-medium">PROJECT OVERVIEW</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>

              <button
                style={{
                  border: "1px solid #FFFFFF26",
                  boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                  backdropFilter: "blur(6.5px)",
                }}
                className="w-full flex items-center justify-between bg-[#191645] hover:bg-[#1E1A4D] text-white rounded-lg py-4 px-5 transition-all"
              >
                <span className="font-medium">OVER VIEW</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>

              <button
                style={{
                  border: "1px solid #FFFFFF26",
                  boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                  backdropFilter: "blur(6.5px)",
                }}
                className="w-full flex items-center justify-between bg-[#191645] hover:bg-[#1E1A4D] text-white rounded-lg py-4 px-5 transition-all"
              >
                <span className="font-medium">TEAM OVER VIEW</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
            </div>

            {/* Explore Builders Section */}
            <div className="my-12">
              <h3 className="text-[#FEFCFC] text-center text-[32px] font-medium mb-4">
                Explore builders
              </h3>

              <div className="flex flex-col gap-4">
                {/* Builder Cards - Repeat 3 times */}
                {[1, 2, 3].map((item) => (
                  <div
                    style={{
                      border: "1px solid #FFFFFF26",
                      boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                      backdropFilter: "blur(6.5px)",
                    }}
                    key={item}
                    className="bg-white/5 rounded-lg p-4 relative"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src={"/NFT.png"}
                        height={56}
                        width={340}
                        alt="logo"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white text-lg font-medium uppercase">
                        REMORPH AI
                      </h4>
                      <p className="text-white/70 text-sm">RemorphAI</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#000000c0] z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      <div className="lg:flex-col lg:flex lg:order-1 order-2 gap-2 grid  grid-cols-1 lg:mt-0 mt-5">
        {" "}
        <div className="flex flex-col gap-3">
          <div>
            <Image src={"/logo.png"} height={90} width={300} alt="logo" />
          </div>
          <div className="gap-[5px] sm:text-sm text-[12px] capitalize text-[#DEDDFF] grid grid-cols-3  ">
            <span className="border border-white/15 bg-[#7E61FF1A] justify-center rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex sm:px-[12px] px-[5px] py-[10px] items-center gap-3">
              <Image src="/planet.svg" alt="website" width={16} height={16} />
              Website
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] justify-center rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex sm:px-[12px] px-[5px] py-[10px] items-center gap-3">
              <Image src="/x.svg" alt="x" width={16} height={16} />
              Twitter
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] justify-center rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex sm:px-[12px] px-[5px] py-[10px] items-center gap-3">
              <Image
                src="/telegram.svg"
                alt="telegram.svg"
                width={16}
                height={16}
              />
              Telegram
            </span>
          </div>
          <div className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] text-[#DEDDFF] text-center flex flex-col gap-[6px] p-[10px]  ">
            PRICE USD
            <span className="text-white text-[32px] font-[600]  font-jakarta">
              $0.0001185
            </span>
          </div>
          <div className="grid grid-cols-2 gap-[5px] ">
            <div className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] text-[#DEDDFF] text-center flex flex-col gap-[6px] p-[10px]  ">
              LIQUIDITY
              <span className="text-white text-[24px] flex items-center gap-[12px] text-center justify-center font-jakarta font-[600] ">
                $746K{" "}
                <Image src="/lock.svg" alt="lock" width={24} height={24} />
              </span>
            </div>
            <div className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] text-[#DEDDFF] text-center flex flex-col gap-[6px] p-[10px]  ">
              MKT CAP
              <span className="text-white text-[24px] flex items-center gap-[12px] text-center justify-center font-jakarta font-[600]">
                $11.6M
              </span>
            </div>
          </div>
        </div>
        <hr className="border-b border-white/20 my-5" />
        <div className="flex flex-col gap-3">
          <div className="gap-3 text-sm capitalize text-[#DEDDFF] grid grid-cols-3  ">
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex  flex-col px-[10px] py-[5px] items-center text-sm">
              1H
              <span className="text-[#09FF00] text-base font-[600] ">
                24.7%
              </span>
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex flex-col  px-[10px] py-[5px] items-center text-sm">
              6H
              <span className="text-[#09FF00] text-base font-[600] ">
                13.4%
              </span>
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] flex flex-col  px-[10px] py-[5px] items-center text-sm">
              12H
              <span className="text-[#09FF00] text-base font-[600] ">
                101.4%
              </span>
            </span>
          </div>
          <div className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] text-[#ffffff] gap-[6px] px-[17px] sm:px-[27px] py-[24px] flex ">
            <div className="gap-8 text-center justify-center flex flex-col">
              <span className=" flex flex-col text-[12px] ">
                TXNS
                <span className="font-[600] text-base">8,526</span>
              </span>
              <span className=" flex flex-col text-[12px] ">
                VOLUME
                <span className="font-[600] text-base">$4.6M</span>
              </span>
              <span className=" flex flex-col text-[12px] ">
                MAKERS
                <span className="font-[600] text-base">5,223</span>
              </span>
            </div>
            <span className="flex w-[1px] sm:mx-[23px] mx-[17px]  bg-[#FFFFFF33] "></span>
            <div className="gap-4 flex flex-col w-full">
              <div>
                <span className="flex justify-between ">
                  <span className=" flex flex-col text-[14px] ">
                    BUYS
                    <span className="font-[600] text-base">12.6K</span>
                  </span>
                  <span className="text-end flex flex-col text-[14px] ">
                    SELLS
                    <span className="font-[600] text-base">4.2K</span>
                  </span>
                </span>
                <span className="mt-[6px] flex gap-4 items-center ">
                  <span
                    className=" h-1 w-full rounded-[100px] "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right,#09FF00 80%,#ff0000 20%)",
                    }}
                  ></span>
                  <span className=" text-[12px] ">71,68%</span>
                </span>
              </div>
              <div>
                <span className="flex justify-between ">
                  <span className=" flex flex-col text-[14px] ">
                    BUY VOL
                    <span className="font-[600] text-base">$2.5M</span>
                  </span>
                  <span className="text-end flex flex-col text-[14px] ">
                    SELLS
                    <span className="font-[600] text-base">2.1M</span>
                  </span>
                </span>
                <span className="mt-[6px] flex gap-4 items-center ">
                  <span
                    className=" h-1 w-full rounded-[100px] "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right,#09FF00 80%,#ff0000 20%)",
                    }}
                  ></span>
                  <span className=" text-[12px] ">71,68%</span>
                </span>
              </div>
              <div>
                <span className="flex justify-between ">
                  <span className=" flex flex-col text-[14px] ">
                    BUYERS
                    <span className="font-[600] text-base">3,120</span>
                  </span>
                  <span className="text-end flex flex-col text-[14px] ">
                    SELLERS
                    <span className="font-[600] text-base">2,103</span>
                  </span>
                </span>
                <span className="mt-[6px] flex gap-4 items-center ">
                  <span
                    className=" h-1 w-full rounded-[100px] "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right,#09FF00 80%,#ff0000 20%)",
                    }}
                  ></span>
                  <span className=" text-[12px] ">71,68%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-b border-white/20 my-5" />
        <div>
          <div className="gap-3 flex flex-col">
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] gap-[6px] px-[12px] py-[10px] flex justify-between ">
              <span className="text-[#DEDDFF] text-sm">Pair Created</span>
              <span className="text-[#ffffff] text-base font-[600] ">
                16D 15H AGO
              </span>
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] gap-[6px] px-[12px] py-[10px] flex justify-between ">
              <span className="text-[#DEDDFF] text-sm">Pooled RMPH AI</span>
              <span className="text-[#ffffff] text-base font-[600] ">
                160,395,969 $18K
              </span>
            </span>
            <span className="border border-white/15 bg-[#7E61FF1A] rounded-[6px] shadow-[inset_0px_0px_10px_0px_#FFFFFF1A] gap-[6px] px-[12px] py-[10px] flex justify-between ">
              <span className="text-[#DEDDFF] text-sm">Pooled SOL</span>
              <span className="text-[#ffffff] text-base font-[600] ">
                143.92 $18K
              </span>
            </span>
          </div>
          <div className="mt-[24px] text-sm">
            <span className="flex justify-between text-[#DEDDFF] p-[12px] border-t border-white/15">
              Pair{" "}
              <span className="flex items-center lg:gap-2 sm:gap-4 gap-2">
                <Image src="/fileLogo.svg" alt="share" width={16} height={16} />{" "}
                3canC...V6C6 <span className="text-[10px]">EXP</span>{" "}
                <Image src="/share.svg" alt="share" width={16} height={16} />
              </span>
            </span>
            <span className="flex justify-between text-[#DEDDFF] p-[12px] border-t border-white/15">
              RPMH AI{" "}
              <span className="flex items-center lg:gap-2 sm:gap-4 gap-2">
                <Image src="/fileLogo.svg" alt="share" width={16} height={16} />{" "}
                3canC...V6C6 <span className="text-[10px]">EXP</span>{" "}
                <Image src="/share.svg" alt="share" width={16} height={16} />
              </span>
            </span>
            <span className="flex justify-between text-[#DEDDFF] p-[12px] border-t border-white/15">
              SOL{" "}
              <span className="flex items-center lg:gap-2 sm:gap-4 gap-2">
                <Image src="/fileLogo.svg" alt="share" width={16} height={16} />{" "}
                3canC...V6C6 <span className="text-[10px]">EXP</span>{" "}
                <Image src="/share.svg" alt="share" width={16} height={16} />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 lg:order-2 order-1 ">
        <Image
          src={"/graph.png"}
          alt="graph"
          width={1031}
          height={571}
          className="bg-no-repeat bg-center bg-cover rounded-[10px] w-full select-none min-h-[250px]"
        />
        <div className="mt-[48px]">
          {" "}
          <CryptoTransactionsTable />
        </div>
      </div>
    </section>
  );
}
