(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(() => console.log("This will never run again"))();
