// const sinhvien1 = {
//   score: 10,
//   name: "Nguyen Van A",
//   address: {
//     city: "Ha Noi",
//     country: "Viet Nam",
//   },
// };

// const sinhvien2 = {
//   score: 8,
//   name: "Tran Thi B",
//   address: {
//     city: "Ho Chi Minh",
//     country: "Viet Nam",
//   },
// };

// const sinhvien = [sinhvien1, sinhvien2];
// console.log("sinhvien", sinhvien);

const person = {
  name1: "Nguyen Van A",
  age: 20,
};

console.log("person before: ", person);
//get data
console.log("name:", person["name1"]);
console.log("age:", person.age);

//set data
person.address = "Ha Noi";
console.log("person after: ", person);

delete person.age;
console.log("person after delete age: ", person);
