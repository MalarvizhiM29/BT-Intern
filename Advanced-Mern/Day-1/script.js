Array.prototype.getMax = function () {
  return Math.max(...this);
};

Object.prototype.getStringKeys = function () {
  console.log("Printed");
};

const arr2 = [4, 5, 6];
console.log(arr2.getMax());

const animal = {
  eat: true,
  walk: () => {
    console.log("Walking");
  },
};

const rabbit = {
  name: "Tony",
  __proto__: animal,
};

console.log(rabbit.eat);
