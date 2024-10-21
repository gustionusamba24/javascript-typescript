// any data types
console.log("========= Any Data Types =========");
let variable: any;

variable = "Samba";
variable = 24;
variable = false;

function logValue(value: any): void {
  console.log(value);
}

function anyRisk(value: any): void {
  console.log(value.toFixed(2));
}

anyRisk(3.1443428947892034);

logValue("Aku cinta dia");
logValue(3.1443428947892034);

console.log(variable);

// unknown data types (better than any)
console.log("========= Unknown Data Types =========");
let data: unknown;

data = 123;
data = true;
data = "Gustio Nusamba";
data = [true, false, "wkwk", 123];

// check data types wheter array or not
if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (Array.isArray(data)) {
  console.log(data.join(", "));
} else {
  console.log("kesalahan tipe data");
}
