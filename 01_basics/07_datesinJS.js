// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


let myCreatedDate = new Date(2025, 11, 29)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)            // in milli sec
// console.log(myCreatedDate.getTime())      // in milli sec
// console.log(Math.floor(Date.now()/1000))     // in sec


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())


// `${newDate.getDate()} and the time is ....`


newDate.toLocaleString('default', {
    weekday: "long"
})