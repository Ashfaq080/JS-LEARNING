/* FUNCTIONS 
function is a block of codes that perform specific task.it is defined using 'function' keyword.
*/

// function decelaration/Syntax
function myFunction(){
    //code 
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("F");
    console.log("A");
    console.log("Q");
}

myFunction        // this is just a reference 
// myFunction()      // parenthisys () used to excuted the function.

// let suppose an another function to add two numbers
function addTwoNumbers(num1, num2){           //here num1 and num2 are parameters
    
    
    // console.log(num1+num2); this is also one way to get values in console but you can store it in a varabels and then return the values

    // let result = num1 +num2;
    // return result;   // once you return any value then function won't take/ print any values.

    return num1 + num2; // one more way to return values
    console.log("Ashfaq"); // it won't get printed
}

const result = addTwoNumbers(3,4)        // here 3 and 4 are arguments / values to num1 and num2 parameters.
// console.log("Result: ", result);


function logInUserMessage(username){
    // if (username === undefined)
    
    if(!username)    //! conevert true value to false and viceversa. ! it define "not", it's a proficinal way of using if condition.
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Ashfaq"));
// console.log(logInUserMessage()); // when you don't pass any arguments it will consider it as undefined.



// Rest Parameter : The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.

function calculateCartPrice(...cart1) {     
    return cart1
}

// console.log(calculateCartPrice(200, 800, 500, 20000)); // when you pass more then one items in cart there we use rest function that means you passed any values it will merge into an array. '...' it is also called spread operator based on use case.
  

// how to use objects in function?

const userDetails = {
    username : "Ashfaq",
    email : "ahmed@google.com",
    phn_no: "63*****782"
}

function handelObjects(objectName) {
    // console.log(`username is ${objectName.username} and phoneNumber is ${objectName.phn_no}`);
    
} 
// handelObjects(userDetails)      //it is not compulsory to create objcet then return, in this type you should check the detailing ex: explaing and all
handelObjects({                      
    username : "RAM",             // or simply you can cerate object in arrgument it self.
    phn_no : 9123657450
})


// how to use Array in function?

const myArray = [200, 400, 600, 1000, 100, "SHAM"]

function returnAnyValue(getArray) {
    return getArray[5]
}

// console.log(returnAnyValue(myArray))  
console.log(returnAnyValue([200, 500, 600 ,900, 700, 1200, 3600]))  // same as in object you can pass array in arrguments also.