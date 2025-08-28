
export const transpose = (array) => {
    return array[0].map((element, i) => {
      return array.map(row => row[i]);
    })
};
