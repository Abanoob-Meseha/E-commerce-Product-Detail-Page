import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

type ColorOption = { name: string; value: string };
type SizeOption = { id: string; name: string; variation_id: string };

type Props = {
  colorOptions: ColorOption[];
  selectedColor: ColorOption | null;
  onSelectColor: (color: ColorOption) => void;
  sizeOptions: SizeOption[];
  selectedSize: SizeOption | null;
  onSelectSize: (size: SizeOption) => void;
};

const ProductVariations = ({
  colorOptions,
  selectedColor,
  onSelectColor,
  sizeOptions,
  selectedSize,
  onSelectSize,
}: Props) => {
  return (
    <div className="space-y-6">
      <ColorSelector
        options={colorOptions}
        selected={selectedColor}
        onSelect={onSelectColor}
      />
      <SizeSelector
        options={sizeOptions}
        selected={selectedSize}
        onSelect={onSelectSize}
      />
    </div>
  );
};

export default ProductVariations;
