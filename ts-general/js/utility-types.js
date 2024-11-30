"use strict";
let nextUserId = 1;
const users = [
  { id: nextUserId++, username: "balmond_firman", role: "member" },
  { id: nextUserId++, username: "alucard_janaka", role: "contributor" },
  { id: nextUserId++, username: "alice_mutia", role: "admin" },
  { id: nextUserId++, username: "miya_milaika", role: "member" },
];
function updateUser(id, updates) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}
function addNewUser(newUser) {
  const user = Object.assign({ id: nextUserId++ }, newUser);
  users.push(user);
  return user;
}
// updateUser(1, { username: "balmond_firmansyah" });
// updateUser(4, { username: "miya_khalifa" });
addNewUser({ username: "terizla_anwar", role: "admin" });
console.log(users);
