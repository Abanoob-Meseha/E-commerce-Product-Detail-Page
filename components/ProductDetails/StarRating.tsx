import { Star } from "lucide-react";
import React from "react";

type Props = {
  rating: number; // مثال: 4.5
  max?: number; // افتراضي 5 نجوم
};

const StarRating = ({ rating, max = 5 }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const fill =
          rating >= i + 1
            ? 100
            : rating > i
            ? (rating - i) * 100
            : 0;

        return (
          <div key={i} className="relative w-5 h-5">
            <Star className="absolute text-gray-300 w-5 h-5" />

            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              <Star className="fill-golden text-golden w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
