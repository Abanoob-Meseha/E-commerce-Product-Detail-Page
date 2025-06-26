import React from "react";
import Button from "../Button";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";

const SubscribeForm = () => {
  return (
    <div className="flex justify-between items-end border-b-[0.5px]">
      <input
        type="email"
        name="email"
        id="subscribeEmail"
        className="py-2 w-[80%] focus-visible:outline-none placeholder:tracking-wider placeholder:font-semibold"
        placeholder="Get latest offers to your inbox"
      />
      <Button className="px-4 py-2">
        <ArrowDownSVG className="text-white -rotate-90" />
      </Button>
    </div>
  );
};

export default SubscribeForm;
