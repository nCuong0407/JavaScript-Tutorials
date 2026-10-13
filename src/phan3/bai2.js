const myClass = ["John", "Jane", "Doe", "Smith", "Alice"];

// console.log(myClass, myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//   console.log("i = ", i, "value = ", myClass[i]);
// }

//for each
myClass.forEach(function (value, index) {
  console.log("value = ", value, "- index = ", index);
});

console.log("=====================================");

myClass.forEach((value, index) => {
  console.log("value = ", value, "- index = ", index);
});

const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
