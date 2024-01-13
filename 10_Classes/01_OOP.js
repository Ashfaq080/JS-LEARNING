// object literals 

const user_1 = {
    userName : 'Ashfaq',
    userLoggedIn : 10,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from Data Base");
    }


}   // this is called object literal in JS and this is only a Based unit in JS

// console.log(user.userName); //as we know that we can access properties of object like this.
// console.log(user.getUserDetails());



// what if we have more than one object, how js will detect that you are talking about this user or another user avalible in JS
// for this WE have 'this' keyword which refers to current context of an object.


const user_2 = {
    userName : 'Ashfaq',
    userLoggedIn : 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from Data Base");
        console.log(`userName: ${this.userName}`);
        console.log(this);
    }


}  

// console.log(this);
// console.log(user_2.getUserDetails());


//what if we need no.of object or need to write the user_3 ,_4 ,etc... there we use constructer function

// Constructor function.
// whenever we create new instance using new keyword. ex:-

// const usre = new usre()

function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //we can write a method also.

    this.getuser =  function (){
        console.log(`welcome: ${userName}`);
    }
    this.getuser()
    return this
}

const userOne = new  user("Ashfaq", 18, true)
const userTwo = new user("Ahmed", 12, false)    // the value is overwrite this is a huge mistake the coder will not get to know soo we use new keyword

console.log(userOne);