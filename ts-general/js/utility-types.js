"use strict";
const users = [
    { id: 1, username: "balmond_firman", role: "member" },
    { id: 2, username: "alucard_janaka", role: "contributor" },
    { id: 3, username: "alice_mutia", role: "admin" },
    { id: 4, username: "miya_milaika", role: "member" },
];
function updateUser(id, updates) {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        console.error("User not found");
        return;
    }
    Object.assign(foundUser, updates);
}
updateUser(1, { username: "balmond_firmansyah" });
updateUser(4, { username: "miya_khalifa" });
console.log(users);
