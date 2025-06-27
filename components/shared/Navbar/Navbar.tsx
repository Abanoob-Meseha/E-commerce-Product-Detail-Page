import SearchSVG from "@/public/assets/svg_tsx/SearchSVG";
import SiteLogo from "../SiteLogo";
import UserSVG from "@/public/assets/svg_tsx/UserSVG";
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import Cart from "./Cart/Cart";
import { Dropdown } from "../Dropdown";
import { categories } from "@/static";
import { Menu } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import SearchDialog from "./SearchDialog";
import SigninDrawer from "./SigninDrawer";
import WishlistDrawer from "./WishlistDrawer";

const Navbar = () => {
  return (
    <div className="container-padding flex py-8 items-center justify-between">
      <SiteLogo />
      {/* links and search section */}
      <div className="flex gap-8 items-center">
        <SearchDialog />
        {/* hidden in mobile view Section */}
        <div className="md:flex hidden items-center gap-8">
          <Dropdown triggerTitle="Categories" menuItems={categories} />
          <SigninDrawer />
          <WishlistDrawer/>
        </div>
        <Cart />
        {/* Burger menu in mobile View */}
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
