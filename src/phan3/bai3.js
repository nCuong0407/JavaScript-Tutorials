const score = [2, 5, 6, 9, 10];

// score.forEach((value, index) => {
//   console.log("index", index, "- value = ", value);
// });

const scorex2 = score.map((value, index) => {
  return value * 2;
});

console.log("score = ", score);
console.log("scorex2 = ", scorex2);
