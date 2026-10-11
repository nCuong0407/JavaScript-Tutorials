const name = "Tran Ngoc Cuong";
const age = 2004;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();
const currentAge = currentYear - age;

console.log(`
Tên: ${name}
Tuổi: ${currentAge}
Sinh viên: ${isStudent}
`);

object = {
  name: name,
  age: currentAge,
  isStudent: isStudent,
};

console.log(object);
