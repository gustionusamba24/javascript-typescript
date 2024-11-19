type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "balmond_firman", role: "member" },
  { id: nextUserId++, username: "alucard_janaka", role: "contributor" },
  { id: nextUserId++, username: "alice_mutia", role: "admin" },
  { id: nextUserId++, username: "miya_milaika", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user: User) => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

// updateUser(1, { username: "balmond_firmansyah" });
// updateUser(4, { username: "miya_khalifa" });
addNewUser({ username: "terizla_anwar", role: "admin" });

console.log(users);
