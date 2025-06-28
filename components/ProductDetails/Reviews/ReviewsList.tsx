import React, { useState } from "react";
import ReviewsTabs from "./ReviewsTabs";
import { customerReviews } from "@/static";
import CustomerReview from "./CustomerReview";
import ReviewsFilter from "./ReviewsFilter";
import Pagination from "@/components/shared/Pagination";
import ReviewFilterDrawer from "./ReviewFilterDrawer";

const ReviewsList = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "photo_video" | "description"
  >("all");

  const [page, setPage] = useState(1);
  const reviewsPerPage = 4;

  const totalReviews = customerReviews.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const startIndex = (page - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const visibleReviews = customerReviews.slice(startIndex, endIndex);

  return (
    <div>
      {/* filter and review list */}
      <div className="flex gap-12 w-full mt-8">
        <ReviewsFilter />

        {/* Customer reviews List  */}
        <div className="w-full">
          <h1 className="font-bold mb-4 text-lg">Review Lists</h1>

          {/* Tabs */}
          <div className="flex justify-between items-start">
            <ReviewsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ReviewFilterDrawer />
          </div>

          {/* Reviews */}
          <div className="flex flex-col gap-4 mt-8">
            {visibleReviews.map((cReview, index) => (
              <React.Fragment key={cReview.id}>
                <CustomerReview customerReview={cReview} />
                {index !== visibleReviews.length - 1 && (
                  <div className="footerDashLine h-1 my-4" />
                )}
              </React.Fragment>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
