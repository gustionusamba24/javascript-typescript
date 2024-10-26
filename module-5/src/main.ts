// Type Aliases (untuk tipe data kompleks atau panjang)
type ID = string | number;

let userID: ID;
let postID: ID;

userID = "user123";
console.log(userID);
postID = "post123";
console.log(postID);
postID = 12345;
console.log(postID);

// Object
type User = {
  id: number;
  name: string;
  isOnline: boolean;
};

const user1: User = {
  id: 1,
  name: "Gustio",
  isOnline: true,
};
console.log(user1);
console.log(user1.name);

const user2: User = {
  id: 2,
  name: "Hatmaja",
  isOnline: false,
};
console.log(user2);
