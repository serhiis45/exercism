const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export const toRna = (dna) => dna.split('').map(nucleotide => dnaToRna[nucleotide]).join('');
