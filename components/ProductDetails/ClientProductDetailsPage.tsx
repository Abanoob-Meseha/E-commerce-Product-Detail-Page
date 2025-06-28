"use client";

import { getProduct } from "@/utils/productQueries";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "./Breadcrumb";
import SiteLoader from "../shared/SiteLoader";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import DetailsSection from "./DetailsSection/DetailsSection";
import CollectionTitle from "./CollectionTitle";
import ProductCollection from "./ProductCollection";

const ClientProductDetailsPage = () => {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: getProduct,
  });
  if (isLoading) return <SiteLoader />;
  if (error || !productData) return <p>Error Getting Data</p>;
  return (
    <div>
      <Breadcrumb product={productData} />
      <div className="flex flex-col lg:flex-row gap w-full justify-between">
        <ProductCarousel
          thumb={productData.thumb}
          images={productData.images}
        />
        <DetailsSection product={productData} />
      </div>

      <div className="footerDashLine h-1 my-10" />
      <div>
        <CollectionTitle seeAllLink="/" title="Related Products" />
        <ProductCollection />
      </div>
      <div className="footerDashLine h-1 my-10" />

      <div>
        <CollectionTitle seeAllLink="/" title="Popular this week" />
        <ProductCollection />
      </div>
    </div>
  );
};

export default ClientProductDetailsPage;
