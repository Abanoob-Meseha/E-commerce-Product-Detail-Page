import React from "react";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import SubmitInput from "../SubmitInput";

const SubscribeForm = () => {
  return (
    <SubmitInput
      placeholder="Get latest offers to your inbox"
      buttonIcon={<ArrowDownSVG className="text-white -rotate-90" />}
      title="email"
      type="email"
    />
  );
};

export default SubscribeForm;
