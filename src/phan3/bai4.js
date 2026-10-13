const ages = [10, 22, 23, 14, 19];
const agesX2 = ages.map((value, index) => {
  return value * 2;
});

const agesGreatThan18 = ages.filter((value, index) => {
  return value > 18;
});

console.log("original", ages);
console.log("agesX2", agesX2);
console.log("agesGreatThan18", agesGreatThan18);
