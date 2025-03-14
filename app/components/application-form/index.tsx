"use client";
import React, { useState, FormEvent } from "react";
import NavBar from "../shared-ui/navbar";
import Image from "next/image";

const RemorphApplicationForm = () => {
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    // Section 1
    projectName: "",
    projectLinks: "",
    blockchain: "Solana",
    tokenContract: "",
    launchDate: "",

    // Section 2
    // New fields for Team verification
    teamVerification: "",
    founderFullName: "",
    emailAddress: "",
    telegramHandle: "",
    projectLinksExtended: "",
    teamExperience: "",

    // Section 3
    businessModel: "",
    marketingStrategy: "",
    roadmap: "",
    additionalInfo: "",
    // New fields for Section 3
    projectStatus: "",
    hasPartnership: "",
    technicalCapabilities: "",
    partnerships: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    projectName: "",
    description: "",
    businessModel: "",
    founderFullName: "",
    emailAddress: "",
  });

  // Toggle state
  const [isSolanaSelected, setIsSolanaSelected] = useState(true);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle checkbox/radio changes
  const handleOptionChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle blockchain selection
  const toggleBlockchain = () => {
    setIsSolanaSelected(!isSolanaSelected);
    setFormData((prev) => ({
      ...prev,
      blockchain: isSolanaSelected ? "Solana" : "",
    }));
  };

  // Form validation for each step
  const validateStep = (step: number) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (step === 1) {
      if (!formData.projectName.trim()) {
        newErrors.projectName = "Project name is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.emailAddress.trim()) {
        newErrors.description = "Email is required";
        isValid = false;
      }
      if (!formData.founderFullName.trim()) {
        newErrors.founderFullName = "Founder name is required";
        isValid = false;
      }
      if (!formData.emailAddress.trim()) {
        newErrors.emailAddress = "Email address is required";
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.businessModel.trim()) {
        newErrors.businessModel = "Business model is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        // Submit the form if on last step
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
      }
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 bg-[#030128] ">
      <div className="absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20">
        <NavBar />
      </div>
      <Image
        src={"/left-glow.png"}
        height={821}
        width={821}
        alt="glow"
        className="absolute top-0 z-10 left-0"
      />
      <Image
        src={"/right-glow.png"}
        height={821}
        width={821}
        alt="glow"
        className="absolute top-0 z-10 right-0"
      />
      <div className="relative z-10 mt-[120px] w-full max-w-[1220px] mx-auto px-4">
        {/* Progress indicator */}
        <div className="mb-8 text-center">
          <p className="text-[#FEFCFC] text-[16px] mb-4">
            Section {currentStep} of 3
          </p>
          <div className="flex justify-center items-center ">
            <div
              className={`w-[22px] h-[22px] ${
                currentStep >= 1
                  ? "bg-[#DEDDFF]"
                  : "bg-transparent border border-[#DEDDFF]"
              } rounded-full`}
            ></div>
            <div className="w-12 h-0.5 bg-[#DEDDFF]"></div>
            <div
              className={`w-[22px] h-[22px] ${
                currentStep >= 2
                  ? "bg-[#DEDDFF]"
                  : "bg-transparent border border-[#DEDDFF]"
              } rounded-full`}
            ></div>
            <div className="w-12 h-[2px] bg-[#DEDDFF]"></div>
            <div
              className={`w-[22px] h-[22px] ${
                currentStep >= 3
                  ? "bg-[#DEDDFF]"
                  : "bg-transparent border border-[#DEDDFF]"
              } rounded-full`}
            ></div>
          </div>
        </div>

        {/* Form container */}
        <div
          style={{
            boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
            backdropFilter: "blur(274.70001220703125px)",
            backgroundImage: "url('/container-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-transparent border border-white/15 rounded-xl p-8 shadow-xl w-full"
        >
          {currentStep === 1 && (
            <h1 className="text-[24px] md:text-[40px] font-jakarta font-[600] text-white mb-4">
              Remorph application form
            </h1>
          )}

          {currentStep === 1 && (
            <div className="border-b border-white/65 pb-[32px] mb-[32px]">
              <h2 className="text-[#DEDDFF] uppercase text-[16px] font-[600] font-jakarta tracking-wider mb-4">
                VERIFICATION & AGREEMENT
              </h2>
              <div className="flex items-start mb-2">
                <p className="ml-2 text-[#F4EAEA] font-jakarta text-[14px]">
                  ✅ By submitting this form, you agree that your project will
                  undergo verification before approval. We prioritize serious
                  builders with a clear vision and strong execution plan.
                </p>
              </div>
              <div className="flex items-center">
                <p className="ml-2 text-white font-jakarta font-[700] text-[14px]">
                  📩 After submission, our team will review your application and
                  get in touch for further verification.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* === SECTION 1 === */}
              {currentStep === 1 && (
                <>
                  {/* Project Name */}
                  <div>
                    <label
                      htmlFor="projectName"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Project Name
                    </label>
                    <input
                      id="projectName"
                      name="projectName"
                      type="text"
                      placeholder="Short answer text"
                      value={formData.projectName}
                      onChange={handleChange}
                      className={`w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2] ${
                        errors.projectName ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.projectName && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.projectName}
                      </p>
                    )}
                  </div>

                  {/* Project Links */}
                  <div>
                    <label
                      htmlFor="projectLinks"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Project links (Website, Twitter, Telegram, Discord, etc.)
                    </label>
                    <textarea
                      id="projectLinks"
                      name="projectLinks"
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.projectLinks}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Blockchain */}
                  <div>
                    <label className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2">
                      Blockchain (Only supports Solana at the moment)
                    </label>
                    <div className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border ">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-6 rounded-full p-1 cursor-pointer ${
                            isSolanaSelected ? "bg-purple-500" : "bg-gray-700"
                          }`}
                          onClick={toggleBlockchain}
                        >
                          <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                              isSolanaSelected
                                ? "translate-x-4"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </div>
                        <span className="ml-3 text-white">Solana</span>
                      </div>
                    </div>
                  </div>

                  {/* Token Contract */}
                  <div>
                    <label
                      htmlFor="tokenContract"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Token contract (if already deployed)
                    </label>
                    <input
                      id="tokenContract"
                      name="tokenContract"
                      type="text"
                      placeholder="Short answer text"
                      value={formData.tokenContract}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Launch Date */}
                  <div>
                    <label
                      htmlFor="launchDate"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Expected launch date (if already deployed)
                    </label>
                    <div className="relative">
                      <input
                        id="launchDate"
                        name="launchDate"
                        type="text"
                        placeholder="Month/Day/Year"
                        value={formData.launchDate}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* === SECTION 2 === */}
              {currentStep === 2 && (
                <>
                  {/* Team Verification (KYC) */}
                  <div>
                    <label
                      htmlFor="teamVerification"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Team verification (kyc)
                    </label>
                    <input
                      id="teamVerification"
                      name="teamVerification"
                      type="text"
                      placeholder="Not the full procedure"
                      value={formData.teamVerification}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Full name of project founder(s) */}
                  <div>
                    <label
                      htmlFor="founderFullName"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Full name of project founder(s)
                    </label>
                    <input
                      id="founderFullName"
                      name="founderFullName"
                      type="text"
                      placeholder="Short answer text"
                      value={formData.founderFullName}
                      onChange={handleChange}
                      className={`w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2] ${
                        errors.founderFullName ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.founderFullName && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.founderFullName}
                      </p>
                    )}
                  </div>

                  {/* Email address */}
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      placeholder="add email address"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className={`w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2] ${
                        errors.emailAddress ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.emailAddress && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.emailAddress}
                      </p>
                    )}
                  </div>

                  {/* Telegram / x handle */}
                  <div>
                    <label
                      htmlFor="telegramHandle"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Telegram / x handle
                    </label>
                    <input
                      id="telegramHandle"
                      name="telegramHandle"
                      type="text"
                      placeholder="Short answer text"
                      value={formData.telegramHandle}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Project links (extended) */}
                  <div>
                    <label
                      htmlFor="projectLinksExtended"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Project links (Website, Twitter, Telegram, Discord, etc.)
                    </label>
                    <textarea
                      id="projectLinksExtended"
                      name="projectLinksExtended"
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.projectLinksExtended}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Team experience & previous projects */}
                  <div>
                    <label
                      htmlFor="teamExperience"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Team experience & previous projects
                    </label>
                    <textarea
                      id="teamExperience"
                      name="teamExperience"
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.teamExperience}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>
                </>
              )}

              {/* === SECTION 3 === */}
              {currentStep === 3 && (
                <>
                  {/* Project Status - Radio buttons */}
                  <div>
                    <label className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2">
                      What is your project&apos;s main goal?
                    </label>
                    <div className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta text-[15px] text-white rounded-md border-white/30 border">
                      <div className="flex flex-wrap gap-4">
                        {[
                          "Idea",
                          "MVP",
                          "BETA",
                          "Fully launched",
                          "Pre-launch",
                        ].map((option) => (
                          <div key={option} className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full border ${
                                formData.projectStatus === option
                                  ? "bg-[#8258F2] border-[#8258F2]"
                                  : "bg-transparent border-white/60"
                              } flex items-center justify-center cursor-pointer`}
                              onClick={() =>
                                handleOptionChange("projectStatus", option)
                              }
                            >
                              {formData.projectStatus === option && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                            <span className="ml-2 text-white">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Yes/No - Radio buttons */}
                  <div>
                    <label className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2">
                      What is your project&apos;s main goal?
                    </label>
                    <div className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta text-[15px] text-white rounded-md border-white/30 border">
                      <div className="flex gap-8">
                        {["Yes", "No"].map((option) => (
                          <div key={option} className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full border ${
                                formData.hasPartnership === option
                                  ? "bg-[#8258F2] border-[#8258F2]"
                                  : "bg-transparent border-white/60"
                              } flex items-center justify-center cursor-pointer`}
                              onClick={() =>
                                handleOptionChange("hasPartnership", option)
                              }
                            >
                              {formData.hasPartnership === option && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                            <span className="ml-2 text-white">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Capabilities */}
                  <div>
                    <label
                      htmlFor="technicalCapabilities"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Can you showcase your technical capabilities?
                    </label>
                    <textarea
                      id="technicalCapabilities"
                      name="technicalCapabilities"
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.technicalCapabilities}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Partnerships */}
                  <div>
                    <label
                      htmlFor="partnerships"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Any partnerships on board?
                    </label>
                    <textarea
                      id="partnerships"
                      name="partnerships"
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.partnerships}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Business Model */}
                  <div>
                    <label
                      htmlFor="businessModel"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Business Model
                    </label>
                    <textarea
                      id="businessModel"
                      name="businessModel"
                      placeholder="Describe your business model"
                      rows={4}
                      value={formData.businessModel}
                      onChange={handleChange}
                      className={`w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2] ${
                        errors.businessModel ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.businessModel && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.businessModel}
                      </p>
                    )}
                  </div>

                  {/* Marketing Strategy */}
                  <div>
                    <label
                      htmlFor="marketingStrategy"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Marketing Strategy
                    </label>
                    <textarea
                      id="marketingStrategy"
                      name="marketingStrategy"
                      placeholder="Describe your marketing strategy"
                      rows={3}
                      value={formData.marketingStrategy}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Roadmap */}
                  <div>
                    <label
                      htmlFor="roadmap"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Project Roadmap
                    </label>
                    <textarea
                      id="roadmap"
                      name="roadmap"
                      placeholder="Share your project roadmap"
                      rows={3}
                      value={formData.roadmap}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="block text-[16px] md:text-[18px] font-jakarta font-[400] text-white mb-2"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Any additional information you'd like to share"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="pt-4 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors duration-300"
                  >
                    PREVIOUS SECTION
                  </button>
                )}

                <button
                  type="submit"
                  className={`px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md transition-colors duration-300 shadow-lg shadow-purple-500/30 ${
                    currentStep === 1 ? "ml-auto" : ""
                  }`}
                >
                  {currentStep < 3
                    ? "GO TO NEXT SECTION"
                    : "SUBMIT APPLICATION"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemorphApplicationForm;
