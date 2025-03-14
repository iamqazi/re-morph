import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#030128] text-white flex flex-col">
      {/* Main content area */}

      {/* Footer Card */}
      <div className="mx-auto w-full max-w-[1280px] mb-4">
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
                  height={80}
                  width={300}
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
            <div className="max-w-[500px] flex flex-col ">
              <div className=" ">
                <div className="flex flex-col md:flex-row w-full md:w-auto mb-4 md:mb-0">
                  <input
                    type="email"
                    placeholder="Write you email here..."
                    className="bg-transparent border-[1px] border-white/15 rounded-[12px] h-[44px] px-4 py-2 mb-4 md:mb-0 md:mr-4 text-white/20 placeholder:text-white/20 md:w-[300px] "
                  />
                  <button
                    style={{
                      boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                    }}
                    className="border-white/15 rounded-[12px] text-[16px] md:w-[162px] h-[44px] text-[#DEDDFF] border-[2px]"
                  >
                    Join the waitlist
                  </button>
                </div>
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
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Whitepaper
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
                        href="#"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        About Us
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
      <div className="bg-[#0a0a20] text-[14px] text-[#777599] py-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>Copyright 2025</div>
          <div>
            <span>Privacy - Policy</span>
            <span className="mx-2">|</span>
            <span>Powered by Digitaltodesign</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
