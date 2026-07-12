const COLORS = [
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
];

export function decodedValue(
  colors: [string, string, ...input: string[]],
): number {
  return Number(
    COLORS.indexOf(colors[0]).toString() + COLORS.indexOf(colors[1]).toString(),
  );
}
