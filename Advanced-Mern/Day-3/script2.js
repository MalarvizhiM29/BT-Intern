//handling multiple promises

// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 resolved");
    }, 5000);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 resolved");
    }, 2000);
  });

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 resolved");
    }, 3000);
  });

Promise.all([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//no rejected state in allSettled. It always Resolve
Promise.allSettled([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
