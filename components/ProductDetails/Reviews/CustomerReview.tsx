import React from "react";
import StarRating from "./StarRating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LikeSVG from "@/public/assets/svg_tsx/LikeSVG";
import { tCustomerReview } from "@/types";

const CustomerReview = ({
  customerReview,
}: {
  customerReview: tCustomerReview;
}) => {
  const { date, disLikesCount, img, likesCount, name, rating, review } =
    customerReview;
  return (
    <div className="flex flex-col gap-4">
      <StarRating rating={rating} />
      <div>
        <h1 className="font-bold text-lg">{review}</h1>
        <span className="text-foreground-secondary">{date}</span>
      </div>
      <div className="flex items-center justify-between">
        {/* avatar */}
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={img} />
            <AvatarFallback>{name[1]}</AvatarFallback>
          </Avatar>
          <h1 className="font-bold">{name}</h1>
        </div>
        {/* likes and dislikes */}
        <div className="flex gap-2 items-center">
          <Button variant={"outline"}>
            <LikeSVG
              className={likesCount != 0 ? "text-primary" : "text-transparent"}
            />
            {likesCount && <span> {likesCount} </span>}
          </Button>
          <Button variant={"outline"}>
            <LikeSVG
              className={`rotate-180 ${
                disLikesCount ? "text-primary" : "text-transparent"
              }`}
            />
            {disLikesCount != 0  && <span> {disLikesCount} </span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
