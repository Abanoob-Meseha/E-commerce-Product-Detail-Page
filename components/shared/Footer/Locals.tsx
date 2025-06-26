import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import Image from "next/image";
import React from "react";

const Locals = () => {
  return (
    <div className="flex justify-end gap-4">
      {/* language */}
      <div className="flex gap-2 items-center">
        <Image src={"/assets/images/usa-flag.svg"} alt="usa-flag" width={18} height={14}/>
        <span>English</span>
        <ArrowDownSVG/>
      </div>
      {/* currency */}
      <div className="flex gap-2 items-center">
        <span>USD</span>
        <ArrowDownSVG/>
      </div>
    </div>
  );
};

export default Locals;
