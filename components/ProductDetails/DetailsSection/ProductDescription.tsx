import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type ProductDescriptionProps = {
  htmlContent: string;
};

const ProductDescription = ({ htmlContent }: ProductDescriptionProps) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="flex gap-1 items-end">
      <div
        className={`prose prose-sm max-w-none transition-all duration-300 ${
          showFull ? "line-clamp-none max-h-full" : "line-clamp-4 max-h-[8rem]"
        }`}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      
      {/* See more button */}
      <Button
      variant={"link"}
        onClick={() => setShowFull((prev) => !prev)}
        className="text-primary text-sm font-medium hover:underline"
      >
        {showFull ? "See less ▲" : "See more ... ▼"}
      </Button>
    </div>
  );
};

export default ProductDescription;
