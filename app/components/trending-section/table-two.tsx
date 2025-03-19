"use client";
import { TokenData } from "@/app/libs/types";
import Image from "next/image";
import { useState } from "react";

interface TokenTableProps {
  data: TokenData[];
}

export const TokenTableTwo: React.FC<TokenTableProps> = ({ data }) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(16 / itemsPerPage);
  const displayedData = data.slice(0, 16);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayedData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getTextColorClass = (value: string) => {
    if (value.startsWith("-")) return "text-red-500";
    if (value.includes("%") && !value.startsWith("-")) return "text-green-500";
    return "";
  };

  return (
    <div className=" px-2 sm:px-4 lg:px-8">
      <div className="border border-gray-600 rounded-lg shadow-lg ">
        <div className="w-full overflow-x-auto">
          {/* Table Wrapper */}
          <table className="w-full min-w-full text-sm text-left font-inter">
            <thead>
              <tr className="border-b border-gray-600 text-white">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3 whitespace-nowrap">TOKEN</th>
                <th className="px-4 py-3">PRICE $</th>
                <th className="px-4 py-3 hidden sm:table-cell">AGE</th>
                <th className="px-4 py-3 hidden md:table-cell">TXNS</th>
                <th className="px-4 py-3 hidden lg:table-cell">VOLUME</th>
                <th className="px-4 py-3 hidden xl:table-cell">MAKERS</th>
                <th className="px-4 py-3">5M</th>
                <th className="px-4 py-3">1H</th>
                <th className="px-4 py-3">6H</th>
                <th className="px-4 py-3">24H</th>
                <th className="px-4 py-3 hidden lg:table-cell">LIQUIDITY</th>
                <th className="px-4 py-3 hidden xl:table-cell">MCPA</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-600 hover:bg-gray-800"
                >
                  <td className="px-4 py-3 text-white">{item.id}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Image
                      src="/icons.png"
                      height={30}
                      width={30}
                      alt="profile"
                      className="object-cover shrink-0"
                    />
                    <span className="text-white break-words">{item.token}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{item.price}</td>
                  <td className="px-4 py-3 hidden sm:table-cell text-gray-400">
                    {item.age}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-400">
                    {item.txns}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-400">
                    {item.volume}
                  </td>
                  <td className="px-4 py-3 hidden xl:table-cell text-gray-400">
                    {item.makers}
                  </td>
                  <td className={`px-4 py-3 ${getTextColorClass(item.fiveM)}`}>
                    {item.fiveM}
                  </td>
                  <td className={`px-4 py-3 ${getTextColorClass(item.oneH)}`}>
                    {item.oneH}
                  </td>
                  <td className={`px-4 py-3 ${getTextColorClass(item.sixH)}`}>
                    {item.sixH}
                  </td>
                  <td
                    className={`px-4 py-3 ${getTextColorClass(
                      item.twentyFourH
                    )}`}
                  >
                    {item.twentyFourH}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-gray-400">
                    {item.liquidity}
                  </td>
                  <td className="px-4 py-3 hidden xl:table-cell text-gray-400">
                    {item.mcpa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 text-white">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="mx-2 p-2 rounded disabled:opacity-50"
        >
          ⬅️
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 p-2 rounded disabled:opacity-50"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};
