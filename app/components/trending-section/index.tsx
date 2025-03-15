"use client";
import { TokenData } from "@/app/libs/types";
import Image from "next/image";
import { useState } from "react";

interface TokenTableProps {
  data: TokenData[];
  itemsPerPage?: number;
}

export const TokenTable: React.FC<TokenTableProps> = ({
  data,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page

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
    <div className="bg-transparent max-w-[1220px] mx-auto rounded-lg overflow-hidden p-4">
      <h1 className="text-white text-[24px] md:text-[48px] xl:text-[60px] font-jakarta  font-[600] mb-[48px]">
        Trending Tokens
      </h1>

      <div
        style={{
          boxShadow: "0px 0px 55px 0px #C5B9F626 inset",
        }}
        className="overflow-x-auto p-[26px] border border-[#C5B9F64D] rounded-[12px] "
      >
        <table className="w-full">
          <thead>
            <tr className="border-b  border-[#C5B9F729] text-white">
              <th className="px-4 py-4 text-[14px] font-[500] text-left">#</th>
              <th className="px-4 py-4 text-[14px] font-[500] text-left">
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
              <th className="px-4 py-4 text-[14px] font-[500] text-left">5M</th>
              <th className="px-4 py-4 text-[14px] font-[500] text-left">1H</th>
              <th className="px-4 py-4 text-[14px] font-[500] text-left">6H</th>
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
                <td className="px-4 py-4 text-white">{item.id}</td>
                <td className="px-4 py-4">
                  <div className="flex  gap-2 items-center">
                    <div className="h-[32px] w-[32px] mr-2 ">
                      <Image
                        src={"/icons.png"}
                        height={30}
                        width={30}
                        alt="profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-white whitespace-nowrap">
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
                  className={`px-4 py-4 ${getTextColorClass(item.twentyFourH)}`}
                >
                  {item.twentyFourH}
                </td>
                <td className="px-4 py-4 text-[#FFFFFF99]">{item.liquidity}</td>
                <td className="px-4 py-4 text-[#FFFFFF99]">{item.mcpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-4 text-white">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="mx-1 px-2 py-1 text-[#2172E5] text-[20px] rounded disabled:opacity-50"
          >
            ←
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="mx-1 px-2 py-1 text-[#2172E5] text-[20px] rounded disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
