import SearchSVG from "@/public/assets/svg_tsx/SearchSVG";
import SiteLogo from "../SiteLogo";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import UserSVG from "@/public/assets/svg_tsx/UserSVG";
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import CartSVG from "@/public/assets/svg_tsx/CartSVG";
import Cart from "./Cart/Cart";

const Navbar = () => {
  return (
    <div className="container-padding flex py-8 items-center justify-between">
      <SiteLogo />
      {/* links and search section */}
      <div className="flex gap-8 items-center">
        <SearchSVG className="text-white" />
        <div className="flex gap-2 items-center">
          <span>Categories</span>
          <ArrowDownSVG className="text-primary" />
        </div>
        <div className="flex gap-2 items-center">
          <UserSVG className="text-white" />
          <span>Sign in</span>
        </div>
        <HeartSVG className="text-primary cursor-pointer" />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
