import Star1SVG from "@/public/assets/svg_tsx/Star1SVG";
import React from "react";

type ProductHeaderProps = {
  name: string;
  price: number;
  sale_price?: number;
  soldCount?: number;
  rating?: number;
};

const ProductHeader = ({
  name,
  price,
  sale_price,
  soldCount = 1238,
  rating = 4.5,
}: ProductHeaderProps) => {
  return (
    <div className="space-y-2">
      {/* Brand Name */}
      <p className="text-[16px] text-muted-foreground">John Lewis ANYDAY</p>

      {/* Product Name */}
      <h2 className="text-3xl font-bold">{name}</h2>

      <div className="flex items-center justify-between mt-3">
        {/* Prices */}
        <div className="flex items-center gap-3">
          {sale_price ? (
            <>
              <span className="text-muted-foreground line-through text-lg">
                £{price.toFixed(2)}
              </span>
              <span className="text-2xl font-bold text-primary">
                £{sale_price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-primary">
              £{price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Sold Count and Rating */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="lg:text-lg text-sm">{soldCount.toLocaleString()} Sold</span>
          <div className="mx-1">•</div>
          <div className="flex items-center gap-1">
            <Star1SVG className="text-golden"/>
            <span className="text-primary lg:text-2xl text-lg font-bold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
