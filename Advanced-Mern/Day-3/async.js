// async/await
// async function will always return a Promise
// await can only be used inside an async function

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

// async/Await cart
const orderId = 12345;

const createorder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });

const proceedtopayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId > 0) {
      resolve("Payment Successfull");
    } else {
      reject("Payment failure");
    }
  });
};

const updateWalletBalance = (paymentInfo) => {
  return new Promise((resolve, reject) => {
    if (paymentInfo == "Payment Successfull") {
      resolve("Updated");
    } else {
      reject("Not Updated");
    }
  });
};

const buynow = async () => {
  try {
    const order = await createorder();
    console.log(order);

    const payment = await proceedtopayment(order);
    console.log(payment);

    const balance = await updateWalletBalance(payment);
    console.log(balance);
  } catch (err) {
    console.log(err);
  }
  console.log("Redirected to Home");
};

buynow();

// createorder()
//   .then((res) => {
//     console.log(res);
//     return proceedtopayment(res);
//   })
//   .then((res) => {
//     console.log(res);
//     return updateWalletBalance(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((res) => {
//     console.log("Redirected to Home");
//   });
