type ColorOption = { name: string; value: string };

type Props = {
  options: ColorOption[];
  selected: ColorOption;
  onSelect: (color: ColorOption) => void;
};

const ColorSelector = ({ options, selected, onSelect }: Props) => {
  return (
    <div>
      {selected && (
        <p className="text-sm text-muted-foreground">
          Color: <span className="font-bold">{selected.name}</span>
        </p>
      )}

      <div className="flex gap-3">
        {options.map((color) => (
          <button
            key={color.value}
            onClick={() => onSelect(color)}
            className={`w-10 h-10 rounded border ${
              selected.name === color.name ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
