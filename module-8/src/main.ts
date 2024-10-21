let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
// let strLength: number = (<string>someValue).length;
console.log(strLength); // 16

let imgElement = document.getElementById("my-image") as HTMLImageElement;
imgElement.src;
