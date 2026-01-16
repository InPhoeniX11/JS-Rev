// function sayMyName() {
//   console.log("S");
//   console.log("u");
//   console.log("d");
//   console.log("h");
//   console.log("a");
//   console.log("n");
//   console.log("n");
//   console.log("s");
//   console.log("h");
//   console.log("u");

// }
// // sayMyName()

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// // addTwoNumbers(7, 3)
// addTwoNumbers(7, "a")

function loginUserMessage(username) {
  if (username === undefined) {        // (username === undefined) = !username  
    console.log("Please enter a username");
  } else {
    return `${username} just logged in`
  }
}
// console.log(loginUserMessage("sudhanshu"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
  username: "sudhanshu",
  price: 299
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
});

const myNewArray = [200, 300, 400, 100]

function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
