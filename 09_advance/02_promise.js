/*
   PROMISE :-
   -> promise object represent the eventual completion or failure of an asynchoronus operation and its resulting value. 
   -> it is introduced in ES6 version of JS.
   -> before ES6 we have some labirary called Q and bluebird 

   SYNTAX
   const promise = new Promise (callback function(resolve,reject){})

   promise contain callback function which contain two parameter  resolve and reject
*/
const promiseOne = new Promise(function(){});