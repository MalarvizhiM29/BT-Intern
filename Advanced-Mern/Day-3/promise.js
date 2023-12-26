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

createorder()
  .then((res) => {
    console.log(res);
    return proceedtopayment(res);
  })
  .then((res) => {
    console.log(res);
    return updateWalletBalance(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {
    console.log("Redirected to Home");
  });
