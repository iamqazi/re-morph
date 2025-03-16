"use client";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Select, { StylesConfig } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

const Items: OptionType[] = [
  { value: "All Items", label: "All Items" },
  { value: "SomeItems", label: "SomeItems" },
  { value: "OtherItems", label: "SomeItems" },
];
const Listed: OptionType[] = [
  { value: "Recently Listed", label: "All Items" },
  { value: "Old Listed", label: "Old Listed" },
];
const Filters: OptionType[] = [
  { value: "Filters 1", label: "Filters 1" },
  { value: "Filters 1", label: "Filters 1" },
  { value: "Filters 1", label: "Filters 1" },
];

interface ButtonProps {
  options: OptionType[];
  placeholder: string;
}

// Custom styles object
const customStyles: StylesConfig<OptionType, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#f0f0f00",
    borderColor: state.isFocused ? "#FFFFFFF" : "#FFFFFF26",
    boxShadow: "inset 0 0 20px 0px #FFFFFF33",
    "&:hover": {
      borderColor: "#FFFFFF",
    },
    borderRadius: "6px",
    padding: "6px 8px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#ffffff0",
    border: "1px solid #8e8e8e",
    borderColor: "#FFFFFF26",
    boxShadow: "inset 0 0 20px 0px #FFFFFF33",
    "&:hover": {
      borderColor: "#ffffffaa",
    },
    borderRadius: "6px",
    marginTop: 6,
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#68686858" : "#ffffff0",
    color: state.isFocused ? "#fff" : "#FFFFFF80",
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
};

export const Dropdown: React.FC<ButtonProps> = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      styles={customStyles}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default function SearchBar() {
  return (
    <section className="max-w-[1053px] flex md:flex-row flex-col gap-[12px] mx-auto mt-[58px] px-10 ">
      <div className="flex-1 border-[#FFFFFF26] border-1 rounded-[6px] shadow-[inset_0px_0px_20px_0px_#C5B9F626] flex overflow-hidden items-center">
        <input
          type="text"
          className=" py-2.5 px-3.5 text-white/50 placeholder:text-white/50 flex-1 outline-none"
          placeholder="Search for Tokens"
        />
        <BiSearch className="text-3xl mr-3.5 text-white " />
      </div>
      <div className="flex gap-3 flex-wrap">
        <Dropdown options={Items} placeholder="All Items" />
        <Dropdown options={Listed} placeholder="Recently Listed" />
        <Dropdown options={Filters} placeholder="Filters" />
      </div>
    </section>
  );
}
