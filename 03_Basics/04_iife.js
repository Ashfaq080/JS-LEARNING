/*
IIFE :=> Immediately Invoked Function Expressions.
suppose you have some values stored in data base and you want to use it or invoked it and run it immediately there you can use IIFE method.
some variables present in global scope soo there will be chance of mixing / polluted the variable with global scope.

so the mainly two reason to use iife method
1. we don't want to use the pollution of variable with global, so we create seperate scope.
2. Immediat Execution.
*/

(function DB() {
    console.log(`DB CONNECTED`);
})();

// we can use arrow functions also, to write another function as IIFE you should use ; compulsory.

( (name, job) => {
    console.log(`${name}, CONNECTED TO DB AS A ${job}`);      //name and job = parameter, "Ashfaq" and "FRONTEND DEV"= Arrguments
} )("Ashfaq", "FRONTEND DEV")