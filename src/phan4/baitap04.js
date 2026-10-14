const usernameElement = document.getElementById("username");
const passwordElenment = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElenment.value;

  if (username === "cuong@gmail.com" && password === "12345") {
    alert("DANG NHAP THANH CONG");
  } else {
    alert("DANG NHAP THAT BAI KIEM TRA LAI TAIKHOAN/MATKHAU");
    usernameElement.style.borderColor = "red";
    passwordElenment.style.borderColor = "red";
  }
});
