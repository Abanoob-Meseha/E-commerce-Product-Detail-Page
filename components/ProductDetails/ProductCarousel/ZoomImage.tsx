'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

const ZoomImage = ({ src, alt = 'zoom image' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transformOrigin: 'center center' });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setStyle({
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transformOrigin: 'center center' });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden group w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-150 cursor-zoom-in"
        style={style}
      />
    </div>
  );
};

export default ZoomImage;
