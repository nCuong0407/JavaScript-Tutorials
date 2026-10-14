const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const prevElement = document.getElementById("prev");

const prevName = localStorage.getItem("name");
if (prevName) {
  prevElement.innerHTML = `<b>${prevName}</b>`;
}

btn.addEventListener("click", () => {
  localStorage.setItem("name", input.value);
  document.getElementById("message").innerHTML = `<b>${input.value}</b>`;
});
