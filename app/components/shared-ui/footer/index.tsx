"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import React from "react";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const router = useRouter();

  const scrollToElement = (id: string) => {
    const checkExist = setInterval(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(checkExist);
      }
    }, 100);
  };
  const handleAboutClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToElement("about");
      }, 1000);
    } else {
      scrollToElement("about");
    }
  };
  return (
    <div className="bg-[#030128] text-white flex flex-col xl:px-0 px-[16px] ">
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
            <div className="lg:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-6">
                <Image
                  height={72}
                  width={245}
                  src="/logo.png"
                  alt="ReMorph Ai Logo"
                  className=" mr-3"
                />
              </div>

              <p className="text-[#DEDDFF] text-[18px] font-[300] max-w-full xl:max-w-[385px] mb-6">
                ReMorph AI — Reshaping Trust in Web3. Building a safer and more
                transparent blockchain ecosystem with KYC, KYB, and Team
                Verification. Empowering developers with AI-driven business
                solutions.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-1/5 flex flex-col ">
              <div className=" ">
                <button
                  onClick={() => (window.location.href = "/application")}
                  style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
                  type="submit"
                  className={` backdrop-blur-sm hover:-translate-y-1 mt-[16px] cursor-pointer bg-[#7E61FF0D] flex items-center !pb-0 justify-center gap-2 font-inter w-[210px] text-[16px] h-[58px] bg-opacity-50 text-white rounded-[6px] hover:bg-opacity-70 transition duration-300`}
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
                        Whitepaper
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#roadmap"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleAboutClick}
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
                        href="https://discord.gg/ZBE8DkJac7"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Discord
                      </a>
                    </li>
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
                        href="https://t.me/ReMorphAI"
                        className="text-[#9B9BBD] text-[14px] hover:text-white"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/RemorphAi"
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

export default Footer;
