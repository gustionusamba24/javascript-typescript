// Partial
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: Partial<User>): void {
  console.log(user);
}
