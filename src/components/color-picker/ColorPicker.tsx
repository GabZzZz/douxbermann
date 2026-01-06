import React, { useState } from "react";

type ColorPickerProps = {
  color: any;
  onChange?: (color: string) => void;
  selectedColor?: string;
};

function ColorPicker({
  color,
  onChange,
  selectedColor,
}: ColorPickerProps) {
  const [internalColor, setInternalColor] = useState<string | null>(null);

  const currentColor = selectedColor ?? internalColor;

  const handleSelect = (colorLabel: string, colorHex: string) => {
    setInternalColor(colorHex);
    onChange?.(`${colorLabel} : ${colorHex}`);
  };

  return (
    <div>
        <div>{ color.label }</div>
        <div className="flex flex-wrap gap-3">
            { color.colors.map((color: any, index: number) => (
                <button
                  key={`${color.label}-${color.hex}-${index}`}
                  type="button"
                  onClick={() => handleSelect(color.label, color.hex)}
                  className={`h-8 w-8 rounded-full border-2 transition-transform duration-150 hover:scale-110
                      ${currentColor === color.hex ? "border-black ring-2 ring-black" : "border-transparent"}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Choisir la couleur ${color.hex}`}
                />
            )) }
        </div>
    </div>
    
  );
};

export default ColorPicker;
