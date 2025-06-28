import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const CarouselActions = () => {
  return (
    <div className="absolute -right-18 top-0 flex flex-col h-full justify-between">
      <div></div>
      <div className="flex flex-col">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </div>
  );
};

export default CarouselActions;
