/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
 in order, passing in the return value from the calculation on the preceding element.
 The final result of running the reducer across all elements of the array is a single value.
*/

/* SYNTAX is 
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (accmulator, currentValue) {
//     console.log(`Accmulator: ${accmulator} and currentValue: ${currentValue}`);
//     total = accmulator + currentValue;
//     return total 
// }, 0)                         //initial value is 0 so accmulatior value at starting is 0 


// we can write it as arrow function also

const myTotal = myNum.reduce( (acc, currVal) => acc + currVal , 0 )

// console.log(myTotal);

// let us suppose we have a shoppingCart and want total value

const shoppingCart = [
    {
        itemName : 'JS course',
        price: 999
    },
    {
        itemName : 'C++  course',
        price: 1999
    },
    {
        itemName : 'Python course',
        price: 29999
    },
    {
        itemName : 'mobile dev course',
        price: 3999
    }
]

// const priceToPay = shoppingCart.reduce( (acc, ele) => acc + ele.price, 0)
const priceToPay = shoppingCart.reduce( (acc, ele) => {
   return acc + ele.price
}, 0)
console.log(priceToPay);