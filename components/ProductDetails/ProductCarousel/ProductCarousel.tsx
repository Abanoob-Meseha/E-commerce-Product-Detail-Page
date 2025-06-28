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
type tCarouselProps = {
  thumb: string;
  images: string[];
};
const ProductCarousel = ({ thumb, images }: tCarouselProps) => {
  const carouselImages = [thumb, ...images];
  return (
    <div className="w-[545px]">
      <Carousel className="relative w-[458px]">
        <CarouselContent>
          {/* Main Image */}
          {carouselImages.map((img, index) => (
            <CarouselItem
              className="w-[458px] h-[610px] bg-secondary"
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
        <CarouselActions />
      </Carousel>
      {/* images Container */}
      <div className="flex gap-5 w-[458px] overflow-x-auto mt-6 ">
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
