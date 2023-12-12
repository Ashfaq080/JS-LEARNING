/*
    JS mainly have two types of memroy
    1.STACK (known memory size)
    2.HEAP (unknown memory size)
*/

const memoryUsage = process.memoryUsage();

// Format and print the output
for (let [key, value] of Object.entries(memoryUsage)) {
    const valueInMegabytes = Math.round(value / 1024 / 1024 * 100) / 100;
    console.log(`${key}: ${valueInMegabytes} MB`);
}

/* 1. STACK :- generally it is last in first out concept,
                i.e the variables added one by one to stack the last one variables pushed is at the top.
                which means it will be the first to get removed.
                stack contain all primitive data types as there size is known at compile time.
                it will return the value not the reference
*/

let name = 'Ashfaq'
var role = 'Developer'
const age = 22 

/* HEAP :- it does'nt have fixed memory, memory allocated dynamically.
            it consider all non-primitive data type.
            it will return reference not value.
            */

            let box1 = {
                name:"Ashfaq",
                email:"ashfaq@gmail.com",
                age: 23
            }

            let box2 = box1;

            box2.name='Ahmed'
            console.log('box1 name : ',box1.name);
            console.log('box2 name : ',box2.name);

/*
    In the above example
    You can see that changing the Name property of the box2 object will also change the Name property of the box1 object. 
    This happens because while assigning the value of box1 into box2, 
    we are actually copying the reference and not the actual object. 
    Therefore, both box1 and box2 point to the same object in the. 
    As both point to the same object, changing one changes the other.
    */



