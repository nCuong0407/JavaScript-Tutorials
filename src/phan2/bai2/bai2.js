function tinhTrungBinh(toan, van, anh) {
  const trungBinh = (toan + van + anh) / 3;
  return trungBinh;
}

const xepLoai = (diemTb) => {
  if (diemTb >= 9) {
    return "Xuất sắc";
  } else if (diemTb >= 8 && diemTb < 9) {
    return "Giỏi";
  } else if (diemTb >= 6.5 && diemTb < 8) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const myTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
Điểm trung bình: ${myTB}
Xếp loại: ${xepLoai(myTB)}
`);
