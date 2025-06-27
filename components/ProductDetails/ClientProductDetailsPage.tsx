"use client";

import { getProduct } from "@/utils/productQueries";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { notifyError } from "../shared/notify";
import Breadcrumb from "./Breadcrumb";

const ClientProductDetailsPage = () => {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: getProduct,
  });
  if (isLoading) return <Loader2 className="animate-spin" />;
  if (error) return <p>Error Getting Data</p>;
  return (
    <div>
      <Breadcrumb product={productData} />
    </div>
  );
};

export default ClientProductDetailsPage;
