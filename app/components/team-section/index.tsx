"use client";
import React from "react";
import Image from "next/image";
import { teamMembers } from "@/app/libs/data";

const Team: React.FC = () => {
  return (
    <section id="about" className="bg-[#030128] py-16 px-4 md:px-8">
      {/* Section Heading */}
      <div className="text-center mb-[60px]">
        <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-jakarta font-medium text-white">
          Our Best <span className="text-[#C5B9F6]"> Team</span>
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1226px] mx-auto">
        {teamMembers.map((member) => (
          <div
            style={{
              boxShadow: "0px 0px 62.76px 0px #C5B9F626 inset",
            }}
            key={member.id}
            className="relative bg-[#14102F] flex justify-center items-center flex-col rounded-2xl overflow-hidden shadow-lg border border-[#C5B9F64D] text-center"
          >
            {/* Member Image */}
            <div className="px-[21px] py-[18px]">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className=" object-contain"
              />
            </div>

            {/* Member Info */}
            <div className="mb-[27px] text-white">
              <h3 className="text-[26px] font-[500] text-[#C5B9F6] font-jakarta">
                {member.name}
              </h3>
              <p className="text-[16px] font-jakarta font-[500] text-white">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
