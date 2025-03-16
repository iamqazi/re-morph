"use client";
import React, { useState } from "react";
import { Filter, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { transactions } from "@/app/libs/data";

const CryptoTransactionsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  // Get current transactions
  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#17171C] rounded-[12px] text-white w-full">
      {/* Header with tabs */}
      <div className="flex items-center px-4 py-2 text-sm border-b border-[#17171C] overflow-x-auto">
        <button className="flex items-center mr-6 font-semibold whitespace-nowrap">
          <span className="mr-1">☰</span>
          Transactions
        </button>

        <button className="flex items-center mr-6 font-semibold whitespace-nowrap">
          <span className="mr-1">♦</span>
          Holders (985)
        </button>

        <div className="ml-auto flex items-center">
          <button className="p-1">—</button>
          <button className="p-1 ml-2">^</button>
        </div>
      </div>

      {/* Table with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table header */}
          <thead>
            <tr className="text-xs border-b bg-[#2E2E33] border-[#17171C]">
              <th className="px-4 py-2 text-left font-semibold">
                <div className="flex items-center">
                  <span>DATE</span>
                  <Filter size={12} className="ml-1 opacity-60" />
                  <span className="w-4 h-4 ml-2 text-gray-500 bg-transparent">
                    ↕
                  </span>
                </div>
              </th>
              <th className="px-4 w-[100px] py-2 text-left font-semibold">
                <div className="flex items-center">
                  <span>TYPE</span>
                  <Filter size={12} className="ml-1 opacity-60" />
                </div>
              </th>
              <th className="px-4 py-2 w-[350px] text-right font-semibold">
                <div className="flex items-center justify-end">
                  <span>USD</span>
                  <Filter size={12} className="ml-1 opacity-60" />
                </div>
              </th>
              <th className="px-4 py-2 w-[200px]  text-right font-semibold">
                <div className="flex items-center justify-end">
                  <span>RMPH AI</span>
                  <Filter size={12} className="ml-1 opacity-60" />
                </div>
              </th>
              <th className="px-4 py-2 w-[200px] text-right font-semibold">
                <div className="flex items-center justify-end">
                  <span>SOL</span>
                  <Filter size={12} className="ml-1 opacity-60" />
                </div>
              </th>
              <th className="px-4 py-2 w-[200px] text-right font-semibold">
                <div className="flex items-center justify-end">
                  <span>PRICE</span>
                  <span className="ml-1 rounded-full border border-gray-600 px-1 text-xs">
                    $
                  </span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-semibold">
                <span>TXN</span>
              </th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="text-sm">
            {currentTransactions.map((tx) => (
              <tr key={tx.id} className="border border-[#2E2E33]">
                <td className="px-4 border border-[#2E2E33] py-3 text-gray-400">
                  {tx.time}
                </td>
                <td
                  className={`px-4 py-3 ${
                    tx.type === "Buy" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {tx.type}
                </td>
                <td className="border border-[#2E2E33] px-4 py-3 relative">
                  {/* Background progress bar */}
                  <div
                    className={`absolute top-0 left-0 bottom-0 ${
                      tx.type === "Buy" ? "bg-green-900/30" : "bg-red-900/30"
                    }`}
                    style={{ width: `${tx.usdProgress}%` }}
                  ></div>
                  {/* Text on top of progress bar */}
                  <span
                    className={`relative z-10 ${
                      tx.type === "Buy" ? "text-green-500" : "text-red-500"
                    } block text-right`}
                  >
                    {tx.usd.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </td>
                <td className="border border-[#2E2E33] px-4 py-3 text-green-500 text-right">
                  {tx.rmphAi.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td className="border border-[#2E2E33] px-4 py-3 text-gray-200 text-right">
                  {tx.sol.toLocaleString(undefined, {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  })}
                </td>
                <td
                  className={`border border-[#2E2E33] px-4 py-3 ${
                    tx.type === "Buy" ? "text-green-500" : "text-red-500"
                  } text-right`}
                >
                  ${tx.price.toFixed(8)}
                </td>

                <td className="border border-[#2E2E33] px-4 py-3">
                  <div className="flex items-center justify-end">
                    <ExternalLink size={14} className="text-white/50" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[#2E2E33]">
        <div className="text-sm text-gray-400">
          Showing {indexOfFirstTransaction + 1} to{" "}
          {Math.min(indexOfLastTransaction, transactions.length)} of{" "}
          {transactions.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-1 rounded ${
              currentPage === 1
                ? "text-gray-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page numbers */}
          <div className="flex space-x-1">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-2 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-[#2E2E33] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`p-1 rounded ${
              currentPage === totalPages
                ? "text-gray-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoTransactionsTable;
