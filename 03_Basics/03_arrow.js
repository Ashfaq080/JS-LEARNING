/* 
Arrow function and this keyword.
*/

//This keyword introduced in ES6 version of JS. 'this' keyword refer to current context. Ex:-

const userLogIn = {
    userName : 'Ashfaq',
    userEmail : 'Ashfaq@google.com',

    welComeMessage : function(){
        
    console.log(`${this.userName}, Welcome to my repo`)      //here current context is userLogIn object so instade of accessing userName
        // console.log(this)
}

        
}

// userLogIn.welComeMessage()   //here the current context is userLogIn and this refer to current context/ value
// userLogIn.userName = "AHMED" // here the value get changed now the value is overridden and changed.
// userLogIn.welComeMessage()

// console.log(this);  //here there is no value to refer to return empty object{}

//let us know that "this" works in function or not
// function ramdom() {
//     let user = "Ashfaq"
//     console.log(this.user);  // undefined, that mean "this" won't work in functions
// }
// ramdom()



/* Arrow function */
//syntax :
//  const user_Name = ()=>{}   

const user_Name =  () => {
    let username = "Ashfaq"
    console.log(this);
}

user_Name()

//ways to write arrow function

// 1. Basics arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2

// }
// console.log(addTwo(3, 4))


//2. Implicit return
const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(31, 420))

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Ashfaq"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


