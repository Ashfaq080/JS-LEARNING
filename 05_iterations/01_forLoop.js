// for loop syntax
// for (varaible deceleration; condition; inceremental) {
//     code here    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);

}            // Basics for loop 

for (let i = 0; i < 10  ; i++) {
    const element =  i;
    if (element==5)  {
        // console.log("5 is printed");
        }     
        // console.log(element)
    }


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop values: ${i}`);      
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop values: ${j} `);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}


// ARRAY
const mySuperHeroes = ["Batman", "Superman", "flash", "shaik 'Ashfaq'"];
// console.log(mySuperHeroes.length);

for (let index = 0; index < mySuperHeroes.length; index++) {
    const element = mySuperHeroes[index];
    // console.log(element);
}

// break and continue 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`5 Detected`);
        break;        // after break key word loop gets stopped and coms out of the scope{}
    }
    // console.log(`value of i is : ${i}`);
}


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 Detected`);
        continue       // here in continue keyword loop get skipped as th condition is true
    }
    console.log(`value of i is : ${i}`);
}
