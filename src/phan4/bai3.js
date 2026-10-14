// const btn = document.getElementById("myBtn");

// const handleClickBtn = () => {
//   console.log("you click a button");
// };
// btn.addEventListener("click", handleClickBtn);

// console.log(btn);

///////////////////
const myBtnElement = document.getElementById("myBtn2");
const myBackBtnElement = document.getElementById("backBtn2");

const handleClickBtn2 = () => {
  console.log("BAN DA CLICK VAO DAY");
  myTextElement.innerText = "BIEN DOI CHU ";
};

const handleBackClickBtn2 = () => {
  console.log("BAN DA QUAY TRO LAI");
  myTextElement.innerText = "hihi";
};

myBtnElement.addEventListener("click", handleClickBtn2);
myBackBtnElement.addEventListener("click", handleBackClickBtn2);

const myTextElement = document.getElementById("myP");

console.log(myBtnElement);
console.log(myTextElement);
