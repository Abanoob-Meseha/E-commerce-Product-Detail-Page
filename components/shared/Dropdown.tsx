import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import { ReactNode } from "react";
type tMenuItem = {
  id: number;
  name: string;
  link: string;
};
type tDropDownProps = {
  triggerTitle: string;
  menuItems: tMenuItem[];
  triggerElement?: ReactNode;
  className?:string
};
export function Dropdown({
  triggerTitle,
  menuItems,
  triggerElement,
  className= ""
}: tDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {triggerElement ?? (
          <div className="flex gap-2 items-center cursor-pointer">
            <span>{triggerTitle}</span>
            <ArrowDownSVG className="text-primary" />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-32 ${className}`} align="start">
        {menuItems.map(({ id, name, link }: tMenuItem) => {
          return <DropdownMenuItem key={id}>{name}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
