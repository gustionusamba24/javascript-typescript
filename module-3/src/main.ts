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
