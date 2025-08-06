export const toRna = (dna) => dna.split('').map(replaceNucleotide).join('');

function replaceNucleotide(nucleotide) {
  switch(nucleotide) {
    case 'G': return 'C';
    case 'C': return  'G';
    case 'T': return  'A';
    case 'A': return  'U';
    default: return nucleotide;
  }
}
