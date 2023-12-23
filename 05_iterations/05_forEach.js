//  forEach() :- The forEach() method calls a function (a callback function) once for each array element. example below
const codeingLang = ['ja', 'java', 'python', 'php', 'ruby']

codeingLang.forEach( function (value){
    // console.log(value);
})                           // can use arrow function as well or any function. to callback

codeingLang.forEach( (element) => {
    // console.log(element);
} )

//we can use as function also

// function printMe(element) {
//     console.log(element);
// }
// codeingLang.forEach(printMe)   // so here you have to pass function reference not function with parenthasys.


// codeingLang.forEach( (items, index, array) => {       // we can't just fetch items, but we also can have access other values also such as index, array, etc...
//     console.log(items, index, array);
// })

// what if we have multiple objects in array

const myArr = [
    {
        programeName: "JavaScript",
        progFileName: 'js'
    },
    {
        programeName: "Java",
        progFileName: 'java'
    },
    {
        programeName: "Python",
        progFileName: 'py'
    }
    
]

myArr.forEach((item)=>{
console.log(item.progFileName)
})