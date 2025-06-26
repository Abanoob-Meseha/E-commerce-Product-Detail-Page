import * as React from "react";
import { SVGProps } from "react";
const SearchSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_57_1324)">
      <path
        d="M14.5835 14.5833L18.3335 18.3333"
        stroke="#141414"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 9.16669C16.6665 5.02455 13.3087 1.66669 9.1665 1.66669C5.02437 1.66669 1.6665 5.02455 1.6665 9.16669C1.6665 13.3089 5.02437 16.6667 9.1665 16.6667C13.3087 16.6667 16.6665 13.3089 16.6665 9.16669Z"
        stroke="#141414"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_57_1324">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SearchSVG;
