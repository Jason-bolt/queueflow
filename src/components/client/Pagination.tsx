"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  totalCount: number;
}

const Pagination = ({ totalCount }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const totalPages = Math.ceil(totalCount / pageSize);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={"flex items-center space-x-2"}>
      <button
        onClick={() => {
          router.push(createPageURL(currentPage - 1));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        disabled={currentPage === 1}
        className="rounded-md border border-gray-300 bg-white p-2 text-gray-500 transition-colors hover:cursor-pointer hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Page Numbers */}
      <span className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => {
          router.push(createPageURL(currentPage + 1));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        disabled={currentPage === totalPages}
        className="rounded-md border border-gray-300 bg-white p-2 text-gray-500 transition-colors hover:cursor-pointer hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
