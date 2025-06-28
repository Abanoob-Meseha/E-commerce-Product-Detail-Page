"use client"
import React from "react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useWishlistStore } from "@/zustand/stores/wishlistStore";

const WishlistCard = ({ productId }: { productId: string }) => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const product = wishlist.find((p) => p.id === productId);

  if (!product) return null;

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
            onClick={() => removeFromWishlist(product.id)}
          />
        </div>

        {/* price & quantity */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
          <span className="text-primary font-bold text-lg">
            ${product.sale_price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};



export default WishlistCard;


