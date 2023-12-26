let arr = ["Malar", "Priya"];

let object = {
  name: "Malar",
  city: "Tiruppur",
  getintro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  age: 19,
};

object2.__proto__ = object;
