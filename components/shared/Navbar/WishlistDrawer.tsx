"use client"
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
import HeartSVG from "@/public/assets/svg_tsx/HeartSVG";
import { useWishlistStore } from "@/zustand/stores/wishlistStore";
import React from "react";
import WishlistCard from "../WishlistCard";
const WishlistDrawer = () => {
  const { wishlist } = useWishlistStore();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative cursor-pointer">
          <HeartSVG className="text-white" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-2 flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl flex items-center gap-2">
              <HeartSVG className="text-white" />
              Whishlist
            </DrawerTitle>
            <DrawerDescription className="text-center">
              your Wishlist products
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col w-full gap-4">
            {wishlist.map((product) => (
              <WishlistCard key={product.id} productId={product.id} />
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WishlistDrawer;
