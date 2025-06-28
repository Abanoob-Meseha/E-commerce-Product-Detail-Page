import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCartStore } from "@/zustand/stores/cartStore";
import { Button } from "@/components/ui/button";
import { notifyError } from "../../notify";

const CartItem = ({ productId }: { productId: string }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCartStore();
  const product = cart.find((p) => p.id === productId);

  if (!product) return null;
  const maxQty = product.max_quantity || 10; // default max

  const handleIncrease = () => {
    if (product.quantity >= maxQty) {
      notifyError(`Maximum quantity is ${maxQty}`);
      return;
    }
    addToCart({ ...product, quantity: 1 });
  };

  const handleDecrease = () => {
    if (product.quantity === 1) {
      notifyError("Minimum quantity is 1");
      return;
    }
    decreaseQuantity(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow-sm bg-white hover:bg-muted/40 transition">
      {/* image */}
      <div className="relative w-full sm:w-[130px] aspect-[3/2] rounded-md overflow-hidden">
        <Image
          src={product.thumb}
          alt="Product image"
          fill
          className="object-cover"
        />
      </div>

      {/* product info */}
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="font-semibold text-lg">{product.name}</h1>
            <p className="text-sm text-muted-foreground">{product.slug}</p>
          </div>
          {/* remove button */}
          <Trash
            size={20}
            className="text-red-500 hover:text-red-600 cursor-pointer transition"
            onClick={() => removeFromCart(product.id)}
          />
        </div>

        {/* price & quantity */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
          <span className="text-primary font-bold text-lg">
            ${product.sale_price.toFixed(2)}
          </span>

          {/* quantity counter */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDecrease()}
              className="w-8 h-8"
            >
              –
            </Button>
            <span className="font-medium w-6 text-center">
              {product.quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleIncrease()}
              className="w-8 h-8"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
