"use client";
import CartSVG from "@/public/assets/svg_tsx/CartSVG";
import { useCartStore } from "@/zustand/stores/cartStore";
import * as React from "react";

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
import EmptyCart from "./EmptyCart";
import NonEmptyCart from "./NonEmptyCart";

const Cart = () => {
  const { cart } = useCartStore();
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative cursor-pointer">
          <CartSVG className="text-white" />
          <span className="text-white flex items-center justify-center text-[8px] font-bold p-2 w-[13px] h-[13px] rounded-full absolute -right-1 -top-2 bg-primary">
            {cart.length}
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-2 flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl flex items-center gap-2">
              <CartSVG className="text-white" />
              Shopping Cart
            </DrawerTitle>
            <DrawerDescription className="text-center">
              {cart.length} Products in your Cart
            </DrawerDescription>
          </DrawerHeader>

          {cart.length == 0 ? (
            <NonEmptyCart products={cart}/>
          ) : (
            <EmptyCart/>
          )}
          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
