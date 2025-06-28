import React from "react";
import { Button } from "../ui/button";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const renderPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "outline" : "secondary"}
            onClick={() => onPageChange(i)}
          >
            {i}
          </Button>
        );
      }
    } else {
      // Always show first page
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "outline" : "secondary"}
          onClick={() => onPageChange(1)}
        >
          1
        </Button>
      );

      // Show left dots if needed
      if (currentPage > 3) {
        pages.push(
          <Button key="dots1" variant="secondary" disabled>
            ...
          </Button>
        );
      }

      // Show current, previous, next pages
      const middlePages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ].filter((p) => p > 1 && p < totalPages);

      middlePages.forEach((page) => {
        pages.push(
          <Button
            key={page}
            variant={currentPage === page ? "outline" : "secondary"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        );
      });

      // Show right dots if needed
      if (currentPage < totalPages - 2) {
        pages.push(
          <Button key="dots2" variant="secondary" disabled>
            ...
          </Button>
        );
      }

      // Always show last page
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "outline" : "secondary"}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <nav className="flex items-center justify-center space-x-1">
      {/* Prev Button */}
      <Button
        variant="secondary"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowDownSVG className="text-primary rotate-90" />
      </Button>

      {/* Pages */}
      {renderPages()}

      {/* Next Button */}
      <Button
        variant="secondary"
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        <ArrowDownSVG className="text-primary -rotate-90" />
      </Button>
    </nav>
  );
};

export default Pagination;
