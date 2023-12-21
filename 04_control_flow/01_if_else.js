/* Control flow / Condition Statement :- 
- Conditional statements are used to perform different actions based on different conditions.
- In JavaScript we have the following conditional statements:
   -> Use if to specify a block of code to be executed, if a specified condition is true
   -> Use else to specify a block of code to be executed, if the same condition is false
   -> Use else if to specify a new condition to test, if the first condition is false
   -> Use switch to specify many alternative blocks of code to be executed.
*/

// if-Statement : syntax
const isUserLoggedIn = true;
// if (isUserLoggedIn == true) {
//     console.log("Welcome to my git repo");
// }
// there are some conditions operators such as >,<, >=,<=, !=, == , === ,!==

//if-else Statement

const temperature = 50

// if ( temperature <= 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


const score = 200

// if (score > 100) {
//  let power = "fly"     // if we use var here the line 35 is also executed and that is not what we want as var is globally scoped key so instade use let or const as they are block scope used whithin the scope{}
//     console.log(`User power: ${power}`);      
// }

// console.log(`User power: ${power}`);


// we can write if-else code without scope{}
// const balance = 450;
// if (balance >= 500) console.log("500 fixed balance"), console.log("0 balance");  //but this code is not readable and it is not a good practice 

// nested if statement

// if (balance <= 500) {
//     console.log("balance less than 500");
// } else if (balance <= 750 ) {
//     console.log("balance is btwn 500 and 750");
// } else if (balance <= 900) {
//     console.log("balance is btwn 750 and 900");
// } else  {
//     console.log("balance is more than 900");
// }


// use of and (&&) and or (||) oprators

const isUserLogged =true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true

if (isUserLogged && debitCard ) {          // && both the valuses should be true then only condition will get executed, here conditions be more then 2 condition.
    console.log("Allow to shop");
} else{
    console.log("Not allowed to shop");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // || any one value should be true then only condition will get executed, here conditions be more then 2 condition.
    console.log("Welcome to buy anything");
}
