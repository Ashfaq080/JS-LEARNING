/*
    In JS strings are used for storing and manipulating text.
*/

const name = 'Ashfaq';
const age = 23;

console.log(name + age + " value");  // this is how we concatenate strings using + operators,but this method is outdated.

console.log(`Hello my name is ${name} and my age is ${age}`);  //this is how mordern programmers used to do using backticks known as string interpolation.

// This is how another way to declare strings using new keyword and String
const gameName = new String('Ashfaq-SK-Ahmed-com')  //here string is in the form of object i.e key value pair.

console.log(gameName[0]);  //this is how you can access the string.
console.log(gameName.__proto__);  //this is prototype to use the object.

console.log(gameName.length); //to know the length of string 
console.log(gameName.toUpperCase());  //this is a function used to convert the string to uppercase


console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     Ashfaq    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ashfaq.com/ashfaq%20Ahmed";
console.log(url.replace('%20', '-'))

console.log(gameName.split("-")); //split convert string to array on the bases of what value you given,here '-' on the bases it get seprated.



