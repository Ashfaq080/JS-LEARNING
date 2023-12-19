/*
scopes are basically accessibility (Visibility) of varables
scopes are three types
- Global Scope
- Function scope
- Blocked scope

before ES6 scopes are Global and Function Scopes
in ES6 JS introduced two new keyword called Let and Const.

scope written in {} are blocked scopes.
scopes written in function is function scope
scopes written outside the {} and function are global scope
*/


//var c = 300  //Global scope
let a = 300
if (true) {
    let a = 10            // Blocked Scope
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ashfaq"        //function scope

    function two(){
        const email = "ashfaq"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Ashfaq   "
    if (username === "Ashfaq") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
