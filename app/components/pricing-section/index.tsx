"use client";
import { pricingPlans } from "@/app/libs/data";
import Image from "next/image";
import React from "react";

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="bg-[#030128] text-white py-16 px-4 md:px-8"
    >
      {/* Section Heading */}
      <div className="flex justify-center mb-[60px] items-center flex-col">
        <Image
          src={"/pricing.png"}
          width={300}
          height={22}
          alt="img"
          className="mb-[16px]"
        />
        <h2 className="md:text-[48px] text-white text-[32px] lg:text-[60px] font-jakarta font-[500] mt-2">
          Verification <span className="text-[#C5B8FF]"> Plans</span>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-center">
        <div className="flex justify-center md:grid md:justify-start lg:grid lg:justify-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1226px] w-full px-4 sm:px-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="group transition hover:scale-105 max-w-[400px] cursor-pointer bg-transparent relative border-[1px] border-[#C5B9F633] rounded-[18px] flex items-center flex-col justify-between overflow-hidden"
              >
                {/* Background Image - Hidden by default, shown on hover */}
                <Image
                  src={"/hover.png"}
                  width={34}
                  height={34}
                  alt="icons"
                  className="absolute inset-0 top-0 right-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative p-8 rounded-2xl w-full">
                  <Image
                    src={plan.icon}
                    width={34}
                    height={34}
                    alt="icons"
                    className="mb-[32px]"
                  />
                  {/* Plan Title */}
                  <h3 className="text-[32px] font-jakarta text-[#DEDDFF] font-normal">
                    {plan.title}
                  </h3>

                  {/* Price Section */}
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      <span
                        className={`font-jakarta whitespace-normal md:whitespace-normal lg:whitespace-normal xl:whitespace-nowrap text-[48px] leading-[52px] font-[600] ${
                          plan.index !== 1
                            ? "text-[#B194FF] text-[48px]"
                            : "text-white md:text-[60px]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <div className="flex flex-col gap-1 px-2">
                        <p className="w-[55px] rounded-[55px] bg-white/5 flex justify-center">
                          {plan.discount && (
                            <span className="text-sm text-[#9B9BBD] py-1 rounded">
                              {plan.discount}
                            </span>
                          )}
                        </p>
                        {/* Best Value Badge */}
                        {plan.badge && (
                          <span className="bg-[#C5B8FF] text-[#040128] text-[12px] font-normal px-3 py-1 rounded">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-[18px] space-y-2 text-[#9B9BBD]">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex mb-[12px] items-center">
                        <Image
                          src={"/tick.png"}
                          width={24}
                          height={24}
                          alt="tick"
                        />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button className="cursor-pointer mb-[40px] mx-[40px] w-[280px] lg:w-[270px] md:w-[280px] xl:w-[310px] mt-6 border-[1px] border-[#545269] text-white py-3 rounded-lg shadow-md group-hover:shadow-[0px_0px_20px_0px_#FFFFFF33_inset] hover:opacity-80 transition">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
