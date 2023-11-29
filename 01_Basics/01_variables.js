const accountId=12345;
let accountEmail = "ashfaq@google.com";
var accuntPassword = "123#ashfaq";
accountCity = "Bengaluru"; 
let accountSate;


// accountId = 45;  //not allowed because const has fixed value and won't change

console.log(accountId);

accountEmail="ahmed@123"
accuntPassword = "xyz"
accountCity ="Bider"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accuntPassword, accountCity, accountSate])