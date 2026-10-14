// //async
// setTimeout(() => {
//   console.log("2");
// }, 5000);

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      //return
      resolve("THANHCONG");
    }, 2000);
  });
};
console.log("1");
myPromise().then((data) => {
  console.log("data", data);
  console.log("3");
});
