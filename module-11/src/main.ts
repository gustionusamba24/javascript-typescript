function processData(data: number[], callback: (item: number) => void): void {
  data.forEach(callback);
}

function logResult(item: number): void {
  console.log(item ** 2);
}

processData([1, 2, 3, 4, 5, 6, 7, 8], (item: number): void => {
  console.log(item ** 2);
});
