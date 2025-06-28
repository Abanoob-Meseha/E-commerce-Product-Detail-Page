"use client";

import { getProduct } from "@/utils/productQueries";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "./Breadcrumb";
import SiteLoader from "../shared/SiteLoader";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import DetailsSection from "./DetailsSection/DetailsSection";
import CollectionTitle from "./Collections/CollectionTitle";
import ProductCollection from "./Collections/ProductCollection";
import ProductReviews from "./Reviews/ProductReviews";
import ReviewsSection from "./Reviews/ReviewsSection";

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
    <div className="pb-10">
      {/* product Section */}
      <Breadcrumb product={productData} />
      <div className="flex flex-col lg:flex-row gap w-full justify-between">
        <ProductCarousel
          thumb={productData.thumb}
          images={productData.images}
        />
        <DetailsSection product={productData} />
      </div>

      <div className="footerDashLine h-1 my-10" />

      {/* related product Collection section*/}
      <div>
        <CollectionTitle seeAllLink="/" title="Related Products" />
        <ProductCollection />
      </div>

      <div className="footerDashLine h-1 my-10" />
      
      {/* product Reviews Section */}
      <ReviewsSection/>

      <div className="footerDashLine h-1 my-10" />

      {/* popular product collection section */}
      <div>
        <CollectionTitle seeAllLink="/" title="Popular this week" />
        <ProductCollection />
      </div>
    </div>
  );
};

export default ClientProductDetailsPage;
