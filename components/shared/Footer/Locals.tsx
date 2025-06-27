import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import Image from "next/image";
import React from "react";
import { Dropdown } from "../Dropdown";
import { currencies, languages } from "@/static";

const Locals = () => {
  return (
    <div className="flex justify-end gap-4">
      {/* language */}
      <div className="flex gap-2 items-center">
        <Image
          src={"/assets/images/usa-flag.svg"}
          alt="usa-flag"
          width={18}
          height={14}
        />
        <Dropdown triggerTitle="English" menuItems={languages} />
      </div>
      {/* currency */}
      <Dropdown triggerTitle="USD" menuItems={currencies} />
    </div>
  );
};

export default Locals;
