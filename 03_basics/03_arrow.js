// const user = {
//   username: "sudhanshu",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username} welcome to website`);
//     console.log(this)
//   }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function one() {
//   let userme = "sudhanshu"
//   console.log(this.username);
// }

// one()

const one = function () {
  let username = "sudhanshu"
  console.log(this.username);

}
// one()


// const addTwo = (num1 , num2)=> {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));