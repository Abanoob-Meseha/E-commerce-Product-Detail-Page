import Star1SVG from "@/public/assets/svg_tsx/Star1SVG";
import { tCollectProduct } from "@/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: tCollectProduct }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-[280px] shadow-md rounded-md overflow-hidden">
        <Image src={product.img} alt={product.name} className="bg-secondary object-cover cursor-pointer transition-transform duration-500 hover:scale-110" fill />
      </div>
      <h1 className="font-bold">{product.name}</h1>
      <h1 className="font-bold">{product.price} $ </h1>
      <span className="text-foreground-secondary text-sm">{product.category}</span>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="">
          {product.sold_count.toLocaleString()} Sold
        </span>
        <div className="mx-1">•</div>
        <div className="flex items-center gap-1">
          <Star1SVG className="text-golden" />
          <span className="text-primary font-bold">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
