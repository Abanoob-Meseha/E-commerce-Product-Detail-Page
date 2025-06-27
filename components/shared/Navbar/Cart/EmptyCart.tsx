import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EmptyCart = () => {
  return (
    <div className="absolute top-28 flex flex-col mt-10 items-center text-center gap-5">
      <Image
        src={"/assets/images/empty-cart.webp"}
        width={150}
        height={150}
        alt="Empty Cart image"
      />
      <div className="ps-6 flex flex-col gap-3">
        <span>Your Cart is Empty</span>
        <Link href="/">
          <Button className="w-full"> Shop Now </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
