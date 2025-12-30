const marvel_heroes = ["Thor", "Ironman", "Spiderman" ]
const dc_heroes = ["Superman", "flash", "Batman"]


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)


console.log(Array.isArray("Sudhanshu"))
console.log(Array.from("Sudhanshu"))
console.log(Array.from({name: "Sudhanshu"}))        // Important - when it can't convert to array then gives empty array

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3))