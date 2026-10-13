const sv1 = {
  username: "Nguyen Van A",
  socre: 10,
};

const sv2 = {
  username: "Tran Thi B",
  socre: 8,
};

const sv3 = {
  username: "Le Van C",
  socre: 9,
};

const sinhvien = [sv1, sv2, sv3];
console.log("sinhvien", sinhvien);

// sinhvien.forEach((value, index) => {
//   console.log("index = ", index, "name =", value.username);
// });

const person = {
  email: "cuong@gmail.com",
  age: 20,
  address: "Vietnam",
};

// for (let key in person) {
//   console.log(key, person[key]);
// }

for (let value of Object.values(person)) {
  console.log(value);
}
for (let value of Object.entries(person)) {
  console.log(value);
}
