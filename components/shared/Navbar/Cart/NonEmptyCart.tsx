import React from "react";
import { tProduct } from "@/types";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
type tNonEmptyCartProps = {
  products: tProduct[];
};
const NonEmptyCart = ({ products }: tNonEmptyCartProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {/* scrollable Products */}
      <div className="flex flex-col gap-2 overflow-y-scroll">
        {products.map((product, index) => {
          return <CartItem key={index} product={product} />;
        })}
      </div>
      {/* fixed Bottom Section */}
      <div className="absolute bottom-2 w-full p-2 px-4 flex flex-col gap-3">
        {/* Subtotal Section */}
        <hr />
        <div>
          <div className="flex justify-between">
            <h1 className="text-foreground-secondary">Subtotal</h1>
            <span> $ 2000 </span>
          </div>
          <div className="flex justify-between">
            <h1 className="text-foreground-secondary">Shipping Fees</h1>
            <span> $ 2000 </span>
          </div>
        </div>
        <hr />
        {/* Total and Confirm */}
        <div>
          <div className="flex justify-between">
            <h1>Total</h1>
            <span className="text-2xl font-bold"> $ 2000 </span>
          </div>
          <Button className="mt-4 w-full py-2"> Confirm Order </Button>
        </div>
      </div>
    </div>
  );
};

export default NonEmptyCart;
