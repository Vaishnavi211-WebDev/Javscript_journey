let score = 
// // //here we know that score has number but some times we dont know 
// // the type so we will check using typeof
// // there are two ways

 console.log(typeof score);
 console.log(typeof(score));

// // //so if we want to perform operation on string strictly then 
// // we can do

// let valueInNumber = Number(score)

 console.log(typeof valueInNumber); //strictly convert into number
 console.log(valueInNumber);

// //33abc is not a complete number but js it will convert but actully value
// // output will NAN

// // let score = null
// // if null it will give 0

// //let score = undefined
// //output = NAN

// //let score = true/false
// //output = 0/1

// //"33" => 33
// //"33abc" =>NAN

let isLoggedIn =""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0=>false;
//" => false
//"hitesh" =>true