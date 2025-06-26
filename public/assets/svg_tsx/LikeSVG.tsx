import * as React from "react";
import { SVGProps } from "react";
const LikeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_57_1742)">
      <path
        d="M7.97998 18.3793L11.08 20.7793C11.48 21.1793 12.38 21.3793 12.98 21.3793H16.78C17.98 21.3793 19.28 20.4793 19.58 19.2793L21.98 11.9793C22.48 10.5793 21.58 9.37927 20.08 9.37927H16.08C15.48 9.37927 14.98 8.87926 15.08 8.17926L15.58 4.97926C15.78 4.07926 15.18 3.07927 14.28 2.77927C13.48 2.47926 12.48 2.87927 12.08 3.47927L7.97998 9.57927"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <path
        d="M2.87988 18.3792V8.5792C2.87988 7.1792 3.47988 6.6792 4.87988 6.6792H5.87988C7.27988 6.6792 7.87988 7.1792 7.87988 8.5792V18.3792C7.87988 19.7792 7.27988 20.2792 5.87988 20.2792H4.87988C3.47988 20.2792 2.87988 19.7792 2.87988 18.3792Z"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_57_1742">
        <rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0.5 0.0292969)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default LikeSVG;
