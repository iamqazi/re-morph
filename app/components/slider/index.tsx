import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Added Autoplay module
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./slider.css";

// Define the team member interface
interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

// Define the props interface
interface SwiperSliderProps {
  teamMembers?: TeamMember[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ teamMembers }) => {
  // Default team members
  const defaultTeamMembers: TeamMember[] = [
    { id: 1, name: "Gotln", designation: "Founder/CEO", image: "/teams.svg" },
    {
      id: 2,
      name: "George",
      designation: "Co-Founder / CRO",
      image: "/member2.svg",
    },
    {
      id: 3,
      name: "Lucas",
      designation: "Co-founder / Full-stack",
      image: "/member3.svg",
    },
    {
      id: 4,
      name: "George",
      designation: "Co-founder / CTO",
      image: "/member4.svg",
    },
  ];

  const members = teamMembers || defaultTeamMembers;

  // State to track slidesPerView and spaceBetween
  const [slidesConfig, setSlidesConfig] = useState({
    slidesPerView: 1,
    spaceBetween: 10,
  });

  useEffect(() => {
    const updateSlidesConfig = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesConfig({ slidesPerView: 3, spaceBetween: 30 });
      } else if (width >= 768) {
        setSlidesConfig({ slidesPerView: 2, spaceBetween: 20 });
      } else {
        setSlidesConfig({ slidesPerView: 1, spaceBetween: 10 });
      }
    };

    // Initial setup
    updateSlidesConfig();

    // Attach resize listener
    window.addEventListener("resize", updateSlidesConfig);
    return () => window.removeEventListener("resize", updateSlidesConfig);
  }, []);

  return (
    <div
      id="about"
      className="w-full max-w-[1220px] mx-auto px-4 xl:px-0 mt-10"
    >
      <div className="text-center mb-[60px]">
        <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-jakarta font-medium text-white">
          Our Best <span className="text-[#C5B9F6]"> Team</span>
        </h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={slidesConfig.slidesPerView}
        spaceBetween={slidesConfig.spaceBetween}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {members.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex items-center justify-center py-4"
          >
            <div
              style={{ boxShadow: "0px 0px 62.76px 0px #C5B9F626 inset" }}
              className="relative bg-[#14102F] flex justify-center items-center flex-col rounded-2xl overflow-hidden shadow-lg border border-[#C5B9F64D] text-center w-full h-full"
            >
              {/* Member Image */}
              <div className="px-5 py-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              {/* Member Info */}
              <div className="mb-6 text-white">
                <h3 className="text-[26px] font-[500] text-[#C5B9F6] font-jakarta">
                  {member.name}
                </h3>
                <p className="text-[16px] font-jakarta font-[500] text-white">
                  {member.designation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-6 pb-6"></div>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
