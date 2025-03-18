"use client";
import React from "react";
import HeroSection from "../main-hero-section";
import LaunchpadSection from "../launched-section";
import Pricing from "../pricing-section";
import Team from "../team-section";
import Footer from "../shared-ui/footer";
import Timeline from "../timeline";
import CTASection from "../cta-section";

const LandingPage: React.FC = () => {
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
