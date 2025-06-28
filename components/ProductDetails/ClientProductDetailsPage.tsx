"use client";

import { getProduct } from "@/utils/productQueries";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "./Breadcrumb";
import SiteLoader from "../shared/SiteLoader";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

const ClientProductDetailsPage = () => {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: getProduct,
  });
  if (isLoading) return <SiteLoader/>;
  if (error || !productData) return <p>Error Getting Data</p>;
  return (
    <div>
      <Breadcrumb product={productData} />
      <ProductCarousel thumb={productData.thumb} images={productData.images}/>
    </div>
  );
};

export default ClientProductDetailsPage;
