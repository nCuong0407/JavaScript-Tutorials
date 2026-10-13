const products1 = {
  name: "Iphone 14",
  price: 2000,
  instock: false,
};
const products2 = {
  name: "SAMSUNG S23",
  price: 1000,
  instock: true,
};
const products3 = {
  name: "Iphone 18",
  price: 3000,
  instock: true,
};
const products4 = {
  name: "SAMSUNG S3",
  price: 9000,
  instock: true,
};
const products = [products1, products2, products3, products4];

console.log("original products", products);
//1 In ra ten san pham 1
const firstProduct = products[0];
console.log("1.San pham dau tien ten la: ", firstProduct.name);

//2 gia san pham thu 2 doi thanh 150
products2.price = 150;
console.log("2.gia san pham thu 2 la:", products);

//3 Them mot san pham moi vao cuoi mang va in ra danh sach tat ca san pham
products.push({
  name: "last product",
  price: 190,
  inStock: false,
});
console.log("3.san pham moi o cuoi mang la:", products);

//4 xoa san pham cuoi cung ra khoi danh sach va in ra danh sach tat ca san pham
products.pop();
console.log("4.xoa san pham cuoi cung o cuoi mang la:", products);

//5 dung forEach de in ra ten tat ca san pham
products.forEach((value, index) => {
  console.log("5.ten cua san pham la: ", value.name);
});

//6 dung map de tao mang moi chi chua gia san pham
const priceList = products.map((value, index) => {
  return value.price;
});
console.log("6.mang moi :", priceList);

//dung filter de lay san pham con hang(instock = true)
const productsInStock = products.filter((value, index) => {
  return value.instock === true;
});
console.log("7.san pham con hang", productsInStock);

//dung for..in de duyet qua thuoc tinh cua san pham dau tien
for (let key in products1) {
  console.log(key, products1[key]);
}
