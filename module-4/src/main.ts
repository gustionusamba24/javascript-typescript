// Union types = digunakan ketika sebuah variable bisa memiliki lebih dari satu tipe data
let id: string | number;
id = 345;
console.log(id);
id = "user345";
console.log(id);

// Literal types = digunakan untuk membatasi variable agar hanya bisa menyimpan nilai tertentu
let info: "Sukses" | "Gagal";
info = "Sukses";
console.log(info);
info = "Gagal";
console.log(info);
// info = "Loading"; // error
