const marvel_heros = ["IronMan", "Vision", "Thor", "Caption"]
const dc_heros = ["SuperMan", "Flash", "Batman"]

//  marvel_heros.push(dc_heros);     //puch join all array that declare in dc_heros.
//  console.log(marvel_heros);

//  console.log(marvel_heros[4][0]); // to fetch the 4 element of 0th element in array.  but instate use concat()

const all_heros = marvel_heros.concat(dc_heros)  //it is okay to use concat but nowadays programmer used spread operator
// console.log(all_heros);


const new_heros = [...marvel_heros, ...dc_heros, ...all_heros]
// console.log(new_heros);



const anoth_array = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 11, 12, 13, [14, 15, 16], 17, 18], 19, 20];

let real_array = anoth_array.flat(Infinity)
// console.log(real_array);


console.log(Array.isArray("Ashfaq"));       //false because it chcek wheather given is array or not.
console.log(Array.from("Ashfaq"));          //gives you the new converted array.
console.log(Array.from({ name: "Anshfaq" }));  //returns Empty array because JS not understand whearther to print key or value so it return empty array

//another way 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));









