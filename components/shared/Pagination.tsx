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

    // Always show page 1
    pages.push(
      <Button
        key={1}
        variant={currentPage === 1 ? "outline" : "secondary"}
        onClick={() => onPageChange(1)}
      >
        1
      </Button>
    );

    // Show page 2
    if (totalPages > 1) {
      pages.push(
        <Button
          key={2}
          variant={currentPage === 2 ? "outline" : "secondary"}
          onClick={() => onPageChange(2)}
        >
          2
        </Button>
      );
    }

    // Add "..." if more than 3 pages
    if (totalPages > 3) {
      pages.push(
        <Button variant={"secondary"} key="dots" className="px-4 text-muted-foreground">
          ...
        </Button>
      );

      // Last page
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
        <ArrowDownSVG className="text-primary rotate-90"/>
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
        <ArrowDownSVG className="text-primary -rotate-90"/>
      </Button>
    </nav>
  );
};

export default Pagination;
