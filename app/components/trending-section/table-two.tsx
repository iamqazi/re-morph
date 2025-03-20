"use client";
import { TokenData } from "@/app/libs/types";
import Image from "next/image";
import { useState } from "react";

interface TokenTableProps {
  data: TokenData[];
}

export const TokenTableTwo: React.FC<TokenTableProps> = ({ data }) => {
  const itemsPerPage = 4; // Explicitly setting items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(16 / itemsPerPage);
  const displayedData = data.slice(0, 16);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayedData.slice(indexOfFirstItem, indexOfLastItem);

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to determine the text color based on value
  const getTextColorClass = (value: string) => {
    if (value.startsWith("-")) return "text-[#FF0000]";
    if (value.includes("%") && !value.startsWith("-")) return "text-[#09FF00]";
    return "";
  };

  return (
    <div className="bg-transparent  rounded-lg mb-[100px] ">
      <div
        style={{ boxShadow: "0px 0px 55px 0px #C5B9F626 inset" }}
        className="p-[26px] border border-[#C5B9F64D] rounded-[12px] overflow-x-auto"
      >
        {/* Table Wrapper */}
        <div className=" overflow-x-auto">
          <table className=" w-auto text-[14px] font-inter">
            <thead>
              <tr className="border-b border-[#C5B9F729] text-white">
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  #
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left whitespace-nowrap">
                  TOKEN
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  PRICE $
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  AGE
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  TXNS
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  VOLUME
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  MAKERS
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  5M
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  1H
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  6H
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  24H
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  LIQUIDITY
                </th>
                <th className="px-4 py-4 text-[14px] font-[500] text-left">
                  MCPA
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b py-[20px] border-[#C5B9F729] hover:bg-navy-800"
                >
                  <td className="px-4 font-inter text-[14px] py-4 text-white">
                    {item.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2 items-center">
                      <div className="h-[32px] w-[32px] mr-2 flex-shrink-0">
                        <Image
                          src={"/icons.png"}
                          height={30}
                          width={30}
                          alt="profile"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="whitespace-nowrap text-white">
                        {item.token}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.price}</td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.age}</td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.txns}</td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.volume}</td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.makers}</td>
                  <td className={`px-4 py-4 ${getTextColorClass(item.fiveM)}`}>
                    {item.fiveM}
                  </td>
                  <td className={`px-4 py-4 ${getTextColorClass(item.oneH)}`}>
                    {item.oneH}
                  </td>
                  <td className={`px-4 py-4 ${getTextColorClass(item.sixH)}`}>
                    {item.sixH}
                  </td>
                  <td
                    className={`px-4 py-4 ${getTextColorClass(
                      item.twentyFourH
                    )}`}
                  >
                    {item.twentyFourH}
                  </td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">
                    {item.liquidity}
                  </td>
                  <td className="px-4 py-4 text-[#FFFFFF99]">{item.mcpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 text-white">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="mx-1 px-2 py-1 rotate-180 cursor-pointer rounded disabled:opacity-50"
          >
            <Image src={"/right.png"} height={20} width={16} alt="arrow" />
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="mx-1 px-2 py-1 cursor-pointer text-[17px] rounded disabled:opacity-50"
          >
            <Image src={"/right.png"} height={20} width={16} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
