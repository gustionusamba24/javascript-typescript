// Optional Properties = wajib diisi atau tidak
type User = {
  id: number;
  name: string;
  age?: number;
  email?: string;
  isOnline?: boolean;
  petName?: string;
};

let user1: User = {
  id: 1,
  name: "Nusamba",
  age: 24,
  email: "gustio@gmail.com",
};
console.log(user1);

let user2: User = {
  id: 2,
  name: "Narotama",
  isOnline: false,
  petName: "Gugu gaga",
  email: "narotama@gmail.com",
};
console.log(user2);
