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
          The Best <span className="text-[#C5B8FF]">Pricing Plans</span>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1226px] mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            style={{
              boxShadow: "0px 0px 55px 0px #C5B9F626 inset",
              backgroundImage: plan.bgImage ? `url(${plan.bgImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="transition hover:scale-105 cursor-pointer bg-transparent relative border-[1px] border-[#C5B9F633] rounded-[18px] flex items-center flex-col justify-between overflow-hidden"
          >
            {/* Additional Background Image */}
            {plan.bgImage2 && (
              <div
                style={{
                  backgroundImage: `url(${plan.bgImage2})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top right",
                  backgroundRepeat: "no-repeat",
                }}
                className="absolute top-0 right-0 w-[100px] h-[100px] md:w-[400px] md:h-[400px] pointer-events-none"
              />
            )}

            <div className="relative p-8 rounded-2xl w-full ">
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
                    className={`font-jakarta whitespace-nowrap  text-[48px] leading-[52px] font-[600] ${
                      plan.index !== 1
                        ? "text-[#B194FF] text-[48px]  "
                        : "text-white  md:text-[60px]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <div className="flex flex-col gap-1 px-2">
                    <p className="w-[55px] rounded-[55px]  bg-white/5 flex justify-center">
                      {" "}
                      {plan.discount && (
                        <span className="text-sm text-[#9B9BBD]  py-1 rounded">
                          {plan.discount}
                        </span>
                      )}
                    </p>
                    {/* Best Value Badge */}
                    {plan.badge && (
                      <span className=" bg-[#C5B8FF] text-[#040128] text-[12px] font-normal px-3 py-1 rounded">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[14px] text-[#9B9BBD] mt-2 leading-[18px] font-[400]">
                  {plan.description}
                </span>
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
            <button
              style={{
                boxShadow:
                  plan.index === 2 ? "0px 0px 20px 0px #FFFFFF33 inset" : "",
              }}
              className="cursor-pointer mb-[40px] mx-[40px] w-[280px] xl:w-[310px] mt-6 border-[1px] border-[#545269] text-white py-3 rounded-lg shadow-md hover:opacity-80 transition"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
