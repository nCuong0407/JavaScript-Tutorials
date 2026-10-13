const names = ["John", "Jane", "Doe", "Smith"];
console.log(names[0]); // Output: John

names[2] = "update name"; // Change the third element
console.log("before", names); // Output: ["John", "Jane", "Alice", "Smith"]

names.push("after", "New Name");
names.unshift(null, 123123);

names.pop();
names.shift();
console.log("after", names); // Output: ["John", "Jane", "update name", "Smith", "after", "New Name"]
