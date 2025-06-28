import { Button } from "@/components/ui/button";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import ShareSVG from "@/public/assets/svg_tsx/ShareSVG";
import React from "react";

const CarouselActions = () => {
  return (
    <div className="absolute lg:-right-18 -right-16 top-0 flex flex-col h-full justify-between">
        {/* share and Add to wishlist */}
      <div className="flex flex-col gap-5">
        <Button variant={"secondary"} className="rounded-md size-13">
            <ShareSVG className="text-transparent"/>
        </Button>
        <Button variant={"secondary"} className="rounded-md size-13">
            <HeartSVG className="text-transparent"/>
        </Button>
      </div>
      {/* carousel navigation */}
      <div className="flex flex-col gap-5">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </div>
  );
};

export default CarouselActions;
