//  Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber  =  45253453454345n


//  Reference  (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "sudhanshu",
    age:  22,
}

const myFunction = function(){
    console.log("Hello World");
}

