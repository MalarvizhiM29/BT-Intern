Array.prototype.getMax = function () {
  return Math.max(...this);
};

const student = {
  name: "Malar",
  Age: 19,
  Dept: "EEE",
};

const arr2 = [4, 5, 6];
console.log(arr2.getMax());
