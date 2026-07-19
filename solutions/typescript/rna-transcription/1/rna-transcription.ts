const nucleotides = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;

type DNA = keyof typeof nucleotides;

function isNucleotide(char: string): char is DNA {
  return char in nucleotides;
}

export function toRna(dna: string): string {
  const chars = [...dna];

  if (!chars.every(isNucleotide)) throw new Error("Invalid input DNA.");

  return chars.map((char) => nucleotides[char]).join("");
}
