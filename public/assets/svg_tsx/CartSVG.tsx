import * as React from "react";
import { SVGProps } from "react";
const CartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.58317 6.66669H16.8298C17.3505 6.66669 17.6108 6.66669 17.8014 6.75072C18.6445 7.12244 18.2676 8.05898 18.1258 8.73202C18.1003 8.85294 18.0173 8.95585 17.9012 9.01102C17.4193 9.23969 17.0817 9.67344 16.9931 10.1779L16.4993 12.9899C16.282 14.2271 16.2078 15.9953 15.1235 16.8669C14.328 17.5 13.1818 17.5 10.8894 17.5H9.11026C6.81786 17.5 5.67167 17.5 4.87617 16.8669C3.79194 15.9952 3.71766 14.2271 3.50039 12.9899L3.00656 10.1779C2.91798 9.67344 2.58045 9.23969 2.09851 9.01102C1.98231 8.95585 1.89944 8.85294 1.87396 8.73202C1.73212 8.05898 1.35517 7.12244 2.19827 6.75072C2.38887 6.66669 2.64919 6.66669 3.16981 6.66669H6.24984"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M11.6668 10H8.3335"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.4165 9.16667L8.33317 2.5M12.4998 2.5L14.5832 6.66667"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default CartSVG;
