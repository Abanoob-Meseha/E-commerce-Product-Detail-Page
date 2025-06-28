import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import { filterReviewTopics } from "@/static";
import { Checkbox } from "@/components/ui/checkbox";

const FilterByTopic = () => {
  const [topicFilterIsOpen, setTopicFilterIsOpen] = useState(false);

  return (
    <Collapsible onOpenChange={() => setTopicFilterIsOpen((prev) => !prev)}>
      <CollapsibleTrigger className="flex w-full justify-between">
        <span className="font-bold">Review Topics</span>
        {topicFilterIsOpen ? (
          <ArrowDownSVG className="text-primary rotate-180" />
        ) : (
          <ArrowDownSVG className="text-primary" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 flex flex-col gap-2">
        {filterReviewTopics.map(({ id, name }) => {
          return (
            <div className="flex items-center gap-4" key={id}>
              <Checkbox />
              <span className="font-bold text-foreground-secondary">{name}</span>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByTopic;
