// const tinderUser = new Object()    // Singleton Object
const tinderUser = {}          //Non-Singleton Object


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.IsLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sudhanshu",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}
const obj4 ={5:"a", 6: "b"}

// const obj3 = {obj1 + obj2}     // 👎
// const obj3 = Object.assign({}, obj1, obj2, obj4);        // .assign(taget({}),  source(obj2, obj2, obj4))    


const obj3 = {...obj1,  ...obj2}    // 👍
// console.log(obj3);


const users =[
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 2,
        email: "abcd@gmail.com"
    },
    {
        id: 3,
        email: "abcd@gmail.com"
    },
]


// console.log((users[1].email));

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));


const course = {
    corsename: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor


const {courseInstructor: instr} = course
// console.log(courseInstructor);
console.log(instr);

// {                                   // api
//     "name" : "Sudhanshu";           // api
//     "coursename": "JS",             // api
//     "price": "free"                 // api
// }                                   // api



// [                                       // api
//     {},                                 // api
//     {},                                 // api
//     {}                                  // api
// ]                                       // api