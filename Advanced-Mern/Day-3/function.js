// const func = new Function([arg1, arg2, ...argN], functionBody);

// const sum = new Function("a", `return (a%2==0)?"even":"odd" `);
// const res = sum(10);
// console.log(res);

//Propagation concept -> Event listener
//Event Bubbling, Event Capturing
// Bubbling -> child to parent
// Capturing -> parent to child

// document.getElementById("btn").addEventListener(
//   "click",
//   function () {
//     console.log("Button Clicked");
//   },
//   true
// );

// document.getElementById("mydiv").addEventListener(
//   "click",
//   function () {
//     console.log("Div Clicked");
//   },
//   true
// );

document.getElementById("btn").addEventListener("mouseover", function () {
  document.getElementById("card").style.backgroundColor = "Green";
});
