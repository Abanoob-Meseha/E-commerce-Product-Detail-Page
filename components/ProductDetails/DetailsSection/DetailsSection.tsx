import React from "react";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import ProductVariant from "./ProductVariant";
import CheckoutBtnSection from "./CheckoutBtnSection";
import { tProduct } from "@/types";

const DetailsSection = ({ product }: { product: tProduct }) => {
  return (
    <div className="flex flex-col w-full lg:w-[480px] gap-6">
      <ProductHeader
        name={product.name}
        price={product.price}
        sale_price={product.sale_price}
      />
      <div className="footerDashLine h-1" />
      <ProductDescription htmlContent={product.description}/>
      {/* color variant */}
      <ProductVariant />
      {/* size variant */}
      <ProductVariant />
      {/* Checkout Section */}
      <CheckoutBtnSection />
    </div>
  );
};

export default DetailsSection;
