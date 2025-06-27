import ArrowDownSVG from "@/public/assets/svg_tsx/ArrowDownSVG";
import { tProduct } from "@/types";
import React from "react";

const Breadcrumb = ({ product }: { product: tProduct }) => {
  return (
    <div className="text-sm text-gray-500 flex items-center flex-wrap py-8">
      {"Homepage"} <ArrowDownSVG className="-rotate-90" />{" "}
      {product.categories.map((cat, i) => (
        <div key={cat.id} className="flex items-center">
          <span className={i == product.categories.length - 1 ? "text-primary" : ""}>{cat.name}</span>
          {i < product.categories.length - 1 && (
            <ArrowDownSVG className="-rotate-90" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
