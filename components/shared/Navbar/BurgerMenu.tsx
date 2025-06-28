import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Contact, LayoutList, Menu, MenuSquare } from "lucide-react";
import React from "react";
import { Dropdown } from "../Dropdown";
import { categories } from "@/static";
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import UserSVG from "@/public/assets/svg_tsx/UserSVG";
import EmailSVG from "@/public/assets/svg_tsx/EmailSVG";

const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="lg:hidden flex cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`w-full p-4 flex flex-col gap-4`}
        align="start"
      >
        <DropdownMenuItem className="flex items-center gap-3">
          <HeartSVG className="text-white" />
          Wishlist
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3">
          <UserSVG className="text-white" />
          Sign in
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3">
          <EmailSVG className="text-white" />
          Contact us
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3">
          <LayoutList size={18} />
          Categories
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
