import React, { useState } from "react";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import CheckoutBtnSection from "./CheckoutBtnSection";
import { tProduct } from "@/types";
import ProductVariations from "./ProductVariations";
type ColorOption = { name: string; value: string };
type SizeOption = { id: string; name: string; variation_id: string };


const DetailsSection = ({ product }: { product: tProduct }) => {
  const colorVariation = product.variations.find((v) => v.name === "color");
  const sizeVariation = product.variations.find((v) => v.name === "size");
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(
    colorVariation?.props?.[0] ?? null
  );
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(
    sizeVariation?.props?.[0] ?? null
  );

  return (
    <div className="flex flex-col w-full lg:w-[480px] gap-6">
      <ProductHeader
        name={product.name}
        price={product.price}
        sale_price={product.sale_price}
      />
      <div className="footerDashLine h-1" />
      <ProductDescription htmlContent={product.description} />
      {/* color and color variant */}
      <ProductVariations
        colorOptions={colorVariation?.props || []}
        sizeOptions={sizeVariation?.props || []}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
      />

      {/* Checkout Section */}
      <CheckoutBtnSection />
    </div>
  );
};

export default DetailsSection;
