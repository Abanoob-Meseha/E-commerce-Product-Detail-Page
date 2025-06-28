import React from "react";
import CircleProgress from "./CircleProgress";
import StarRating from "./StarRating";
import { barRatings } from "@/static";
import Star2SVG from "@/public/assets/svg_tsx/Star2SVG";
import { Progress } from "../ui/progress";

const ProductReviews = () => {
  const rating = 4.5;

  return (
    <div>
      <h1 className="text-lg font-bold">Product Reviews</h1>
      <div className="border-dashed border-1 border-[#B8B8B8] rounded-md my-6 p-8 flex lg:flex-row flex-col items-start gap-4 lg:justify-between">
        {/* rating Circle Section */}
        <div className="flex items-center gap-4">
          <CircleProgress rating={rating} />
          <div className="flex flex-col gap-2">
            <StarRating rating={rating} />
            <span className="text-foreground-secondary">
              from 1,234 reviews
            </span>
          </div>
        </div>
        {/* ratings bars section */}
        <div className="flex flex-col gap-4">
          {barRatings.map(({ rating, id, percentage, ratingsCount }) => {
            return (
              <div key={id} className="flex items-center gap-4">
                <div className="flex items-center justify-between  w-[50px]">
                  <span className="font-bold">{rating.toFixed(1)}</span>
                  <Star2SVG className="text-golden" />{" "}
                </div>
                <Progress value={percentage} className="lg:w-[600px] w-[150px]" />
                <span> {ratingsCount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
