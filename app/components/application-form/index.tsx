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
    // New fields for Section 3
    projectStatus: "",
    hasPartnership: "",
    technicalCapabilities: "",
    partnerships: "",
  });

  // Current date for validation
  const currentDate = new Date();
  const minDate = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

  // Error state
  const [errors, setErrors] = useState({
    projectName: "",
    description: "",
    businessModel: "",
    founderFullName: "",
    emailAddress: "",
    launchDate: "",
  });

  // Toggle state
  const [isSolanaSelected, setIsSolanaSelected] = useState(true);

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

  // Handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, launchDate: value }));

    // Clear date error
    if (errors.launchDate) {
      setErrors((prev) => ({ ...prev, launchDate: "" }));
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

  // Validate date
  const validateDate = (dateString: string) => {
    if (!dateString) return "Launch date is required";

    const selectedDate = new Date(dateString);
    if (isNaN(selectedDate.getTime())) return "Invalid date format";

    if (selectedDate < currentDate) {
      return "Launch date cannot be in the past";
    }

    return "";
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

      // Validate date
      const dateError = validateDate(formData.launchDate);
      if (dateError) {
        newErrors.launchDate = dateError;
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
      if (!formData.hasPartnership.trim()) {
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
      <div className="absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20 xl:px-0 px-[16px]">
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
      <div className="relative z-10 mt-[120px] w-full max-w-[1226px] mx-auto ">
        {/* Progress indicator */}
        <div className="mb-8 text-center">
          <p className="text-[#FEFCFC] font-jakarta text-[16px] mb-4">
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
          className="bg-transparent border border-white/15 rounded-xl py-[62px] px-[24px] md:px-[76px] shadow-xl w-full"
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
                <p className="text-[#F4EAEA] max-w-[860px] font-jakarta text-[14px]">
                  ✅ By submitting this form, you agree that your project will
                  undergo verification before approval. We prioritize serious
                  builders with a clear vision and strong execution plan.
                </p>
              </div>
              <div className="flex items-center">
                <p className=" text-white font-jakarta font-[700] text-[14px]">
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                    <label className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2">
                      Blockchain (Only supports Solana at the moment)
                    </label>
                    <div className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta  text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border ">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-6 border border-[#C5B9F7] rounded-full p-[3px] cursor-pointer ${
                            isSolanaSelected ? "bg-[#7E61FF]" : "bg-[#C4C4C41A]"
                          }`}
                          onClick={toggleBlockchain}
                        >
                          <div
                            className={`bg-[#C5B9F7] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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

                  {/* Launch Date - Replace with proper date picker */}
                  <div>
                    <label
                      htmlFor="launchDate"
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      Expected launch date
                    </label>
                    <div className="relative">
                      <input
                        id="launchDate"
                        name="launchDate"
                        aria-placeholder="hh"
                        placeholder="month/day/year"
                        type="date"
                        min={minDate}
                        value={formData.launchDate}
                        onChange={handleDateChange}
                        className={`w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta text-[15px] italic text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2] ${
                          errors.launchDate ? "border-red-500" : ""
                        } [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert`}
                      />
                      {errors.launchDate && (
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.launchDate}
                        </p>
                      )}
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      maxLength={255}
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
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
                  {/* Technical Capabilities */}
                  <div>
                    <label
                      htmlFor="technicalCapabilities"
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      Project capabilities
                    </label>
                    <textarea
                      id="technicalCapabilities"
                      name="technicalCapabilities" // Unique name
                      placeholder="Description (optional)"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      What is your project’s main goal?
                    </label>
                    <textarea
                      id="partnerships"
                      name="partnerships" // Unique name
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.partnerships}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>

                  {/* Project Status - Radio buttons */}
                  <div>
                    <label className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2">
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
                              className={`w-6 h-6 rounded-full  ${
                                formData.projectStatus === option
                                  ? "bg-[#7E61FF] border-[#7E61FF]"
                                  : "bg-[#D9D9D933] "
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
                    <label className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2">
                      What is your project&apos;s main goal?
                    </label>
                    <div className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta text-[15px] text-white rounded-md border-white/30 border">
                      <div className="flex gap-8">
                        {["Yes", "No"].map((option) => (
                          <div key={option} className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full  ${
                                formData.hasPartnership === option
                                  ? "bg-[#7E61FF] border-[#7E61FF]"
                                  : "bg-[#D9D9D933]"
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      Can you showcase your technical capabilities?
                    </label>
                    <textarea
                      id="technicalCapabilities"
                      name="technicalCapabilities" // Unique name
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
                      className="block text-[16px] md:text-[24px] font-jakarta font-[400] text-white mb-2"
                    >
                      Any partnerships on board?
                    </label>
                    <textarea
                      id="partnerships"
                      name="partnerships" // Unique name
                      placeholder="Long replay text"
                      rows={3}
                      value={formData.partnerships}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#C4C4C41A] font-[400] font-jakarta italic text-[15px] text-white/60 placeholder:text-white/60 rounded-md border-white/30 border focus:outline-none focus:ring-1 focus:ring-[#8258F2]"
                    />
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="pt-4 flex gap-4 md:flex-row flex-col justify-between">
                {currentStep > 1 && (
                  <button
                    style={{
                      boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
                      backdropFilter: " blur(6.5px)",
                    }}
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-3 cursor-pointer text-white md:w-[334px] md:text-[20px] h-[55px] text-[14px] uppercase border border-white/25 font-medium rounded-[12px] "
                  >
                    go to the previous page
                  </button>
                )}

                <button
                  style={{
                    background:
                      "linear-gradient(180deg, #6159D9 0%, #401DCB 100%)",

                    order: currentStep === 1 ? -1 : 1,
                  }}
                  type="submit"
                  className={`px-6 py-4 cursor-pointer md:text-[20px] h-[55px] text-[14px] md:w-[334px] border justify-center flex items-center gap-2 border-white/20 text-white font-medium rounded-[12px]`}
                >
                  {currentStep < 3
                    ? "GO TO NEXT SECTION"
                    : "SUBMIT APPLICATION"}
                  <Image
                    src={"/arrow.png"}
                    height={20}
                    width={25}
                    alt="arrow"
                  />
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
