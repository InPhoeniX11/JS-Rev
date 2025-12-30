// Singleton
//Obect.create


// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sudhanshu",
    "full name": "Sudhanshu Singh",
    [mySym]: "mykey1",
    age: 25,
    location: "UP",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "xyz@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "pqrs@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    }
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    }

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());