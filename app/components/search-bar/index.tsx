"use client";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Select, { StylesConfig, MultiValue, SingleValue } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

const Items: OptionType[] = [
  { value: "All Items", label: "All Items" },
  { value: "SomeItems", label: "Some Items" },
  { value: "OtherItems", label: "Other Items" },
];
const ListedOptions: { value: string; label: string }[] = [
  { value: "Recently Listed", label: "Recently Listed" },
  { value: "Liq($)", label: "Liq($)" },
  { value: "MKT Cap($)", label: "MKT Cap($)" },
  { value: "TOTAL HOLDERS", label: "TOTAL HOLDERS" },
  { value: "VOL", label: "VOL" },
];
const Filters: OptionType[] = [
  { value: "KYC", label: "KYC" },
  { value: "KYB", label: "KYB" },
  { value: "DOX", label: "DOX" },
  { value: "TEAM", label: "TEAM" },
];

interface ButtonProps {
  options: OptionType[];
  placeholder: string;
  isMulti?: boolean;
}

const customStyles: StylesConfig<OptionType, boolean> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#030128",
    borderColor: state.isFocused ? "#FFFFFFF" : "#FFFFFF26",
    boxShadow: "inset 0 0 20px 0px #FFFFFF33",
    "&:hover": {
      borderColor: "#FFFFFF",
      cursor: "pointer",
    },
    borderRadius: "6px",
    padding: "6px 8px",
    minHeight: "50px", // Changed from height to minHeight
    height: "auto", // Allow height to adjust based on content
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#030128",
    border: "1px solid #FFFFFF26",
    boxShadow: "inset 0 0 20px 0px #FFFFFF33",
    borderRadius: "6px",
    marginTop: 6,
    zIndex: 9999,
    width: "150px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#030128" : "#030128",
    color: state.isFocused ? "#fff" : "#fff",
    cursor: "pointer",
    padding: "10px 16px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#FFFFFF80",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#FFFFFF80",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#030128",
    maxWidth: "130px", // Limit width of each selected value
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#fff",
    ":hover": {
      backgroundColor: "#030128",
      color: "#fff",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    flexWrap: "wrap", // Ensure values wrap properly
    padding: "2px 8px",
    maxHeight: "120px", // Add max height with overflow for many selections
    overflow: "auto", // Add scrolling for many selections
  }),
};

export const Dropdown: React.FC<ButtonProps> = ({
  options,
  placeholder,
  isMulti = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<OptionType> | MultiValue<OptionType>
  >(isMulti ? [] : null);

  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      styles={customStyles}
      onChange={handleChange}
      placeholder={placeholder}
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
    />
  );
};

// Custom FilterSelect component using a native <select> element
const FilterSelect: React.FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<string>("Recently Listed");
  const [liqMin, setLiqMin] = useState<string>("");
  const [liqMax, setLiqMax] = useState<string>("");
  const [mktCapMin, setMktCapMin] = useState<string>("");
  const [mktCapMax, setMktCapMax] = useState<string>("");
  const [holdersMin, setHoldersMin] = useState<string>("");
  const [holdersMax, setHoldersMax] = useState<string>("");
  const [volMin, setVolMin] = useState<string>("");
  const [volMax, setVolMax] = useState<string>("");

  const handleReset = () => {
    setLiqMin("");
    setLiqMax("");
    setMktCapMin("");
    setMktCapMax("");
    setHoldersMin("");
    setHoldersMax("");
    setVolMin("");
    setVolMax("");
    setSelectedFilter("Recently Listed"); // Reset to default
  };

  const handleApply = () => {
    console.log("Applying filters:", {
      liq: { min: liqMin, max: liqMax },
      mktCap: { min: mktCapMin, max: mktCapMax },
      holders: { min: holdersMin, max: holdersMax },
      vol: { min: volMin, max: volMax },
    });
  };

  // Always show the range menu for range options
  const showRangeMenu = [
    "Liq($)",
    "MKT Cap($)",
    "TOTAL HOLDERS",
    "VOL",
  ].includes(selectedFilter);

  return (
    <div className="relative cursor-pointer">
      {/* Custom Select */}
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="cursor-pointer bg-transparent border hover:border-white border-[#FFFFFF26] h-[50px] rounded-[6px] text-[#FFFFFF80] py-2 px-3 outline-none shadow-[inset_0_0_20px_0px_#FFFFFF33] appearance-none w-[150px]"
      >
        {ListedOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#030128] cursor-pointer text-[#D3D3D3]"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Range Input Menu (always shown for range options) */}
      {showRangeMenu && (
        <div className="absolute top-[100%] left-0 mt-2 bg-[#030128] p-4 rounded-lg shadow-[inset_0_0_20px_0px_#FFFFFF33] w-[250px] z-10">
          <div className="mb-4">
            <label className="text-[#D3D3D3] text-sm mb-2 block">
              {selectedFilter}
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={
                  selectedFilter === "Liq($)"
                    ? liqMin
                    : selectedFilter === "MKT Cap($)"
                    ? mktCapMin
                    : selectedFilter === "TOTAL HOLDERS"
                    ? holdersMin
                    : volMin
                }
                onChange={(e) => {
                  if (selectedFilter === "Liq($)") setLiqMin(e.target.value);
                  else if (selectedFilter === "MKT Cap($)")
                    setMktCapMin(e.target.value);
                  else if (selectedFilter === "TOTAL HOLDERS")
                    setHoldersMin(e.target.value);
                  else setVolMin(e.target.value);
                }}
                placeholder={selectedFilter === "TOTAL HOLDERS" ? "" : "K"}
                className="bg-transparent border border-[#FFFFFF26] rounded-lg text-[#D3D3D3] placeholder:text-[#D3D3D3] py-2 px-3 w-full outline-none shadow-[inset_0_0_10px_0px_#FFFFFF33]"
              />
              <span className="text-[#D3D3D3]">to</span>
              <input
                type="text"
                value={
                  selectedFilter === "Liq($)"
                    ? liqMax
                    : selectedFilter === "MKT Cap($)"
                    ? mktCapMax
                    : selectedFilter === "TOTAL HOLDERS"
                    ? holdersMax
                    : volMax
                }
                onChange={(e) => {
                  if (selectedFilter === "Liq($)") setLiqMax(e.target.value);
                  else if (selectedFilter === "MKT Cap($)")
                    setMktCapMax(e.target.value);
                  else if (selectedFilter === "TOTAL HOLDERS")
                    setHoldersMax(e.target.value);
                  else setVolMax(e.target.value);
                }}
                placeholder={selectedFilter === "TOTAL HOLDERS" ? "" : "K"}
                className="bg-transparent border border-[#FFFFFF26] rounded-lg text-[#D3D3D3] placeholder:text-[#D3D3D3] py-2 px-3 w-full outline-none shadow-[inset_0_0_10px_0px_#FFFFFF33]"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleReset}
              className="bg-[#2A2A2A] text-[#D3D3D3] py-1 px-2 rounded-lg hover:bg-[#3A3A3A]"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="bg-white text-black py-1 px-2 rounded-lg hover:bg-gray-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function SearchBar() {
  return (
    <section className="max-w-[1053px] flex md:flex-row flex-col gap-[12px] mx-auto mt-[58px] px-10">
      <div className="flex-1 border-[#FFFFFF26] border-1 rounded-[6px] shadow-[inset_0px_0px_20px_0px_#C5B9F626] flex overflow-hidden items-center">
        <input
          type="text"
          className="py-2.5 px-3.5 text-white/50 placeholder:text-white/50 flex-1 outline-none"
          placeholder="Search for Tokens"
        />
        <BiSearch className="text-3xl mr-3.5 cursor-pointer text-white" />
      </div>
      <div className="flex gap-3 flex-wrap">
        <Dropdown options={Items} placeholder="All Items" />
        <FilterSelect />
        <Dropdown options={Filters} placeholder="Filters" isMulti={true} />
      </div>
    </section>
  );
}
