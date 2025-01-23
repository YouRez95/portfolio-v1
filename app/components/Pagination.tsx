import React from "react";
import { MAX_ITEMS } from "../constants/blogs";
import Link from "next/link";
import { bagel } from "@/fonts/fonts";

type Props = {
  totalBlogs: number;
  page?: string;
  category?: string;
};

const Pagination = ({ totalBlogs, page, category }: Props) => {
  const totalPages = Math.ceil(totalBlogs / MAX_ITEMS);
  const link = category ? `/blogs/?cat=${category}&page=` : `/blogs/?page=`;
  const currentPage = parseInt(page || "1");

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 2;

    pages.push(1);

    if (currentPage > maxVisiblePages + 1) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(
      totalPages - 1,
      currentPage + Math.floor(maxVisiblePages / 2)
    );

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - maxVisiblePages) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-4 py-2">...</span>
          ) : (
            <Link
              href={`${link}${page}`}
              className={`w-3 h-3 p-4 flex items-center justify-center rounded-full border ${bagel.className} ${
                page === currentPage
                  ? "bg-secondary text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Pagination;
