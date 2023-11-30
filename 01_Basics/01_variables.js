/*
variables :- variables are container for storing data 
variables in JS is declare in 4 ways
1. const
2.Var
3.Let
4.Automatically
*/


const accountId=12345;
let accountEmail = "ashfaq@google.com";
var accountPassword = "123#ashfaq";
accountCity = "Bengaluru"; 
let accountSate;   //it will execute but the value will be undefined


// accountId = 45;  //not allowed because const has fixed value and won't change

console.log(accountId);

accountEmail="ahmed@123"
accuntPassword = "xyz"
accountCity ="Bider"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountSate])