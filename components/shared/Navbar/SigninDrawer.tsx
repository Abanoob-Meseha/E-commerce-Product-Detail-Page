import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import UserSVG from "@/public/assets/svg_tsx/UserSVG";
import React from "react";

const SigninDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative cursor-pointer flex items-center gap-2">
          <UserSVG className="text-white" />
          Sign in
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-2 flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl flex items-center gap-2">
              <UserSVG className="text-white" />
              Sign in
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Sign in to your Account
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SigninDrawer;
