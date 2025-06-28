import React from "react";
import { tProduct } from "@/types";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";

type tNonEmptyCartProps = {
  products: tProduct[];
};

const SHIPPING_FEES = 20;

const NonEmptyCart = ({ products }: tNonEmptyCartProps) => {
  // ✅ احسب الـ subtotal
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // ✅ اجمع الشحن على الإجمالي
  const total = subtotal + SHIPPING_FEES;

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      {/* scrollable Products */}
      <div className="flex flex-col gap-2 overflow-y-auto h-[50vh] w-full">
        {products.map((product) => (
          <CartItem key={product.id} productId={product.id} />
        ))}
      </div>

      {/* fixed Bottom Section */}
      <div className="absolute bottom-2 w-full p-2 px-4 flex flex-col gap-3 bg-background">
        {/* Subtotal Section */}
        <hr />
        <div>
          <div className="flex justify-between">
            <h1 className="text-foreground-secondary">Subtotal</h1>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <h1 className="text-foreground-secondary">Shipping Fees</h1>
            <span>${SHIPPING_FEES.toFixed(2)}</span>
          </div>
        </div>
        <hr />

        {/* Total and Confirm */}
        <div>
          <div className="flex justify-between">
            <h1>Total</h1>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <Button className="mt-4 w-full py-2">Confirm Order</Button>
        </div>
      </div>
    </div>
  );
};

export default NonEmptyCart;
