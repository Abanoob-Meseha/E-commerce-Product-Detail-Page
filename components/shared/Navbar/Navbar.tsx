import SearchSVG from "@/public/assets/svg_tsx/SearchSVG";
import SiteLogo from "../SiteLogo";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import UserSVG from "@/public/assets/svg_tsx/UserSVG";
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import CartSVG from "@/public/assets/svg_tsx/CartSVG";

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
        <HeartSVG className="text-white" />
        <div className="relative">
          <CartSVG className="text-white" />
          <span className="text-white flex items-center justify-center text-[8px] font-bold p-2 w-[13px] h-[13px] rounded-full absolute -right-1 -top-2 bg-primary">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
