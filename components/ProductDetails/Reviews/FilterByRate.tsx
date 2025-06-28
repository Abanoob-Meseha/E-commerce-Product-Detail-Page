import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import { barRatings } from "@/static";
import { Checkbox } from "@/components/ui/checkbox";
import Star2SVG from "@/public/assets/svg_tsx/Star2SVG";

const FilterByRate = () => {
  const [rateFilterIsOpen, setRateFilterIsOpen] = useState(false);

  return (
    <Collapsible onOpenChange={() => setRateFilterIsOpen((prev) => !prev)}>
      <CollapsibleTrigger className="flex w-full justify-between">
        <span className="font-bold">Rating</span>
        {rateFilterIsOpen ? (
          <ArrowDownSVG className="text-primary rotate-180" />
        ) : (
          <ArrowDownSVG className="text-primary" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 flex flex-col gap-2">
        {barRatings.map(({ id, rating }) => {
          return (
            <div className="flex items-center gap-4" key={id}>
              <Checkbox />
              <div className="flex items-center gap-2">
                <Star2SVG className="text-golden" />{" "}
                <span className="font-bold text-foreground-secondary">{rating}</span>
              </div>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByRate;
