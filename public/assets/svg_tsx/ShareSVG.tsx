import * as React from "react";
import { SVGProps } from "react";
const ShareSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5.86243C15.6454 5.99624 16.1323 6.21958 16.5237 6.59233C17.5 7.52227 17.5 9.01901 17.5 12.0124C17.5 15.0058 17.5 16.5025 16.5237 17.4325C15.5474 18.3624 13.976 18.3624 10.8333 18.3624H9.16667C6.02397 18.3624 4.45262 18.3624 3.47631 17.4325C2.5 16.5025 2.5 15.0058 2.5 12.0124C2.5 9.01901 2.5 7.52227 3.47631 6.59233C3.86765 6.21958 4.35458 5.99624 5 5.86243"
      stroke="#141414"
      strokeWidth={1.25}
      strokeLinecap="round"
    />
    <path
      d="M10.0211 1.69612L10 11.6957M10.0211 1.69612C9.88558 1.69051 9.74925 1.73894 9.62775 1.84145C8.87242 2.47907 7.5 4.1364 7.5 4.1364M10.0211 1.69612C10.1426 1.70116 10.2635 1.74965 10.3723 1.84158C11.1276 2.47932 12.5 4.1364 12.5 4.1364"
      stroke="#141414"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ShareSVG;
