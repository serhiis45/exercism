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

const prefixes = [
  [1_000_000_000, "giga"],
  [1_000_000, "mega"],
  [1_000, "kilo"],
];

export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  const rawValue: number =
    COLORS_ARRAY.indexOf(band1) * 10 +
    COLORS_ARRAY.indexOf(band2) +
    10 ** COLORS_ARRAY.indexOf(band3);

  if (rawValue === 0) {
    return rawValue + " ohms";
  } else if (rawValue % 1_000_000_000 === 0) {
    return rawValue / 1_000_000_000 + " gigaohms";
  } else if (rawValue % 1_000_000 === 0) {
    return rawValue / 1_000_000 + " megaohms";
  } else if (rawValue % 1_000 === 0) {
    return rawValue / 1_000 + " kiloohms";
  } else {
    return rawValue + " ohms";
  }
}
