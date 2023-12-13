/* 
Arrays are one of the main imp topic in JS.
Arrays are the used to store a collection of multiple items in a single variable.

Array indexes start with 0.
[0] is the first element. [1] is the second element.
*/

//Array declaration

const arrOne = [1, 2, 3, "Ashfaq", 4, "A", ]
// console.log( typeof arrOne);

const arrTwo = new Array(0,1,2,3,4)
// console.log(typeof arrTwo);


// Methods in Array
// Array length :- to check the length of an array
// console.log(arrOne.length);


// Array toString() :- convert array to string
const fruits = ["Apple", "Banana", "Orange", "Mango"]
// console.log(fruits.toString());


// Array pop() :- remove last element in the array
const distName = ["Bidar", "Bengaluru", "Udpi", "Kalburgi"];
distName.pop();
// console.log(distName);


// Array push() :- add new element in the array
const myArr = [0, 1, 2, 3, 4, 5]
myArr.push(6)
// console.log(myArr);
myArr.push(7)
// console.log(myArr);


// Array shift() :- remove first array element and shifts all other to lower index
fruits.shift();
// console.log(fruits);


// Array unshift() :- add new element to an array at 0 index(at the beginning) 
fruits.unshift("Apple")
// console.log(fruits);


// Array join() :- used to join array element into string
// console.log(fruits.join(" + "));


/* Array delete() :- Array elements can be deleted using the operator delete.
                    Using delete leaves undefined holes in the array.
                    Use pop() or shift() instead.*/
    delete fruits[0];
    // console.log(fruits);



/* Array concat() :- The concat() method creates a new array by merging (concatenating) existing arrays. 
                    The concat() method does not change the existing arrays. It always returns a new array. */
const arr1 = ["suzki", "maruti", "honda"];
const arr2 = ["BMW", "AUDI", "MERCADIES"];
const arr3 = ["Bicycle", "Bike"];
const cars = arr1.concat(arr2, arr3);
// console.log(cars);


// Array flat() :- The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const newCar = cars.flat(2);
// console.log(newCar);


// Array splice() :- The splice() method can be used to add new items to an array.
const std = ["Ashfaq", "Shoeb", "arjun", "karan"]
const newStd = std.splice(2, "lemon");
// console.log(newStd);


// Array slice()
const myHeors = ["IronMan", "BATMAN", "wonderwomen", "spiderman"];
console.log("A", myHeors);
const myn1 = myHeors.slice(1, 3)
console.log(myn1);
console.log("B", myHeors);

const myn2 = myHeors.splice(1, 3)
console.log("C", myHeors);

console.log(myn2);

 


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);


// console.log(myn1);
// console.log("B ", myArr);


// console.log("C ", myArr);
// console.log(myn2);










