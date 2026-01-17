// Immediately Invoked Function Expressions (IIFE)


// (function one() {
// named IIFE
//   console.log(`DB CONNECTED`);
// })();                               // semi colon needed to end iife if we are executing another function through iife too


// (funtion two(){
//   console.log(`DB CONNECTED`)
// }) ()                          

((name) => {
  // unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('sudhanshu')