"use client";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#030128] text-white flex flex-col md:px-0 px-[16px] ">
      {/* Main content area */}

      {/* Footer Card */}
      <div className="mx-auto w-full max-w-[1226px] mb-4">
        <div
          style={{
            boxShadow: "0px 0px 55px 0px #C5B9F626 inset",
          }}
          className="bg-[#0E0D2D] border border-[#C5B9F633] rounded-2xl p-[30px] md:p-[70px] shadow-lg"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
            {/* Left Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-6">
                <Image
                  height={72}
                  width={245}
                  src="/logo.png"
                  alt="ReMorph Ai Logo"
                  className=" mr-3"
                />
              </div>

              <p className="text-[#DEDDFF] text-[18px] font-[300] max-w-[385px] mb-6">
                Lorem ipsum dolor sit amet consectetur. Condimentum venenatis
                elementum maecenas vitae sed proin mi. Sed urna in feugiat in
                vitae suscipit interdum. Vel sodales.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-2/5 flex flex-col ">
              <div className=" ">
                <button
                  onClick={() => (window.location.href = "/application")}
                  style={{
                    background:
                      "linear-gradient(0deg, #7E62FF 34.55%, #C1B3FF 144.55%)",
                  }}
                  type="submit"
                  className={`px-6 py-4 whitespace-nowrap md:text-[20px] h-[57px] text-[14px] md:w-[207px] border justify-center flex items-center gap-2 border-[#B6A6FF] text-white font-medium rounded-[12px]`}
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
              <div className="flex gap-[80px] max-w-[500px] mt-[30px]">
                {/* Docs Column */}
                <div className="mb-6 md:mb-0 ">
                  <h3 className="text-[16px] text-white font-[600] mb-4">
                    Docs
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="/listing"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Listings
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a
                        href="/preview"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Live Preview Page
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Column */}
                <div>
                  <h3 className="text-[16px] text-white font-[600] mb-4">
                    Contact
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Email
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Email Subscription Section */}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className=" text-[14px] text-[#777599] py-4">
        <div className="max-w-[1226px] font-sans mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className=" font-sans">Copyright 2025</div>
          <div>
            <span className=" font-sans">Privacy - Policy</span>
            <span className=" font-sans mx-2">|</span>
            <span className=" font-sans">Powered by Digitaltodesign</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
