import { Button } from "@/components/ui/button";
import Image from "next/image";

type ColorOption = { name: string; value: string };

type Props = {
  options: ColorOption[];
  selected: ColorOption;
  onSelect: (color: ColorOption) => void;
  type: "image" | "button";
};

const ColorSelector = ({ options, selected, onSelect, type }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {selected && (
        <p className="text-lg text-muted-foreground">
          Color:{" "}
          <span className="font-bold text-primary ">{selected.name}</span>
        </p>
      )}
      <div className="flex gap-3">
        {options.map((color) => (
          //   <Button
          //     key={color.value}
          //     onClick={() => onSelect(color)}
          //     className={`w-15 h-8 rounded border  ${
          //       selected.name === color.name ? "ring-2 ring-primary" : ""
          //     }`}
          //     style={{ background: color.name }}
          //   />
          <div
            className={`w-20 h-[60px] relative rounded border cursor-pointer ${
              selected.name === color.name ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => onSelect(color)}
            key={color.name}
          >
            <Image
              src={color.value}
              alt="Color Image"
              fill
              className="object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
