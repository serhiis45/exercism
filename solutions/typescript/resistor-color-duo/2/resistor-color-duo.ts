const COLORS_ARRAY = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type Color = (typeof COLORS_ARRAY)[number];

export function decodedValue([band1, band2]: Color[]): number {
  return COLORS_ARRAY.indexOf(band1) * 10 + COLORS_ARRAY.indexOf(band2);
}
