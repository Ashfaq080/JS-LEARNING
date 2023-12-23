/* 
forIn loop : The JavaScript for in statement loops through the properties of an Object.
*/

const progLang ={
    js : 'JavaScript',
    cpp : 'C++',
    rub: 'Rubby',
    Py :  'Python'
}

for (const Ln  in progLang) {
    // console.log(Ln);               // this gives output as key such as js, cpp, rub, Py
    // console.log(myObject[Ln]);     // this gives the values in myObject.
    // console.log(`${Ln} shortcut is for ${progLang[Ln]}`);
   
}

/* Explained the above code
The for in loop iterates over a progLan object
Each iteration returns a key (Ln)
The key is used to access the value of the key
The value of the key is progLang[Ln]
*/

// For in for Array

const programming = ["js", 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(key);            // gives only key of array such as  0 1 2 3 4 
    // console.log(programming[key]); // to get the values of array in forin loop
}

// for in for maps

const map = new Map()
map.set('IN', "India")             //here key = IN and Value = India
map.set('UK', "United Kingdom")    //here key ='UK   and Value ="United Kingdom
map.set('Fr', "France")            //here key = Fr and Value = France
map.set('IN', "India")    

// for (const key in map) {
//     console.log(key);              // can't ittrate map in for in loop.
// }