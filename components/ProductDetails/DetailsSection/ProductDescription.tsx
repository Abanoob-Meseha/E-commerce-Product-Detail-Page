import React, { useState, useRef, useEffect } from "react";

type ProductDescriptionProps = {
  htmlContent: string;
};

const ProductDescription = ({ htmlContent }: ProductDescriptionProps) => {
  const [showFull, setShowFull] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [htmlContent]);

  return (
    <div className="text-sm text-foreground-secondary leading-relaxed">
      <div className="relative">
        <div
          ref={textRef}
          className={`transition-all duration-300 ${
            showFull ? "" : "line-clamp-3"
          }`}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        {!showFull && isClamped && (
          <span
            onClick={() => setShowFull(true)}
            className="text-primary font-semibold hover:underline cursor-pointer absolute bottom-0 right-0 bg-white pl-1"
          >
            See more...
          </span>
        )}
        {showFull && (
          <span
            onClick={() => setShowFull(false)}
            className="text-primary font-semibold hover:underline cursor-pointer ml-1"
          >
            See less ▲
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
