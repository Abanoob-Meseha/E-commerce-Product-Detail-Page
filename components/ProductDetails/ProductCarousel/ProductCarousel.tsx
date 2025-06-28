import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import CarouselActions from "./CarouselActions";
import ZoomImage from "./ZoomImage";
import { tProduct } from "@/types";

const ProductCarousel = ({ product }: {product: tProduct}) => {
  const {thumb , images} = product ;
  const carouselImages = [thumb, ...images];
  return (
    <div className="lg:w-[545px] w-full">
      <Carousel className="relative lg:w-[458px] w-[280px]">
        <CarouselContent>
          {/* Main Image */}
          {carouselImages.map((img, index) => (
            <CarouselItem
              className="lg:w-[458px] w-[280px] h-[372px] lg:h-[610px] bg-secondary"
              key={index}
            >
              <ZoomImage
                src={img}
                width={458}
                height={610}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation , share and Add to Wishlist */}
        <CarouselActions product={product}/>
      </Carousel>
      {/* images Container */}
      <div className="flex gap-5 lg:w-[458px] w-[280px] overflow-x-auto mt-6 ">
        {images.map((img, index) => (
          <div
            className="w-[76px] h-[100px] contain-content bg-secondary"
            key={index}
          >
            <Image src={img} alt="Image" fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
