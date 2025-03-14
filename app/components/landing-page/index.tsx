"use client";
import React from "react";
import HeroSection from "../main-hero-section";
import LaunchpadSection from "../launched-section";
import Pricing from "../pricing-section";
import Team from "../team-section";
import Footer from "../shared-ui/footer";
import Timeline from "../timeline";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#030128]">
      <HeroSection />
      <LaunchpadSection />
      <Pricing />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
