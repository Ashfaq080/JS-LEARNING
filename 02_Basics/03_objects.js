//OBJCTS
// objects can declare in two ways one is as litrals and costructor
// By using  constructor Object.create. when we use construtor it will create single object called singlton

// By using object literals

const mySym = Symbol("key1") // symbol declaretion


const JsUser = {
    name: "Ashfaq",
    "full name": "Ashfaq Ahmed",
    [mySym]: "mykey1", //correct way to declare symbol in object , if we won't use [] then JS will understand that it is a string
    age: 18,
    location: "Bengaluru",
    email: "ashfaq@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ashfaq@chatgpt.com"  //change any property value
// Object.freeze(JsUser)  //when we use freez method then e won't able to change any proprties  
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//object function

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());