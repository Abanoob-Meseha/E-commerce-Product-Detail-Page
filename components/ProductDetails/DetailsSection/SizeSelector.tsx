import { Button } from "@/components/ui/button";

type SizeOption = { id: string; name: string; variation_id: string };

type Props = {
  options: SizeOption[];
  selected: SizeOption;
  onSelect: (size: SizeOption) => void;
};

const SizeSelector = ({ options, selected, onSelect }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        {selected && (
          <p className="text-lg text-muted-foreground">
            Size: <span className="font-bold text-primary">{selected.name}</span>
          </p>
        )}
        <span className="text-xs underline cursor-pointer">
          View Size Chart
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {options.map((size) => (
          <Button
            key={size.id}
            variant={"outline"}
            onClick={() => onSelect(size)}
            className={`px-4 py-2 border rounded ${
              selected.name === size.name
                ? "border-black font-bold"
                : "text-muted-foreground"
            }`}
          >
            {size.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
