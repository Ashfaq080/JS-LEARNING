/*for of loop
The JavaScript for of statement loops through the values of an iterable object(An object that has iterable properties).
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
*/
const greeting = "HELLO WORLD!"

for (const greet of greeting) {                                 // in this loop there is no need to increment the values
    // console.log(`Each char of greeting is : ${greet}`);     // greet is a new key pointing and apply loop for greeting. we can apply  
}


// Arrays
const states = ["UP", "KA", "KL", "LP", "MP", "AP"]
for (const val of states) {
    // console.log(val);
}

// Maps :- The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Maps won't allow duplicate values it's allow unique key value pair.

const map = new Map()
map.set('IN', "India")             //here key = IN and Value = India
map.set('UK', "United Kingdom")    //here key ='UK   and Value ="United Kingdom
map.set('Fr', "France")            //here key = Fr and Value = France
map.set('IN', "India")             //here it won't print india again becz map allowa unique values and order of insertion also same.

// console.log(map);

for (const [key, value] of map) {
    // console.log(key);   // here th output is in array format but we want it as key and value pair to do so use square[] to hold it as key and values
    // console.log(`${key} :- ${value}`);  // this is how we can destructure array.
}

// forof for Objects

const myGames = {
    game1 : 'GTA',
    game2 : 'NSF',
    game3 : 'GTA6'
}
for (const game of myGames) {
    console.log(game);              // it through an error due to we cannot iterate objects like this there is different methods.
}