import React, { useState } from "react";
import { Button } from "../../ui/button";
import ReviewsTabs from "./ReviewsTabs";
import { customerReviews } from "@/static";
import CustomerReview from "./CustomerReview";
import ReviewsFilter from "./ReviewsFilter";
import Pagination from "@/components/shared/Pagination";

const ReviewsList = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "photo_video" | "description"
  >("all");
  const [page, setPage] = useState(1);
  const total = 10;
  return (
    <div>
      {/* filter and review list */}
      <div className="flex gap-12 w-full mt-8">
        <ReviewsFilter />

        {/* Customer reviews List  */}
        <div className="w-full">
          <h1 className="font-bold mb-4 text-lg">Review Lists</h1>
          {/* Filetration tabs */}
          <ReviewsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex flex-col gap-4 mt-8">
            {customerReviews.map((cReview, index) => {
              return (
                <>
                  <CustomerReview customerReview={cReview} key={cReview.id} />
                  {index !== customerReviews.length - 1 && (
                    <div className="footerDashLine h-1 my-4" />
                  )}
                </>
              );
            })}
            <Pagination
              currentPage={page}
              totalPages={total}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
