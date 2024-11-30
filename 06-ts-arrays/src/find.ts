// find will not return new array, but it will only return the first element in the array that satisfies this condition
const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements5.find((mov: number): boolean => mov < 0);

console.log(movements5);
console.log(firstWithdrawal);

// the distinction between filter and find
// filter returns all the elements in the array that match with condition (filter method returns new array)
/* 
find only returns first element in the array (find only returns the element itself and not an array) => 
the purpose of using find method is simply to find the exactly one element
 */
