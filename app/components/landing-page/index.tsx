"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../main-hero-section";
import LaunchpadSection from "../launched-section";
import Pricing from "../pricing-section";
import Team from "../team-section";
import Footer from "../shared-ui/footer";
import Timeline from "../timeline";
import CTASection from "../cta-section";
import Image from "next/image";

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (you can adjust this timing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time, adjust as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // While loading, show the GIF
  if (isLoading) {
    return (
      <div className="bg-[#030128] min-h-screen flex items-center justify-center">
        <Image
          src="/loading.gif" // Assuming your GIF is named 'loading.gif' in the public folder
          alt="Loading..."
          className="w-full min-h-screen " // Adjust size as needed
          width={100}
          height={100}
        />
      </div>
    );
  }

  // Once loaded, show the actual content
  return (
    <div className="bg-[#030128]">
      <HeroSection />
      <LaunchpadSection />
      <Pricing />
      <Timeline />
      <Team />
      <div className="my-[60px]">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
