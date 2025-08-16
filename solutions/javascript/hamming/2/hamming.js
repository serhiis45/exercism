//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (firstStrand, secondStrand) => {
  const {length} = firstStrand;
  if (length !== secondStrand.length) {
    throw new Error('strands must be of equal length');
  }

  return [...firstStrand]
    .filter((char, index) => char !== secondStrand.charAt(index))
    .length;
};
