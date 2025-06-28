import { collectionProducts } from "@/static";
import ProductCard from "./ProductCard";

const ProductCollection = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      {collectionProducts.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductCollection;
