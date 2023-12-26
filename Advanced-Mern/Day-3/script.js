// Promise is an Object
// Representing eventual completion or failure of async operation

// const promise1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(20);
//     }, 3000);
//   });

// console.log("Start");
// promise1()
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
// console.log("End");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error("API failure");
    }
    return res.json();
  })
  .then((json) => {
    console.log("json", json);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {
    console.log("Final then");
  });

// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!res.ok) {
//       throw new Error("API Error");
//     }

//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData();
