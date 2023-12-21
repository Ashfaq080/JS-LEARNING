// the value we are going through is true and false but somethime there are such values we are assuming that is ture or false known as truthy or falsy values.

let userEmail = []

// if (userEmail) {         // here we did't pass any condition JS things that there is some values present is given variable and consider it as true value 
//     console.log("Got User email");      
// } else{
//     console.log("Don't have user email");
// }

// falsy values in JS
// false, 0, -0, BigInt 0n (bigint zero n), "" (empty string), null, undefined, NaN (not a number)

// truthy values
//  apart form falsy value all are truthy valuse but there are some surprising values such as
// "0", "false", " " (this is not an empty string, space is there in btwn), [] (empty array ), {} (empty object), function(){}


// how to check empty array in if statements

const emptyArray = []

// if (emptyArray.length === 0) {
//     console.log("Array is empty");        // this is how you can checlk the conditions in array using it's methods().
// }else {
//     console.log("Array has some length");
// }


// How to check conditions in objects

const emptyObj = {}


// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");             // Objects.keys() it will convert objects keys to array then use array methos() to check any conditions.
// } else {
//     console.log("Objects has some length");
// }



// logical operators 
// && -> and operator  , both values should be true to excute
// || -> or operator   , any one value should be ture to execute   we have seen && and || in prviously
// ?? -> Nullish Coalescing Oprators , it will work only on null and undefined values.

let val;
val = 5 ?? 10
val = null ?? 15
val = undefined ?? 20
val = 300 ?? null ?? 26
val = 350 ?? undefined ?? 296

// console.log(val);

// Terniary operator (?)

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice == 100 ? console.log("Tea served"): console.log("pay 100 rs");