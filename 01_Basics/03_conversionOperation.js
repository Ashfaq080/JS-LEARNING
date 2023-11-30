/*
In JS variables can be converted to new variables and another dataTypes
=> by the use of JS function or
=> Automatically by JS itself
*/

/* Number conversion

Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer

*/

let score =false
// console.log(typeof score);   //for score = 35 o/p number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33" => number i.e 33
"25abc" => number i.e NaN(not a number) 
true => 1 ; false => 0
 */


// for Booelan conversion

let isLoggedIn = "Ashfaq"
 let isBoolean = Boolean(isLoggedIn)
//  console.log(isBoolean);
/*
1 => true;  0 => false
"" => false
"Ashfaq" => true
*/


// for Number to string conversion

/*
oExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length
*/

let someNumber = 1523;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



/* 

OriginalValue	convertedToNumber	convertedToString	convertedToBoolean	
false	            0	                "false"	            false	
true	            1	                "true"	            true	
0	                0	                "0"	                false	
1	                1	                "1"	                true	
"0"	                0	                "0"	                true	
"000"	            0	                "000"	            true	
"1"	                1	                "1"	                true	
NaN	                NaN	                "NaN"	            false	
Infinity	        Infinity	        "Infinity"	        true	
-Infinity	        -Infinity	        "-Infinity"	        true	
""	                0	                ""	                false	
"20"	            20	                "20"	            true	
"twenty"	        NaN	                "twenty"	        true	
[ ]	                0	                ""	                true	
[20]	            20	                "20"	            true	
[10,20]	            NaN	                "10,20"	            true	
["twenty"]	        NaN	                "twenty"	        true	
["ten","twenty"]	NaN	                "ten,twenty"	    true	
function(){}	    NaN	                "function(){}"	    true	
{ }	                NaN	                "[object Object]"	true	
null	            0	                "null"	            false	
undefined	        NaN	                "undefined"	        false

*/