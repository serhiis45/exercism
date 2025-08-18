export const transform = (letterGroups) => {
  let object = {};

  for (const [key, value] of Object.entries(letterGroups)) {
    value.map(item => item.toLowerCase()).map(item => object[item] = Number(key));
  }

  return object;
}