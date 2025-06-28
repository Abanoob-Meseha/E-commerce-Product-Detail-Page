import React, { useState } from "react";

import FilterByRate from "./FilterByRate";
import FilterByTopic from "./FilterByTopic";

const ReviewsFilter = () => {
  return (
    // on large screens
    <div className="border-dashed border-1 border-foreground-secondary p-4 w-[30%] rounded-md h-fit hidden lg:flex lg:flex-col">
      <h1 className="text-lg font-bold"> Review Filter </h1>
      <div className="footerDashLine h-1 my-4" />
      {/* rate checkbox collapse */}
      <FilterByRate />
      <div className="footerDashLine h-1 my-4" />
      {/* topics checkbox collapse */}
      <FilterByTopic/>
    </div>
  );
};

export default ReviewsFilter;
