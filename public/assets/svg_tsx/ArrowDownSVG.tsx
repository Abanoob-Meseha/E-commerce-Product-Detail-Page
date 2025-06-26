import * as React from "react";
import { SVGProps } from "react";
const ArrowDownSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 8C15 8 11.3176 13 10 13C8.68233 13 5 8 5 8"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowDownSVG;
