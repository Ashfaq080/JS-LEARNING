/*
   PROMISE :-
   -> promise object represent the eventual completion or failure of an asynchoronus operation and its resulting value. 
   -> it is introduced in ES6 version of JS.
   -> before ES6 we have some labirary called Q and bluebird 

   SYNTAX
   const promise = new Promise (callback function(resolve,reject){})

   promise contain callback function which contain two parameter  resolve and reject
*/
const promise = new Promise(function(){});

/*
    PROMISE :-
    -> A Promise contains both the producing code and calls to the consuming code.
    -> promise are introduse in ES6 version of JS.
    -> before ES6 we used promise in well known liberary called Q and BlueBird.
    -> simple lang promise means the code that you written is there but don't now the exact time when to print.
    -> promise are objects, so handel Promise as object.
    -> promise contain a callBack function with two parameter one is resolve and 2nd is reject 
    -> SYNTAX:-

    const promise = new Promise(function(resolve, reject){
         //code here
         });
*/

// let us learn how to create and consume Promise. 
// creation of Promise()
// way 1
const promiseOne = new Promise(function (resolve, reject) {              // Promise() itcontain callBack Function, this function contain two parameters resolve and reject
   // Do an async task
   // DB calls, network call code, etc..., let us use setTImeout() 
   setTimeout(() => {
       console.log('Async task is completed');
       resolve()                                                      // resolve() is a method which is connected with .then() we can pass any task to complete in resolve() method. this .then() will never execute until resolve() method.
   }, 1000);
})

//comsuption/ how to use promises
promiseOne.then(function () {
   console.log('promise Consumed');
})   /* .then() is directly connected to resolve. 
       .then(callback function) this function return the above code.
       The callback to execute when the Promise is resolved.
       Attaches callbacks for the resolution and/or rejection of the Promise.
       @returns — A Promise for the completion of which ever callback is executed.
   */



// way 2 :- it is not nesscerlly to hold Promsie in a variable 

new Promise(function (resolve, reject) {
   setTimeout(() => {
       console.log('Async task 2');
       resolve();
   }, 1000);
}).then(function () {
   console.log('task 2 resolved');
})


// 3rd Promise :- to use or return data created in resolved method

const promiseThree = new Promise(function (resolve, reject) {
   setTimeout(() => {
       resolve({
           userName: 'Ashfaq',
           emailAdd: 'ashfaq@google.com'
       })    // 
   }, 1000);
})

promiseThree.then(function (user) {
   console.log(user);
})


//4th Promise :- learn about reject and nested .then().

const promiseFour = new Promise(function (resolve, reject) {
   setTimeout(() => {
       let error = false
       if (!error) {                                            // this means if error is not there
           resolve({
               userName: 'Ahmed',
               password: '1234'
           })
       } else {
           reject(`ERROR: Something went wrong`)               //reject() is a method which return error to access this use .catch()
       }
   }, 1000);
})

// const userName =                                             //holding it in a variable to access userName is not working, so we have to use chaining of .then()
promiseFour.then((user) => {
   console.log(user);                                          // here we got all user object but we want perticular value of in object ex: userName.
   return user.userName
}).then(function (MyUserName) {
   console.log(MyUserName);
})                                                              // nested then(), this return the value of above .then(user)
   .catch((error) => {
       console.log(error);
   })                                                          // catch() always return reject() method.
   .finally(function () {
       console.log("The promise is either resolved or rejected");
   })


//  5th promise :- learn about try and catch and async function using async keyword

const promiseFive = new Promise(function (resolve, reject) {
   setTimeout(() => {
       let error = true
       if (!error) {                                            // this means if error is not there
           resolve({
               userName: 'JavaScript',
               password: '123'
           })
       } else {
           reject(`ERROR: JS went wrong`)               //reject() is a method which return error to access this use .catch()
       }
   }, 1000);
})

async function consumePromiseFive(){                    // async keyword helps in not using of then() and catch().
   // const response = await promiseFive
   // console.log(response);                      // this will through error async await can't handel error directly, this will handel using try and catch method
   try {
       const response = await promiseFive
       console.log(response);  
   } catch (error) {
       console.log(error);
   }
}
consumePromiseFive()


// learnig about asyncawiat function and the executetion of code
// async function getAllUsers() {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users')      // fetch() is a method which contain url, the type of data now in fecth is string.

//     // const data = response.json() //to convert it into object
//     // console.log(data);     // this is not printing any value lets see in tryCatch method
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')      // fetch() is a method which contain url, the type of data now in fecth is string.
//         // console.log(response);      //response is commimg
//         const data = await response.json() //to convert it into object
//         console.log(data);  
//     } catch (error) {
//         console.log("E: ",error);                            //code is abosulutly correct if you see it gives the value but taking time.
//     }
// }

// getAllUsers()


// write above code using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
   return response.json()
})
.then((data)=>{
   console.log(data);
})
.catch((error)=> console.log(error))                //this is execute first then print all above code. this is because 

