import { tProduct } from "@/types";

export const getAvailableSizes = (
  product: tProduct,
  selectedColorName: string
): { id: string; name: string; variation_id: string }[] => {
  const sizeVariation = product.variations.find((v) => v.name === "size");

  const matchedVariantProps = product.variants
    .filter((variant) =>
      variant.variation_props.some(
        (prop) =>
          prop.variation === "color" &&
          prop.variation_prop === selectedColorName
      )
    )
    .flatMap((variant) =>
      variant.variation_props.filter((p) => p.variation === "size")
    );

  // نجيب الـ props من الـ sizeVariation اللي اسمها نفس القيمة اللي طلعت من variant
  const matchedSizes = sizeVariation?.props.filter((size) =>
    matchedVariantProps.some((p) => p.variation_prop === size.name)
  );

  return matchedSizes || [];
};
