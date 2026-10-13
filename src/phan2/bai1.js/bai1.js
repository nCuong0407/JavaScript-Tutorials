//if /else/ else if

const age = 17;
//
if (age > 18) {
  console.log("ban co the truy cap");
} else {
  console.log("ban khong the truy cap");
}

const score = 9;
if (score >= 9) {
  console.log("loai gioi");
} else if (score >= 7 && score <= 8) {
  console.log("loai kha");
} else if (score >= 5 && score <= 6) {
  console.log("loai trung binh");
} else if (score < 5) {
  console.log("loai yeu");
} else {
  console.log("diem khong hop le");
}
