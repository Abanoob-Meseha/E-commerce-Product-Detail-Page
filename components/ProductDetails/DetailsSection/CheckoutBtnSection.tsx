import { notifyError, notifySuccess } from "@/components/shared/notify";
import { Button } from "@/components/ui/button";
import { tProduct } from "@/types";
import { useCartStore } from "@/zustand/stores/cartStore";
import React from "react";

const CheckoutBtnSection = ({ product }: { product: tProduct }) => {
  const { addToCart } = useCartStore();
  const handleAddToCart = (product: tProduct) => {
    try {
      addToCart(product);
      notifySuccess("Added Successfully!!");
    } catch (error) {
      console.log("Error Adding to Cart: ", error);
      notifyError("Error Adding to Cart!");
    }
  };
  return (
    <div className="flex gap-4 mt-6">
      <Button
        className="flex-1 text-white py-5 rounded font-semibold"
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </Button>
      <Button
        className="flex-1 border py-5 rounded font-semibold"
        variant={"outline"}
      >
        Checkout Now
      </Button>
    </div>
  );
};

export default CheckoutBtnSection;
