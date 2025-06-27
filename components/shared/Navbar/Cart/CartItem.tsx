import { tProduct } from "@/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCartStore } from "@/zustand/stores/cartStore";
import { Button } from "@/components/ui/button";

const CartItem = ({ product }: { product: tProduct }) => {
    const {addToCart , decreaseQuantity} = useCartStore()
  return (
    <div className="flex items-center gap-2">
      {/* image */}
      <div className="w-[100px] h-[130px]">
        <Image src={product.thumb} alt="Product image" fill />
      </div>
      {/* name , category and price */}
      <div>
        <h1>{product.name}</h1>
        <span className="text-foreground-secondary">{product.slug}</span>
        <span>{product.price}</span>
      </div>
      {/* Quantity and remove Btn */}
      <div>
        <Trash />
        {/* quantity counter */}
        <div className="flex gap-2 items-center">
          <Button variant="secondary" onClick={()=> decreaseQuantity(product.id)}> - </Button>
          <span> {product.quantity} </span>
          <Button variant="secondary" onClick={()=> addToCart(product)} > + </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
