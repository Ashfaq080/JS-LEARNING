/* **********************  Numbres  ********************** */
// ways to write the numbers in JS

const num = 100;

const balance = new Number(100);
console.log(typeof balance);

console.log(num == balance); // true, because both are numbers with same value
console.log(num === balance); // false, because same value but different type 

// // numbers methods
console.log(balance.toString().length); //used to convert to string
console.log(balance.toFixed(2)); // returns the number in decimal values 

const newNum = 123.4526985
console.log(newNum.toPrecision(4));  //Returns a number written with a specified length

console.log(newNum.toExponential(4)); //returns a string, with a number rounded and written using exponential notation.

const hunders = 10000000;
console.log(hunders.toLocaleString('en-IN'));


/* **********************  Maths  ********************** */

console.log(Math);  // retuen object
console.log(Math.abs(-5)); // absolute Value convert negative to +ve 
console.log(Math.round(4.6)); // return roundoff value 
console.log(Math.ceil(4.2)); // roundoff to nearest high value
console.log(Math.floor(4.9)); // roundoff to nearst min value
console.log(Math.max(4, 2, 32, 1, 7, 8, 9));
console.log(Math.min(4, 2, 32, 1, 7, 8, 9));


console.log(Math.random());  // return the random value prestent in between 0 - 1
console.log((Math.random()*10)+1); // fromula for numbers in decimal btn 1 - 9
console.log(Math.floor((Math.random()*10)+1)); // formula for roundoff to min number btn 1 - 9

// IF we want number between min 10 and max 20 for that formula

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min + 1)) + min);


