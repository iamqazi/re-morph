// components/CTASection.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
const CTASection: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById("pricing")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document
        .getElementById("pricing")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full my-8 mx-auto max-w-[1226px] xl:px-0 px-[16px] ">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/cta-bg.png"
            alt="Background"
            fill
            className=" md:object-contain"
            priority
          />
          {/* Overlay - Semi-transparent to ensure text readability */}
        </div>

        {/* Content Container with padding that adjusts based on screen size */}
        <div className="relative z-10 flex flex-col items-center justify-center py-10 px-4 md:py-16 md:px-0 lg:py-20 ">
          {/* Main Content with responsive font sizes */}
          <h2 className="text-[24px] md:text-[48px] lg:text-[60px] font-[600] text-white text-center max-w-4xl mb-4 md:mb-6 lg:mb-8 leading-tight">
            Own a part of ReMroph AI, be the stakeholder.
          </h2>

          <Link
            onClick={handleClick}
            style={{
              boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
              backdropFilter: " blur(6.5px)",
            }}
            href="/purchase"
            className="px-6 py-3 text-[20px] font-[400] md:px-8 md:py-4 bg-[#A428E70D] w-[270px] hover:bg-opacity-30 h-[66px] flex justify-center items-center text-[#DEDDFF]  rounded-[12px] border border-white/20 border-opacity-30 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
