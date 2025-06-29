import React, { useEffect, useState } from "react";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import CheckoutBtnSection from "./CheckoutBtnSection";
import { tProduct } from "@/types";
import ProductVariations from "./ProductVariations";
import { getAvailableSizes } from "@/utils";
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
  const availableSizes = getAvailableSizes(product, selectedColor?.name || "");

  useEffect(() => {
    if (availableSizes.length > 0) {
      setSelectedSize(availableSizes[0]);
    } else {
      setSelectedSize(null);
    }
  }, [selectedColor]);

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
        sizeOptions={availableSizes}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
      />

      {/* Checkout Section */}
      <CheckoutBtnSection product={product}/>
    </div>
  );
};

export default DetailsSection;
